import React from 'react'


const Feature = ({img, title, description}) => {
    return(
        <div className="Feature">
            <img src={img} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}



export default Feature