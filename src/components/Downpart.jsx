import { useState } from 'react'

const initialItems = [
    { id: 0, title: 'Soada' },
    { id: 1, title: 'Mozo'  },
    { id: 2, title: 'Coke'  },
    { id: 3, title: 'Seven-Up' }
];

function Downpart() {

const [ items, setItems ] = useState(initialItems);
const [ selectedItems, setSelectedItems ] = useState(items[1]);

  return (

    <>
     <h2>Click to see what Selected</h2>
        <ul>            
            {items.map(item => 
                <li key={item.id}>
                    {item.title}  
                    <button onClick={() => { setSelectedItems(item); }}>
                        Choose
                    </button>     
                    
               </li>                             
             )}
        </ul>

        <p>You have selected {selectedItems.title}</p>        
    </>
  );
}

export default Downpart