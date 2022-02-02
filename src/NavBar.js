import React from "react";
import { Link,Route } from "react-router-dom";
import FrontEnd from "./FrontEnd";
import NodeJS from "./NodeJS";
import MeanStack from "./MeanStack";
import FullStack from "./FullStack";


const NavBar=props=>{
    const {frontUsers,nodeUsers,meanUsers,fullUsers,users,handleUsers}=props
    return (
        <div className="list-group">
            <Link to='/dashboard/frontend' className='list-group-item list-group-item-action'>Front-End Developers</Link>
            <Link to='/dashboard/node' className='list-group-item list-group-item-action'>Node.js Developers</Link>
            <Link to='/dashboard/mean' className='list-group-item list-group-item-action'>MEAN Stack Developers</Link>
            <Link to='/dashboard/full' className='list-group-item list-group-item-action'>Full Stack Developers</Link><hr />
            
            <Route path='/dashboard/frontend' exact={true} render={(props)=>{
                return <FrontEnd
                        frontUsers={frontUsers}
                        handleUsers={handleUsers}
                    />
            }}/>
            <Route path='/dashboard/node' exact={true} render={(props)=>{
                return <NodeJS
                        nodeUsers={nodeUsers}
                        handleUsers={handleUsers}
                    />
            }}/>
            <Route path='/dashboard/mean'exact={true} render={(props)=>{
                return <MeanStack
                        meanUsers={meanUsers}
                        handleUsers={handleUsers}
                    />
            }}/>
            <Route path='/dashboard/full' exact={true} render={(props)=>{
                return <FullStack
                        fullUsers={fullUsers}
                        handleUsers={handleUsers}
                    />
            }}/>
        </div>
    )
}

export default NavBar