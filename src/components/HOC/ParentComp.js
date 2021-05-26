import React from 'react'
import CrazyChild,{ ChildA,Comp1,RedChild} from './ChildA'
import ChildB from './ChildB'

export default class ParentComp extends React.Component{
    constructor(Props){
        super(Props)

    }
    render(){
        return(
            <div>
                Parent Comp
                <CrazyChild FromParent="My Craxy child"/>
                <ChildA FromParent="Props from parent"/>
                {/* <PinkChild/> */}
                <Comp1/>
                <RedChild />
                {/* <ChildB/> */}
            </div>
        )
    }
}
