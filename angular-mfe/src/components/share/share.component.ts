import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { reactFunctionExported } from '@jbblt/react-mfe';

@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent {
  public onClickCallReact(optionPassed?: string) {
    console.log(reactFunctionExported(optionPassed));
  }
}
