import { MDXProvider } from '@mdx-js/react'

// import { Heading, Text, Pre, Code, Table } from 'my-components'

const ResponsiveImage = (props: any) => (
  <img alt={'.' + props.alt} layout="responsive" {...props} />
)

const components = {
  img: ResponsiveImage,
  h1: ({children, ...props}: any) => <h1 {...props}>children</h1>,
  h2: ({children, ...props}: any) => <h2 {...props}>children</h2>,
  p: ({children, ...props}: any) => <p {...props}>children</p>,
  code: ({children, ...props}: any) => <code {...props}>children</code>,
  inlineCode: ({children, ...props}: any) => <span {...props}>children</span>,
}

export default function Post(props: any) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  )
}