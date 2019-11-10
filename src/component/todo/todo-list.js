import Taro, {useReducer, useState} from '@tarojs/taro'
import _ from 'lodash'
import {View, CheckboxGroup, Checkbox, Input, Button} from '@tarojs/components'
import './todo-list.scss'
import {guid} from '../../utils/tool.js'

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

  const checkboxs =  list.map((item) => (
    <Checkbox className='todo-item' key={item.id} value={item.id} checked={item.checked}>{item.text}</Checkbox>
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

      <CheckboxGroup onChange={onChange}>
        {checkboxs}
      </CheckboxGroup>
    </View>
  )
}
