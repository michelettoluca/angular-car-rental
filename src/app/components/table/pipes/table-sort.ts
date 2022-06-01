import { Pipe, PipeTransform } from "@angular/core";
import { Order, TableData } from "../table.types";

@Pipe({ name: "tSort" })
export class TSort implements PipeTransform {
   transform(data: TableData[], order?: Order): TableData[] {
      if (!order) return data;

      return [...data].sort((a, b) =>
         a[order.column].toLowerCase() >= b[order.column].toLowerCase()
            ? -1 * order.type
            : 1 * order.type
      )
   }
}
