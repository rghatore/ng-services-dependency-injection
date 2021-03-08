import { Component } from '@angular/core';

import { AccountsService } from 'src/shared/accounts.service';
import { LoggingService } from 'src/shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [
    LoggingService,
    // this doesn't update the apps instance because
    // it creates a new instance separate from the app instance
    // AccountsService
  ]
})

export class NewAccountComponent {

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
    ) {};

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded({name: accountName, status: accountStatus});
    this.loggingService.logStatusChange(accountStatus);
  }

}
