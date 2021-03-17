import React from 'react'
import { Link } from 'react-router-dom'

export default class Inicio extends React.Component {
  componentDidMount() {
    document.title = 'JADE - Início'
  }
  render() {
    return (
      <div>
        <div>
          <h1>Olá! Seja bem vindo ao JADE</h1>
          <span>Selecione uma opção para continuar...</span>
          <ul>
            <li>
              <Link to="/capitalizacao/simples">
                Capitalização Simples
              </Link>
            </li>
            <li>
              <Link to="/capitalizacao/composta">
                Capitalização Composta
              </Link>
            </li>
            <li>
              <Link to="/amortizacao/sac">
                Amortização Constante
              </Link>
            </li>
            <li>
              <Link to="/amortizacao/frances">
                Amortização Francesa
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
