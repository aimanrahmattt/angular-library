import { Component } from '@angular/core';
import { ValidationService } from 'projects/tools/src/lib/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer';

  constructor(validationService: ValidationService) {
    this.title = validationService.message;
  }
}
