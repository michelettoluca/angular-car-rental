import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "entries" })
export class FormEntries implements PipeTransform {
   transform(object: object): any {
      return Object.entries(object).map(([key, value]) => ({ key, ...value }))
   }
}
