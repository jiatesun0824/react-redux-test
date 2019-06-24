// import Car from '../components/car/car'
// import Myself from '../components/myself/myself'
// import Goods from '../components/goods/goods' // 组件名称需要首字母大些，驼峰形式，组件必须要被包裹，也就是外层至少要有一个div

// const routes = [
//   {
//     path: '/Car',
//     component: Car
//   },
//   {
//     path: '/Myself',
//     component: Myself
//   },
//   {
//     path: '/Goods',
//     component: Goods
//   } 
// ]

// export default routes


import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

// import home from "@/pages/home/home";
import HelloMessage from '@/base/header/header';
const Car = asyncComponent(() => import("@/components/car/car"));
const Myself = asyncComponent(() => import("@/components/myself/myself"));
const Goods = asyncComponent(() => import("@/components/goods/goods"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HelloMessage} />
          <Route path="/Car" component={Car} />
          <Route path="/Myself" component={Myself} />
          <Route path="/Goods" component={Goods} />
          {<Redirect to="/" />}
        </Switch>
      </HashRouter>
    )
  }
}