import axios from 'axios';
import React, { useState } from 'react'

interface ModelAPI
{
  requestValue: string
}

const CreateContent = () => 
{

    const [myContent , setMycontent] = useState<ModelAPI>({requestValue: ''});

    async function create(data:ModelAPI)
  {
    try 
    {
      fetch('http://localhost:3000/api/createContentModel',
      {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(()=>setMycontent
      (
        {
          requestValue: ''
        }
      ))
      .then(()=>
      {
        if(typeof window !== 'undefined')
        {
          let modal = document.querySelector('dialog');
          let closeDialog = document.getElementById('closeDialog')
          modal?.showModal();
    
          closeDialog?.addEventListener('click',()=>
          {

            setTimeout(()=>
            {
              fetch('http://localhost:3000/api/responseConvert',
              {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({responseButton: 'Sucess'})
              })
              .then(()=>window.location.href = 'http://localhost:3000/Components/updateComponents')
            },1000)
          })
        }
      })
    } 
    
    
    catch (error) 
    {
      console.log(error)
    }
  }

  const handleSubmite = (data:ModelAPI)=>
  {
    try 
    {
      create(data);  
    } 
    catch (error) 
    {
      console.log(error);  
    }
  }


  return (
    <>

   
    <div
    className='
    relative grid
    lg:left-[3px] 
    mx-auto
    lg:mt-[0.7rem] rounded-xl
    lg:w-[100rem] lg:h-[52rem]
    bg-black bg-opacity-70 '>

    <form
    onSubmit={(e)=>
    {
        e.preventDefault();
        handleSubmite(myContent);
    }}
    >
    

    <button
    className='
    text-white 
    relative
    block
    w-[30rem]
    h-[5rem]
    mx-auto
    mt-[22rem]
    bg-black'>Create Content</button>
    </form>

    <dialog
    className='
    text-white
    w-[70rem]
    h-[46rem]
    relative
    mx-auto
    mt-[3rem]
    text-center
    rounded-3xl
    mb-[2rem]
    bg-emerald-800
    bg-opacity-60
    '>
    <h1
    className='
    text-[30pt]
    block
    relative
    mt-[11rem]
    mb-[5rem]'>Success in creating your content</h1>

    <button
    id='closeDialog'
    className='
    w-[30rem] 
    h-[5rem]
    bg-orange-500
    rounded-xl 
    font-extrabold'>
      Go to create content
    </button>
    </dialog>

    </div>

    </>
  )
}

export default CreateContent;
