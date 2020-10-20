import React from 'react';
import Card from './Card49';


const CardList = ({ demo }) => {
    const cardComponent = demo.map((user,i) => {
        return (      
        <Card       
            key={i}        
            id={demo[i].id}        
            name={demo[i].name}/>  
    );  }); 
    return <div>{cardComponent}</div>;

};

export default CardList;
