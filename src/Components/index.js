import React from 'react'

export default class Coringa extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.history.push('/')
    }, 4000)
  }

  render() {
    return (
      <div style={{ margin: '10vmin' }}>
        <h3>Não permitido.</h3>
        <span>Você será redirecionado em alguns segundos...</span>
      </div>
    )
  }
}
