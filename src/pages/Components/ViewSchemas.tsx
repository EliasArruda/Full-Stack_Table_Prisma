import { useState } from 'react';
import { GetStaticProps } from 'next';
import { FcAcceptDatabase , FcDataConfiguration, FcFullTrash, FcUpload } from 'react-icons/fc'
import { GrMysql } from 'react-icons/gr';
import { SiMicrosoftsqlserver, SiPostgresql, SiSqlite } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import axios from 'axios';


interface Props 
{
  find: string
}

interface ModelAPI
{
  Name: string,
  Propriedades: string,
  optionsSend: string,
  content: string,
}

export const ViewSchemas = ( props : Props ) => 
{

  const [model,setModel] = useState<ModelAPI>
  ({
    Name:'',
    Propriedades: '',  
    optionsSend: '',
    content: '',

  });
  
  const btnModal = ()=>
  {
    if(typeof window !== 'undefined')
    {
      let modal = document.querySelector('dialog');
      let closeDialog = document.getElementById('closeDialog')
      modal?.showModal();

      closeDialog?.addEventListener('click',()=>
      {
        modal?.close();
      })
    }
  }

if (typeof window !==  "undefined") 
{
      let btnMysql        = document.getElementById('mysql');
      let btnPostgresql   = document.getElementById('postgresql');
      let btnMongodb      = document.getElementById('mongodb');
      let btnSqlite       = document.getElementById('sqlite');
      let btnSqlserver    = document.getElementById('sqlserver');

      
      btnMysql?.addEventListener('click', async()=>
      {
        
         axios.post('http://localhost:3000/api/createPersonAPI', 
         {
              mysql: 'ok',
              contentMethod:'Sucess',
              nome:`${model.Name}`,
              content: `${model.content}`,
              propriedade: `${model.Propriedades}`,
              optionsSend: `${model.optionsSend}`,
              requestURL: 'True'
         })
         .then(()=> window.location.href = 'http://localhost:3000/api/createPersonAPI')
      })
      
      btnPostgresql?.addEventListener('click',()=>
      {
          axios.post('http://localhost:3000/api/createPersonAPI',
          {
              postgresql:'Sucess',
              contentMethod:'Sucess',
              nome:`${model.Name}`,
              content: `${model.content}`,
              propriedade: `${model.Propriedades}`,
              optionsSend: `${model.optionsSend}`,
              requestURL: 'True'
          })
          .then(()=> window.location.href = 'http://localhost:3000/api/createPersonAPI')
        
      })
      
      btnMongodb?.addEventListener('click',()=>
      {
          axios.post('http://localhost:3000/api/createPersonAPI',
          {
            mongodb: 'Sucess',
            contentMethod:'Sucess',
            nome:`${model.Name}`,
            content: `${model.content}`,
            propriedade: `${model.Propriedades}`,
            optionsSend: `${model.optionsSend}`,
            requestURL: 'True'
          })
          .then(()=> window.location.href = 'http://localhost:3000/api/createPersonAPI')
      })
      
      btnSqlite?.addEventListener('click',()=>
      {
          axios.post('http://localhost:3000/api/createPersonAPI',
          {
              sqlite:'Sucess',
              contentMethod:'Sucess',
              nome:`${model.Name}`,
              content: `${model.content}`,
              propriedade: `${model.Propriedades}`,
              optionsSend: `${model.optionsSend}`,
              requestURL: 'True'
          })
          .then(()=> window.location.href = 'http://localhost:3000/api/createPersonAPI')
      })
      
      btnSqlserver?.addEventListener('click',()=>
      {
          axios.post('http://localhost:3000/api/createPersonAPI',
          {
              sqlserver:'Sucess',
              contentMethod:'Sucess',
              nome:`${model.Name}`,
              content: `${model.content}`,
              propriedade: `${model.Propriedades}`,
              optionsSend: `${model.optionsSend}`,
              requestURL: 'True'
          })
          .then(()=> window.location.href = 'http://localhost:3000/api/createPersonAPI')
      })
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
  

    {/* Container Dialog */}
    <main
    className='relative block
    text-center text-white
    mx-auto'>
    
    <input
    value={model.Name}
    onChange={(e)=>setModel({...model , Name: e.target.value})}
    className='
    block
    relative
    mt-[1.6rem]
    text-[17pt]
    text-black
    w-[22rem]
    h-[2rem]
    rounded-lg
    text-center 
    ' 
    type="text" 
    placeholder='Name Model' />

    <textarea
    value={model.Propriedades}
    onChange={(e)=>setModel({...model , Propriedades: e.target.value})}
    className='
    relative mt-[1rem]
    w-[22rem] 
    h-[20rem]
    text-[17pt]
    text-center
    block mb-4
    rounded-xl
    text-black' 
    placeholder='Example: Name String         (EACH PROPERTY UNDER THE OTHER)' />

    <textarea
    value={model.content}
    onChange={(e)=>setModel({...model , content: e.target.value})}
    className='
    relative 
    block
    w-[22rem] 
    h-[20rem]
    mx-auto
    text-[17pt]
    text-center
    rounded-xl text-black
    mb-2
    '
    placeholder='Exemple> Name: "William",      (OBS: put the property before the content, there is always a comma after the string) ' />

    <button
    onClick={btnModal}
    id='buttonModal'
    className='
    w-[20rem] 
    h-[2rem]
    rounded-xl    
    bg-yellow-500'>Confirma</button>


    {/* DIALOG */}
    <dialog
    className='
    text-white
    w-[70rem]
    h-[46rem]
    relative
    mx-auto
    mt-[3rem]
    mb-[2rem]
    bg-emerald-800
    bg-opacity-60
    '>
    <h1
    className='
    text-[30pt]'>Confirm your database</h1>

    <button
    id='mysql'
    className='
    relative block
    rounded-xl
    mx-auto md:mb-[2rem]
    md:w-[40rem] bg-gray-900
    md:h-[4.7rem] text-center
    text-[15pt]'
    >
    <GrMysql
    className='relative inline 
    right-[1rem] text-[20pt]'></GrMysql>mysql</button>
    
    
    
    <button
    id='postgresql'
    className='
    relative block
    rounded-xl
    mx-auto md:mb-[2rem]
    md:w-[40rem] bg-gray-900
    md:h-[4.7rem] text-center
    text-[15pt]'
    >
    <SiPostgresql
    className='relative inline 
    right-[1rem] text-[20pt]'></SiPostgresql>postgresql</button>
    

    
    <button
    id='mongodb'
    className='
    relative block
    rounded-xl
    mx-auto md:mb-[2rem]
    md:w-[40rem] bg-gray-900
    md:h-[4.7rem] text-center
    text-[15pt]'
    >
    <DiMongodb
    className='relative inline 
    right-[1rem] text-[20pt]'></DiMongodb>mongodb</button>
    

    
    <button
    id='sqlite'
    className='
    relative block
    rounded-xl
    mx-auto md:mb-[2rem]
    md:w-[40rem] bg-gray-900
    md:h-[4.7rem] text-center
    text-[15pt]'
    >
    <SiSqlite
    className='relative inline 
    right-[1rem] text-[20pt]'></SiSqlite>sqlite</button>
    

    
    <button
    id='sqlserver'
    className='
    relative block
    rounded-xl
    mx-auto md:mb-[2rem]
    md:w-[40rem] bg-gray-900
    md:h-[4.7rem] text-center
    text-[15pt]'
    >
    <SiMicrosoftsqlserver
    className='relative inline 
    right-[1rem] text-[20pt]'></SiMicrosoftsqlserver>sqlserver</button>

    <button
    id='closeDialog'
    className='
    w-[10rem] h-[2rem]
    bg-orange-500
    rounded-xl'>
      Close Dialog
    </button>

    </dialog>
  {/* END DIALOG */}




  {/* Sections */}
  </main>
    <div
    id='divWallpaper' 
    className="
    w-[4rem] h-full
    text-white
    hover:w-[25rem]
    transition-all
    absolute
    ease-in-out
    bg-opacity-60 ">
    
    <label
    className='
    relative block
    text-center 
    mb-[5rem]'
    >Welcome</label>


    <button
    id='BTN_CreateSchema'
    className='
    cursor-pointer
    block
    w-full
    relative
    mx-auto
    text-center
    mb-[5rem]
    text-[0rem]
    hover:text-[20pt]
    transition-all
    hover:border-b'
    >
    <FcUpload
    className='inline text-[30pt]'/>
    Create-Schema
    </button>

  {/* END SECTION */}

    
    
  </div>

  </div>
    
    
    </>
  )
}

// export const getStaticProps: GetStaticProps = async ()=>
// {
//   const resp = await fetch('http://localhost:3000/api/PrismaAPI')
//   const data = await resp.json();

//   return{
//     props:{
//       find: data,
//     },
//   };
// }



export default ViewSchemas;