import React from 'react'

const Hero = (props) => {
  return (
      <div className="flex justify-between mx-25 my-55 gap-8" style={{ flexDirection: props.direction?props.direction:"row-reverse" }}>
        <div className="flex flex-col items-center  gap-15 justify-center flex-1">
          <h1 className='text-4xl font-extrabold mx-[20px]'>{props.heading}</h1>
          <p className='text-[17px] font-stretch-200% '>
            {props.descrip}
          </p>
          <button className='border-gray-600 border-solid border-1 w-fit px-6 py-2 font-bold text-2xl rounded-b-3xl'>Shop`Now`</button>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img
            className='h-full w-full object-contain'
            src={props.img}
            alt={props.heading}
          />
        </div>
      </div>
  )
}

export default Hero
