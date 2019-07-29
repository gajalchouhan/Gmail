import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  public emails: any = [];
  constructor(private inboxServ: InboxService) { }

  public viewEmail(index: number) {
    this.emails[index].read = true;
    let detail = this.emails[index];
    this.inboxServ.emailDetails.next(detail);
    this.inboxServ.openEmailDetail.next(true);
  }

  ngOnInit() {
    this.inboxServ.trashMail.subscribe(res => this.emails = res);
  }

}
