import React from 'react';

function Project ({ image, altText, description, webLink, repoLink}) {
    return (
        <div>
            <figure>
            <a href={webLink}>
                <img src={image} alt={altText} />
            </a>
            <figcaption>{description}</figcaption>
            </figure>
            <a href={repoLink}>Link to Repo</a>
        </div>
    );
}

export default Project;