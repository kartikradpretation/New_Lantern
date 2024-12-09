import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;


