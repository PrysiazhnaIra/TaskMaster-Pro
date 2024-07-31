import css from "./StatusFilter.module.css";
import { Button } from "../Button/Button";
// Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
// Імпортуємо генератор екшену
import { setStatusFilter } from "../../redux/actions";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "../../redux/constants";

export default function StatusFilter() {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.status);

  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <h2>Filter by status</h2>
      <div className={css.wrapper}>
        <Button
          selected={filter === statusFilters.all}
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </Button>
        <Button
          selected={filter === statusFilters.active}
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
        <Button
          selected={filter === statusFilters.completed}
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Completed
        </Button>
      </div>
    </div>
  );
}
