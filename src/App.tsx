import { useCallback, useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';

import { Task } from './interfaces/Task';

import styles from './App.module.css';

import './global.css';

export function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storagedTasks = localStorage.getItem('@todo:tasks');

    if (storagedTasks) {
      return JSON.parse(storagedTasks);
    }

    return [];
  });

  const handleAddTask = useCallback(
    (description: string) => {
      const newTask = {
        id: Math.random(),
        description,
        completed: false,
      };

      const tasksUpdated = [...tasks, newTask];

      setTasks(tasksUpdated);
      localStorage.setItem('@todo:tasks', JSON.stringify(tasksUpdated));
    },
    [tasks]
  );

  const handleChange = useCallback(
    (id: number) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }

        return task;
      });

      setTasks(newTasks);
      localStorage.setItem('@todo:tasks', JSON.stringify(newTasks));
    },
    [tasks]
  );

  const handleDelete = useCallback(
    (id: number) => {
      const tasksUpdated = tasks.filter((task) => task.id !== id);
      setTasks(tasksUpdated);
      localStorage.setItem('@todo:tasks', JSON.stringify(tasksUpdated));
    },
    [tasks]
  );

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask onAdd={handleAddTask} />
        <Tasks tasks={tasks} onChange={handleChange} onDelete={handleDelete} />
      </div>
    </div>
  );
}
