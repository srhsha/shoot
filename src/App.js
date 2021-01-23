import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import EditMenuList from './components/mymenulist'
import PageMenuList from './components/mypagelist'

class App extends Component {
  render()
  {
  return (
  
    <div>
      <div>
        <EditMenuList></EditMenuList>        
      </div>

      <div>        
        <PageMenuList></PageMenuList>        
      </div>
    </div>
  )
  };
}

export default App;
