import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from "./components/seach-box/seach-box.components";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }


    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(responce => responce.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filterMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters Relodex</h1>
                <SearchBox                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filterMonsters}> </CardList>
            </div>
        )
    }
}

export default App;
