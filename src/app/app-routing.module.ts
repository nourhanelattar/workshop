import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './Work-Shop/app-container.component';
import { HomeContainerComponent } from './Work-Shop/Modules/Home-Page/Container/home-container.component';
import { DetailsContainerComponent } from './Work-Shop/Modules/News-Details/Container/details-container.component';
import { NewsContainerComponent } from './Work-Shop/Modules/News-Page/container/news-container.component';

const routes: Routes = [
    
    {path:'', component: AppContainerComponent, 
      
      children:[
      
        /************ Home ***************/
        {path:'',redirectTo:'home',pathMatch:'full'},

        {path:'home',component:HomeContainerComponent,
        loadChildren:async()=>(await (import('./Work-Shop/Modules/Home-Page/Module/home-page.module'))).HomePageModule
        },

        /************ News ***************/
        {path:'new',component:NewsContainerComponent,
        loadChildren:async()=>(await (import('./Work-Shop/Modules/News-Page/Module/news-page.module'))).NewsPageModule
        },

        {path:'news-detail/:newsId',component:DetailsContainerComponent,
        loadChildren:async()=>(await (import('./Work-Shop/Modules/News-Details/Module/details.module'))).DetailsNewsModule
        },
        
      
    
    ]
    },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
