import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Main extends Component {
 

  render() {
    return (
      <div>
        主页
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
