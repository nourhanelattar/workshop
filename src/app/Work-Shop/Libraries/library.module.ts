import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "./Angular-Material/angular-materials.module";
import { NgBootstrapModule } from "./Ng-Bootstrap/ng-bootstrab.module";


const MODULES = [ AngularMaterialModule , NgBootstrapModule ]

@NgModule({
    exports : [MODULES]
})
 export class LibrariesModule {}