const Navigation = () => {
  return (
    <nav>
        <div className="logo container">
          <img src="./public/images/brand_logo.png" alt="brand logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>login</button>
      </nav>
  );
}
export default Navigation;