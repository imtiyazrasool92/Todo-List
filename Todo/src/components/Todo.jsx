import React,{useState} from 'react'

const Todo = (props)=>{
    return (
        <>
        <div class="list-group">
            {
               props.listItem.map((item)=>{
                    return (
                      <>
                        <a className={item.done ? "list-group-item resp leftFloat list-group-item-success" : "list-group-item resp leftFloat"}>{item.name}
                        <div>
                            <button className="btn btn-success" onClick={()=>{
                                props.onHandleDone(item.id)
                            }} style={{margin:"0px 10px 0px 10px"}}>👍🏻</button>
                            <button disabled={item.done} className="btn btn-danger" key={item.id} onClick={()=>{
                                props.onDelete(item.id);
                            }}>x</button>
                        </div> 
                        </a>
                      </>
                    )
               }) 
            }
        </div>
        </>
    )
}
export default Todo