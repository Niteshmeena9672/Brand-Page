// The Navigation component represents the navigation bar of the application
const Navigation = () => {
  return (
    // The nav element with a container class to style the navigation bar
    <nav className="container">
      {/* The logo section with a brand logo image */}
      <div className="logo">
        <img src="./public/images/brand_logo.png" alt="brand logo" />
      </div>

      {/* The unordered list to display navigation links */}
      <ul>
        {/* Navigation link for the "Menu" */}
        <li href="#">Menu</li>

        {/* Navigation link for the "Location" */}
        <li href="#">Location</li>

        {/* Navigation link for the "About" */}
        <li href="#">About</li>

        {/* Navigation link for the "Contact" */}
        <li href="#">Contact</li>
      </ul>

      {/* Button for user login */}
      <button>login</button>
    </nav>
  );
}

// Export the Navigation component to make it available for other parts of the application
export default Navigation;
