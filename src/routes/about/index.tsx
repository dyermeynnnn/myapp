import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <>
    <div className='bg-black text-white text-center h-40 flex justify-center items-center text-xl font-light hover:font-black selection:bg-red-700 focus:text-9xl border border-dashed rounded-b-full'>Hello "/about/"!</div>
    <input className='focus:ring-4 focus:ring-red-500 focus:outline focus:outline-amber-500 focus:border focus:border-green-600' placeholder='search...'/>
  </>
  )
}
