import { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import Transaction from './Transaction';



function App(){
  const [newRecords,setNewRecords] = useState([])

  function addtolist(name,email,cell,position,image){
    setNewRecords((Records)=>[...Records,{name:name, email:email, cell:cell,position:position,image:image}])
    // console.log(newRecords)
    }

  
  return (
    <>
      <div className='parent' >  

          <Transaction handleonClicks={addtolist}/>
              <div className='child'>
              <h1>New records</h1>
                <div className='first-child'>
                  <EmployeeCard setNewRecords={setNewRecords} newRecords={newRecords}/>
                </div>

          </div>
          
      </div>
      
    </>
    
  );
    
}
export default App