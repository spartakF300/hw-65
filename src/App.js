import React from 'react';
import './App.css';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import Page from './Container/Page/Page'
import Layout from "./Components/Layout/Layout";
import Admin from "./Container/Admin/Admin";
function App() {
  return (
   <Container className="themed-container p-md-0" fluid={true}>
       <Layout>
     <Switch>
       <Route path="/" exact component={Page}/>
       <Route path="/page/:name" component={Page}/>
       <Route path="/admin" component={Admin}/>

     </Switch>
       </Layout>
   </Container>
  );
}

export default App;
