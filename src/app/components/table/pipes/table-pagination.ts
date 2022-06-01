import { Pipe, PipeTransform } from "@angular/core";
import { Pagination, TableData } from "../table.types";

@Pipe({ name: "tPagination" })
export class TPagination implements PipeTransform {
   transform(data: TableData[], currentPage: number, itemsPerPage?: number): TableData[] {
      if (!itemsPerPage) return data;

      return data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
   }
}
