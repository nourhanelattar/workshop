import { NgModule } from "@angular/core";
import { LibrariesModule } from "src/app/Work-Shop/Libraries/library.module";
import { FrequentUsedModule } from "src/app/Work-Shop/Shared/frequent-used.module";
import { SharedModule } from "src/app/Work-Shop/Shared/shared.module";
import { CardComponent } from "../Componenets/Cards/card.component";
import { CarouselComponent } from "../Componenets/Carousel/carousel.component";
import { HelpCardComponent } from "../Componenets/Help-card/help-card.component";
import { HomeContainerComponent } from "../Container/home-container.component";
import { HomeRouterModule } from "../Router/home-router.module";


    const COMPONENTS = [HomeContainerComponent, CarouselComponent , CardComponent , HelpCardComponent]
    const MODULES = [HomeRouterModule]

@NgModule({
    declarations:[COMPONENTS],
    imports:[FrequentUsedModule,LibrariesModule,SharedModule,MODULES],
    exports:[COMPONENTS,MODULES]
})
export class HomePageModule {}