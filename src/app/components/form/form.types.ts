export interface FormConfig {
   [key: string]: FormField<any>
}

export type FormField<T> = InputField<T> | SelectField<T> | ArrayField<T>

interface BaseFormField<T> {
   type: string
   label: string
   defaultValue?: T
   required?: boolean
}

export interface InputField<T> extends BaseFormField<T> {
   type: "text" | "password" | "date"
   placeholder?: string
}

export interface SelectField<T> extends BaseFormField<T> {
   type: "select"
   options: SelectOption<T>[]
}

export interface ArrayField<T> extends BaseFormField<T> {
   type: "array"
   item: FormField<T>
}


export interface SelectOption<T> {
   label: string
   value: T
}
