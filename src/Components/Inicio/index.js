import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './app.css'

export default class Inicio extends React.Component {
  componentDidMount() {
    document.title = 'JADE - Início'
  }
  render() {
    return (
      <div className="Index">
        <div className="App-header">
          <h1>Olá! Seja bem vindo ao JADE</h1>
          <span className="inicio">Selecione uma opção para continuar...</span>
          <ul>
            <li>
              <Link className="opcoes" to={'/capitalizacao/simples'}>
                Capitalização Simples
              </Link>
            </li>
            <li>
              <Link className="opcoes" to={'/capitalizacao/composta'}>
                Capitalização Composta
              </Link>
            </li>
            <li>
              <Link className="opcoes" to={'/amortizacao/sac'}>
                Amortização Constante
              </Link>
            </li>
            <li>
              <Link className="opcoes" to={'/amortizacao/frances'}>
                Amortização Francesa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
