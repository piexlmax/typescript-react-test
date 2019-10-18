// 跟组件 路由在这里写
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import Layout from 'src/view/layout'
import * as React from 'react';

class RouterList extends React.Component<object, object> {
  public render() {
    return (<Router>
      <Switch>
        <Route exact={true} path="/" render={() => <Redirect to={{ pathname: "/layout/dashboard" }} />} />
        <Route path="/layout" component={Layout} />
      </Switch>
    </Router>)
  }
}
export default RouterList;

