
# bass-component

React component for styling elements with a Basscss-like API

```sh
npm i bass-components
```

```jsx
import React from 'react'
import Bass from 'bass-component'

const App = props => (
  <Bass p3>
    <Bass.h1
      mt0
      mb2
      h1
      children='Hello'
    />
  </Bass>
)
```

## API

### Props

All bass-component style props are booleans.

*Display:*

- `block` display: block
- `inlineBlock` display: inline-block
- `inline` display: inline
- `flex` display: flex
- `table` display: table
- `tableCell` display: tableCell

*Typography:*

- `h1` font-size: 32px
- `h2` font-size: 24px
- `h3` font-size: 20px
- `h4` font-size: 16px
- `h5` font-size: 14px
- `h6` font-size: 12px
- `bold` font-weight: bold
- `center` text-align: center

*Margin:*

- `m0` margin: 0
- `m1` margin: 8px
- `m2` margin: 16px
- `m3` margin: 32px
- `m4` margin: 64px
- `mt0` margin-top: 0
- `mt1` margin-top: 8px
- `mt2` margin-top: 16px
- `mt3` margin-top: 32px
- `mt4` margin-top: 64px


### `Bass.component()`

A [styled-components][sc]-like higher order component for applying bass-component props to any component that accepts `className` as a prop.

```jsx
import { Link } from 'react-router'
import Bass from 'bass-component'

const BassLink = Bass.component(Link)
```

### `Bass.css()`

Gets a CSS ruleset string based on what has rendered – useful for server-side rendering.

MIT License
