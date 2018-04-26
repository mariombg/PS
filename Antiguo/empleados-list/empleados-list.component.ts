import {Component, OnInit} from '@angular/core';
import {GestorService} from '../shared/gestor/gestor.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserModel } from '../model/user.model';
@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<any>;
  e: any = {};
  sub: Subscription;
  private IdIsValid: boolean = true;
  private message: string = "";
  private user: UserModel;
  constructor(private gestorService: GestorService, private router: Router) {}

  public edit(user: String): void{
    this.router.navigate(['/users-add']);
  }
  ngOnInit() {
    this.gestorService.getAll('/all').subscribe(data => {
      this.users = data;
    });
  }
  gotoList() {
    this.router.navigate(['/users-list']);
  }
}