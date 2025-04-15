import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { UserModel } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: UserModel;
  @Output() select = new EventEmitter();
  @Input({required: true}) selectedUser!: boolean;

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onUserSelect() {
    this.select.emit(this.user.id);
  }
}
