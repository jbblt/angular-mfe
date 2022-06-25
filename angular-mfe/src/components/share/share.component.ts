import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { exportedReactFunctionToOtherMfe } from '@jbblt/react-mfe';
import { state$ } from '@jbblt/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent implements OnInit, OnDestroy {
  public onClickCallReact() {
    console.log(exportedReactFunctionToOtherMfe());
  }

  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = state$.subscribe((data: any) => {
      console.log('Angular ', data);
    });
  }

  ngOnDestroy(): void {
    state$.next({ data: 'Angular data' });
    this.subscription.unsubscribe();
  }
}
