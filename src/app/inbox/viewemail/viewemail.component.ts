import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';

@Component({
  selector: 'app-viewemail',
  templateUrl: './viewemail.component.html',
  styleUrls: ['./viewemail.component.scss']
})
export class ViewemailComponent implements OnInit {

  public emailDetail: any;
  constructor(private inboxServ: InboxService) { }

  public goBack() {
    this.inboxServ.openEmailDetail.next(false);
  }
  ngOnInit() {
    this.inboxServ.emailDetails.subscribe(res => this.emailDetail = res);
  }

}
