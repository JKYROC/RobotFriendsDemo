import React from 'react';
import CardList from './CardList';
import {robots} from './robot';

const App = () =>{
    return <CardList robots={robots}/>;
};

export default App;