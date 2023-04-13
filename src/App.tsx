import { useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';

import { Task } from './interfaces/Task';

import styles from './App.module.css';

import './global.css';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: false,
    },
    {
      id: 2,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: false,
    },
    {
      id: 3,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer',
      completed: false,
    },
    {
      id: 4,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: true,
    },
    {
      id: 5,
      description:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: true,
    },
  ]);

  function handleAddTask(description: string) {
    const newTask = {
      id: Math.random(),
      description,
      completed: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleChange(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleDelete(id: number) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }

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
