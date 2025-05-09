import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


export interface StoreComponent {
  label: string;
  content: Type<any>;  
}

@Component({
  selector: 'app-store',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent {

}
