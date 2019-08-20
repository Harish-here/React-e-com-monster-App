import React,{ Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.components'
import { SearchBox } from './components/search/search.component'
import Lifecycle from './components/lifecycle/lifecycle.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      lists: [],
      searchField: ""
    }
    // this.attachTheState = this.attachTheState.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({lists: json}))
  }

   attachTheState = (e) => {
    this.setState({searchField: e.target.value})
  }

  
  
  render(){
    const {lists, searchField} = this.state;
    //computed value
    const filteredlist = lists.filter(x => x["name"].toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App bg-near-white  align-stretch">
        <h2 className='dark-blue tc'>{searchField}</h2>
        <Lifecycle />
        <SearchBox placeholder='search your monster' classStyle='search' handleChange={this.attachTheState}/>
        <CardList monsters={filteredlist} />
      </div>
    );
  }
}

export default App;
