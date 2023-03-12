import React from 'react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuHeader } from 'components'

describe('MenuHeader test', () => {
  const testName: string = '3rd rest'

  test('should render correctly', () => {
    render(<MenuHeader name={testName} />)

    expect(screen.getByText(testName)).toBeInTheDocument()
  })

  test('should match snapshot', () => {
    const { container } = render(<MenuHeader name={testName} />)

    expect(container).toMatchSnapshot()
  })
})
