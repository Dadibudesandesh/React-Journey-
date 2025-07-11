import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import User from './User'

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/user/:id' element={<User/>} />
        <Route path='*' element={<h2>404 Page not found</h2>} />
      </Routes>

    </Router>
  )

}

export default App
