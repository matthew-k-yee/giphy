import React from 'react' 

const Display = props => {
  return (
    <div>
      {props.trending.map(gif => (
        <div key={gif.id}>
          <p>{gif.title}</p>
          <img src={gif.images.original.url} alt=""/>
        </div>
      ))}
    </div>
  )
}

export default Display