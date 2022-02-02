import React from "react";
import { Link,Route } from "react-router-dom";
import FormComponent from "./FormComponent";
import Dashboard from "./Dashboard";
import Home from "./Home";

const App=(props)=>{

  return (
    <div className='list-group container' >
      <h1>Admin Dashboard</h1>
      
      <Link to='/' className='list-group-item list-group-item-action'>Home</Link>
      <Link to='/apply' className='list-group-item list-group-item-action'>Form Application</Link>
      <Link to='/dashboard' className='list-group-item list-group-item-action'>Dashboard Home</Link>
      <hr/>

      <Route path='/' component={Home} exact={true}/>
      <Route path='/apply' component={FormComponent} exact={true}/>
      <Route path='/dashboard' component={Dashboard} />
    </div>
  )
}
export default App;
