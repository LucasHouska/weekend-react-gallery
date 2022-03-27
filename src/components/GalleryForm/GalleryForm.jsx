import axios from 'axios';
import {useState} from 'react';

function GalleryForm() {
    const [picUrl, setPicUrl] = useState('');
    const [picDescription, setPicDescription] = useState('');

    const handleSubmit = () => {
        const newPic = {
            url: picUrl,
            description: picDescription
        }
        axios.post('/gallery', newPic)
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h3>Add a pic!</h3>
            <input
                onChange={event => {setPicUrl(event.target.value)}}
                placeholder="Picture URL"
            />
            <input
                onChange={event => {setPicDescription(event.target.value)}}
                placeholder="Picture Description"
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}

export default GalleryForm;