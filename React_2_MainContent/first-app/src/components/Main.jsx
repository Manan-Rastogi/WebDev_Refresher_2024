import React from 'react'
import "./main.css"
import Card from './Card'

const Main = () => {
  
  return (
    <div>
      <div className="main">
        <Card title="Card 1" description="This is to inform you that this is not something to read."></Card>
        <Card></Card>
        <Card></Card>
       
       {/* List Rendering */}
      </div>
    </div>
  )
}

export default Main
