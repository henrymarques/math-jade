import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../Components/Inicio'
import CapSimples from '../Components/Capitalizacao/Simples'
import CapComposta from '../Components/Capitalizacao/Composta'
import SisConstante from '../Components/Amortizacao/SisConstante'
import SisFrances from '../Components/Amortizacao/SisFrances'

import Coringa from '../Components'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Inicio} />
      <Route path="/capitalizacao/simples" component={CapSimples} />
      <Route path="/capitalizacao/composta" component={CapComposta} />
      <Route path="/amortizacao/sac" component={SisConstante} />
      <Route path="/amortizacao/frances" component={SisFrances} />
      <Route component={Coringa} />
    </Switch>
  </BrowserRouter>
)

export default Routes
