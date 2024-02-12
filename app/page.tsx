'use client'

import { sendGTMEvent } from '@next/third-parties/google'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Next Third Party</h1>

        <button
          className='mt-8 rounded bg-sky-500 px-4 py-2 text-white'
          onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
        >
          Send Event
        </button>
      </div>
    </section>
  )
}
