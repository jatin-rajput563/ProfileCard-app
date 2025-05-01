import React from 'react'

const CustomCard = ({ CardImg, Name, Title }) => {
    return (
        <>
            <div className='card'>
                <img className='w-100' src={CardImg} alt="img" />
                <h2>{Name}</h2>
                <p>{Title}</p>
            </div>
        </>
    )
}

export default CustomCard
