import { FC, useState } from 'react'
import CounterBtn from './components/CounterBtn'
import reactLogo from '/reactLogo.png'
import tailwindLogo from '/tailwindLogo.png'
import typeScriptLogo from '/typescriptLogo.png'

const App: FC = () => {
   const [count, setCount] = useState(0)
   const items = ['1', '2', '3', '4', '5']

   return (
      <div className='flex min-h-screen flex-col items-center justify-center gap-2 bg-zinc-800 text-white'>
         <div className='flex gap-4'>
            <img src={reactLogo} className='logo' alt='React logo' />
            <img src={tailwindLogo} className='logo' alt='Tailwind logo' />
            <img src={typeScriptLogo} className='logo' alt='TypeScript logo' />
         </div>
         <h1 className='py-4 text-2xl lg:text-4xl'>
            React + TailwindCSS + TypeScript
         </h1>
         <div className='flex w-3/4 flex-col justify-center lg:w-1/3'>
            <CounterBtn count={count} setCount={setCount} />
         </div>
         <div className='flex h-fit w-3/4 flex-col items-center gap-4 rounded-md bg-zinc-600 p-4 lg:w-1/3 lg:flex-row'>
            <h1 className='text-xl font-bold'> Reactive Container </h1>
            {items.map((item, index) => (
               <div
                  key={index}
                  className='w-full rounded-md bg-zinc-500 p-2 text-center lg:w-auto text-teal-200'
               >
                  Item #{item}
               </div>
            ))}
         </div>
      </div>
   )
}

export default App
