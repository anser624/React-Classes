import "./App.css";
import Navbar from "./compnents/Navbar";
import About from "./compnents/About";
import Footer from "./compnents/Footer";
import Hero from "./compnents/hero/Hero";
import Product from "./compnents/Products/Product";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        heading="BMW 7 Series"
        descrip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!"
        img="https://pngimg.com/d/bmw_PNG99550.png"
      />
      <Hero
        heading="MERCEDES"
        descrip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!"
        direction="row"
        img="https://pngimg.com/d/mercedes_PNG80168.png"
      />
      <Hero
        heading="Range Rover"
        descrip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!"
        img="https://i.pinimg.com/736x/d8/e5/3e/d8e53ec0deb273b8f79ee9d01b152067.jpg"
      />
      <Product/>
      <About />

      <Footer />
    </>
  );
}

export default App;
