import React, { useEffect, useState } from 'react'
import API from '../services/axios'
import ChartComponent from '../components/ChartComponent'

function Home() {
    const [taskStats, setTaskStats] = useState([0, 0, 0]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await API.get('/tasks/gettaskstats');
                setTaskStats([response.data.pending, response.data.inProgress, response.data.completed]);
            } catch (error) {
                console.error('Error fetching task stats:', error);
            }
        };
        fetchStats();
    }, [])
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Welcome to Task Management Application</h1>
            <ChartComponent taskStats={taskStats} />
        </div>
    )
}

export default Home