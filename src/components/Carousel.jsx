import React,{useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData =[
    {
        url:'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
];
const Carousel=()=> {
    const[slide,setSlide] =useState(0)
    const length = sliderData.length;
    const prevSlide =()=>{
         setSlide(slide === length-1 ? 0 : slide+1);
    };
    const nextSlide=()=>{
        setSlide(slide ===0  ? length-1 :slide -1);
    };
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text 3xl text-black cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick ={nextSlide} className='absolute top-[50%] text 3xl text-black cursor-pointer right-8'/>
        {sliderData.map((item,index)=>(
            <div className={index === slide ? 'opacity-100': 'opacity-0'}>
                {index ===slide && (<img className='w-full rounded-md' src={item.url} alt='/'/>)}
            </div>
        ))}
    </div>
  );
}

export default Carousel
