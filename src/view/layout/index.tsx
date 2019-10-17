import * as React from 'react';
import Left from 'src/view/layout/leftComponent/index';
import Dashboard from 'src/view/dashboard/index' 
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
interface IProps {
    match: any
}

class Layout extends React.Component<IProps, object>{
    public render() {
        const { match } = this.props
        return (<div>
            <div>header</div>
            <Left />
            <div>
            <Router>
                <Switch>
                    <Route path={`${match.path}/dashboard`} component={Dashboard} />
                </Switch>
            </Router>
            </div>
        </div>)
    }
}
export default Layout