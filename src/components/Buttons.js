import React from 'react' 

const Buttons = props => {
  return (
    <div>
      <form onSubmit={props.loadTrending}>
        <button type='submit'>Load Trending Gifs</button>
      </form>
      <form>
        <button type='submit'>Select One at Random</button>
      </form>
      <form>
        <button type='submit'>Randomize Order</button>
      </form>
      <form>
        <button type='submit'>Reverse Order</button>
      </form>
      <form>
        <button type='submit'>Clear All</button>
      </form>
    </div>
  )
}

export default Buttons