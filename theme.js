import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Roboto, sans-serif',
  fontWeight: '200',
  // custom colors
  colors: {
    text: '#eee',
    background: '#011',
    link: '#0ff',
  }
}
