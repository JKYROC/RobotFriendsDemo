import React, {Component} from 'react';
import CardList from '../DemoListComponent/CardList49';
import SearchBox from './SearchBox';
import './App49.css';
import Scroll from './Scroll';

class Main extends Component {
    constructor() {
      super();
      this.state = {
        demo: [],
        searchField: '',
      };
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({demo : users}));
    }
    onSearchChange = (event) => {
      this.setState({ searchField: event.target.value });
    };
    render() {
      const filterDemo = this.state.demo.filter((demo) => {
        return demo.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase());
      });

      if (this.state.demo.length ===0){
        return<h1>Loading</h1>;
      }else{
            return (
        <div className='tc'>
          <h1>JKYROC DEMO</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList demo={filterDemo} />
          </Scroll>
          
        </div>
      );  
      }

    }
  }
  
  export default Main;