import { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import Transaction from './Transaction';



function App(){
  const [newRecords,setNewRecords] = useState([])

  function addtolist(name,email,cell,position,image){
    setNewRecords((Records)=>[...Records,{name:name, email:email, cell:cell,position:position,image:image}])
    console.log(newRecords)
    }

    //lets see
    function edit(employee,index)
    {   

      const newItems = [...newRecords];
      newItems[index] = employee;

      // set the new state with the modified array
      setNewRecords(newItems);
        // const oldArr = newRecords
        // oldArr[index] = employee
        // setNewRecords(newRecord=>({...newRecord, [index]:employee}))
    }
  
  return (
    <>
      <div className='parent' >  

          <Transaction handleonClicks={addtolist} Records={newRecords} setRecord={setNewRecords}/>
              <div className='child'>
              <h1>New records</h1>
                <div className='first-child'>
                  <EmployeeCard edit={edit} newRecords={newRecords} setNewRecords={setNewRecords} />
                </div>

          </div>
          
      </div>
      
    </>
    
  );
    
}
export default App