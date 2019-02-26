import React from 'react' 

const Display = props => {
  console.log(props.trending)
  return (
    <div>
      <h3>Hello World</h3>
      {props.trending.map(gif => (
        <div>
          <p>{gif.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Display