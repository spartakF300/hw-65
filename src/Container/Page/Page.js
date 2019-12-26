import React, {Component} from 'react';
import axiosApi from "../../axiosApi";

class Page extends Component {
    state = {
       page:null
    };
    getPageName = async () =>{
        let name = this.props.match.params.name;
        if(!name){
            name = 'home'
        }
        const res = await axiosApi.get('pages/' + name + '.json');
        if(res.data){
            this.setState({page:res.data})
        }

    };
  async  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.match.params.name !== this.props.match.params.name ){
          this.getPageName()
      }
    }

   async componentDidMount() {
   this.getPageName()
}

    render() {

        return this.state.page && (
            <div>
                <h1>{this.state.page.title}</h1>
                <p>{this.state.page.content}</p>
            </div>
        );
    }
}

export default Page;