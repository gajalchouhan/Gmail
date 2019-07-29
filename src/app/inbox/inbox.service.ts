import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { map, take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class InboxService {

  public emailDetails: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public draftMail: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public inboxMail: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public sentMail: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public trashMail: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public openEmailDetail: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public storedDraftMail: any = [];
  public storedSentMail: any = [];


  constructor(private http: HttpClient) { }

  public getSentMail() {
    this.storedSentMail.push(this.sentMail.value);
    console.log(this.storedSentMail);
  }


  public getDraftMail() {
    this.storedDraftMail.push(this.draftMail.value);
    console.log(this.storedDraftMail);
  }

  public getResponseInboxData() {
    this.http.get('./../../assets/data/inboxMail.json').subscribe(
      res => {
        let response: any = res;
        this.inboxMail.next(response.inboxData);
      }
    )
  }

  public getResponseDraftData() {
    this.http.get('./../../assets/data/draftMail.json').subscribe(
      res => {
        let response: any = res;
        this.draftMail.next(response.draftData);
      }
    )
  }

  public getResponseSentData() {
    this.http.get('./../../assets/data/sentMail.json').subscribe(
      res => {
        let response: any = res;
        this.sentMail.next(response.sentData);
      }
    )
  }

  public getResponseTrashData() {
    this.http.get('./../../assets/data/trashMail.json').subscribe(
      res => {
        let response: any = res;
        this.trashMail.next(response.trashData);
      }
    )
  }

}
