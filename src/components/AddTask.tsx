import { useState, useCallback, FormEvent } from 'react';

import styles from './AddTask.module.css';

interface AddTaskProps {
  onAdd: (description: string) => void;
}

export function AddTask({ onAdd }: AddTaskProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (description) {
        onAdd(description);
        setDescription('');
      }
    },
    [description, onAdd]
  );

  return (
    <form className={styles.addTask} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        <i className="material-icons-outlined">add_circle_outline</i>
        Criar
      </button>
    </form>
  );
}
