import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

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

  const updateGallery = (picId) => {
    console.log('Liked', picId)
    axios.put(`/gallery/like/${picId}`)
    .then(response => {
      console.log('Updated...');
      getGallery();
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
        <GalleryForm 
        
        />
        <GalleryList 
        galleryList={galleryList}
        updateGallery={updateGallery}
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
