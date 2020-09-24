import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss']
})
export class HeaderNotificationComponent implements OnInit {

  @Input() notificationType;
  @Input() notificationTitle;
  @Input() notificationMessage;
  @Input() notificationMainLinkText;
  @Input() notificationMainLink;
  @Input() notificationSecondaryLinkText;
  @Input() notificationSecondaryLink;

  public notification: string;
  public title: string;
  public message: string;
  public mainLinkText: string;
  public mainLink: string;
  public secondaryLinkText: string;
  public secondaryLink: string;
  public showNotification = true;


  constructor() { }

  ngOnInit(): void {
    this.notification = this.notificationType !== undefined ? this.notificationType : 'green';
    this.title = this.notificationTitle !== undefined ? this.notificationTitle : 'Notification';
    this.message = this.notificationMessage !== undefined ? this.notificationMessage : 'There was a notifitcation message...';
    this.mainLinkText = this.notificationMainLinkText !== undefined ? this.notificationMainLinkText : '';
    this.mainLink = this.notificationMainLink !== undefined ? this.notificationMainLink : '#';
    this.secondaryLinkText = this.notificationSecondaryLinkText !== undefined ? this.notificationSecondaryLinkText : '';
    this.secondaryLink = this.notificationSecondaryLink !== undefined ? this.notificationSecondaryLink : '#';
  }

  public hideNotification(): any{
    this.showNotification = false;
  }

}
