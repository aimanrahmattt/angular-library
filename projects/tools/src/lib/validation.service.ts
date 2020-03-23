import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  get message(): string {
    return 'This is Validation Service';
  }
}
