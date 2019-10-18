import * as React from 'react';
import Left from 'src/view/layout/leftComponent/index';
import Dashboard from 'src/view/dashboard/index'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
interface IProps {
    match: any,
    name:string,
    sex:string
}
//  主layout组件 （测试redux）
class LayoutComponent extends React.Component<IProps, object>{
    public render() {
        const { match,name,sex } = this.props
        return (<div>
            <div>{`姓名:${name},性别:${sex}`}</div>
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

//  将state映射到Counter组件的props
const mapStateToProps = (state: any) => {
    return {
        name:state.user.name,
        sex:state.user.sex
    }
}

const Layout = connect(mapStateToProps,null)(LayoutComponent)
export default Layout