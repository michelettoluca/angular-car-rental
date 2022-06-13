import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ButtonConfig, ButtonVariant } from "./button.types";

const baseClassName = "button"

@Component({
   selector: "app-button",
   templateUrl: "./button.component.html",
   styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
   @Input() config!: ButtonConfig;

   @Output("onClick") eventEmitter = new EventEmitter();

   private _className: string = baseClassName;

   get className() {
      return this._className
   }

   set className(value: string) {
      this._className = value;
   }

   constructor() {

   }

   ngOnInit(): void {
      this.buildClassName();
   }

   buildClassName() {
      switch (this.config.variant) {
         case ButtonVariant.DARK:
            this.className += " dark";
            break;

         case ButtonVariant.RED:
            this.className += " red";
            break;

         default:
            this.className += " light";
      }
   }
}
