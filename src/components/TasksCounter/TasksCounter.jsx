import css from "./TasksCounter.module.css";
import { useSelector } from "react-redux";

export default function TaskCounter() {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state) => state.tasks.items);

  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div className={css.counterBlock}>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
}
