import { render, fireEvent } from '@testing-library/react'
import HeaderSearchBar from '..'

test('calls onSubmit with input value', () => {
  const spy = jest.fn()
  const { getByPlaceholderText, getByText } = render(<HeaderSearchBar onSubmit={spy} />)
  const input = getByPlaceholderText('Hi，此刻想问') as HTMLInputElement
  fireEvent.input(input, { target: { value: 'hello' } })
  fireEvent.click(getByText('AI'))
  expect(spy).toHaveBeenCalledWith('hello')
})
