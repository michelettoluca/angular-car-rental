import { Pipe, PipeTransform } from "@angular/core";
import { FormConfig } from "../form.types";

@Pipe({ name: "entries" })
export class FormEntries implements PipeTransform {
   transform(config: FormConfig): any {
      return Object.entries(config).map(([key, value]) => ({ key, ...value }))
   }
}
