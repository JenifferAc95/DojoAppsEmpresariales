import React, {Component} from 'react';
import './App.css';
import Resultado from "./resultado";


class App extends Component {

  constructor(props){
    super(props);
    this.search("audifonos");
    this.state={
      resultados : []
    }
  }
  changeInput(element){
    console.log("Value: ", element.target.value);
  }

  search(searched){
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=" + searched )
    .then(function (resultado){
      console.log("En el then")
      return resultado.json()
    }).then((json) =>{
      this.setState({
        resultados: json.results
      })
    })
    }

    render() {
        return (
          <div>
            <h1>Jeniffer Acosta Orrego</h1>
            <input type="text" placeholder="Search" onChange={this.changeInput.bind(this)}></input>
            {this.state.resultados.map(function (resultado){
            return <Resultado resultado={resultado}></Resultado>
          })};
          </div>
        );
    }
}

export default App;
