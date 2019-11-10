import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './todo.scss'
import TodoList from '../../component/todo/todo-list'
import {guid} from '../../utils/tool.js'

const LIST = [
  { id: guid(), checked: true, text: '和朋友看电影' },
  { id: guid(), checked: false, text: '学习taro' },
  { id: guid(), checked: true, text: '看电视' },
]

const TABLIST = [{ title: '全部' }, { title: '完成' }]

export default class Todo extends Component {

  config = {
    navigationBarTitleText: 'TODO'
  }

  constructor(props) {
    super(props)
    this.state = {
      list: LIST,
      tabActive: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleTabClick(value) {
    this.setState({
      tabActive: value
    })
  }

  // TodoList onchange
  tLOnChange(value) {
    this.setState({
      list: value
    })
  }

  render () {

    return (
      <View className='todo'>
        <AtTabs swipeable={false} current={this.state.tabActive} tabList={TABLIST} onClick={this.handleTabClick.bind(this)}>
          <AtTabsPane className='tab_0' current={this.state.tabActive} index={0} >
            <TodoList list={this.state.list} onChange={this.tLOnChange.bind(this)} />
          </AtTabsPane>
          <AtTabsPane current={this.state.tabActive} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
