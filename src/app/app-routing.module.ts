import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { HeroesComponent }   from './heroes/heroes.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];



//你必须首先初始化路由器，并让它开始监听浏览器中的地址变化。
//把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了。
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
