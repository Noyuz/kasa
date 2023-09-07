import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from './utils/style/GlobalStyle';
import Container from './components/Container';

import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import Error from './components/Error';

import Header from './components/Header';
import Footer from './components/Footer';

function AppRouter() {
  return (
    <Router>
      <GlobalStyle/>
      <Container>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodations/:id" element={<Accomodation />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Container>
      < Footer />
    </Router>
  )
}

export default AppRouter;
