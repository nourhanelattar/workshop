import { NgModule } from "@angular/core";
import { HomePageModule } from "./Home-Page/Module/home-page.module";
import { DetailsNewsModule } from "./News-Details/Module/details.module";
import { NewsPageModule } from "./News-Page/Module/news-page.module";


    const MODULES = [HomePageModule , NewsPageModule , DetailsNewsModule]

@NgModule({
    declarations:[],
    imports:[MODULES],
    exports:[MODULES],
})
export class ModulesModule{}