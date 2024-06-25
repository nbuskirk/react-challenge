import React from 'react'

const Loading = () => {
  return (
    <section className='flex justify-center items-center flex-col w-1/2 m-auto'>
      <div className='animate-pulse rounded-md bg-slate-400 dark:bg-slate-800 h-[35px] w-full mt-2'></div>
      <div className='animate-pulse rounded-md bg-white dark:bg-slate-400 h-[35px] w-full mt-2'></div>
      <div className='animate-pulse rounded-md bg-slate-400 dark:bg-slate-800 h-[35px] w-full mt-2'></div>
      <div className='animate-pulse rounded-md bg-white dark:bg-slate-400 h-[35px] w-full mt-2'></div>
      <div className='animate-pulse rounded-md bg-slate-400 dark:bg-slate-800 h-[35px] w-full mt-2'></div>
      <div className='animate-pulse rounded-md bg-white dark:bg-slate-400 h-[35px] w-full mt-2'></div>
      <div className='animate-pulse rounded-md bg-slate-400 dark:bg-slate-800 h-[35px] w-full mt-2'></div>
    </section>
  )
}

export default Loading