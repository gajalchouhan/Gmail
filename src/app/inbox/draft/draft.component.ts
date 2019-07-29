import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {

  public emails: any = [];
  constructor(private inboxServ: InboxService) { }

  public viewEmail(index: number) {
    this.emails[index].read = true;
    let detail = this.emails[index];
    this.inboxServ.emailDetails.next(detail);
    this.inboxServ.openEmailDetail.next(true);
  }

  ngOnInit() {
    this.inboxServ.draftMail.subscribe(res => this.emails = res);
  }

}
