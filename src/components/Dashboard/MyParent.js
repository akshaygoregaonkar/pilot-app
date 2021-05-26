import React from 'react'
import MyChild from './MyChild'
export default class MyPerent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jack',
            subject: [
                { sub: 'maths', score: 89 },
                { sub: 'chem', score: 90 }, 
                { sub: 'phys', score: 69 },
                 { sub: 'eng', score: 70 }
            ]
        }
    }

    render(){
        return(
            <div>
                <MyChild name={this.state.name} subjectMarks={this.state.subject}/>
                <MyChild/>
            </div>
        )
    }
}