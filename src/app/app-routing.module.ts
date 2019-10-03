import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccordionComponent } from "../app/accordion/accordion.component";
import { SidemenuComponent } from "../app/sidemenu/sidemenu.component";
import { StatisticsComponent } from "../app/statistics/statistics.component";
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
