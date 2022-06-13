import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Order, OrderType, TableConfig, TableEvent, TableFilter } from "./table.types";

@Component({
   selector: "app-table",
   templateUrl: "./table.component.html",
   styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit, OnChanges {
   @Input() config!: TableConfig;
   @Input() data!: any;

   order?: Order;

   filters: TableFilter[] = [];

   currentPage: number = 0;
   pageIndexes: number[] = [];

   @Output("onEvent") eventEmitter = new EventEmitter<TableEvent>();

   public get orderType(): typeof OrderType {
      return OrderType;
   }

   ngOnInit(): void {
      if (this.config.order) {
         this.order = this.config.order;
      }

      this.updateTable();
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (!changes["data"].currentValue) this.data = changes["data"].previousValue || [];

      this.updateTable();
   }

   updateTable() {
      this.data = this.data ? [...this.data] : [];
   }

   addFilter(column: string, value: string) {
      const _value = value.trim();

      if (_value && !this.filters.find(f => f.column === column && f.value === value)) {
         this.filters = [...this.filters, { column, value: _value }];
      }
   }

   removeFilter(filter: TableFilter) {
      this.filters = this.filters.filter(f => !(f.column === filter.column && f.value === filter.value));
   }

   toggleOrder(column: string) {
      if (this.order?.column !== column) {
         this.order = { column, type: OrderType.asc };
      } else {
         this.order = this.order.type === OrderType.asc
            ? { ...this.order, type: OrderType.desc }
            : undefined;
      }
   }

   updatePageIndexes(data: any[] = this.data) {
      const pageCount: number = Math.ceil(data.length / this.config.pagination!.itemsPerPage);
      this.pageIndexes = [...Array(pageCount).keys()];

      return this.pageIndexes;
   }

   selectPage(n: number) {
      this.currentPage = n;
   }

   emit(action: string, payload?: any) {
      this.eventEmitter.emit({ action, payload });
   }
}

