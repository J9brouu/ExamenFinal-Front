import './App.css'
import { Box } from "@mui/material"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Divider from './components/Divider.jsx'
import Banner from './components/Banner.jsx'
import Home from './pages/Home.jsx';
import InfoCards from './components/InfoCards.jsx'
import Licitaciones from './pages/Licitaciones.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ mb: 6 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Divider />
                <Home />
                 <Box sx={{ mb: 6 }}>
        <InfoCards />
      </Box>
              </>
            }
          />
          <Route path="/licitaciones" element={<Licitaciones />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  )
}

export default App