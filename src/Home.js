import Header from "./Header"
import  Footer from "./Footer"
import { useAuth } from "./context"

export default function Home({theme,setTheme,language,setLanguage}) {

    const {user}= useAuth()

    return(

<>
<Header/>
    App  
    {user &&(
        <div style={{padding:10,border:'1px solid red'}}>
            Hoşgeldin {user.name}
        </div>
    
    )}
    <Footer/>  
</>
)
    
}