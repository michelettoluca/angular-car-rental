export interface FormConfig {
   records: FormRecord<string | number | Date | boolean>[]
}

export interface FormRecord<T> {
   key: string
   label: string
   defaultValue: T
   required: boolean
}
