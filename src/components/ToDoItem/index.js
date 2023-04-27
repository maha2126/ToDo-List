import styles from './style.module.css'
import { convert } from '../../lib/convert'

const ToDoItem = ({task, onComplete, onCancel}) => {
    const st = task.done ? styles.completed : styles.task
    return <div className={st}>
        <h3>{task.text}</h3>
        <p>added on <b>{convert(task.timeAdded)}</b></p>
        {
            !task.done
            ?<button onClick={() => onComplete(task)}>Complete</button>
            :<button onClick={() => onCancel(task)}>Cancel</button>
        }
        {
            task.timeCompleted && 
            <p>completed on <b>convert (task.timeCompleted)</b></p>
        }
    </div>
}
export default ToDoItem