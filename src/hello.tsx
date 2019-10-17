// src/components/Hello.tsx

import * as React from 'react';

interface IProps {
  name:string
}
interface IState {
  count:number,
  test:number
}
class Hello extends React.Component<IProps,IState> {
  public state={
  count:1,
  test:0
 }
 public tick:(a:any) => void = (a:any)=>{
   this.setState({count:this.state.count+1})
 }
 public inFun:(a:number)=>void=(a:number)=>{
  this.setState({test:a})
 }
  public render(){
    const a = <button onClick={()=>{this.inFun(3)}}>{this.state.test}</button>
    return(
      <div>
        Hello {this.props.name}
        <button onClick={()=>{this.tick(a)}}>{this.state.count}</button>
      </div>
    )
  }
}
export default Hello;

