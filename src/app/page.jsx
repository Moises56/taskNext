import { connectDB } from '@/utils/dbConexion'
import TaskCard from '@/components/TaskCard'
import Task from '@/models/task'

async function loadTasks() {
  connectDB()
  const tasks = await Task.find()
  // console.log(tasks)
  return tasks
}

async function HomePage() {
  const tasks = await loadTasks()
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}

      
    </div>

    
  )
}

export default HomePage