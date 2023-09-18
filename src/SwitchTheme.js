
import {SiteContext,useSite} from "./context"

export default function SwitchTheme() {
  const {theme,dispatch}= useSite() 


  const SwitchTheme = () => {
    dispatch({
      type:'TOGGLE_THEME',
      
    })
  }

    return (
    <>
     Mevcut tema={theme}
            <br/>
            <button onClick={SwitchTheme}>Temayı değiştir</button>


    </>

    ) 


}