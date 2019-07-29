import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { TrashComponent } from './trash/trash.component';
import { InboxAllComponent } from './inbox-all/inbox-all.component';
import { ComposeComponent } from './compose/compose.component';
import { FormsModule } from '@angular/forms';
import { InboxService } from './inbox.service';
import { ViewemailComponent } from './viewemail/viewemail.component';

@NgModule({
  declarations: [InboxComponent, SentComponent, DraftComponent, TrashComponent, InboxAllComponent, ComposeComponent, ViewemailComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [InboxService]
})
export class InboxModule { }
