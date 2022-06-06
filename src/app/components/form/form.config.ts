import { ArrayField, FormConfig, InputField, SelectField, } from "./form.types";

interface Vehicle {
   id: number,
   brand: string
}

export const formConfig: FormConfig = {
   firstName: {
      type: "text",
      label: "First name",
      placeholder: "First name"
   } as InputField<string>,
   lastName: {
      type: "text",
      label: "Last name",
      placeholder: "Last name"
   } as InputField<string>,
   language: {
      type: "select",
      label: "Language",
      defaultValue: "EN",
      options: [
         { label: "Italian", value: "IT" },
         { label: "English", value: "EN" }
      ]
   } as SelectField<string>,
   vehicles: {
      type: "array",
      label: "Vehicles",
      item: {
         type: "select",
         label: "Language",
         defaultValue: "EN",
         options: [
            { label: "Italian", value: "IT" },
            { label: "English", value: "12" }
         ]
      }

   }
}
