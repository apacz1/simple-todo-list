export type Item = {
  title?: string;
  date?: Date;
  priority?: string;
};

export type todoList = { listName: string; data: Item[] };
