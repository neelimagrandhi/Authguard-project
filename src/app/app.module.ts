import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Formcomponent } from 'src/form/form.component';
import{ RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Homecomponent } from 'src/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ViewComponent } from './view/view.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditComponent } from './edit/edit.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Authguardservice } from 'src/services/authguard.service';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';


 const Routes=[{
   path: "",
   pathMatch: "full",
   redirectTo: "form"
 },{
  path: "form",
  component: Formcomponent
},{
   path: "home",
   component: Homecomponent,
   canActivate: [Authguardservice]
 },{
   path: "view/:id",
   component: ViewComponent,
   canActivate: [Authguardservice]
 },{
   path:"edit/:id",
   component: EditComponent
 },{
   path:"posts",
   component: PostsComponent
 },{
  path:"comments",
  component: CommentsComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    Formcomponent,
    Homecomponent,
    ViewComponent,
    EditComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(Routes,{
      useHash: true
    }),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
