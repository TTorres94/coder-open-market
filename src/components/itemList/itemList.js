import React from 'react'
import Item from '../item/item'
import './itemList.css'

export default function ItemList( {item} ) {
  return (
    <div className = 'item-list'>
      {item.map((element) => {
          return(<Item key= {element.id} item={element} />)
      })}
    </div>
  )
}
