import React from 'react'

const Tabela = props => (
  <tr>
    <td>{props.prestacao}</td>
    <td>{props.juros}</td>
    <td>{props.amortizacao}</td>
    <td>{props.parcela}</td>
  </tr>
)

export default Tabela
