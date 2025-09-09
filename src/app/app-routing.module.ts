import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { PRIVATE_ROUTES } from './router/private.route';
import { PUBLIC_ROUTES } from './router/public.router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [...PUBLIC_ROUTES, ...PRIVATE_ROUTES],
      {
        preloadingStrategy: PreloadAllModules,
      },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
