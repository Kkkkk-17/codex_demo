import { FC } from 'react'
import { View } from '@tarojs/components'
import HeaderSearchBar from '@/components/HeaderSearchBar'
import HeroCard from '@/components/HeroCard'
import DashboardCards from '@/components/DashboardCards'
import TabNavbar from '@/components/TabNavbar'
import styles from './index.module.scss'

const IndexPage: FC = () => (
  <View className={styles.page}>
    <HeaderSearchBar />
    <HeroCard />
    <DashboardCards />
    <TabNavbar />
  </View>
)

export default IndexPage
