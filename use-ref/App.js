import React, { useState, useEffect, useRef } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

export default function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return(
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </>
  )
}