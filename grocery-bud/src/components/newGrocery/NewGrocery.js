import React, { useEffect, useState } from 'react'
import './NewGrocery.css'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Alert from '../alertComponent/Alert';

const getLocalStorageData = () => {
  const dataListStorage = JSON.parse(localStorage.getItem("listItems"))
  return dataListStorage
}
const NewGrocery = () => {
  const [itemName, setItemName] = useState('')
  const [list, setList] = useState(getLocalStorageData)
  const handleChange = (e) => {
    setItemName(e.target.value)
  }
  const submitFunc = (e) => {
    e.preventDefault()
    if (itemName && isEdit) {
      const newItem = list.find((item) => item.id === editId)
      newItem.name = itemName
      setList(() => {
        return list.filter((item) => item.id === editId ? newItem : item)
      })
      setItemName('')
      setIsEdit(false)
      setEditId()
      setAlertText("Item updated successfully")
      setAlertColor("green")
    }
    else if (itemName) {
      const date = new Date()
      const itemObj = {
        id: date.getTime(),
        name: itemName
      }
      setList([...list, itemObj])
      setItemName('')
      setAlertText("Item added successfully")
      setAlertColor("green")
    }
  }
  const clearFunc = () => {
    setList([])
    setAlertText("List cleared successfully")
    setAlertColor("red")
  }
  const deleteItemFunc = (id) => {
    setList(list.filter((listItem) => {
      return listItem.id !== id
    }))
    setAlertText("Item deleted successfully")
    setAlertColor("red")
  }
  const updateFunc = (id) => {
    setItemName(() => {
      const selectedItem = list.find((item) => {
        return item.id === id
      })
      return selectedItem.name
    })
    setIsEdit(true)
    setEditId(id)
  }
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState()
  const [alertText, setAlertText] = useState('')
  const [alertColor, setAlertColor] = useState('')
  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(list))
  }, [list])
  return (
    <div className='container'>
      <div className="groceryContainer">
        {alertText.length>0 && <Alert alertColor={alertColor} alertText={alertText} />}
        <h1 className='heading'>Grocery Bud</h1>
        <form onSubmit={submitFunc}>
          <input type="text" placeholder='e.g. eggs' value={itemName} onChange={handleChange} />
          <input type="submit" value={isEdit ? "Edit" : "Submit"} />
        </form>
        {list.length > 0 && <div className="listItems">
          <div className="items">
            {list.map((item, index) => {
              return <div className="item" key={item.id}>
                <div className="itemText">{index + 1}. {item.name}</div>
                <div className="btns">
                  <div className="updateBtn" onClick={() => { updateFunc(item.id) }} ><FaEdit /></div>
                  <div className="deleteBtn" onClick={() => { deleteItemFunc(item.id) }}><MdDelete /></div>
                </div>
              </div>
            })}
          </div>
          <div className="clearBtnDiv">
            <button className='clear' onClick={clearFunc}>Clear</button>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default NewGrocery
