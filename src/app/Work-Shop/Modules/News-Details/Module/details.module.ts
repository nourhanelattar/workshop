import { NgModule } from "@angular/core";

import { FrequentUsedModule } from "src/app/Work-Shop/Shared/frequent-used.module";
import { LibrariesModule } from "src/app/Work-Shop/Libraries/library.module";
import { SharedModule } from "src/app/Work-Shop/Shared/shared.module";
import { DetailsNavTabsComponent } from "../Components/nav-Tabs/nav-tabs.component";
import { DetailsNewsComponent } from "../Components/Details-Card/details-card.component";
import { DetailsContainerComponent } from "../Container/details-container.component";
import { DetailsRouterModule } from "../Router/details-router.module";


    const COMPONENTS = [DetailsContainerComponent , DetailsNavTabsComponent , DetailsNewsComponent]

    const MODULES = [DetailsRouterModule]
    
    

@NgModule({
    declarations:[COMPONENTS],
    imports:[LibrariesModule,FrequentUsedModule,SharedModule,MODULES],
    exports:[COMPONENTS,MODULES]
})
export class DetailsNewsModule{}