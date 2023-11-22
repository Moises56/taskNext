import { connectDB } from "@/utils/dbConexion"
import Task from "@/models/task"

async function loadTasks() {
  connectDB()
  const tasks = await Task.find()
  // console.log(tasks)
  return tasks
}

async function HomePage() {
  const tasks = loadTasks()
  return (
    <div>
      {
        JSON.stringify(tasks)
      }

    </div>
  )
}

export default HomePage