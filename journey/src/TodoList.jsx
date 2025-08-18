function TodoList(){
    const tasks=['Learn React', ' Build Project', 'Get Job']

    return(
        <div>
            <h3>To-Do List</h3>
            <ul>
                {tasks.map((tasks,i)=>(
                    <li key={i}>{tasks}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList; 