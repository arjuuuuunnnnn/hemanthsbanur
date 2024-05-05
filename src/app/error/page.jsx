import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div><h1>Error</h1>
	  <Link href="/">
	  <button>Go back</button>
	  </Link>
	  </div>
  )
}

export default Error
