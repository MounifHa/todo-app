import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodosResolver } from './todos.resolver';
import { SignInComponent } from './sign-in/sign-in.component';
import { canActivateTodosGuard } from './can-activate-todos.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
    {
      path: 'todos',
      component: TodosComponent,
      canActivate: [
        canActivateTodosGuard
      ],
      data: {
        title: 'Example of static route data'
      },
      resolve: {
        todos: TodosResolver
      }
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      TodosResolver
    ]
  })
  export class AppRoutingModule { }