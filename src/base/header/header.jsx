import React, {Component} from 'react';
import Footer from '../Footer/Footer'
import './header.scss'

let users = [
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 1
  },
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 2
  },
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 3
  },
  {
    name: 'wq',
    color: 'yellow',
    age: 26,
    height: 178,
    id: 4
  }
]

for (let i = 0; i <= 30; i++) {
  users.push(users[0])
}

function Name(props) { // [函数式组件]将组件拆成更小的组件，所有 React 组件都必须是纯函数，并禁止修改其自身 props 
  return (
    <div className="UserInfo">
      {props.name}
    </div>
  );
}

class Height extends Component{ // 事件及其双向数据绑定
  constructor(props) {
    super(props)
    this.state = { // 初始化state
      date: new Date(),
      count: 80,
      flag: true
    }
    // this.add = this.add.bind(this) // 使this在回调中起作用，也可用下面的箭头函数的语法来代替
  }
  componentDidMount() { //钩子在组件输出被渲染到 DOM 之后运行
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() { // 组件移除时调用
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ // 更新新组件的本地状态
      date: new Date()
    })
  }

  add = (e, id) => { // 这中语法，使this指向react对象, 因为render中用了箭头函数，这里不用也可以
    console.log(id)
    e.preventDefault() // 如果是a标签，阻止默认事件需要写在这个里面
    if (this.state.count < 100) {
      this.setState((preState, props) => ({ // preState就是state对象，props就是props对象
        flag: true
      }))
    } else {
      this.setState((preState, props) => ({ // preState就是state对象，props就是props对象
        flag: false
      }))
    }
    if (this.state.flag) {
      this.setState((preState, props) => ({ // preState就是state对象，props就是props对象
        count: ++preState.count // 使用preState.count++无效
      }))
    } else {
      this.setState((preState, props) => ({ // preState就是state对象，props就是props对象
        count: --preState.count
      }))
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <span>{this.state.count}</span><br/>
        <button onClick={(e) => {this.add(e, 'id')}}>{this.state.flag? 'add': 'remove'}</button> {/*如果不用到e，直接this.add就可以了*/}
      </div>
    )
  }
}

class Login extends Component{ // 是否登录组件测试
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  login = () => { // 登录逻辑
    this.setState({
      isLogin: true
    })
  }

  lgout = () => { // 退出登录逻辑
    this.setState({
      isLogin: false
    })
  }
  render() {
    let isLogin = this.state.isLogin
    return (
      <div>
        <span>是否已经登录？</span>
        {isLogin?(<button onClick={this.lgout}>退出登录</button>) : <button onClick={this.login}>登录</button>}
      </div>
    )
  }
}
class ChildIsShow extends Component{ // 子组件控制显示隐藏的功能
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  render() {
    if (this.state.show) {
      return (
        <div>我是子组件显示状态 <span onClick={() => {this.setState({show: false})}} >X</span></div>
      )
    } else {
      return null
    }
  }
}

class ParentsIsShow extends Component{ // 父组件控制显示隐藏的功能
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.props.warn) {
      return (
        <div>我是父组件显示状态 <span onClick={() => {this.props.parentsFlagChange(false)}}>X</span></div>
      )
    } else {
      return null
    }
  }
}

class HelloMessage extends Component{ // 根组件
  constructor(props) {
    super(props)
    this.state = {
      parentsFlag: true
    }
  }
  parentsFlagChange = (flag) => {
    this.setState({
      parentsFlag: flag
    })
  }
  render() {
    return (
      <div className='content'>
      <Login />
      <ChildIsShow />
      <ParentsIsShow warn={this.state.parentsFlag} parentsFlagChange = {this.parentsFlagChange} />{/*父子组件传值*/}
      <ul>
        {
          users.map((user, index) => { // 在使用组件的地方写上自定义属性，可在组件中直接使用
            return <li key={index}>{index}、名字：{user.name} 肤色：{user.color} 年龄：{user.age} 身高：{user.height}</li>
          })
        }
        <Name name='jiatesun' />
        <Height />
      </ul>
      <Footer />
    </div>
    )
  }
}

export default HelloMessage