import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './component/Splash'
import About from './component/Login'
 import First from './component/First'
//  import NewClass from './component/NewClass'

const Rotes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} initial = {true} />
        
         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "first" component = {First}  />
         {/* <Scene key = "newClass" component = {NewClass}  /> */}

      </Scene>
   </Router>
)
export default Rotes