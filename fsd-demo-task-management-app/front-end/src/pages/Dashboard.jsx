import React, { useState, useEffect } from 'react'
import API from '../services/axios'
import TaskCard from '../components/TaskCard';
import AddTaskModal from '../components/AddTaskModal';
import Toast from '../components/Toast';

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const [toast, setToast] = useState({
        open: false, severity: 'success', message: ''
    });

    const fetchTasks = async () => {
        try {
            const response = await API.get('/tasks/getalltasks');
            setToast({
                open: true,
                severity: 'success',
                message: 'Task added successfully'
            });
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            setToast({
                open: true,
                severity: 'error',
                message: 'Error fetching tasks'
            });
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddEditTask = async (taskData) => {
        try {
            if (editTask) {
                await API.put(`/tasks/updatetask/${editTask._id}`, taskData);
                setToast({
                    open: true,
                    severity: 'success',
                    message: 'Task updated successfully'
                });
                setEditTask(null);
            } else {
                await API.post('/tasks/createtask', taskData);
                setToast({
                    open: true,
                    severity: 'success',
                    message: 'Task added successfully'
                });
            }
            setShowModal(false);
            setEditTask(null);
            fetchTasks();
        } catch (error) {
            console.error('Error adding/editing task:', error);
            setToast({
                open: true,
                severity: 'error',
                message: 'Error adding/editing task'
            });
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await API.delete(`/tasks/deletetask/${taskId}`);
            setToast({
                open: true,
                severity: 'success',
                message: 'Task deleted successfully'
            });
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
            setToast({
                open: true,
                severity: 'error',
                message: 'Error deleting task'
            });
        }
    }
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
            <button onClick={() => setShowModal(true)} className='bg-blue-500 text-white px-4 py-2 rounded-md mb-4'>
                Add Task
            </button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {tasks.map((task) => (
                    <TaskCard key={task._id} task={task}
                        onEdit={(task) => {
                            setEditTask(task);
                            setShowModal(true);
                        }}
                        onDelete={() => handleDeleteTask(task._id)}
                    />
                ))}
            </div>
            {showModal && (
                <AddTaskModal
                    onSubmit={handleAddEditTask}
                    editTask={editTask}
                    onClose={() => {
                        setShowModal(false);
                        setEditTask(null);
                    }}
                />
            )}
            <Toast
                open={toast.open}
                setOpen={(open) => setToast((prev) => ({ ...prev, open }))}
                severity={toast.severity}
                message={toast.message}
            />
        </div>
    )
}
export default Dashboard