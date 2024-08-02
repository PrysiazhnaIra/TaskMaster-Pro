// оголошення функцій-селекторів

export const getTasks = (state) => state.tasks;

export const getStatusFilter = (state) => state.filters.status;

export const getSearchFilter = (state) => state.filters.search;
