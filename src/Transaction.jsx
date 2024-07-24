import React, {useState} from "react";
import EmployeeCard from "./EmployeeCard";

function Transactions(props){
        const [name,setName] = useState('')
        const [email,setEmail] = useState('')
        const [cell,setCell] = useState(0)
        const [position,setPosition] = useState('')
        const [image,setImage] = useState('')
        const [searchedItem,setSearchedItem] = useState('')

        //what happens when you click the add button
        const handleonClick = ()=>{
            props.handleonClicks(name,email,cell,position,image)
        }

        //search btn
        function handlesearchbtn(){
            const searchArray = props.records[index].name.filter(item =>item.includes(searchedItem.toLocaleLowerCase()))
            props.setRecord(searchArray)
        }

       // search function
       function handleSearch(event){
        //console.log(searchedItem)
        setSearchedItem(event.target.value)
        
        //console.log(searchArray)
       }
      
        //accesing input with name
        function handleChangeName(event){
            setName(event.target.value)
            
        }

        //accessing value at email
        function handlechangeEmail(event){
            setEmail(event.target.value)
        }

        //accessing value at cellpone no
        function handleChangeNumber(event){
            setCell(event.target.value)
        }

        //accessing the position
        function handlePositionChange(event){
            setPosition(event.target.value)

        }

        //acessing the image
        function  handleimage(event){
            const UploadedImage = event.target.files[0]
            const cachedImage = URL.createObjectURL(UploadedImage)
            setImage(cachedImage)
            
        }


        

        return(
                <>
                    <div className="Container">
                        <h1>Employee Records</h1>
                        <input type="text" placeholder="Name and Surname" onChange={handleChangeName} /><br />
                        <input type="email" placeholder=" Email address " onChange={handlechangeEmail}/><br />
                        <input type="number" placeholder="Cell number" onChange={handleChangeNumber} /><br />
                        <input type="file"  onChange={handleimage}/><br />
                        <select value="position" onChange={handlePositionChange}>
                            <option value='Manager'>Select position</option>
                            <option value="Assistant">Assistant</option>
                            <option value="Junior">Junior</option>
                            <option value="Manager">Manager</option>
                        </select>
                        <button onClick={handleonClick}>Add Record</button><br />
                        <input className="search" type="search" name="" id="" placeholder="Seach employee records" onChange={handleSearch} />
                        <button onClick={()=>handlesearchbtn}>search</button>
                   </div>
                </>
                
                
            
        );

}


export default Transactions