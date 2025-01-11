import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
// import AboutPage from './components/About';

const Home = lazy(() => import('./Pages/Home'));
const AboutPage = lazy(() => import('./components/About'));
const ServicesPage = lazy(() => import('./Pages/ServicesPages'));
const ContactPage = lazy(() => import('./Pages/Contact'));
const MessagesPage = lazy(() => import('./Pages/Message'));

const NotFoundPage = () => (
  <div className="text-center py-16 px-6">
    <h1 className="text-6xl font-bold text-gray-800 mb-6">404 - Page Not Found</h1>
    <p className="text-lg mb-4">"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston S. Churchill</p>
    <p className="text-lg mb-4">"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt</p>
    <p className="text-lg mb-4">"In the middle of every difficulty lies opportunity." - Albert Einstein</p>
    <p className="text-lg mb-6">"Don’t watch the clock; do what it does. Keep going." - Sam Levenson</p>
    <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
