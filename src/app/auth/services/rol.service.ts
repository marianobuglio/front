import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';


@Injectable()
export class RolService implements NbRoleProvider {

  constructor(private authService: NbAuthService) { }

  getRole(): Observable<string> {
    console.log('holaa')
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          debugger
          return token.isValid() ? token.getPayload()['role'] : 'guest';
        }),
      );
  }
}
