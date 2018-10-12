import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    }
    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }
    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    }
    render() {
        return (
            <div className="small-container">
                <h1>React Tutorial App: People List</h1>
                <p>Built following the instructions in <a href="https://www.taniarascia.com/getting-started-with-react/">Getting Started with React</a>, by Tania Rascia.</p>
                <Table
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default App;
