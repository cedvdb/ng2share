import { Component, Input, OnInit,trigger,state,style,transition,animate }
        from '@angular/core';
import { Platform, platforms } from '../platforms.utils'
// a test comment switching cvs
@Component({
  selector: 'my-share-button',
  template: `
              <div (click)="click()"
                  class="share-btn share-btn-{{platform.name}} {{direction}}-margin
                  {{textEnabled ? 'share-btn-with-text' : '' }}">
                <i class="icon-{{platform.logoOfficial}}"></i>
                <span class="shareText" *ngIf="textEnabled">{{platform.text}} {{addedText}}</span>

              </div>
            `,
  styleUrls:['share-button.css']
})
export class ShareButtonComponent implements OnInit{
  @Input() platformName;
  platform:Platform;
  @Input() textEnabled: boolean;
  @Input() addedText:string;
  @Input() direction:string = 'horizontal';

  ngOnInit(){
    this.platform = platforms[this.platformName];
  }

  click(){
    window.open(this.platform.url,'newwindow', null);
  }
}
