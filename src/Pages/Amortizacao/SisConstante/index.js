import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Tabela from './Tabela'

export default class SisConstante extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prestacao: '',
      juros: '',
      periodo: '',
      result: [],
      total: [],
      isValid: true,
      isLoaded: false
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const isValid = this.checkState()
    if (!isValid) {
      this.setState({ isValid })
      return
    }
    this.setState({ isValid })
    await this.calcular()
    console.log(this.state.result)
    console.log(this.state.total)
    this.setState({ isLoaded: true })
  }

  handleChange = e => {
    const target = e.target
    let value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  convertStateToInt = () => {
    const keys = Object.keys(this.state)
    let numbers = keys.map(item => Number(this.state[item]))
    return numbers
  }

  renderError = () => <h4>Operação não permitida</h4>

  limpar = e => {
    e.preventDefault()
    window.location.reload()
  }

  calcular = () => {
    //this.convertStateToInt()
    let totalParcela = 0
    let totalPagoJuros = 0
    let totalAmortizacao = 0
    let result = []

    let pagoEmJuros, parcela, amortizacao
    let { prestacao, juros, periodo } = this.state

    amortizacao = prestacao / periodo
    juros = juros / 100
    while (prestacao > 0) {
      pagoEmJuros = prestacao * juros
      parcela = amortizacao + pagoEmJuros
      prestacao -= amortizacao
      result.push({ parcela, amortizacao, pagoEmJuros, prestacao })

      totalParcela += parcela
      totalPagoJuros += pagoEmJuros
      totalAmortizacao += amortizacao
    }
    let total = [totalParcela, totalPagoJuros, totalAmortizacao]
    this.setState({ total })
    this.setState({ result })
  }

  renderTableTotal = () => this.state.total.map(obj => <td>{obj}</td>)

  renderTableRow = () =>
    this.state.result.map(obj => (
      <Tabela
        prestacao={obj.parcela}
        juros={obj.pagoEmJuros}
        amortizacao={obj.amortizacao}
        parcela={obj.prestacao}
      />
    ))

  renderTable = () => (
    <>
      <table>
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Juros</th>
            <th>Amortização</th>
            <th>Saldo devedor</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRow()}
          <tr>
            {this.renderTableTotal()}
            <td>
              <b>Total</b>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )

  checkState = () => {
    const keys = Object.keys(this.state)
    let nullItems = 0
    keys.forEach(item => {
      if (
        this.state[item].length <= 0 &&
        (item === 'prestacao' || item === 'juros' || item === 'periodo')
      ) {
        nullItems++
      }
    })
    return !(nullItems !== 0)
  }

  componentDidMount = () => {
    window.document.title = 'Amortização Constante - JADE'
  }

  render() {
    return (
      <div>
        <h3>Insira os dados para continuar</h3>
        {!this.state.isValid && this.renderError()}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Prestação"
            name="prestacao"
            onChange={this.handleChange}
            value={this.state.prestacao}
          />
          <input
            type="text"
            placeholder="Juros em porcentagem"
            name="juros"
            onChange={this.handleChange}
            value={this.state.juros}
          />
          <input
            type="text"
            placeholder="Período em meses"
            name="periodo"
            onChange={this.handleChange}
            value={this.state.periodo}
          />
          <input type="submit" value="Calcular" />
          <button onClick={this.limpar}>
            Limpar
          </button>
        </form>
        {this.state.isLoaded && this.renderTable()}
        <Link to="/">Voltar ao início</Link>
      </div>
    )
  }
}
