import React, { useState, useEffect } from 'react';

const PlaylistFormAddGenre = (props) => {
  // we need a function that on input of the new genre field, it makes a call to spotify api with the genre

  return(
    <div className='add-genre-container'>
      <div className="div_input-container" onInput={fetchGenres}>
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