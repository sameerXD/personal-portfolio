'use client'
import React from 'react'

const BrandIcons = ({brandName, brandIcon}:{brandName:string; brandIcon:any}) => {
  return (
    <div className='flex text-slate-500 justify-center items-center m-3 h-[100px] w-[100px]'>
        <div className='mr-2 text-5xl'>
            {brandIcon}
        </div>
        <div>
            <h1 className='text-4xl'>{brandName}</h1>
        </div>
    </div>
  )
}

export default BrandIcons