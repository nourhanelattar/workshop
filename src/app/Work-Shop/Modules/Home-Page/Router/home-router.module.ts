import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

   
    const routes:Routes = [
        // {path:'news',component:ListNewsComponent},
        
    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouterModule{}
