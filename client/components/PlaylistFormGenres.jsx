import React, { useEffect, useState } from 'react';
import PlaylistFormAddGenre from './PlaylistFormAddGenre.jsx';

const PlaylistFormGenres = (props) => {
  // if add new genre is selected display the PlaylistFormAddGenre component
  const [dropdownValues, setDropdownValues] = useState([]);

  useEffect(() => {
    fetchGenres();
  },[])

  const fetchGenres = async () => {
    let response = await fetch('/api/getGenres')
    let genres = await response.json()
    setDropdownValues(genres.genres)
  }

  return(
    <div>
    <div className='dropdown-container'>
      <label className='dropdown-label'>
        What genre are you in the mood for?<br/>
        <select className='dropdown-menu'>
          <option disabled selected>Select Your Genre</option>
          {dropdownValues.map( genre => {
            return <option value={genre}>{genre}</option>
          })
          }
          <option value="add-new-genre">Add New Genre</option>
        </select>
      </label>
    </div>
    <div>
      {dropdownValues === 'add-new-genre' && <PlaylistFormAddGenre/>}
    </div>
    </div>
  )
}

export default PlaylistFormGenres;