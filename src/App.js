import React, { useState } from 'react';
import './App.css';
import Table from './Components/Table';

export const movieContext = React.createContext(null);
function App() {

  const movieObj = {
    movieName: "",
    actor: "",
    description: "",
    rating: ""
  }
  const [movie, setMovie] = useState(movieObj)

  const [movieList, setMovieList] = useState([]);

  const [selectedIndex, setSeletedIndex] = useState(-1);

  const submitForm = () => {
    if (selectedIndex === -1) {
      const obj = {
        ...movie,
        id: movieList.length + 1
      }
      setMovieList([...movieList, obj]);
      setMovie(movieObj);
    } else {
      movieList[selectedIndex] = {
        ...movie,
        id: movieList[selectedIndex].id
      }
      setMovieList([...movieList]);
      setMovie(movieObj);
      setSeletedIndex(-1);
    }

  }

  const deleteRecord = (index) => {
    movieList.splice(index, 1);
    setMovieList([...movieList]);
  }

  const editRecord = (index) => {
    setMovie(movieList[index]);
    setSeletedIndex(index);
  }

  return (
    <movieContext.Provider value={{
      movieList: movieList,
      selectedIndex: selectedIndex,
      deleteRecord: (index) => deleteRecord(index),
      editRecord: (index) => editRecord(index)
    }
    }>
      <div className='container container-body'>
        <h1 className='text-center'>Movie List</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="movieName" className="form-label">Movie</label>
            <input type="text" className="form-control" id="movieName" name='movieName' value={movie.movieName}
              onChange={(event) => setMovie({ ...movie, movieName: event.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="actor" className="form-label">Actor</label>
            <input type="text" className="form-control" id="actor" name='actor' value={movie.actor}
              onChange={(event) => setMovie({ ...movie, actor: event.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name='description' value={movie.description}
              onChange={(event) => setMovie({ ...movie, description: event.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input type="text" className="form-control" id="rating" name='rating' value={movie.rating}
              onChange={(event) => setMovie({ ...movie, rating: event.target.value })} />
          </div>
          <button type="button" className="btn btn-primary" onClick={() => submitForm()}>
            {
              selectedIndex === -1 ? "Submit" : "Update"
            }</button>
        </form>
        <Table movielist={movieList} selectedindex={selectedIndex}
          editrecord={(index) => editRecord(index)} deleterecord={(index) => deleteRecord(index)} />
      </div>
    </movieContext.Provider>
  );
}

export default App;
