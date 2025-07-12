import ThemeProvider from "./ThemeProvider"
import ThemeButton from "./ThemeButton"
import './App.css'
function App() {

  return (
    <ThemeProvider>
      <h1>React Theme Toggle</h1>
      <ThemeButton />
    </ThemeProvider>
  )
}
export default App
