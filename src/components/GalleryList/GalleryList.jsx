import GallaryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    return (
        <>
            {props.galleryList.map(pic => 
                <GallaryItem 
                key={pic.id}
                pic={pic}
                />)}
        </>
    )
}

export default GalleryList;