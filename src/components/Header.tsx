import React from 'react'
import Select from './select'
import Button from './button'

export const Header = () => {
  return (
    <div className="border-b-2 border-b-gray-700 p-4 bg-amber-700 ">
      <div className="flex justify-between px-4">
        <div className="sm:flex-grow max-w-lg z-40 mr-4">
          <Select />
        </div>
        <Button>Dashboard</Button>
      </div>
    </div>
  )
}