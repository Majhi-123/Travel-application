import React from 'react'
import {RiCostumerService2Full, RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
         <h2>LUXURY INCLUDED VAVATIONS FOR TWO PEOPLE</h2>
         <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minus blanditiis rerum impedit natus quos, excepturi quaerat deserunt nemo veritatis, quia adipisci doloremque laborum tempora dolores reiciendis beatae tenetur sit culpa a! Explicabo natus labore adipisci architecto illo error, eum velit accusamus temporibus laudantium recusandae, sapiente illum nemo est quos fugit non omnis odit quis laborum perspiciatis minima totam eius ducimus. Dolore sapiente quaerat itaque? Voluptate nulla saepe eos asperiores numquam corporis rerum dolorum, ipsum rem amet quasi facilis optio ratione expedita modi commodi dolores ab, impedit beatae exercitationem veniam. Ipsum molestias quia dolorem magnam aliquam, fugiat temporibus necessitatibus delectus!
            </p>
        </div>
        <div className='grid sm:grid-cols-2 gaps-8 py-4'>
         <div className='flex flex-col lg:flex-row items-center text-center'>
            <button><RiCustomerService2Fill size={50}/></button>
            <div>
            <h3 className='py-2'>LEADING SERVICE</h3>
            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
            <button><MdOutlineTravelExplore size={50}/></button>
            <div>
            <h3 className='py-2'>LEADING SERVICE</h3>
            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
            </div>
        </div>
      </div>
      <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 20% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <lebel>Destination</lebel>
                <select className='border rounded-md p-2'>
                    <option>Grade Antigua</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Cozumel</option>
                </select>
            </div>
            <div className='flex flex-col my-2'>
                <lebel>Check In</lebel>
                <input className='border rounded-md p-2' type='date'/>
            </div>
            <div className='flex flex-col my-2'>
                <lebel>Check Out</lebel>
                <input className='border rounded-md p-2' type='date'/>
            </div>
            <button className='w-full my-4'>Rates & Availability</button>
        </form>
      </div>
    </div>
  )
}

export default Search
