import React from 'react'

// using useffect we can run side effects in our components
// side effects are things like fetching data from an API, updating the DOM, or setting up a subscription
// useffect takes two arguments a callback function and a dependency array
// the callback function is run after the component renders
// the dependency array is used to specify when the callback function should be run
// if the dependency array is empty the callback function is only run once when the component mounts
// if the dependency array contains values the callback function is run whenever one of those values changes

function Usefect() {
  return (
    <div>Usefect</div>
  )
}

export default Usefect