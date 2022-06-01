import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TFilter } from "./pipes/table-filter";
import { TSort } from "./pipes/table-sort";
import { TPagination } from "./pipes/table-pagination";
import { TableComponent } from "./table.component";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
   declarations: [
      TableComponent,
      TFilter,
      TSort,
      TPagination,
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   exports: [
      TableComponent,
   ]
})
export class TableModule {
}
