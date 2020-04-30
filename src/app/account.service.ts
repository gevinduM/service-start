import { Injectable,EventEmitter } from '@angular/core';
import { LogginService } from './loggin.service'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private logginService: LogginService) { }

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

  serviceUpdated = new EventEmitter<string>();
  
  onAccountAdded(name: string, status: string) {
    this.accounts.push({name , status});
    this.logginService.LogginServiceMethod(status);
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.logginService.LogginServiceMethod(newStatus);
  }


}
