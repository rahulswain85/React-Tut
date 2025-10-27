import React, { useContext } from "react";
import UserContext from "../context/UserContext";


function Profile() {

    const {user} = useContext(UserContext)
    
    if (!user) {
        return (<><div><h1>Please Login</h1></div></>)
    }

    return (
      <div>
        <h1>Welcome {user.username}</h1>
        <h2>Your Password Is {user.password}</h2>
      </div>
    );
}

export default Profile