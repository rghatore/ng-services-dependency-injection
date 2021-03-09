import { EventEmitter, Injectable } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable(
  // {providedIn: 'root'}
  )

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
