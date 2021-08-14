import { NgModule } from "@angular/core";
import { NewsContainerComponent } from "../container/news-container.component";
import { ListNewsComponent } from "../Components/List-News/list-news.component";
import { FrequentUsedModule } from "src/app/Work-Shop/Shared/frequent-used.module";
import { LibrariesModule } from "src/app/Work-Shop/Libraries/library.module";
import { SharedModule } from "src/app/Work-Shop/Shared/shared.module";
import { NewsRouterModule } from "../Router/news-router.module";
import { SearchNavComponent } from "../Components/Search-nav/search-nav.component";
import { NavTabsComponent } from "../Components/Nav-Tabs/nav-tabs.component";


    const COMPONENTS = [NewsContainerComponent,ListNewsComponent , NavTabsComponent , SearchNavComponent]

    const MODULES = [NewsRouterModule]

@NgModule({
    declarations:[COMPONENTS],
    imports:[MODULES,LibrariesModule,FrequentUsedModule,SharedModule],
    exports:[COMPONENTS,MODULES]
})
export class NewsPageModule{}