import {useState, useCallback, useEffect} from 'react'

const storageName = 'sessionData'

export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userInfId, setUserInfId] = useState(null)
    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserInfId(id)
        localStorage.setItem(storageName, JSON.stringify({
            _id_userInf: id, token: jwtToken
        }))
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setUserInfId(null)
        localStorage.removeItem(storageName)
    }, [])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token){
            login(data.token, data._id_userInf)
        }
    }, [login])
    return { login, logout, token, userInfId}
}