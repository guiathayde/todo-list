import { useEffect, useState } from 'react';

import { Task } from '../interfaces/Task';

import styles from './Tasks.module.css';

import unchecked from '../assets/unchecked.svg';
import checked from '../assets/checked.svg';

interface TasksProps {
  tasks: Task[];
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Tasks({ tasks, onChange, onDelete }: TasksProps) {
  const [tasksCompleted, setTasksCompleted] = useState(0);

  useEffect(() => {
    const completed = tasks.filter((task) => task.completed).length;

    setTasksCompleted(completed);
  }, [tasks]);

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.info}>
          <p
            style={{
              color: '#4EA8DE',
            }}
          >
            Tarefas criadas
          </p>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.info}>
          <p
            style={{
              color: '#8284FA',
            }}
          >
            Concluídas
          </p>
          <span>{tasksCompleted}</span>
        </div>
      </div>

      {tasks.length === 0 && (
        <div className={styles.empty}>
          <i className="material-icons-outlined emptyIcon">assignment</i>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}

      {tasks.length > 0 && (
        <div className={styles.tasksList}>
          {tasks.map((task) => (
            <div className={styles.task} key={task.id}>
              <img
                id={String(task.id)}
                src={task.completed ? checked : unchecked}
                onClick={() => onChange(task.id)}
              />
              <label
                htmlFor={String(task.id)}
                className={task.completed ? styles.completed : ''}
              >
                {task.description}
              </label>
              <i className="material-icons" onClick={() => onDelete(task.id)}>
                delete
              </i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
