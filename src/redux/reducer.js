import { statusFilters } from "./constants";
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter((task) => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      //   return [...state, action.payload];
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      //   return state.filter((task) => task.id !== action.payload);
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(toggleCompleted, (state, action) => {
      //   return state.map((task) => {
      //     if (task.id !== action.payload) {
      //       return task;
      //     }
      //     return { ...task, completed: !task.completed };
      //   });
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    });
});

const filterInitialState = {
  status: statusFilters.all,
};

// export const filtersReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const filtersReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    // return {
    //   ...state,
    //   status: action.payload,
    // };
    state.status = action.payload;
  });
});
