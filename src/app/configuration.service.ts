import {Injectable, isDevMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() {
  }

  getServerEndPoint() {
    return this.getServerUrl() + 'api/'
  }

  getServerUrl() {
    if (isDevMode()) {
      return 'https://localhost:5001/'
    }
    return 'https://rf-backend-develop.azurewebsites.net/';
  }
}
