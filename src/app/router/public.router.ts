import { Routes } from '@angular/router';
import { Path } from '../@core/structs/path.enum';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.Check,
    loadChildren: () =>
      import('@app/pages/private/check/check.module').then(
        (m) => m.CheckModule
      ),
    data: {
      label: 'Check',
      name: 'CHECK',
    },
    // canActivate: [AuthGuard] // optional
  },
];