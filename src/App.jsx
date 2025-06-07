import { Routes, Route, Link } from 'react-router-dom'
import Villa from './components/Villa'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/villa">Villa</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to Respiro</h2>} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/booking" element={<h2>Booking Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </div>
  )
}

export default App
