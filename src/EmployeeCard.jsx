//import React,{useState} from "react";
//import PropTypeS from 'prop-types'

import { useState } from "react";
import EditModal from "./EditModal";

function EmployeeCard(props){
  const [open,setOpen] = useState(false)
  

function handleOpen(){
    setOpen(true)
}




  //adding the delete function
  const handleDelete = (index)=> {
    props.setNewRecords(props.newRecords.filter((_,i)=>i!==index))
}

const handleEdit = (index) =>{
    const modal = document.getElementById("myModal")
    const editRec = props.newRecords[index]
    handleOpen();
    modal.style.display="block"
    console.log(modal)
    console.log(editRec)
        
    }

    return(
        <div className="first-child">

            {props.newRecords.map((record,index)=>(
                <div key={index}>
                    <div className="child">
                    <img src={record.image} alt="picture" width={200} height={200}/>
                    <p>Employee Name: {record.name}</p>
                    <p>Email:{record.email}</p>
                    <p>number: {record.cell}</p>
                    <p>postion: {record.position}</p>
                    <button onClick={()=>handleDelete(index)}>delete record</button>
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    
                    <div id="myModal" className="modal">
                    <EditModal data={record} />
                    </div>
                     
                </div>
                </div>
            ))}
        </div>
    );
}

export default EmployeeCard