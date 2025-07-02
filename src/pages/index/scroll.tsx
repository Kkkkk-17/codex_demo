import { FC } from 'react'
import { View } from '@tarojs/components'
import HeaderSearchBar from '@/components/HeaderSearchBar'
import CategoryList from '@/components/CategoryList'
import TabNavbar from '@/components/TabNavbar'
import styles from './scroll.module.scss'

const ScrollPage: FC = () => (
  <View className={styles.page}>
    <HeaderSearchBar />
    <CategoryList />
    <TabNavbar />
  </View>
)

export default ScrollPage
