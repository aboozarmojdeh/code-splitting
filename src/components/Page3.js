import React from 'react';
import logo from '../logo.svg';

const Page3=({onRouteChange})=>{
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header>
        <button onClick={()=>onRouteChange('Page1')}>Page1</button>
        <button onClick={()=>onRouteChange('Page2')}>Page2</button>
        <button  className="disabled" >Page3</button>
      </div>
    )
}

export default Page3;