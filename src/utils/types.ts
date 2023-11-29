


export type ErrorsType = {
  [key: string]: string[];
};


export type ListDataType<T> = {
  page: number | null;
  pageSize: number | null;
  totalPage: number;
  totalElement: number;
  content: T;
};





