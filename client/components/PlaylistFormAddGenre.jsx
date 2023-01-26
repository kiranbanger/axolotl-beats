import React from 'react';

const PlaylistFormAddGenre = (props) => {
  // we need a function that on input of the new genre field, it makes a call to spotify api with the genre
  const querySpotify = async (input) => {
    console.log(input.target.value);
  }
  return(
    <div className='add-genre-container'>
      <div className="div_input-container" onInput={querySpotify}>
        New Genre:
          <label className='input-label'>
            <input className='inputBox'>
            </input>

          </label>
      </div>
    </div>
  )
}

export default PlaylistFormAddGenre;