import axios from 'axios';
import React, { useState } from 'react'

interface PrismaContent
{
    requestContent: string,
    content: string,
    nome: string
}

const updateComponents = () => 
{

    const [updatePrisma , setUpdatePrisma] = useState<PrismaContent>
    (
    {
        requestContent:'sucess',
        nome: '',
        content: ''
    });

    const create = async (data: PrismaContent)=>
    {
        try 
        {
            fetch('http://localhost:3000/api/updateSchema',
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            })
            .then(sucess => console.log(sucess))    
        } 
        catch (error) 
        {
            console.log(error)
        }
    }

    const handleSubmite = async(data: PrismaContent)=>
    {
        try 
        {
            create(data)    
        } 
        catch (error) 
        {
            console.log('ERRO PORRA')
        }
    }

    const handleConfirm = ()=>
    {
        if(typeof window !== 'undefined')
        {
          let modal = document.querySelector('dialog');
          let closeDialog = document.getElementById('closeDialog')
          modal?.showModal();

          closeDialog?.addEventListener('click',()=>
          {
            axios.post('http://localhost:3000/api/createContentModel',
            {
                requestValue: 'True'
            })
            .then((sucess)=>console.log(sucess))
            modal?.close()
          })
        }
    }

  return (
    <>

    <div
    className='
    relative block
    lg:left-[3px] 
    mx-auto
    text-center
    lg:mt-[0.7rem] rounded-xl
    lg:w-[100rem] lg:h-[52rem]
    bg-black bg-opacity-70 '>

    <form
    onSubmit={(e)=>
    {
        e.preventDefault();
        handleSubmite(updatePrisma);
        handleConfirm();
    }}>

    <h1 
    className='
    text-white 
    text-[26pt]
    mb-[1rem]'
    >Keep adding new stuff to your <br /> 
    database😁</h1>

    <input
    value={updatePrisma.nome}
    onChange={(e)=>setUpdatePrisma({...updatePrisma, nome: e.target.value})}
    className='
    w-[35rem]
    h-[4rem]
    text-center
    rounded-2xl
    text-[15pt]
    '
    placeholder='Enter the name of your database and add new content' 
    type="text" />

    <textarea
    value={updatePrisma.content}
    onChange={(e)=>setUpdatePrisma({...updatePrisma, content: e.target.value})}
    className='
    w-[30rem]
    block 
    relative
    text-center
    text-[20pt]
    rounded-3xl
    mt-[2rem]
    h-[22rem]
    mx-auto
    mb-[2rem]'
    placeholder='What do you want to add again?'  />

    <button
    className='
    text-white
    bg-green-800
    w-[25rem]
    h-[3rem]
    rounded-2xl
    '>Confirm</button>
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
      Confirmar
    </button>
    </dialog>

    </div>

    </>
  )
}

export default updateComponents