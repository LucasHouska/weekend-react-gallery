import { useState } from 'react';

function GalleryItem(props) {
    const [pictureDescription, setPictureDescription] = useState(true)

    const showHide = () => {
        setPictureDescription(!pictureDescription)
    }
    return (
        <>
            <div className="box">
                {pictureDescription ?
                    <img
                        onClick={showHide}
                        src={props.pic.path}
                        alt={props.pic.description} /> :
                        <p onClick={showHide}>
                        {props.pic.description}
                        </p>
                }

            </div>
        </>
    )
}

export default GalleryItem;