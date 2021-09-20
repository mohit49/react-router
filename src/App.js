import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';
import Nav from './pages/navigation';
import Home from './pages/home';

import './App.css';

function App() {
   const Name = () => {
 return <h1>This is my Name</h1>
   }
  return (
    <div className="App">
<Nav/>
      <Switch>
     <Route exact path='/' component={Home}></Route>
     <Route path='/about' component={About}></Route>
     <Route exact path='/contact' component={Contact}></Route>
     
     <Route component={Error}/>
     </Switch>
    </div>
  );
}

export default App;
