import React, {useState} from 'react'
import './itemCount.css'


export default function ItemCountContainer({ onAdd, initial, stock}) {
    
    const [initialCount, setNumber] = useState(initial);
    
    
  
    function increment() {
        if(initialCount < stock){
            setNumber(initialCount + 1) 
        }
    }
  
   

    return(
        <div className='counter__buttons'>
            <h1>{initialCount}</h1>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
                <button onClick={increment}>+</button>
            </div>
            
            
        </div>
        
    )
}
