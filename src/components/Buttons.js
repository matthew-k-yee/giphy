import React from 'react' 

const Buttons = props => {
  return (
    <div>
      <form onClick={props.loadTrending}>
        <button type='submit'>Load Trending Gifs</button>
      </form>
      <form>
        <button type='submit'>Select One at Random</button>
      </form>
      <form>
        <button type='submit'>Randomize Order</button>
      </form>
      <form onClick={props.reverseOrder}>
        <button type='submit'>Reverse Order</button>
      </form>
      <form onClick={props.clearScreen}>
        <button type='submit'>Clear All</button>
      </form>
    </div>
  )
}

export default Buttons