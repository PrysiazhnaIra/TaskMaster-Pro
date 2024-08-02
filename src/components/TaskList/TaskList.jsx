import css from "./TaskList.module.css";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import {
  getTasks,
  getStatusFilter,
  getSearchFilter,
} from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";

// Функція для отримання видимих завдань з урахуванням фільтрів
const getVisibleTasks = (tasks, statusFilter, searchFilter = "") => {
  // Фільтруємо завдання за статусом
  const filteredTasks = tasks.filter((task) => {
    switch (statusFilter) {
      case statusFilters.active:
        return !task.completed;
      case statusFilters.completed:
        return task.completed;
      default:
        return true;
    }
  });

  // Додаємо пошуковий фільтр
  return filteredTasks.filter((task) =>
    task.text.toLowerCase().includes(searchFilter.toLowerCase())
  );
};

export default function TaskList() {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const searchFilter = useSelector(getSearchFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter, searchFilter);

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
