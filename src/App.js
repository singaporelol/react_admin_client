import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
