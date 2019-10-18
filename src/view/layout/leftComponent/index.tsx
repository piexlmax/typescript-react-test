import * as React from 'react';
import {connect} from 'react-redux'
interface IListInfo {
    name: string
    path: string
    icon: string
}

interface IProps{
    changeSex:(sex:string)=>void,
    changeName:(name:string)=>void
}
//  左侧组件 （测试redux）

class LeftComponent extends React.Component<IProps, object>{
    public render() {
    const {changeSex,changeName} = this.props

        const list: IListInfo[] = [
            {
                name: "qm",
                path: "qmp1",
                icon: "qmi1"
            }, {
                name: "qm2",
                path: "qmp2",
                icon: "qmi2"
            }, {
                name: "qm3",
                path: "qmp3",
                icon: "qmi3"
            }
        ]
        return (<div>
            <ul>
                {list.map((item,index) => <li onClick={()=>{changeSex(item.path);changeName(item.name)}} key={index}>{`名字是:${item.name},地址是:${item.path},图标是:${item.icon}`}</li>)}
            </ul>

        </div>)
    }
}

//  将action映射到Counter组件的props
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeName: (name:string) => dispatch({ type: "CHANGE_NAME", name }),
        changeSex: (sex:string) => dispatch({ type: "CHANGE_SEX", sex })
    }
}

const Left = connect(null,
    mapDispatchToProps)(LeftComponent)
export default Left