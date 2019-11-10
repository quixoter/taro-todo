import Taro, {useReducer, useState} from '@tarojs/taro'
import { AtList, AtSwipeAction } from "taro-ui"
import _ from 'lodash'
import {View, CheckboxGroup, Checkbox, Input, Button} from '@tarojs/components'
import './todo-list.scss'
import {guid} from '../../utils/tool.js'

const atSwipeActionOptions = [
  {
    text: '取消',
    style: {backgroundColor: '#6190E8'}
  },
  {
    text: '删除',
    style: {backgroundColor: '#FF4949'}
  }
]

/// 添加/删除
function reducer(list, action) {
  switch (action.type) {
    case 'add':
      list.push({
        id: guid(),
        text: action.row.text,
        checked: false
      })
      return list
    case 'del':
      _.remove(list, (i) => i.id == action.row.id)
      return list
    default:
      throw new Error()
  }
}

/** 待办列表*/
export default function TodoList(props) {

  // 新的todo
  const [newTodo, setNewTodo] = useState('')

  // todo-list
  const [list, dispatchList] = useReducer(reducer, props.list)

  const add = () => {
    if (!newTodo) {
      return
    }
    dispatchList({type: 'add', row: {text: newTodo}});
    setNewTodo('')
  }

  // 点击滑块
  const atSwipeClick = (item, o, key) => {
    // 点击到删除按钮时
    if (key == 1) {
      dispatchList({type: 'del', row: {id: item.id}})
    }
  }

  const atListItems  =  (list||[]).map((item) => (
    <AtSwipeAction
      key={item.id}
      autoClose
      options={atSwipeActionOptions}
      onClick={atSwipeClick.bind(this, item)}
    >
      <Checkbox className='todo-item' value={item.id} checked={item.checked}>{item.text}</Checkbox>
    </AtSwipeAction>
  ))

  // CheckboxGroup - onChange
  const onChange = (e) => {
    props.onChange(e.target.value)
    e.preventDefault
  }

  return (
    <View className='todo-list'>
      <View className='add-view'>
        <Input
          className='input-add'
          placeholder='输入新的待办事项'
          focus
          value={newTodo}
          onInput={(e) => {setNewTodo(e.target.value)}}
        />
        <Button hoverClass='add-btn-active' onClick={add}>添加</Button>
      </View>

      <CheckboxGroup className='list-content' onChange={onChange}>
        <AtList>
          {atListItems}
        </AtList>
      </CheckboxGroup>
    </View>
  )
}
