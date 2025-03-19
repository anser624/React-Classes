import './App.css';
import Footer from './Compo/footer';
import Header from './Compo/Header';
import Hero from './Compo/hero';
import Product from './Compo/product';

function App() {

  return (
    <>
      <Header/>
      <Hero
        heading="BMW 7 Series"
        descrip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!"
        img="https://pngimg.com/d/bmw_PNG99550.png"
      />
        <Hero
        direction="row"
          heading="Range Rover"
          descrip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
              dignissimos delectus libero consectetur? Beatae, temporibus!"
          img="https://i.pinimg.com/736x/d8/e5/3e/d8e53ec0deb273b8f79ee9d01b152067.jpg"
        />
      <Hero
        heading="MERCEDES"
        descrip=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!"
        img="https://pngimg.com/d/mercedes_PNG80168.png"
      />
      <Product/>
      <Footer/>
    </>
  )
}

export default App
