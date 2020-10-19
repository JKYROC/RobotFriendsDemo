import React from 'react';

const Card = (props) =>{
    const {name,email,id} = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/test${id} size=200*200`} alt='img'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;