import { Component, Input, OnInit,trigger,state,style,transition,animate }
        from '@angular/core';
import { Platform, platforms } from '../platforms.utils'
// a test comment switching cvs
@Component({
  selector: 'my-share-button',
  template: `
              <div (click)="click()"
                  class="n2s-share-btn n2s-share-btn-{{platform.name}} n2s-{{direction}}-margin
                  {{textEnabled ? 'n2s-share-btn-with-text' : '' }}">
                <i class="n2s-icon-{{platform.logoOfficial}}"></i>
                <span class="n2s-shareText" *ngIf="textEnabled">
                  <span class="n2s-shareText-primary">{{platform.text}} </span>
                  <span class="n2s-shareText-secondary">{{addedText}}</span>
                </span>

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
  @Input() url:string;
  @Input() title:string;

  ngOnInit(){
    this.platform = platforms[this.platformName];
  }

  click(){
    let url = `${this.platform.url}${this.url}&title=${this.title}`
    window.open(url,'_blank', "width=1070,height=700");
  }
}
