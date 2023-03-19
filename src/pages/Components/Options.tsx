import { useState } from 'react';
import {GrMysql } from 'react-icons/gr'
import { SiPostgresql , SiSqlite , SiMicrosoftsqlserver} from 'react-icons/si'
import { DiMongodb} from 'react-icons/di'
import axios from 'axios'


const Options = () => 
{

    const [btnValue , setBtnvalue] = useState();

   
        
if (typeof window !== "undefined")
{
    let btnMysql        = document.getElementById('mysql');
    let btnPostgresql   = document.getElementById('postgresql');
    let btnMongodb      = document.getElementById('mongodb');
    let btnSqlite       = document.getElementById('sqlite');
    let btnSqlserver    = document.getElementById('sqlserver')     
    
    btnMysql?.addEventListener('click', async()=>
    {
       axios.post('http://localhost:3000/api/create', 
       {
            mysql: 'Sucess'
       })
       .then(()=>window.location.href = 'http://localhost:3000/Components/Connect')
       
    })
    
    btnPostgresql?.addEventListener('click',()=>
    {
        axios.post('http://localhost:3000/api/create',
        {
            postgresql:'Sucess'
        })
        .then(()=>window.location.href = 'http://localhost:3000/Components/Connect')
    })
    
    btnMongodb?.addEventListener('click',()=>
    {
        axios.post('http://localhost:3000/api/create',
        {
            mongodb:'Sucess'
        })
        .then(()=>window.location.href = 'http://localhost:3000/Components/Connect')
    })
    
    btnSqlite?.addEventListener('click',()=>
    {
        axios.post('http://localhost:3000/api/create',
        {
            sqlite:'Sucess'
        })
        .then(()=>window.location.href = 'http://localhost:3000/Components/Connect')
    })
    
    btnSqlserver?.addEventListener('click',()=>
    {
        axios.post('http://localhost:3000/api/create',
        {
            sqlserver:'Sucess'
        })
        .then(()=>window.location.href = 'http://localhost:3000/Components/Connect')
    })
    
}
    

  return (
    <>

    <main
    className='
    w-full h-full 
    relative mx-auto block 
    text-center text-white'>

    <form
    onSubmit={(e)=>
    {
        e.preventDefault();
    }}>

    <div 
    className='
    relative block
    lg:left-[3px] 
    mx-auto text-center
    lg:mt-[2rem] rounded-xl
    lg:w-[45rem] lg:h-[43rem]
    bg-black bg-opacity-70'>

    <label
    className='
    block relative
    lg:text-[35pt] lg:mb-[4rem]'>Choose your database</label>

    
    <button
    id='mysql'
    className='
    relative block
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
    mx-auto md:mb-[2rem]
    md:w-[40rem] bg-gray-900
    md:h-[4.7rem] text-center
    text-[15pt]'
    >
    <SiMicrosoftsqlserver
    className='relative inline 
    right-[1rem] text-[20pt]'></SiMicrosoftsqlserver>sqlserver</button>
    
    </div>
    </form>
    </main>

    </>
  )
}

export default Options