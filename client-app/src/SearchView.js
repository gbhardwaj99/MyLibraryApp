import React, { Component } from 'react'
import './SearchView.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SearchView extends Component {
    constructor(){
        super();
        this.state = {
            myValue:'',
            books: [],
            myLayout:null
        };
    }
    handleChange = (e)=>{
        this.setState({
            myValue: e.target.value
        });
    }
    componentDidMount(){
        if(this.props.match.params.action === "getallbooks"){
            axios.get("http://localhost:4000/catalog/getallbooks")
            .then(res=>{
                this.setState({
                    books: res.data,
                })
            })
            .catch(err=>console.log("Something went wrong"))
        }
    }
    render() {
        
        return (
            <div align="center" className="searchDiv">
                {/* Action = {this.props.match.params.action} */}
                <label><b>Enter the {this.props.match.params.action}</b></label><br /><br />
                <input type="text" onChange={this.handleChange} placeholder={`Enter ${this.props.match.params.action}`} /><br /><br /><br />
                <button className="btn btn-warning"><Link style={{textDecoration:"none",color:"black"}} to={`/CatalogView/SearchResult/${this.props.match.params.action}/${this.state.myValue}`}>Submit</Link></button>
                <br />
                {this.state.books.map(a => a.title)}
            </div>
        )
    }
}
