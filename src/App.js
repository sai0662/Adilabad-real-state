import React,{Component} from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar/Navbar';
import Home from '../src/components/screens/Home';
import Properties from '../src/components/screens/Properties';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Admin from './components/screens/Admin';
import Login from './components/screens/Login';
import PropertyDetails from './components/screens/PropertyDetails';
import Propertiesitem from './components/PropertiesItem/Propertiesitem';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';

class App extends Component {
  
  render() {
  return (
     <>
     
     <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/Properties' component={Properties}/>
         <Route path='/About' component={About}/>
         <Route path='/Contact' component={Contact}/>
         <Route path='/Admin' component={Admin}/>
         <Route path='/Login' component={Login}/>
         <Route path='/PropertyDetails'  component={PropertyDetails}/>
         <Route path='/Propertiesitem' component={Propertiesitem}/>
         <Route path='/PropertyDetail/:id' component={PropertyDetail}/>
       </Switch>
     </Router>
     
     </>
 );
}
}
export default App;
