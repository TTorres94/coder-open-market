import React, {useState} from 'react'
import './itemCount.css'


export default function ItemCountContainer(props) {
    const [initialNumber, setNumber] = useState (1);
    const stock = 5;
    

    function increment() {
        if(initialNumber < stock){
            setNumber(initialNumber + 1) 
        }
    }

   

    function onAdd(){
        console.log(initialNumber)
    }


    return(
        <div className='counter__buttons'>
          <h1>{initialNumber}</h1>
          <button onClick={increment}>+</button>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
        
    )
}
