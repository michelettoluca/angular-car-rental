export interface TableConfig {
   headers: TableHeader[]
   order?: Order
   filters?: TableHeader[]
   pagination?: Pagination
   actions?: TableAction[]
}

export interface TableHeader {
   key: string
   label: string
   format?: (arg: any) => string
}

export interface Order {
   column: string
   type: OrderType
}

export enum OrderType {
   asc = -1,
   desc = 1
}

export interface TableFilter {
   column: string
   value: string
}

export interface TableData {
   [key: string]: any
}

export interface Pagination {
   itemsPerPage: number
   itemPerPageOptions?: number[]
}

export interface TableEvent {
   action: TableAction
   payload?: any
}

export interface TableAction {
   type: TableActionType
   label?: string
   row?: boolean
   show: (...args: any[]) => boolean
}

export enum TableActionType {
   ADD_ROW,
   EDIT_ROW,
   DELETE_ROW
}
