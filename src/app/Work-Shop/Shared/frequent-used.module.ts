import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

    const MODULES = [CommonModule,ReactiveFormsModule,FormsModule,HttpClientModule]

@NgModule({
    exports:[MODULES]
})
export class FrequentUsedModule{}
    



