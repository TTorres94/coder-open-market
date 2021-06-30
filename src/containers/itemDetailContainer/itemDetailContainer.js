import React, {useState, useEffect} from 'react'
import './itemDetailContainer.css'
import ItemDetail from '../../components/itemDetail/itemDetail'


export default function ItemListContainer(props) {

    let objeto = [{
        id:1,
        title:'Remera',
        description:'Remera 100% poliester',
        precio:1000,
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTazsqYS7ksBB5Iq7Cdk6tH712lxX-ficU4gnZ5KafjWxmyHlba1b_LdbI8xpxYCf4h8VNoEXL4Z2g&usqp=CAc'
    }]


    const [item, setItem] = useState([]);

    useEffect(() => {
    
     var getItems = new Promise((resolve, reject) => {
        setTimeout(()=>{
             resolve(objeto) 
            },2000)
     })
     getItems.then((data) => setItem(data))
     clearTimeout(getItems)
            
    },[])

    return (
        <div className = 'main'>
            <ItemDetail item = {item}/>
            {console.log(item)}
        </div>
    )
}

