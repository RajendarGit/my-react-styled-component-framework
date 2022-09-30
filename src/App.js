import { ThemeProvider } from 'styled-components'
import { Frame } from './Frame'
import GlobalStyle from './Style/Global'
import { theme } from './Style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Frame/>
    </ThemeProvider>
  )
}
export default App