import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:"flex",justifyContent:"center",padding:"1rem",alignItems:"center"}}>

        <h1 >Movies App</h1>
          <h3 style={{margin:"1rem"}}>Favourites</h3>
      </div>
    )
  }
}
