import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import Bass from './src'

test('renders', t => {
  const a = render(<Bass />).toJSON()
  t.snapshot(a)
})

test('renders with basscss props', t => {
  const a = render(<Bass h1 mb3 />).toJSON()
  t.is(a.props.className, 'h1 mb3')
  t.snapshot(a)
})

test('combines classNames', t => {
  const a = render(<Bass h1 className='foo' />).toJSON()
  t.is(a.props.className, 'h1 foo')
  t.snapshot(a)
})

test('renders with HTML attributes', t => {
  const a = render(<Bass h1 mb3 id='hi' />).toJSON()
  t.deepEqual(a.props, {
    className: 'h1 mb3',
    id: 'hi',
    is: null
  })
  t.snapshot(a)
})

test('renders with is prop', t => {
  const a = render(<Bass is='h1' />).toJSON()
  t.is(a.type, 'h1')
  t.snapshot(a)
})

test('renders other elements', t => {
  const a = render(<Bass.h1 />).toJSON()
  t.is(a.type, 'h1')
  t.snapshot(a)
})


