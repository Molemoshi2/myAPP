//import React,{useState} from "react";
//import PropTypeS from 'prop-types'

function EmployeeCard(props){
    //deleting a record 
  const handleDelete = (index)=> {
    props.setNewRecords(props.newRecords.filter((_,i)=>i!==index))
}

    return(
        <div className="first-child">

            {props.newRecords.map((record,index)=>(
                <><div className="child">
                    <img src={record.image} alt="picture" width={200} height={200}/>
                    <p>Employee Name: {record.name}</p>
                    <p>Email:{record.email}</p>
                    <p>number: {record.cell}</p>
                    <p>postion: {record.position}</p>
                    <button onClick={()=>handleDelete(index)}>delete record</button>
                </div>
                
                </>
            ))}
        </div>
    );
}

export default EmployeeCard