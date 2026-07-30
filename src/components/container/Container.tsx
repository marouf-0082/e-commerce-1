import React from 'react'

interface IContainer {
  children: React.ReactNode;
}

export function Container({ children }: IContainer) {
  return (
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  )
}
