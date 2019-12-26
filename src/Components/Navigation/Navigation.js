import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {Nav, Navbar,  NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

class Navigation extends Component {
    state={
        pages:null
    };
    getPages = async ()=>{
const response = await axiosApi.get('pages/.json');
       if (response.data){
           this.setState({pages:response.data})
           // console.log(response.data);
       }
    };
   async componentDidMount() {
        this.getPages()
    }

    render()  {
        let  link
       if(this.state.pages){
             link = Object.keys(this.state.pages).map(name =>{
               return    <NavLink className="Muted link" key={name} tag={RouterNavLink} to={'/page/'+name} exact>{this.state.pages[name].title}</NavLink>
           });
           link.reverse()
       }

        return this.state.pages && (
            <div>
                <Navbar color="dark" light expand="md">
                    {link}

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/admin" exact>Admin</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;