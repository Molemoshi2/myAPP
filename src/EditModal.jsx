import { useState, useEffect } from "react";

import App from "./App.jsx";

function EditModal(props){
    const data = props.data
    const [updatedName,setUpdatedName] = useState("")
    const [updatedEmail,setUpdatedEmail] = useState("")
    const [updatedNumber,setUpdatedNumber] = useState(0)
    const [updatedPosition,setUpdatedPosition] = useState("")

    function handleChangeName(event){
         setUpdatedName(event.target.value)
         console.log(updatedName)
    }

   function handlechangeEmail(event){
        setUpdatedEmail(event.target.value)
   }

   function handleChangeNumber(event){
    setUpdatedNumber(event.target.value)
   }

   function handleChangePosition(event){
    setUpdatedPosition(event.target.value)
   }
   
   //what will happen when you click on a button

 

    return(
        <>
            <div key="we" className="child">
                <h1>Edit Employee Records</h1>
                <input defaultValue={data.name} type="text" placeholder="Name and Surname" onChange={handleChangeName} /><br />
                <input defaultValue={data.email}  type="email" placeholder=" Email address " onChange={handlechangeEmail} /><br />
                <input defaultValue={data.cell} type="number" placeholder="Cell number" onChange={handleChangeNumber} /><br />
                <select onChange={handleChangePosition} defaultValue={data.position}>
                    <option value='Manager'>Select position</option>
                    <option value="Assistant">Assistant</option>
                    <option value="Junior">Junior</option>
                    <option value="Manager">Manager</option>
                </select>
                    <button>update Record</button><br />
            </div>

        </>
    );
}


export default EditModal