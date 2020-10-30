import React, { Component } from 'react'
import NewBoxForm from "./NewBoxForm"
import Box from "./Box"
// const { v4: uuidv4 } = require('uuid')



export default class Container extends Component {
    
constructor(props){
    super(props);
    this.state={
    boxes:[]
    }

    this.getValues=this.getValues.bind(this)
    this.remove=this.remove.bind(this)
}

    getValues(data){
        this.setState({
            boxes: [...this.state.boxes, data]
        })
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(elem=>{
                console.log(elem.id);
                console.log(id)
                return elem.id !== id

            })
        })
    }
    render() {
        let boxes = this.state.boxes.map((elem, index)=>{
            
            return <Box 
            key={elem.id}
            remove={this.remove} 
            id={elem.id}
            height={elem.height} 
            width={elem.width} 
            color={elem.color}/>
        })
        return (
            <div>
                <h1>Squares generator</h1>
                 <NewBoxForm get={this.getValues}/>
                 {boxes}
                 
            </div>
        )
    }
}
