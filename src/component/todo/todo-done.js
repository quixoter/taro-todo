import Taro from '@tarojs/taro'
import { AtList, AtListItem } from "taro-ui"
import './todo-done.scss'

/** 待办列表-完成*/
export default function TodoDone(props) {

  const items = (props.list || [])
    .filter(i => i.checked)
    .map(j => (
      <AtListItem title={j.text} />
    ))

  return (
    <view className='todo-done'>
      <AtList>
        {items}
      </AtList>
    </view>
  )
}
