import React from 'react'
import { configure, addDecorator } from '@storybook/react'

addDecorator(story => (
  <div style={{
    fontFamily: 'sans-serif',
    lineHeight: 1.5
  }}>
    {story()}
  </div>
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
