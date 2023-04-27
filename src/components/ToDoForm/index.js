import { useState } from 'react'
import styles from './style.module.css'

const ToDoForm = ({onAdd}) => {
    const [text, setText] = useState("")
    return <form onSubmit={(e) => {
        e.preventDefault()
        if(!text.trim()){
            return
        }
        onAdd({
            id:Date.now()+"_"+parseInt(Math.random()*1E9),
            text,
            timeAdded:Date.now(),
            timeCompleted:null,
            done:false
        })
        setText("")
    }}>
        <input 
            type='text'
            value={text}
            className = {styles.control}
            onChange={e => setText(e.target.value)}
        />
        <button>Save</button>
    </form>
}
export default ToDoForm