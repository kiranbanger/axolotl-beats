import React, { useEffect, useState } from "react";

const PlaylistFormGenres = () => {
  // if add new genre is selected display the PlaylistFormAddGenre component
  const [dropdownValues, setDropdownValues] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    let response = await fetch("/api/getGenres");
    let genres = await response.json();
    setDropdownValues(genres.genres);
  };

  return (
    <div>
      <div className="dropdown-container">
        <label className="dropdown-label">
          What genre are you in the mood for?
          <br />
          <select className="dropdown-menu">
            <option disabled selected>
              Select Your Genre
            </option>
            {dropdownValues.map((genre) => {
              return (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
};

export default PlaylistFormGenres;
