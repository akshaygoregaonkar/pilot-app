import React from 'react'
import PropType from 'prop-types'
export default class MyChild extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { name, subjectMarks } = this.props
        console.log(this.props,"My parent")
        return (
            <div>
                <h2>Student Details</h2>
                <label> Name:</label>
                <h4>{name}</h4>

                <div>
                    {subjectMarks.map(item=><div>
                        <div> Subject: {item.sub}</div>
                        <div> Score: {item.score}</div>
                        </div>)}
                    
                </div>
            </div>
        )
    }
}
 
MyChild.defaultProps={
    name:'',
    subjectMarks:[]
}
MyChild.propType={
    name:PropType.string,
    subjectMarks:PropType.array
}