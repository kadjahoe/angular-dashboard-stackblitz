import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AccordionModule } from "@syncfusion/ej2-angular-navigations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { ChildAccordionComponent } from "./child-accordion/child-accordion.component";

@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    AccordionComponent,
    SidemenuComponent,
    ChildAccordionComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
