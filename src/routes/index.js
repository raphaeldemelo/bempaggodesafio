import { Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/cadastrar' component={Cadastrar} />
            <Route exact path='/dashboard' component={Dashboard} isPrivate />
        </Switch>
    )
}