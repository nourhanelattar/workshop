import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListNewsComponent } from "../Components/List-News/list-news.component";

   
    const routes:Routes = [
        {path:'all-news',component:ListNewsComponent},
    ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsRouterModule{}
