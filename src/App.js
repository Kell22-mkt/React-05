import React, { Component } from "react";

export default class App extends Component {
  state = {
    pessoas: [
      { nome: "luiza", idade: 12, cidade: "Rio de Janeiro" },
      { nome: "Rafa", idade: 21, cidade: "Rio de Janeiro" },
      { nome: "Lara", idade: 32, cidade: "Rio de Janeiro" },
      { nome: "Sofia", idade: 34, cidade: "Rio de Janeiro" },
      { nome: "Olivi", idade: 77, cidade: "Rio de Janeiro" },
      { nome: "Lucas", idade: 90, cidade: "Rio de Janeiro" }
    ]
  };
  render() {
    return (
      <section>
        {this.state.pessoas.map((item) => (
          <div>
            <p>
              Nome: {item.nome} Idade: {item.idade} Cidade: {item.cidade}
            </p>
          </div>
        ))}
      </section>
    );
  }
}
