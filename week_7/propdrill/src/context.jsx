import React from 'react'
import { createContext } from 'react'

function context() {
  return (
    <div>context</div>
  )
}
export const CountContext = createContext(0);
export default context