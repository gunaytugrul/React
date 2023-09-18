
import {SiteContext,useSite} from "./context"


export default function SwitchLanguage() {

    const {language,dispatch}= useSite()
    
    const SwitchLanguage = () => {
        dispatch({
            type:'TOGGLE_LANGUAGE',
            
        })
    }


    return (

        <>
        Mevcut dil={language}
        <br/>
        <button onClick={SwitchLanguage}>Dili değiştir</button>
        </>
    )
}