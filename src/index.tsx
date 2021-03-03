import * as React from 'react'

interface MyComponentProps {
  foo: string
  bar: string
}

const MyComponent: React.FC<MyComponentProps> = ({ foo, bar }) => (
  <div>{`${foo} ${bar}`}</div>
)

export default MyComponent
