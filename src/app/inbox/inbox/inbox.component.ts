import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  public showCompose: boolean = false;
  public showEmailDetail: boolean = false;
  public tabClick = {
    "inbox": true,
    "sent": false,
    "draft": false,
    "trash": false
  }

  constructor(private inboxServ: InboxService) { }



  public fieldSelect(e) {
    const target: any = e.target;
    const id: string = target.id;
    if (this.tabClick.hasOwnProperty(id)) {
      this.tabClick = {
        "inbox": false,
        "sent": false,
        "draft": false,
        "trash": false
      }
      this.tabClick[id] = true;
    }
  }

  public getCompose() {
    this.showCompose = true;
  }

  public responseData() {
    this.inboxServ.getResponseSentData();
    this.inboxServ.getResponseInboxData();
    this.inboxServ.getResponseTrashData();
    this.inboxServ.getResponseDraftData();
  }


  ngOnInit() {
    this.responseData();
    this.inboxServ.openEmailDetail.subscribe(res => this.showEmailDetail = res);

  }


}
