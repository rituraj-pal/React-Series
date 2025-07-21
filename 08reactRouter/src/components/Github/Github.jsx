import React, { useEffect, useState } from "react";


function Github(){

    const [data,setData]=useState({});

    useEffect(()=>{
        fetch("http://api.github.com/users/rituraj-pal")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[])
return(
<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" >Github Following: {data?.following ?? "Loading..."}  <img src={data.avatar_url } alt="Git picture" width={300}/></div>
)
}
export default Github;