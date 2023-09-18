import React from 'react';
import {useState} from 'react';


import {SiteProvider,AuthProvider} from './context';

import Home from './Home';






function App() {



  return (
  
    
    <SiteProvider >
      <AuthProvider>
    <Home/>
    </AuthProvider>
    </SiteProvider >
    
  )
 
  
}


export default App;
