import { FC } from 'react'
import { View, Navigator, Text } from '@tarojs/components'
import styles from './style.module.scss'

const tabs = [
  { title: '对话框', url: '/pages/chat/index' },
  { title: '我的大蓝圈', url: '/pages/circle/index' },
  { title: '每日大蓝', url: '/pages/daily/index' },
  { title: '热销榜', url: '/pages/hot/index' },
  { title: '大蓝上新', url: '/pages/new/index' }
]

const TabNavbar: FC = () => (
  <View className={styles.container}>
    {tabs.map(t => (
      <Navigator key={t.title} url={t.url} className={styles.tab}>
        <Text>{t.title}</Text>
      </Navigator>
    ))}
  </View>
)

export default TabNavbar
