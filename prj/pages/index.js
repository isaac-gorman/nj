import React from 'react'
import Link from 'next/link'

function MainPage(){

    return(
        <div>
            <h1>Notes</h1>

            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </div>
    )
}

export default MainPage