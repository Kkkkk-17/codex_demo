import { FC, useState } from 'react'
import { View, Input, Button } from '@tarojs/components'
import styles from './style.module.scss'

interface Props {
  onSubmit?: (value: string) => void
}

const HeaderSearchBar: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleConfirm = () => {
    onSubmit?.(value)
  }

  return (
    <View className={styles.container}>
      <Input
        className={styles.input}
        placeholder="Hi，此刻想问"
        value={value}
        onInput={e => setValue(e.detail.value)}
        onConfirm={handleConfirm}
      />
      <Button className={styles.iconBtn} onClick={handleConfirm}>
        AI
      </Button>
    </View>
  )
}

export default HeaderSearchBar
