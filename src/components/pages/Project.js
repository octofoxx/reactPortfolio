import React from 'react';

function Project ({ image, altText, description, webLink, repoLink}) {
    return (
        <div className='card'>
            <div className='card-image'>
            <figure className='image is-4by3'>
            <a href={webLink}>
                <img src={image} alt={altText} />
            </a>
            </figure>
            <p>{description}</p>
            <a href={repoLink}>Link to Repo</a>
            </div>
            
        </div>
    );
}

export default Project;