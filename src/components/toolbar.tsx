import React from 'react'
import Button from './button'
import Toggle from './toggle'
import InputNumber from './inputNumber'

export const Toolbar = () => {
  return (
    <div className="-z-10 p-4 bg-slate-700 ">
      <div className="flex px-4 items-center">
        <div className="flex flex-grow mr-4">
          <div className='flex mx-4'><span className="mr-4">genre</span> <Toggle /></div>
          <div className='flex mx-4'><span className="mr-4">age</span> <Toggle /></div>
          <div className='flex mx-4'><span className="mr-4">competences</span> <Toggle /></div>
        </div>
        <div className="flex flex-grow mr-4">
          <InputNumber></InputNumber>
          <Button>TRIER</Button>
        </div>
      </div>
    </div>
  )
}