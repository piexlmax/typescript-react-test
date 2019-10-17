import * as React from 'react';

interface IListInfo {
    name: string
    path: string
    icon: string
}
class Left extends React.Component<object, object>{
    public render() {
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
                {list.map((item,index) => <li key={index}>{`名字是:${item.name},地址是:${item.path},图标是:${item.icon}`}</li>)}
            </ul>

        </div>)
    }
}
export default Left