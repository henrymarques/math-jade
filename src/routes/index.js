import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Inicio from '../Pages/Inicio'
import CapSimples from '../Pages/Capitalizacao/Simples'
import CapComposta from '../Pages/Capitalizacao/Composta'
import SisConstante from '../Pages/Amortizacao/SisConstante'
import SisFrances from '../Pages/Amortizacao/SisFrances'

import Coringa from '../Pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/capitalizacao/simples" component={CapSimples} />
      <Route path="/capitalizacao/composta" component={CapComposta} />
      <Route path="/amortizacao/sac" component={SisConstante} />
      <Route path="/amortizacao/frances" component={SisFrances} />
      <Route component={Coringa} />
    </Switch>
  </Router>
)

export default Routes
