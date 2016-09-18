import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ShareContainerComponent }     from './share-container.component';
import { ShareButtonComponent }     from './share-button.component';


@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [
    ShareContainerComponent, ShareButtonComponent
    //jhgjgh
  ],
  exports:      [ ShareContainerComponent ]
})
export class ShareModule { }
