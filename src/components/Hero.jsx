// HeroSection component displays the main hero section of the website.
const HeroSection = () => {
    return (
      // Main container for the hero section.
      <main className="hero container">
        {/* Container for the hero content, including title and description. */}
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          {/* Container for the hero buttons. */}
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
  
        {/* Container for displaying icons of other shopping platforms. */}
        <div className="shopping">
          <p>Also Available On</p>
  
          {/* Container for brand icons (e.g., Amazon and Flipkart). */}
          <div className="brand-icons">
            <img src="./public/images/amazon.png" alt="amazon logo" />
            <img src="./public/images/flipkart.png" alt="flipkart logo" />
          </div>
        </div>
  
        </div>
        {/* Container for the hero image. */}
        <div className="hero-image">
          <img src="./public/images/shoe_image.png" alt="shoe image" />
        </div>
      </main>
    );
  };
  
  // Exporting the HeroSection component as the default export.
  export default HeroSection;
  