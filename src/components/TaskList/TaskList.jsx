import css from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export default function TaskList() {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector((state) => state.tasks);

  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector((state) => state.filters.status);

  // Обчислюємо масив завдань,
  // які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.item} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
