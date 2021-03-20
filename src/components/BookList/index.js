import React, { Component } from 'react'
import Book from './index.module.css';
import axios from "axios";
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            books:[]
        }
       
    }
    componentDidMount(){
        axios({
            url:"http://localhost:3000/ranks",
            params:{
               head:this.props.head
            }
        }).then(res=>this.setState({
            books:res.data
        }))
    }
    render() {
        return (
            <div className={Book.box}>
                {
                    this.state.books.map(item=>(
                    <li>
                        <main>{item.name}</main>
                        <main>{item.rank}</main>
                    </li>))
                }
            </div>
        )
    }
}
