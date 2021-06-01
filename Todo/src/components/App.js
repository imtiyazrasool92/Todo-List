import React,{useState , useRef} from 'react'
import './style.css'
import Todo from './Todo'
let idVal = 1;
const App = ()=>{
    const [list,setlist] = useState([])
    const [taskName,setTaskName] = useState('')
    const containerRef = useRef()
    const inputRef = useRef()
    const handleDelete = (itemId)=>{
            const newList = list.filter((item)=>{
                return item.id!=itemId
            })
            setlist(newList)
    }
    const handleAdd = ()=>{
            if(taskName.length<=0){
                inputRef.current.placeholder = "Task Name Required"
            }else{
                const newList = [...list,{id:idVal,name:taskName,done:false}]
                setlist(newList)
                idVal++
            }
    }
    const handleChange =(event)=>{
        let text = event.target.value
        if(text.length>21){
            containerRef.current.style.backgroundColor='#DC143C'
            inputRef.current.style.backgroundColor='#DC143C'
            inputRef.current.placeholder = ""
        }else{
            setTaskName(text)
            containerRef.current.style.backgroundColor='#77cf44'
            inputRef.current.style.backgroundColor='#77cf44'
            inputRef.current.placeholder = ""
        }
    }
    const handleDone = ((item)=>{
        let newList = list.map((items)=>{
                return (item==items.id ? {id:items.id,name:items.name,done:true} : items)
        })
        setlist(newList)
    })
    const handleReset = ()=>{
       setlist([]) 
    }
    return (
        <>
        <nav className="navbar navbar-default resp leftFloat">
            <a className="navbar-brand">Todo List</a>
            <div className="add-container" ref={containerRef}>
                <input ref={inputRef} type="text" onChange={handleChange} value={taskName}/>
                <button onClick={handleAdd}>Add</button>
            </div>
        </nav>
        <Todo listItem={list} onDelete={handleDelete} onHandleDone={handleDone}/>
        {list.length>0 &&
        <button onClick={handleReset} className="btn btn-info" style={{float:'right',marginRight:'10px'}}>Reset</button>
        }
        </>
    )
}
export default App