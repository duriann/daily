import React,{Component} from 'react'
import {connect} from './react-redux/Connect'


@connect((state)=>{
  return {
    count: state.count
  }
},(dispatch)=>{
  return {
    add: ()=>{
      dispatch({type: 'addd'})
    }
  }
})
export default class Count extends Component{

  _add(){
    this.props.add()
  }

  render() {
    console.log('render..',this.props);
    return (
      <div>
        {this.props.count}
        <button onClick={this._add.bind(this)}>添加</button>
      </div>
    )
  }
}