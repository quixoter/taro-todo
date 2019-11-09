import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/my/my',
      'pages/todo/todo'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#bfbfbf',
      selectedColor: '#1296db',
      borderStyle: 'white',
      backgroundColor: '#fff',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'static/img/home.png',
        selectedIconPath: 'static/img/home_active.png'
      }, {
        pagePath: 'pages/todo/todo',
        text: '待办',
        iconPath: 'static/img/todo.png',
        selectedIconPath: 'static/img/todo_active.png'
      }, {
        pagePath: 'pages/my/my',
        text: '我的',
        iconPath: 'static/img/my.png',
        selectedIconPath: 'static/img/my_active.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
