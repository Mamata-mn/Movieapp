import React, { useReducer, useState } from 'react'




let initialItems=[]
let itemsReducer=(currentItems,itemsAction)=>
    {
        switch(itemsAction.type)
        {
            case "ADD":return [...currentItems, itemsAction.playload]
            case "DEL": let remainingItems=currentItems.filter((i,id)=>
            {
                return id!==itemsAction.playload
            })
            return remainingItems;
            case "CLEAR":return[]
            default: return currentItems
        }

    }
function ReduceTodo() {

    let [item,setItem]=useState("");
    let [items,itemsDispatcher]= useReducer(itemsReducer,initialItems)

    let changeItem=({target:{value}})=>
        {
            setItem(value);
        }
        let addItem=()=>
            {
                itemsDispatcher({type:"ADD",playload:item})
                setItem("")
            }
            let deleteItem=(id)=>
                {
                    itemsDispatcher({type:"DEL",playload:id})
                }
                let deleteAllItems=(id)=>
                    {
                        itemsDispatcher({type:"CLEAR"})
                    }
                
  return (
    <div>
        <input type='text' placeholder='Add Item' onChange={changeItem} value={item}/>
        <button onClick={addItem}>Add</button>
        <hr />
        <ol>
            {items.map((i,index)=>
            {
                return <li key={index}>{i} <button onClick={()=>
                    {
                        deleteItem(index);
                    }
                }>X</button>
                </li>
            })}
        </ol>
        <button onClick={deleteAllItems}>ClearAll</button>
    </div>
  )
}

export default ReduceTodo