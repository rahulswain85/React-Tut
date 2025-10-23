import React from "react"

function Card(props){

    
    
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?_gl=1*1qzpcs8*_ga*MzIyNzA0Nzc1LjE3NTY1NzMxNjA.*_ga_8JE65Q40S6*czE3NTY1NzMxNTkkbzEkZzEkdDE3NTY1NzMxNjUkajU0JGwwJGgw"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.desc || "No Description"}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}


export default Card