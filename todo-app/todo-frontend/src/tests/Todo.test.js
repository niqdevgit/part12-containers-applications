import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
    </div>
  )
}

test('renders content', () => {
  render(<Todo />)

  const element = screen.getByText('Todo')
  expect(element).toBeDefined()
})