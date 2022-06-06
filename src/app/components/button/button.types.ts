export interface ButtonConfig {
   variant?: ButtonVariant
   text?: string
   icon?: string
   action: string
}

export enum ButtonVariant {
   LIGHT,
   DARK,
   RED
}

export interface ButtonEvent {
   action: string
   payload?: any
}
