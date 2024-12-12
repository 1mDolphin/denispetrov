import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import AboutMePage from './pages/aboutme.jsx';
import PageTransitionEvent from './components/transition.jsx';

function App() {
  return (
    <>
      <PageTransitionEvent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
      </PageTransitionEvent>
    </>
  )
}

export default App