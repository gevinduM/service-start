import { Component} from '@angular/core';
import {LogginService } from '../loggin.service';
import { AccountService } from '../account.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
 

  constructor(private logginService: LogginService, private AccountService : AccountService){
    this.AccountService.serviceUpdated.subscribe((status:string) =>{ alert("New Status : " + status)});

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.AccountService.onAccountAdded(accountName,accountStatus);

  }
}
