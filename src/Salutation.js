import React, {Component} from 'react'

class Salutation extends Component {
    render(){
        return<h1>What up, {this.props.firstName}{this.props.lastName}</h1>
    }

}

export default Salutation