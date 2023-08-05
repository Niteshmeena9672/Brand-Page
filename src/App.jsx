import './App.css';
import Navigation from './components/Navigation.jsx';
import HeroSection from './components/Hero.jsx';

// The main component for the application
const App = () => {
  return (
    <div>
      {/* Render the navigation component */}
      <Navigation />

      {/* Render the hero section component */}
      <HeroSection />
    </div>
  );
}

export default App;
