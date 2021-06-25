import React, {useState, useEffect} from 'react'
import './ItemListcontainer.css'
import ItemList from '../../components/itemList/itemList'


export default function ItemListContainer(props) {

    let objeto = [{
        id:1,
        title:'N° 1',
        description:'Descripción N° 1'
    },{
        id:2,
        title:'N° 2',
        description:'Descripción N° 2'
    },{
        id:3,
        title:'N° 3',
        description:'Descripción N° 3'
    }]


    const [item, setItem] = useState([]);

    useEffect(() => {
    
        setTimeout(function(){ promiseEjercicio
            .then((response) => setItem(response)) },
             2000)
     })


     var promiseEjercicio = new Promise((resolve, reject) => {

        resolve(objeto)
        
    })

    return (
        <div className = 'main'>
            <ItemList item = {item}/>
        </div>
    )
}
