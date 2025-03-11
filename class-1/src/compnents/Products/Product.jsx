import React from 'react'
import Card from '../Card/Card'
import './Product.css'
const Product = () => {
  return (
    <>
     <h1 className='h1'>Here You Can See Card!</h1>
    <div className='product-container'>
      <Card heading="Audi" src="https://pngimg.com/uploads/audi/audi_PNG1745.png" />
      <Card heading="Ranger Rover" src="https://www.pngplay.com/wp-content/uploads/13/Range-Rover-Free-PNG.png" />
      <Card heading="BMW" src="https://www.pngplay.com/wp-content/uploads/15/Bmw-Convertible-PNG-Photos.png" />
      <Card heading="Nissan GTR" src="https://www.pngplay.com/wp-content/uploads/13/Nissan-GTR-35-Transparent-File.png" />
      <Card heading="Tesla" src="https://www.pngplay.com/wp-content/uploads/13/Tesla-Roadster-Transparent-Background.png" />
      <Card heading="Buggati" src="https://www.pngplay.com/wp-content/uploads/9/Luxury-Car-PNG-Clipart-Background.png" />
      <Card heading="Dodge" src="https://www.pngplay.com/wp-content/uploads/12/Dodge-Background-PNG-Clip-Art-Image.png" />
      <Card heading="Civic Oriel" src="https://www.pngplay.com/wp-content/uploads/13/Honda-Civic-Type-R-PNG-Background.png" />
      
    </div>
    </>
  )
}

export default Product
