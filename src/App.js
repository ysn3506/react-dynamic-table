import React from 'react'
import {Route, Switch} from 'react-router-dom'
import TableGamePage  from './pages/table-game/table-game.component'
import './App.css';


function App() {
 
    return(
      <div>
      <Switch>
        
        <Route exact path='/' component={TableGamePage}/>

      </Switch>
      </div>
    )
  

}

export default App
