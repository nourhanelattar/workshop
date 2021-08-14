import { NgModule } from "@angular/core";
import { LibrariesModule } from "../Libraries/library.module";
import { HomeRouterModule } from "../Modules/Home-Page/Router/home-router.module";
import { NewsRouterModule } from "../Modules/News-Page/Router/news-router.module";
import { FooterComponent } from "./Footer/footer.component";
import { FrequentUsedModule } from "./frequent-used.module";
import { NavBarComponent } from "./Nav-Bar/nav-bar.component";

    const COMPONENTS = [NavBarComponent,FooterComponent]

    const ROUTERS = [HomeRouterModule , NewsRouterModule]

@NgModule({
    declarations:[COMPONENTS],
    imports:[FrequentUsedModule , LibrariesModule, ROUTERS],
    exports:[COMPONENTS],
})
export class SharedModule{}


