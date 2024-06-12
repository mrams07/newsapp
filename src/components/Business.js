import React, { Component } from 'react'
import News from './News'

export class Business extends Component {
  render() {
    return (
        <News pageSize={this.props.pageSize} category={this.props.category} heading={'Business'}/>

    )
  }
}

export default Business
