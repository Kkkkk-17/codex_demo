import { FC } from 'react'
import { View } from '@tarojs/components'
import { FaChevronRight } from 'react-icons/fa'
import styles from './style.module.scss'

const items = ['健康建议', '大蓝懂动榜', '我的每日大蓝']

const DashboardCards: FC = () => (
  <View>
    {items.map(text => (
      <View key={text} className={styles.item}>
        <View>{text}</View>
        <FaChevronRight />
      </View>
    ))}
  </View>
)

export default DashboardCards
