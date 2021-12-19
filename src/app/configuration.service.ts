import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getServerEndPoint(){
    return 'https://localhost:5001/api/'
  }

  getServerUrl(){
    return 'https://localhost:5001/'
  }
}
