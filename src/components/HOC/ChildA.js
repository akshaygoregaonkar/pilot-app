import React from 'react'
import HocSetColor from './Hoc'
import HocUserDetail from './HocUserDetail'
import HocCommentDetail from './HocCommentDetails'
class ChildA extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        //console.log(this.Props,"childA")

        return (
            <div style={this.props.backColor}>
                <h3>this is my ChildA </h3>
                <h3> {this.props.FromParent}</h3>
                <div>
                    {this.props.ListItems && this.props.ListItems.map(item => <div>{item.name} </div>)}
                </div>

            </div>
        )
    }
}
const PinkChild = HocCommentDetail(HocSetColor('pink')(ChildA))
const RedChild =HocUserDetail(HocSetColor('red')(ChildA))

export { PinkChild as Comp1, RedChild, ChildA}
export default HocSetColor('green')(ChildA)