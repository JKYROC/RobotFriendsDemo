import React from 'react';

const Card = (props) =>{
    const {id} = props;
    return(
        <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/test${id}`} alt=''/>
        </div>
    )
}

export default Card;