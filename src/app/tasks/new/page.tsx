"use client";
import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

function FormPage() {
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });
    const router = useRouter();
    const params = useParams();

    const getTask = async () => {
        try {
            const response = await fetch(`/api/tasks/${params.id}`);
            const data = await response.json();
            setNewTask(data);
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async () => {
        try {
            const response = await fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });
            const data = await response.json();
            if (response.status === 200){
                router.push("/");
                router.refresh();
            };
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async () => {
        try {
            const response = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });
            const data = await response.json();
            if (response.status === 200){
                router.push("/");
                router.refresh();
            };
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewTask({ ...newTask, [event.target.name]: event.target.value });
    };

    //delete task
    const handleDelete = async () => {
        try {
            if (window.confirm("Are you sure you want to delete this task?")){
                const response = await fetch(`/api/tasks/${params.id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newTask),
                });
                const data = await response.json();
                if (response.status === 200){
                    router.push("/");
                    router.refresh();
                };
                console.log(data);
            };

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!params.id){
            // console.log(newTask);
            await createTask();
        } else {
            await updateTask();
        }
    };

    const handleEmail = async () => {
        try {
            async () => {
                const res = await fetch("/api/send", {
                  method: "POST",
                });
                const data = await res.json();
                console.log(data)
              }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.id) {
          getTask();
        }
      }, []);




  return (


    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={handleSubmit}>
        
                    <button onClick={() => router.back()} className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-2 py-2 rounded-lg">Back</button>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">
                    {
                        !params.id ? "New Task" : "Edit Task"
                    }
                </h1>
                <button 
                        type="button"
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-2 py-2 rounded-lg">
                    Delete
                </button>
            </header>
            
            <br />

            <input type="text" name="title" placeholder="Title" className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4" 
                onChange={handleChange}
                value={newTask.title}
                autoFocus
                />
            <textarea name="description" placeholder="Description" className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4" rows={3}
                onChange={handleChange} 
                value={newTask.description}
                ></textarea>
            <button 
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-2 py-2 rounded-lg">
                    {
                        !params.id ? "Create" : "Update"
                    }
            </button>
        </form>

        <div className="w-1/2">
            <button onClick={handleEmail} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded-lg">Send Email</button>
        </div>
    </div>
  )
}

export default FormPage