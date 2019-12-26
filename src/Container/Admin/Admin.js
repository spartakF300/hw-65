import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axiosApi from "../../axiosApi";
import {CATEGORIES} from '../../Categories'

class Admin extends Component {
    state = {
        title: '',
        content: '',
        category: ''
    };
    getPageName = async () => {
        let url = 'pages/home/.json';
        let category = this.state.category;
        if (category) {
            url = 'pages/' + category + '.json'
        }
        const res = await axiosApi.get(url);

        this.setState({title: res.data.title, content: res.data.content});
    };
    inputChange = (e) => this.setState({[e.target.name]: e.target.value});

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.category !== this.state.category) {
            this.getPageName()
        }
    }

    editPage = async (e) => {
        e.preventDefault();
        let name = this.state.category;
        if(!name){
           name = 'home'
        }
        const  page = {
            content:this.state.content,
            title:this.state.title,
        };
        await axiosApi.put('/pages/'+ name + '.json', page);
        this.props.history.push('/page/'+ name)
    };

    componentDidMount() {
        this.getPageName()
    }


    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="category">Select</Label>
                        <Input onChange={this.inputChange} value={this.state.category} type="select" name="category"
                               id="category">
                            {CATEGORIES.map(name => {
                                return <option key={name}>{name}</option>
                            })}

                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input onChange={this.inputChange} type="text" name="title" id="title"
                               defaultValue={this.state.title}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input onChange={this.inputChange} defaultValue={this.state.content} type="textarea"
                               name="content" id="content"/>
                    </FormGroup>
                    <Button onClick={this.editPage}>Save</Button>
                </Form>
            </div>
        );
    }
}

export default Admin;