import { useState } from 'react';

function GalleryItem(props) {
    const [pictureDescription, setPictureDescription] = useState(true)

    const showHide = () => {
        setPictureDescription(!pictureDescription)
    }

    const addALike = () => {
        props.updateGallery(props.pic.id)
    }
    return (
        <>
            <div>
                {pictureDescription ?
                    <div className="box">
                        <img
                            onClick={showHide}
                            src={props.pic.path}
                            alt={props.pic.description} />
                    </div> :
                    <div className='box' onClick={showHide}>
                        <p>{props.pic.description}</p>

                    </div>
                }
                <div>
                    <button onClick={addALike}>Love this!</button>
                    <p>{props.pic.likes} people like this 😏</p>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;