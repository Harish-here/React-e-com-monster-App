import React,{ Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.components'
import { SearchBox } from './components/search/search.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      lists: [],
      searchField: ""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({lists: json}))
  }
  
  render(){
    const {lists, searchField} = this.state;
    
    const filteredlist = lists.filter(x => x["name"].toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App bg-near-white  align-stretch">
        <SearchBox placeholder='search your monster' handleChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredlist} />
      </div>
    );
  }
}

export default App;
