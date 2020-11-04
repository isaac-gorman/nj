import React from 'react'
import Link from 'next/link'

function MainPage({content}){

    return(
        <div>
            <h1>{content.title}</h1>

            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </div>
    )
}

export function getStaticProps(){
    // get data from CMS

    return{
        props: {
            content:{
                title: 'Borat App'
            }
        }
    }
}


export default MainPage