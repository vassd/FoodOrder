import React from 'react'
import '@testing-library/jest-dom'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { MenuItems } from 'components'
import data from 'assets/data.json'

describe('MenuItems test', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <MenuItems items={data.menu.items} categories={data.menu.categories} />
    )

    expect(container).toMatchSnapshot()
  })
})
