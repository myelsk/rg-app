import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ProjectComponent} from "./project/project.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {
        path: 'project',
        component: ProjectComponent,
        canActivate: [AuthGuard]
    }
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {
}
