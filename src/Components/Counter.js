import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'José',
    age: 31,
  };

  componentDidMount() {
    console.log('El componente se ha montado en el DOM');
}

  componentDidUpdate() {
      console.log('El componente se ha actualizado');
  }

  componentWillUnmount() {
      console.log('El componente se ha desmontado del DOM');
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    console.log('El método render se ha ejecutado');
    return (
      <div>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}>
          Incrementar edad
        </button>
        <p>Hola, {this.state.name}. Tienes {this.state.age} años.</p>
      </div>
    );
  }
}