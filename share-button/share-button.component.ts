import { Component, Input, OnInit,trigger,state,style,transition,animate }
        from '@angular/core';
import { Platform, platforms } from '../platforms.utils'
import { Properties } from '../properties.utils'


@Component({
  selector: 'share-button',
  template: `<a href="{{this.url}}" (click)="click($event)" target='_blank'>
              <div  (click)="click($event)"
                class="n2s-share-btn n2s-share-btn-{{platform.name}} n2s-{{direction}}-margin
                  {{textEnabled ? 'n2s-share-btn-with-text' : '' }}">
                <i class="ic fa fa-{{platform.logoOfficial}}"></i>
                <span class="n2s-shareText" *ngIf="textEnabled">
                  <span class="n2s-shareText-primary">{{platform.text}} </span>
                  <span class="n2s-shareText-secondary">{{addedText}}</span>
                </span>
              </div>
            </a>
            `,
  styleUrls:['./share-button.css']
})
export class ShareButtonComponent implements OnInit{
  @Input() platformName;
  platform:Platform;
  @Input() textEnabled: boolean;
  @Input() addedText:string;
  @Input() direction:string = 'horizontal';
  @Input() properties:Properties;
  url:string;

  constructor(){

  }

  ngOnInit(){
    this.platform = platforms[this.platformName];
    this.constructUrl();
  }

  click(event){
      window.open(this.url, 'newwindow', 'width=1070, height=600');
      event.preventDefault();
  }

  constructUrl(){
    this.url = this.platform.url + this.properties.url;
    if(this.platform.properties){
        for(let key in this.platform.properties){
          // if the property has been found.
          let val = this.properties[this.platform.properties[key]];
          if(val){
            this.url += `&${key}=${val}`;
          }
        }
    }
  }
}
