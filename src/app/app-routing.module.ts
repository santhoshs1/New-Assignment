import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

import { SidenavComponent } from './sidenav/sidenav.component';

import { AppComponent } from './app.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { PagecartComponent } from './pagecart/pagecart.component';
// import { CartitemsComponent } from './cartitems/cartitems.component';
// import { ShoppingComponent } from './shopping/shopping.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path:'cartpage', component: CartitemsComponent},
  { path:'pagecart', component: PagecartComponent},
  { path:'bookpage', component: BookpageComponent},
  {path:'loginform',component:LoginformComponent},
  {path:'sidenav',component:SidenavComponent},
  { path: 'books/details/:id', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
