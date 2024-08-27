import React, { useContext } from 'react'
import { CounterContext } from '../context/context'

const Component1 = () => {
    const counter = useContext(CounterContext)
  return (
    <div>
      {counter}
    </div>
  )
}

export default Component1
