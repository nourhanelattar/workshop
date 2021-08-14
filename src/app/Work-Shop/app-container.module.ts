import { NgModule } from "@angular/core";
import { AppContainerComponent } from "./app-container.component";
import { LibrariesModule } from "./Libraries/library.module";
import { ModulesModule } from "./Modules/modules.module";
import { FrequentUsedModule } from "./Shared/frequent-used.module";

import { SharedModule } from "./Shared/shared.module";

    const COMPONENTS = [AppContainerComponent]

    const MODULES = [SharedModule , ModulesModule]

@NgModule({
    declarations:[COMPONENTS],
    imports:[FrequentUsedModule,LibrariesModule,MODULES],
    exports:[COMPONENTS,MODULES]
})
export class AppContainerModule{}

 