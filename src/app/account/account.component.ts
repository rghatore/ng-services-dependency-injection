import { Component, Input } from '@angular/core';

import { AccountsService } from 'src/shared/accounts.service';
import { LoggingService } from 'src/shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    // LoggingService,
    // AccountsService // this creates a new instance separate from the app instance
  ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
    ) {};

  onSetTo(status: string) {
    this.accountsService.onStatusChanged(this.id, status);
    this.accountsService.statusUpdated.emit(status);
    // this.loggingService.logStatusChange(status);
  }
}
