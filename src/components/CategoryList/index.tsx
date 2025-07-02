import { FC } from 'react'
import { View, Navigator, Text } from '@tarojs/components'
import { categories } from '@/mock/categories'
import styles from './style.module.scss'

const CategoryList: FC = () => (
  <View>
    {categories.map(c => (
      <Navigator url={`/pages/placeholder/${c.id}`} key={c.id} className={styles.item}>
        <Text>{c.name}</Text>
        <Text className={styles.badge} style={{ background: c.highlight }}>
          {c.count}
        </Text>
      </Navigator>
    ))}
  </View>
)

export default CategoryList
