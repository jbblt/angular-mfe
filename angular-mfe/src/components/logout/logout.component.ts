import { Component, OnDestroy, OnInit } from '@angular/core';
import { exportedReactFunctionToOtherMfe } from '@jbblt/react-mfe';
import { state$ } from '@jbblt/utility';
import { Subscription } from 'rxjs';

@Component({
  selector: 'share',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit, OnDestroy {
  public onClickCallReact() {
    console.log(exportedReactFunctionToOtherMfe());
  }
  userLogged!: string;
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = state$.subscribe((data: any) => {
      if (data.data) {
        this.userLogged = data.data;
      }
    });
  }

  public onLogOut() {
    state$.next({ data: '' });
    this.userLogged = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
