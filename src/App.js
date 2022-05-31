import React from 'react'

import Timer from "./components/Timer"
 const App = () => {
  let[starttime,setStarttime]=React.useState(0)
  let[endtime,setEndtime]=React.useState(0)
  return (
    <div>
      <Timer setEndtime={setEndtime} setStarttime={setStarttime} endtime={endtime} starttime={starttime}/>
     
    </div>
  )
}
export default App