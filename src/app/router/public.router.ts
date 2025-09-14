
import { Routes } from '@angular/router';
import { Path } from '../@core/structs/path.enum';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.SignIn,
    loadChildren: () =>
      import('@app/pages/public/signin/signin.module').then(
        (m) => m.SigninModule
      ),
    data: {
      label: 'SignIn',
      name: 'SIGNIN',
    },
    // canActivate: [AuthGuard] // optional
  },
];