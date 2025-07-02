import { FC } from 'react'
import { View, Image } from '@tarojs/components'
import styles from './style.module.scss'
const dolphin =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII='

const HeroCard: FC = () => (
  <View className={styles.container}>
    <View className={styles.header}>HI, 我是大蓝！您的 AI 健康家庭助手</View>
    <View className={styles.body}>
      <Image src={dolphin} className={styles.cover} />
      <View className={styles.text}>全家健康找大蓝</View>
    </View>
  </View>
)

export default HeroCard
