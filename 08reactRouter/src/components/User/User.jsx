import React from "react";
import { useParams } from "react-router-dom";

function User(){
const{id}=useParams()
return(
    <div className="bg-amber-200 text-6xl text-black-300 text- py-4 text-center"> User: {id }</div>

)
}
export default User 