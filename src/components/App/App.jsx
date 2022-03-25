import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response.data);
      setGalleryList(response.data)
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    getGallery();
  }, [])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        galleryList={galleryList}
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
