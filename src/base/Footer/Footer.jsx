import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul>
          <li><NavLink to="/">首页</NavLink></li>
          <li><NavLink to="/goods">商城</NavLink></li>
          <li><NavLink to="/Car">购物车</NavLink></li>
          <li><NavLink to="/Myself">个人中心</NavLink></li>
        </ul>
      </div>
    )
  }
}
export default Footer