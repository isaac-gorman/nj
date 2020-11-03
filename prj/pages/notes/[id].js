import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function IndividualNotePage(){
  const router = useRouter()
  const { id }= router.query

  return (
      <div>
        <h1>Note: {id} </h1>
        
        <Link href="/notes" >
            <a>Back to All Notes Page</a>
        </Link>
      </div>


  )
}

export default IndividualNotePage;