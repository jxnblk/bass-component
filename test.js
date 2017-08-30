import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import bass from './src'

test('renders', t => {
  const Bass = bass('div')
  const a = render(<Bass />).toJSON()
  console.log(a)
  t.snapshot(a)
})
