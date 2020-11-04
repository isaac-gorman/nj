import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function IndividualNotePage({note}){
  // const router = useRouter()
  // const { id }= router.query

  return (
      <div>
        <h1>Note: {note.title} </h1>
        
        <Link href="/notes" >
            <a>Back to All Notes Page</a>
        </Link>
      </div>


  )
}


export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.API_UTL}/api/note/${params.id}`)

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}

export default IndividualNotePage;