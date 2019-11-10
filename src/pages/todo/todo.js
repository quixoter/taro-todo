import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './todo.scss'
import TodoList from '../../component/todo/todo-list'
import {guid} from '../../utils/tool.js'

const LIST = [
  { id: guid(), checked: true, text: '和朋友看电影' },
  { id: guid(), checked: false, text: '学习taro' },
  { id: guid(), checked: true, text: '看电视' },
]

export default class Todo extends Component {

  config = {
    navigationBarTitleText: 'TODO'
  }

  constructor(props) {
    super(props)
    this.state = {
      list: LIST
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // TodoList onchange
  tLOnChange(value) {
    this.setState({
      list: value
    })
  }

  render () {

    return (
      <View className='todo'>
        <TodoList list={this.state.list} onChange={this.tLOnChange.bind(this)} />
      </View>
    )
  }
}
