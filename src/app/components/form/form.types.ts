import { ValidatorFn } from "@angular/forms";

export enum FormFieldType {
   DROPDOWN,
   INPUT,
   RADIO_GROUP,
   CHECKBOX
}

interface BaseFormFieldOptions<T> {
   key: string
   label: string
   name: string
   value?: T
   validators?: ValidatorFn[]
}

interface InputFieldOptions<T> extends BaseFormFieldOptions<T> {
   controlType: ControlType
   placeholder?: string
}

type ControlType = "text" | "date" | "password" | "number"

interface DropdownFieldOptions<T> extends BaseFormFieldOptions<T> {
   options: DropdownOption<T>[]
}

interface DropdownOption<T> {
   label: string
   value: T
}

interface CheckboxOptions<T> extends BaseFormFieldOptions<T> {
   checked?: boolean
}

interface RadioGroupOptions<T> extends BaseFormFieldOptions<T> {
   options: RadioGroupOption<T>[]
}

interface RadioGroupOption<T> {
   label: string
   value: T
}

export class BaseFormField<T> {
   key: string;
   name: string;
   label: string;
   type!: FormFieldType
   value: T | undefined;
   validators?: ValidatorFn[];

   constructor({
                  key,
                  label,
                  name,
                  value,
                  validators
               }: BaseFormFieldOptions<T>) {
      this.key = key;
      this.name = name;
      this.label = label;
      this.value = value;
      this.validators = validators || [];
   }
}

export class DropdownFormField<T> extends BaseFormField<T> {
   options: DropdownOption<T>[]

   constructor({ options, ...rest }: DropdownFieldOptions<T>) {
      super(rest);

      this.type = FormFieldType.DROPDOWN;
      this.options = options;
   }
}

export class InputFormField<T> extends BaseFormField<T> {
   controlType: ControlType
   placeholder: string

   constructor({ controlType, placeholder, ...rest }: InputFieldOptions<T>) {
      super(rest);

      this.type = FormFieldType.INPUT;
      this.controlType = controlType;
      this.placeholder = placeholder || "";
   }
}

export class CheckboxFormField<T> extends BaseFormField<T> {
   checked: boolean;

   constructor({ checked, ...rest }: CheckboxOptions<T>) {
      super(rest);

      this.type = FormFieldType.CHECKBOX;
      this.checked = checked || false;
   }
}

export class RadioGroupFormField<T> extends BaseFormField<T> {
   options: RadioGroupOption<T>[]

   constructor({ value, options, ...rest }: RadioGroupOptions<T>) {
      super(rest);

      this.type = FormFieldType.RADIO_GROUP;
      this.options = options;
      this.value = value || options[0].value;
   }
}

export type FormField<T> = DropdownFormField<T> | RadioGroupFormField<T> | CheckboxFormField<T> | InputFormField<T>
