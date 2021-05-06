import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  public hasValidAuthenticationToken(): boolean {
    try {
      const authenticationToken = localStorage.getItem('authenticatedByLoginToken')
      return authenticationToken !== null
    } catch (err) {
      return false
    }
  }
}
