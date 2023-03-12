import React from 'react'
import '@testing-library/jest-dom'
import { describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MenuItemDetails, type MenuItemInterface } from 'components'
import data from 'assets/data.json'

describe('MenuItemDetails test', () => {
  const testIsOpen: boolean = true
  const testItem: MenuItemInterface = data.menu.items[0]
  const mockOnClose = vi.fn()

  test('should match snapshot', () => {
    const { container } = render(
      <MenuItemDetails
        isOpen={testIsOpen}
        item={testItem}
        onClose={mockOnClose}
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('should call onClick', () => {
    render(
      <MenuItemDetails
        isOpen={testIsOpen}
        item={testItem}
        onClose={mockOnClose}
      />
    )

    const item = screen.getByLabelText('close dialog')
    fireEvent.click(item)

    expect(mockOnClose).toBeCalled()
  })
})
