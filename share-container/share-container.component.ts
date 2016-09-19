import { Component, Input, OnInit, ViewEncapsulation, trigger, state, style, transition, animate}
        from '@angular/core';

@Component({
  selector: 'my-share-container',
  templateUrl: './share-container.component.html',
  styleUrls: ['./share-container.component.css'],
  // Emulated is the Default, change it to ViewEncapsulation.None if you
  // want to costumize ng 2 share.
  encapsulation: ViewEncapsulation.None,
  animations: [
          trigger('expandedState', [
            state('expanded', style({
              width:'*',
              height:'*'
            })),
            state('collapsed', style({
              width:'0',
              height:'0'
            })),
            transition('collapsed <=> expanded', animate('100ms ease-in'))
          ])
        ]
})
export class ShareContainerComponent implements OnInit{
  // Primary platforms that appear
  @Input() platforms = ['twitter', 'facebook'];
  // Secondary Platforms that appear when expanded
  @Input() secondaryPlatforms =  ['googlePlus','reddit','pinterest', 'linkedin'];
  // Wether or not the component is expendable
  @Input() expandable:boolean = true;
  // tells if the text must be enabled on primary platforms
  @Input() textEnabled:boolean = false;
  // Text added to the vanilla message, ex: 'your creation' will result in
  // 'Tweet your creation' for twitter or 'Share your creation' for fb
  @Input() addedText:string;
  // horizontal layout or vertical layout (_accessed via getter & setter)
  _direction:string = 'horizontal';
  // state of the secondary platform expandable pannel
  expandedState:string = "collapsed";
  url:string; title:string; description:string; image:string;

  ngOnInit(){
    this.url = this.getMetaContent('og:url') || window.location.href.toString();
    console.log(this.url);
    this.title = this.getMetaContent('og:title') || document.title;
    this.description = this.getMetaContent('og:description');
    this.image = this.getMetaContent('og:image');
  }
  expand(){
    this.expandedState = (this.expandedState == 'collapsed' ? 'expanded' : 'collapsed');
  }

  // safe check to prevent missuses
  @Input()
  set direction(direction){
    if(direction === 'vertical')
      this._direction = direction;
    else
      this._direction = 'horizontal';
  }

  get direction(){
    return this._direction;
  }

  getMetaContent(property: string) {
    let elem = document.querySelector(`meta[property='${property}']`);
    if(elem)
      return elem.getAttribute("content");
    return "";
  }

}
