import SwitchLanguage from "./SwitchLanguage"
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "./context"


export default function Header() {

    const {user,dispatch} = useAuth()


    const login=()=>{
        dispatch({
            type:'LOGIN',
            payload:{name:'Tuğrul',
        id:1}
        })
    }

    const logout=()=>
    {
        dispatch({
            type:'LOGOUT',
         
        })
    }


    return (
        <header>
            Header <br/>
            {user && <button onClick={logout}>Çıkış yap</button> || <button onClick={login}>Giriş yap</button>}
            <br/>
            <SwitchTheme/>
            <SwitchLanguage></SwitchLanguage>
        </header>
    )
}

