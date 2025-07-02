import { FC } from 'react'
import { PropsWithChildren } from 'react'
import './app.scss'

const App: FC<PropsWithChildren> = ({ children }) => children as any

export default App
