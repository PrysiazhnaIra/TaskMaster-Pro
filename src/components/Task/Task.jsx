import css from "./Task.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

export default function Task({ task }) {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Викликаємо генератор екшену
  // та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.container}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={Boolean(task.completed)}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.deleteBtn} onClick={handleDelete}>
        {" "}
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}
