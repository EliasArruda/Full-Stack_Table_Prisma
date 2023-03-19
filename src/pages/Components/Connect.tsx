import axios from 'axios';
import React from 'react';
import { useState } from 'react';

interface setSchema
{
  URL: string,
}

const Connect = () => 
{

  const [textInputs,setTextinputs] = useState<setSchema>(
    {
      URL:''
    });


    const handleEvent = async()=>
    {
      fetch('http://localhost:3000/api/create', 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({URL: `${textInputs.URL}`})
      })
      .then(()=>window.location.href = 'http://localhost:3000/Components/ViewSchemas')
      
      .catch(erro => console.log(erro))
    }

  return (
    <>

    <div 
    className='
    relative block
    lg:left-[3px] 
    mx-auto text-center
    lg:mt-[2rem] rounded-xl
    lg:w-[45rem] lg:h-[43rem]
    bg-black text-white
    bg-opacity-70'>

    <label 
    className='relative text-[25pt]
    block mb-[2rem]'
    >Log in to your database</label>

    <input type="text" placeholder='URL' 
    id='inpURL'
    value={textInputs.URL}
    onChange={(e)=>setTextinputs({...textInputs , URL: e.target.value})}
    className='
    block relative
    mx-auto w-[26vw]
    h-[2rem] text-center
    rounded-xl text-black
    mb-[2rem] '/>

    <button
    onClick={handleEvent}
    className='
    block relative
    mx-auto w-[25rem]
    h-[2rem] bg-slate-500
    rounded-xl mb-[2rem]'>Confirmar</button>


    <a 
    href={'http://localhost:3000/'}
    className='hover:border-b'>
    Returns the database selection
    </a>



    </div>


    </>
  )
}

export default Connect;