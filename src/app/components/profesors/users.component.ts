import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {
  profesors: User[];
  users: Observable<User[]>;
  @Input() filter: string;
  @Output() selectedUsers = new EventEmitter<User>();


  constructor(private usersService: UsersService, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filter.currentValue) {
      this.filter = changes.filter.currentValue;
    }
  }

  selectUser(user: User) {
    this.selectedUsers.emit(user);
  }


}
