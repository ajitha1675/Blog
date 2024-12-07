import React from 'react'

function Signup() {
  return (
    <div className=''>
      {/* left */}
    <div className=''>
      <Link
          to='/'
          className='font-bold dark:text-white text-4xl'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Aji's
          </span>
          blog
        </Link>
        <p className=''>
            This is a demo project. You can sign up with
            your email and password or with Google.
        </p>
    </div>
      {/* right */}
    <div className=''>

    </div>
    </div>
  )
}

export default Signup