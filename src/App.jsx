import ThemeContext from './ThemeContext';
import Page from './Page'


function App() {
  const theme = 'dark'

  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  )

}
export default App
