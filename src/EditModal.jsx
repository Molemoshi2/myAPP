import { useState, useEffect } from "react";

import App from "./App.jsx";

function EditModal(props){
    const data = props.data
    const [updatedName,setUpdatedName] = useState("")
    const [updatedEmail,setUpdatedEmail] = useState("")
    const [updatedNumber,setUpdatedNumber] = useState(0)
    const [updatedPosition,setUpdatedPosition] = useState("")
    const [updatedImage,setUpdatedImage] = useState('')// image
    const index = props.index
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
   //acessing the image
   function  handleimage(event){
    const UploadedImage = event.target.files[0]
    const cachedImage = URL.createObjectURL(UploadedImage)
    setUpdatedImage(cachedImage)
    
}

   //what will happen when you click on a button
//    const update = ()=>{
//       props.updatefunction(,index)
//    }

   const edit=() =>{
    props.edit({name:updatedName,email:updatedEmail,number:updatedNumber,image:updatedImage,position:updatedPosition},index)
    // console.log('here3',employee)
    const modal = document.getElementById('myModal');
    modal.style.display='none'
} 
 

    return(
        <>
            <div key="we" className="child">
                <h1>Edit Employee Records</h1>
                <input defaultValue={data.name} type="text" placeholder="Name and Surname" onChange={handleChangeName} /><br />
                <input defaultValue={data.email}  type="email" placeholder=" Email address " onChange={handlechangeEmail} /><br />
                <input defaultValue={data.cell} type="number" placeholder="Cell number" onChange={handleChangeNumber} /><br />
                <input type="file" onChange={handleimage}/>
                <select onChange={handleChangePosition} defaultValue={data.position}>
                    <option value='Manager'>Select position</option>
                    <option value="Assistant">Assistant</option>
                    <option value="Junior">Junior</option>
                    <option value="Manager">Manager</option>
                </select>
                    <button onClick={edit}>update Record</button><br />
            </div>

        </>
    );
}


export default EditModal