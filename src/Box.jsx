import React, { Component } from 'react'

export default class Box extends Component {
    

    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{width: `${this.props.width}rem`, height: `${this.props.height}rem`, backgroundColor: this.props.color, margin: "1rem"}}>
            
            </div>
            <button 
                style={{width: "2rem", marginLeft: "1rem"}}
                type="button" 
                onClick={()=>{this.props.remove(this.props.id)}}>X </button>
            </div>
        )
    }
}
