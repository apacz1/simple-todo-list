export type Item = {
  title?: string;
  date?: string;
  priority?: string;
};

export type todoList = { listName: string; data: Item[] };
