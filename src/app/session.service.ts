import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public accessToken: string | undefined | null;
  public name: string | undefined | null;

  constructor() {
  }

  public destroy(): void {
    this.accessToken = null;
    this.name = null;
  }
}
