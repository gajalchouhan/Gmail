import { Component, OnInit } from '@angular/core';
import { InboxService } from './../inbox.service';
declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  public emails: any = [];
  public emailId: string;
  public subject: string;
  public message: string;
  public error: any = [];
  public defaultSentData: any = [];
  public defaultDraftData: any = [];

  constructor(private inboxServ: InboxService) { }

  public selectMultiEmail() {
    this.emails.push(this.emailId);
    this.emailId = "";
  }

  public clearValue() {
    this.emails = [];
    this.subject = "";
    this.message = "";
  }


  public sendEmail() {
    if (this.emails.length !== 0 && this.subject && this.message) {
      let data = {
        "userName": 'ABC',
        "read": false,
        "date": new Date(),
        "email": this.emails,
        "subject": this.subject,
        "Message": this.message
      }
      this.defaultSentData.push(data);
      this.inboxServ.sentMail.next(this.defaultSentData);
      this.inboxServ.getSentMail();
      this.clearValue();
      this.error = [];
      $('.close').click();
    } else {
      this.error.push('Please filled all the box');
    }
  }

  public draftEmail() {
    if (this.emails.length !== 0 && this.subject && this.message) {
      let data = {
        "userName": 'ABC',
        "read": false,
        "date": new Date(),
        "email": this.emails,
        "subject": this.subject,
        "Message": this.message
      }
      this.defaultDraftData.push(data);
      this.inboxServ.draftMail.next(this.defaultDraftData);
      this.inboxServ.getDraftMail();
      this.clearValue();
      this.error = [];
      $('.close').click();
    } else {
      this.error.push('Please filled all the box');
    }
  }

  public removeEmailId(index) {
    this.emails.splice(index, 1);
  }
  ngOnInit() {
    this.inboxServ.sentMail.subscribe(res => this.defaultSentData = res);
    this.inboxServ.draftMail.subscribe(res => this.defaultDraftData = res);
  }

}
