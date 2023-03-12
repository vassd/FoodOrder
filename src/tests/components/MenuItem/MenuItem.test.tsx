import React from 'react'
import '@testing-library/jest-dom'
import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MenuItem } from 'components'

describe('MenuItem test', () => {
  const testName: string = 'pizza'
  const testPrice: number = 10
  const testCurrency: string = 'RON'
  const testIngredients: string[] = ['tomato sauce', 'cheese', 'ham']
  const testCategory: number = 0
  const mockOnClick = vi.fn()

  test('should render correctly', () => {
    render(
      <MenuItem
        name={testName}
        price={testPrice}
        currency={testCurrency}
        ingredients={testIngredients}
        category={testCategory}
        onClick={mockOnClick}
      />
    )

    expect(
      screen.getByText(`(${testIngredients.join(', ')})`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${testPrice} ${testCurrency}`)
    ).toBeInTheDocument()
    expect(screen.getByText(testName)).toBeInTheDocument()
  })

  test('should match snapshot', () => {
    const { container } = render(
      <MenuItem
        name={testName}
        price={testPrice}
        currency={testCurrency}
        ingredients={testIngredients}
        category={testCategory}
        onClick={mockOnClick}
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('should call onClick', () => {
    render(
      <MenuItem
        name={testName}
        price={testPrice}
        currency={testCurrency}
        ingredients={testIngredients}
        category={testCategory}
        onClick={mockOnClick}
      />
    )

    const item = screen.getByRole('listitem')
    fireEvent.click(item)
    expect(mockOnClick).toBeCalled()
    expect(mockOnClick).toBeCalledWith('pizza')
  })
})
