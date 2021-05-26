import React from 'react';
export default class ListTemplate extends React.Component{
    constructor(props){
        super(props)

    }


    render(){
        return(
            <div>
<h5> Inside the  ListTemplate</h5>

{this.props.listOfItem.map((item)=>{<li>{item}</li>})}
            </div>
        )
    }
}