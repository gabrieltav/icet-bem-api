export interface Query {
  page?: number;
  limit?: number;
  search?: string;
  order?: "asc" | "desc";
}
