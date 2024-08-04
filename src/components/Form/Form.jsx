import css from "./Form.module.css";
// Імпортуємо хук
import { useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { addTask } from "../../redux/tasksSlice";

export default function Form() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Викликаємо генератор екшену
    // та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));

    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Please, enter your task text..."
      />
      <button type="submit" className={css.btn}>
        Add
      </button>
    </form>
  );
}
