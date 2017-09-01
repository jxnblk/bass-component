import React from 'react'
import { storiesOf } from '@storybook/react'
import Bass from '../src'

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
  .add('h1', () => (
    <Bass.h1
      h1
      children='Hello'
    />
  ))
  .add('input', () => (
    <Bass.input
      h1
      m0
      defaultValue='hello'
    />
  ))
