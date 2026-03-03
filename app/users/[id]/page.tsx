import React from 'react'

const User_details = async ({params}:{params: {id:string}}) => {
    const {id} = await params
    return (
        <div>User_details {id}</div>
    )
}
export default User_details
