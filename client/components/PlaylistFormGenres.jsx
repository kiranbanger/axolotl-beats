import React, { useState } from 'react';
import PlaylistFormAddGenre from './PlaylistFormAddGenre.jsx';

const PlaylistFormGenres = (props) => {
  // if add new genre is selected display the PlaylistFormAddGenre component
  const [dropdownValue, setDropdownValue] = useState('');

  const handleChange = (e) => {
    setDropdownValue(e.target.value)
    console.log('changing value to ', e.target.value)
  }

  return(
    <div>
    <div className='dropdown-container'>
      <label className='dropdown-label'>
        What genre are you in the mood for?<br/>
        <select className='dropdown-menu' onChange={handleChange}>
          <option disabled selected>Select Your Genre</option>
          <option value="electronic">Electronic</option>
          <option value="k-pop">K-Pop</option>
          <option value="work-out">Workout</option>
          <option value="jazz">Jazz</option>
          <option value="classical">Classical</option>
          <option value="add-new-genre">Add New Genre</option>
        </select>
      </label>
    </div>
    <div>
      {dropdownValue === 'add-new-genre' && <PlaylistFormAddGenre/>}
    </div>
    </div>
  )
}

export default PlaylistFormGenres;