import React from 'react';

function Project ({ image, altText, description, webLink, repoLink}) {
    return (
        <div className='card' style={{padding:'10px', margin:'10px'}}>
            <div className='card-image'>
            <figure className='image is-4'>
            <a href={webLink}>
                <img src={image} alt={altText} />
            </a>
            </figure>
            <p style={{color:'black'}}>{description}</p>
            <a href={repoLink}>Link to Repo</a>
            </div>
            
        </div>
    );
}

export default Project;