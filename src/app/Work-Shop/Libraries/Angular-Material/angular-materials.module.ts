import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule } from '@angular/material/stepper/';
import { MatSelectModule } from '@angular/material/select';


const MaterialModules = [
    MatButtonModule, MatInputModule,MatCheckboxModule,MatRadioModule, MatIconModule,MatDatepickerModule,
    MatNativeDateModule,MatDialogModule, MatSidenavModule,MatMenuModule,MatListModule,MatPaginatorModule,
    MatStepperModule,MatSelectModule
   
]

@NgModule({ 
    exports : [ MaterialModules ]
})
export class AngularMaterialModule { }