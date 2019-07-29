import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  public emails: any = [];

  constructor(private inboxServ: InboxService) { }

  public viewEmail(index: number) {
    this.emails[index].read = true;
    let detail = this.emails[index];
    this.inboxServ.emailDetails.next(detail);
    this.inboxServ.openEmailDetail.next(true);
  }

  ngOnInit() {
    this.inboxServ.sentMail.subscribe(res => this.emails = res);
  }

}
