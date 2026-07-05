import {useState} from 'react';

function TodoList() {
    const [task,setTask]=useState(["drink water","eat food","sleep well"]);
    //task will be array of strings (saved list of tasks)

    const [newTask,setNewTask]=useState("");
    //new task will be a string(current task being typed in the input field)

    //intutive functions:
/*1. User types a character in the input box 
Reaction: The screen needs to update and remember what they typed.
2. User clicks the "Add Task" button
Reaction: The screen needs to update and remember the new task in the list of tasks.
3. User clicks the "Delete" button next to a task
Reaction: The screen needs to update and remove the task from the list.
4. & 5.  User clicks Up or Down button next to a task
Reaction: The screen needs to update and move the task up or down in the list.
*/

    function handleInputChange(event){//updates screen if user types in input box
        setNewTask(event.target.value);
        //event->onClick
        //event.target->input box
        //event.target.value->value of input box
    }
    function handleAddTask(){//updates screen if new task is added
        if(newTask.trim()!==""){
            //we hv to get text
            setTask(t=>[...t,newTask]);// add new task in task list
            setNewTask("");//clear the input box after adding the task
        }
     }
    function handleDeleteTask(index){//update screen to delete the task
        //we will create new array of tasks except deleted task
        const updatedTask=task.filter((element,i)=>i!==index);
        setTask(updatedTask);
    }
    function handleMoveUp(index){//move up the tasks on screen
        if(index>0){
            const updatedTasks=[...task];//spread operator-unpacks elements of task array into updatedTasks
            [updatedTasks[index-1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index-1]];//swap the tasks,n &n-1
            setTask(updatedTasks);
        }
    }
    function handleMoveDown(index){//move down the tasks on screen
        if(index<task.length-1){
            const updatedTasks=[...task];//spread operator-unpacks elements of task array into updatedTasks
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];//swap the tasks,n &n+1
            setTask(updatedTasks);
        }
    }

    return (
        <>
        <div className="super-parent">
        <div>
            <h1 className="task-heading"> To do list </h1>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a new task" className="task-input"/>
            <button onClick={handleAddTask} className="add-task-btn">ADD TASK</button>
        </div>
        <ol className="task-list-container">
            {task.map((curr_task,index)=>{
                //with each task i will display tasks as list items
                return(
                <li key={index} className="task-list-item">
                    <span className='task-list'>{curr_task}</span>
                    <button onClick={()=>handleDeleteTask(index)} className="delete-task-btn">Delete</button>
                    <button onClick={()=>handleMoveUp(index)} className="move-task-btn">👆</button>
                    <button onClick={()=>handleMoveDown(index)} className="move-task-btn">👇</button>
                </li>);
            })


            }
        </ol>
        </div>
        </>
    );
}
export default TodoList;