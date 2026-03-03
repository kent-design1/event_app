import React from 'react'
import Link from "next/link";

const Users_Page = () => {
    return (
        <div>
            <ul>
                <li><Link href="/users/1"> uSER 1 </Link></li>
                <li><Link href="/users/2"> User 2 </Link></li>
            </ul>
        </div>
    )
}
export default Users_Page
