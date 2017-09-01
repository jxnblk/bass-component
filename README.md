
# bass-component

React component for styling elements with a [Basscss][bass]-like API

[![Build Status][build-badge]][build]
[![GitHub][stars]][gh]

[build-badge]: https://img.shields.io/travis/jxnblk/bass-component/master.svg?style=flat-square
[build]: https://travis-ci.org/jxnblk/bass-component
[gh]: https://github.com/jxnblk/bass-component
[stars]: https://img.shields.io/github/stars/jxnblk/bass-component.svg?style=social&label=Star

```sh
npm i bass-component
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

Bass-component will automatically insert the minimal amount of CSS needed to render into the head of the document.


## API

### Props

All bass-component style props are booleans.

**Display:**

- `block` display: block
- `inlineBlock` display: inline-block
- `inline` display: inline
- `flex` display: flex
- `inlineFlex` display: inline-flex
- `table` display: table
- `tableCell` display: tableCell
- `left` float: left
- `right` float: right

**Typography:**

- `h1` font-size: 32px
- `h2` font-size: 24px
- `h3` font-size: 20px
- `h4` font-size: 16px
- `h5` font-size: 14px
- `h6` font-size: 12px
- `bold` font-weight: bold
- `center` text-align: center
- `caps` text-transform: uppercase; letter-spacing: 0.2em
- `nowrap` white-space: nowrap

**Margin:**

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
- `mr0` margin-right: 0
- `mr1` margin-right: 8px
- `mr2` margin-right: 16px
- `mr3` margin-right: 32px
- `mr4` margin-right: 64px
- `mb0` margin-bottom: 0
- `mb1` margin-bottom: 8px
- `mb2` margin-bottom: 16px
- `mb3` margin-bottom: 32px
- `mb4` margin-bottom: 64px
- `ml0` margin-left: 0
- `ml1` margin-left: 8px
- `ml2` margin-left: 16px
- `ml3` margin-left: 32px
- `ml4` margin-left: 64px
- `mx0` margin-left: 0; margin-right: 0
- `mx1` margin-left: 8px; margin-right: 8px
- `mx2` margin-left: 16px; margin-right: 16px
- `mx3` margin-left: 32px; margin-right: 32px
- `mx4` margin-left: 64px; margin-right: 64px
- `my0` margin-top: 0; margin-bottom: 0
- `my1` margin-top: 8px; margin-bottom: 8px
- `my2` margin-top: 16px; margin-bottom: 16px
- `my3` margin-top: 32px; margin-bottom: 32px
- `my4` margin-top: 64px; margin-bottom: 64px
- `mx-1` margin-top: -8px; margin-bottom: -8px
- `mx-2` margin-top: -16px; margin-bottom: -16px
- `mx-3` margin-top: -32px; margin-bottom: -32px
- `mx-4` margin-top: -64px; margin-bottom: -64px
- `mlAuto` margin-left: auto
- `mrAuto` margin-right: auto
- `mxAuto` margin-left: auto; margin-right: auto

**Padding:**

- `p0` padding: 0
- `p1` padding: 8px
- `p2` padding: 16px
- `p3` padding: 32px
- `p4` padding: 64px
- `pt0` padding-top: 0
- `pt1` padding-top: 8px
- `pt2` padding-top: 16px
- `pt3` padding-top: 32px
- `pt4` padding-top: 64px
- `pr0` padding-right: 0
- `pr1` padding-right: 8px
- `pr2` padding-right: 16px
- `pr3` padding-right: 32px
- `pr4` padding-right: 64px
- `pb0` padding-bottom: 0
- `pb1` padding-bottom: 8px
- `pb2` padding-bottom: 16px
- `pb3` padding-bottom: 32px
- `pb4` padding-bottom: 64px
- `pl0` padding-left: 0
- `pl1` padding-left: 8px
- `pl2` padding-left: 16px
- `pl3` padding-left: 32px
- `pl4` padding-left: 64px
- `px0` padding-left: 0; padding-right: 0
- `px1` padding-left: 8px; padding-right: 8px
- `px2` padding-left: 16px; padding-right: 16px
- `px3` padding-left: 32px; padding-right: 32px
- `px4` padding-left: 64px; padding-right: 64px
- `py0` padding-top: 0; padding-bottom: 0
- `py1` padding-top: 8px; padding-bottom: 8px
- `py2` padding-top: 16px; padding-bottom: 16px
- `py3` padding-top: 32px; padding-bottom: 32px
- `py4` padding-top: 64px; padding-bottom: 64px

### HTML element

By default the Bass component renders a `<div>`.
To change the underlying element, use dot notation for the component
or use the `is` prop.

```jsx
<Bass.h1 />
```

```jsx
<Bass is='h1' />
```

### `Bass.component()`

A [styled-components][sc]-like higher order component for applying bass-component props to any component that accepts `className` as a prop.

```jsx
import { Link } from 'react-router'
import Bass from 'bass-component'

const BassLink = Bass.component(Link)
```

### `Bass.css()`

Gets a CSS ruleset string based on what has rendered – useful for server-side rendering.

[bass]: http://basscss.com
[sc]: https://styled-components.com

MIT License

<script>
</script>
