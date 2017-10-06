import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <a
          style={{
            margin: '0 auto',
            display: 'block',
            paddingTop: '100px',
            fontSize: '2.5rem',
            backgroundColor: 'transparent',
            border: '0'
          }}
          className="button is-loading"
        >
          Loading
        </a>
      </div>
    )
  }
}
