import {Component, Input, input } from '@angular/core';
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [
    NzAvatarComponent,
    NzCardMetaComponent,
    NzCardComponent,
    NzIconDirective
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  // The title of the item
  @Input("title")
  title$!: string;
  // The description of the item
  @Input("description")
  description$!: string;
  // The avatar image URL
  @Input("avatarImageUrl")
  avatarImageUrl$!: string;
  // The item image URL
  @Input("itemImageUrl")
  itemImageUrl$!: string;
}
