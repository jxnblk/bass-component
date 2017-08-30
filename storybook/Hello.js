import React from 'react'
import { storiesOf } from '@storybook/react'
import bass from '../src'

const Bass = bass('div')

storiesOf('Hello', module)
  .add('hello', () => (
    <Bass mb2 p3>
      Hello
    </Bass>
  ))
  .add('inlineBlock', () => (
    <div>
      <Bass inlineBlock m2>Hello</Bass>
      <Bass inlineBlock m2>Hello</Bass>
    </div>
  ))
