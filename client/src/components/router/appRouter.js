import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Libraries
import Cookies from 'js-cookie'

//Components
import LoginForm from '../login/loginForm'
import Forbidden from '../utils/forbidden';
import Dashboard from "../dashboard/dashboard";
import Profile from "../user/profile";
import Customer from "../customers/customer";
import Customers from '../customers/customers'
import Sprayer from '../sprayers/sprayer'
import Sprayers from '../sprayers/sprayers';
import PreInspection from '../preInspection/preInspection'
import PreInspections from '../preInspection/preInspections'
import Inspection from '../inspection/inspection'
import Inspections from '../inspection/inspections'
import InspectionReport from '../inspection/report/inspectionReport'
import InspectionsReport from '../inspection/report/inspectionsReport'
import History from '../utils/history'

export default function AppRouter(){
    
  
  return(
    <Router history={History}>

      <Switch>
        <Route exact path="/">
          {!Cookies.get("auth")?<LoginForm />: <Redirect to="/dashboard"/>}
        </Route>
        <Route exact path="/dashboard">
          {Cookies.get("auth")?<Dashboard />: <Forbidden />}
        </Route>
        <Route exact path="/profile">
          {Cookies.get("auth")?<Profile />: <Forbidden />}
        </Route>

        <Route exact path="/customers/new">
          {Cookies.get("auth")?<Customer new={true} />: <Forbidden />}
        </Route>
        <Route exact path="/customers/">
          {Cookies.get("auth")?<Customers />: <Forbidden />}
        </Route>
        <Route exact path="/customers/:customerID">
          {Cookies.get("auth")?<Customer new={false} />: <Forbidden />}
        </Route>

        <Route exact path="/sprayers/new">
          {Cookies.get("auth")?<Sprayer new={true} />: <Forbidden />}
        </Route>
        <Route exact path="/sprayers">
          {Cookies.get("auth")?<Sprayers/>: <Forbidden />}
        </Route>
        <Route exact path="/sprayers/:sprayerID">
          {Cookies.get("auth")?<Sprayer new={false} />: <Forbidden />}
        </Route>

        <Route exact path="/preInspections/new">
          {Cookies.get("auth")?<PreInspection new={true} />: <Forbidden />}
        </Route>
        <Route exact path="/preInspections">
          {Cookies.get("auth")?<PreInspections  />: <Forbidden />}
        </Route>
        <Route exact path="/preInspections/:preInspectionID">
          {Cookies.get("auth")?<PreInspection new={false} />: <Forbidden />}
        </Route>

        <Route exact path="/inspections/report">
          <InspectionsReport  />
        </Route>
        <Route exact path="/inspections/new">
          {Cookies.get("auth")?<Inspection new={true} />: <Forbidden />}
        </Route>

        <Route exact path="/inspections">
          {Cookies.get("auth")?<Inspections  />: <Forbidden />}
        </Route>

        <Route exact path="/inspections/:inspectionID/report">
          {Cookies.get("auth")?<InspectionReport new={false} />: <Forbidden />}
        </Route>
        <Route exact path="/inspections/:inspectionID">
          {Cookies.get("auth")?<Inspection new={false} />: <Forbidden />}
        </Route>
        
      </Switch>
    
  </Router>
  )
}