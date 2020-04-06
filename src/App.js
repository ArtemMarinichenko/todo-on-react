import React from 'react';
import Content from './components/Content'
import Navigation from './components/Navigation';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation /> 
        <Switch>
          <Route path={"/"} exact component={Content} />                         
          <Route path={"/about"} component={About} /> 
        </Switch>       
      </BrowserRouter>
    )        
  }
}

export default App;
