import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CapSimples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      capital: '',
      taxa: '',
      juros: '',
      tempo: '',
      montante: '',
      isValid: true
    }
  }

  getStateInfo = () => {
    const keys = Object.keys(this.state)
    let nullItems = 0
    let items = keys.map(item => {
      if (this.state[item].length <= 0) {
        nullItems++
        return item
      }
      return null
    })
    let item = items.filter(element => element != null)

    return { isValid: !(nullItems !== 1), item: item[0] }
  }

  handleSubmit = e => {
    e.preventDefault()

    const { isValid, item } = this.getStateInfo()
    if (!isValid) {
      this.setState({ isValid })
      return
    }
    this.calcular(item)
  }

  calcular = item => {
    let { taxa, capital, juros, tempo, montante } = this.state
    taxa = Number(taxa)
    capital = Number(capital)
    juros = Number(juros)
    tempo = Number(tempo)
    montante = Number(montante)

    switch (item) {
      case 'capital': {
        if (juros === 0) {
          capital = montante / (1 + (taxa / 100) * (tempo / 30))
        } else {
          capital = montante - juros
        }
        capital = capital.toFixed(2)
        this.setState({ capital })
        break
      }
      case 'taxa': {
        if (juros === 0) {
          taxa = (montante - capital) / (capital * (tempo / 30))
        } else {
          taxa = juros / (capital * (tempo / 30))
        }
        taxa = (taxa * 100).toFixed(2)
        this.setState({ taxa })
        break
      }
      case 'juros': {
        juros = capital * (tempo / 30) * (taxa / 100)
        this.setState({ juros })
        break
      }
      case 'tempo': {
        if (juros === 0) {
          tempo = (montante - capital) / (capital * taxa)
        } else {
          tempo = juros / (capital * taxa)
        }
        tempo = tempo.toFixed(2)
        this.setState({ tempo })
        break
      }
      case 'montante': {
        if (capital === 0) {
        }
        montante = capital * (1 + (taxa / 100) * (tempo / 30))

        this.setState({ montante })
        break
      }
      default: {
        this.setState({ isValid: false })
        break
      }
    }
    return
  }

  renderError = () => <h4>Operação não permitida</h4>

  handleChange = e => {
    const target = e.target
    let value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  limpar = e => {
    e.preventDefault()
    window.location.reload()
  }

  componentDidMount() {
    document.title = 'Capitalização Simples - JADE'
  }

  render() {
    return (
      <div>
        <h3>Deixe em branco o campo que deseja calcular</h3>
        {!this.state.isValid && this.renderError()}
        <span>Se o campo não estiver sendo usado, insira 0</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Montante"
            value={this.state.montante}
            name="montante"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Capital"
            value={this.state.capital}
            name="capital"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Taxa em porcentagem"
            value={this.state.taxa}
            name="taxa"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Juros"
            value={this.state.juros}
            name="juros"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Período em dias"
            value={this.state.tempo}
            name="tempo"
            onChange={this.handleChange}
          />
          {/* <select
            className="form-control"
            value={this.state.tipo}
            onChange={this.handleChange}
          >
            <option value="teste">Teste</option>
          </select> */}
          <input type="submit" value="Calcular" />
          <button onClick={this.limpar}>
            Limpar
          </button>
        </form>
        <Link to="/">Voltar ao início</Link>
      </div>
    )
  }
}
