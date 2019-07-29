import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';

@Component({
  selector: 'app-inbox-all',
  templateUrl: './inbox-all.component.html',
  styleUrls: ['./inbox-all.component.scss']
})
export class InboxAllComponent implements OnInit {

  public emails: any = [];
  constructor(private inboxServ: InboxService) { }

  public viewEmail(index: number) {
    this.emails[index].read = true;
    let detail = this.emails[index];
    this.inboxServ.emailDetails.next(detail);
    this.inboxServ.openEmailDetail.next(true);
  }

  ngOnInit() {
    this.inboxServ.inboxMail.subscribe(res => this.emails = res);
  }

}
