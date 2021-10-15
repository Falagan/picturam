export interface ApiResponsePaginated<T> {
  total: number;
  total_pages: number;
  results: T[];
}
