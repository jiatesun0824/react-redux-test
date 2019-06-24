import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import api from './common/js/api/api'
import Route from './routers/router'
// import Provider from 'react-redux' 
// import AppContainer from 'react-hot-loader'

(function(doc, win, dw) { // rem配置
  let docEl = doc.documentElement,
  size = dw || 750,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
    var docElWidth = 0;
    if (docEl.clientWidth > docEl.clientHeight) {
      docElWidth = docEl.clientHeight;
    } else {
      docElWidth = docEl.clientWidth;
    }
    (docElWidth > size) && (docElWidth = size);
    if (!docElWidth) return;
    docEl.style.fontSize = docElWidth / (size / 100) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)

// 定义全局变量
window.API = api
// 定义全局变量

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
      <Component />,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routers/router', () => {
    render(Route);
  })
}
registerServiceWorker();
