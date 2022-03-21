import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
import Dashboard from '../pages/Dashboard';
import Carrinho from '../pages/Carrinho';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/cadastrar' component={Cadastrar} />
            <Route exact path='/dashboard' component={Dashboard} isPrivate />
            <Route exact path='/carrinho' component={Carrinho} isPrivate />
        </Switch>
    )
}