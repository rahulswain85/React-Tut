import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


export default function Github() {
    const data = useLoaderData()
    // const [user, setUser] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/rahulswain85`).then((res)=>res.json()).then((data)=>setUser(data))
    // },[])
    return (
      <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                <h1>GitHub Followers: {data.followers  } </h1>
                <br></br>
          <img
            className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out border-4 border-white"
            src={data.avatar_url}
            alt="git-pic"
          />
        </div>
      </>
    );
}

export const githubinfoloader = async () => {
    
    const response = await fetch(`https://api.github.com/users/rahulswain85`)
      
    return response.json()

}