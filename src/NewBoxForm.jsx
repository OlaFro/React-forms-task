import React, { Component } from 'react'
import "./newBoxForm.css"
const { v4: uuidv4 } = require('uuid')



export default class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state={
        height: "", 
        width: "", 
        color: "",
        id: "",
        
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
            id: uuidv4()
        })
    }
    render() {
        return (
            <form className="form">
                <div>
                <label htmlFor="height">Height</label>
                <input onChange={this.handleChange} 
                
                type="text" 
                name="height" 
                value={this.state.height}></input>
                </div>
                <div>
                <label htmlFor="width">Width</label>
                <input onChange={this.handleChange} type="text" name="width" value={this.state.width}></input>
                </div>
                <div>
                <label htmlFor="color">Color</label>
                <input onChange={this.handleChange} type="text" name="color" value={this.state.color}></input>
                </div>
                <button type="button" onClick={()=>{this.props.get(this.state)}}>New Square!</button>
            </form>
        )
    }
}
