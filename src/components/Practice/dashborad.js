import React from 'react'
import ListTemplate from './ListTemplate'
import ChildComponent from './ChildComponent'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['cell', 'phone'],
            tempItem: ''
        }

    }



    handleClick = () => {
        if (this.state.tempItem != '') {
            this.setState({ list: [...this.state.list, this.state.tempItem], tempItem: '' })
        }
    }

    AddDatafromChild = (ChildData) => {
        this.setState({ list: [...this.state.list, ChildData] })

    }
    deleteItem = (index) => { this.setState({ list: [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)] }) }
    render() {
        return (
            <div>
                <ChildComponent callBackParent={this.AddDatafromChild} />
                <h4> inside the dashborad components</h4>
                {/* < ListTemplate listOfItem={this.state.list} /> */}
                <ul>
                    {/* {this.state.list.map((item,index)=>{
                        return
                        <li>{item}<button onClick={(index)=>this.deleteItem()}>Delete</button></li>

                    })} */}
                    {this.state.list.map((item, index) => <li>{item} <button onClick={() => this.deleteItem(index)}> Delete</button></li>)}
                </ul>
                <input type="text" onChange={(evt) => { this.setState({ tempItem: evt.target.value }) }} value={this.state.tempItem}></input>
                <button onClick={() => { this.handleClick() }}> Add Items</button>

            </div>
        )
    }
}

class NextLayer extends React.Component {
    render() {
        return (
            <div>
                <h3>inside the NextLayer</h3>
            </div>
        )
    }

}

export { NextLayer }
export default Dashboard