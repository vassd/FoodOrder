import React from 'react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryHeader } from 'components'

describe('CategoryHeader test', () => {
  const testName: string = 'pizza'

  test('should render correctly', () => {
    render(<CategoryHeader id={0} name={testName} hasCrust hasToppings />)

    expect(screen.getByText(testName)).toBeInTheDocument()
  })

  test('should match snapshot', () => {
    const { container } = render(
      <CategoryHeader id={0} name={testName} hasCrust hasToppings />
    )

    expect(container).toMatchSnapshot()
  })
})
