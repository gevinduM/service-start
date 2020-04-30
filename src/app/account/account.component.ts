import { Component, Input } from '@angular/core';
import {LogginService } from '../loggin.service'
import { AccountService } from '../account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logginService: LogginService, private AccountService: AccountService ){
  }

  onSetTo(status: string) {
    this.AccountService.onStatusChanged(this.id,status);
    this.AccountService.serviceUpdated.emit(status);
  }
}
