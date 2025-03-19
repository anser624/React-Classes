import React from 'react'

const Card = (props) => {
  return (
    <div className="cursor-pointer flex justify-center">
      <div className="flex justify-center items-center px-10 flex-col w-[250px] rounded-2xl border-1 border-solid border-black shadow-10 transition-all duration-300 text-center">
        <img
        className='mb-3 overflow-hidden object-contain'
          src={props.src}
          alt={props.heading}
        />
        <div className="mb-3">
          <h1 className='text-[25px] font-extrabold'>{props.heading}</h1>
          <p className='text-gray-500 text-[10px] py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dignissimos delectus libero consectetur? Beatae, temporibus!
          </p>
          <button className='border-gray-600 border-solid border-1 w-fit px-6 py-2 font-bold text-1xl rounded-2xl'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
//   .card img:hover{
//       transition: all 0.5s ease-in-out;
//       transform: scale(1.2);
//   }
//   .card-content p {
//     color: grey;
//     font-size: 12px;
//   }
//   .card-content h1 {
//     font-size: 20px;
//     margin: 0;
//     /* padding: 10px; */
//   }