---
title: 'Why React?'
date: 2016-10-10
layout: Post
---

Code is highlighted by default.

```js
const StatelessComponent = (props) => {
  return (
    <div>
      I'am a stateless component that accept children
      { props.children }
    </div>
  )
}

// ...

  return (
    <StatelessComponent>
      Example of child
    </StatelessComponent>
  )
```

