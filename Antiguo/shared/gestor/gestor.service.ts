import { UserModel } from './../../model/user.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { StringifyOptions } from 'querystring';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GestorService {

  public API = 'http://192.168.1.102:8080/empresa';

  constructor(private http: HttpClient) {

  }
  getAll(service: string): Observable<any> {
    return this.http.get(this.API + service);
  }
  add(service: string, name: string, email: string): Observable<any>{
    return this.http.get(this.API + service + '/' +name+ '/' +email);
  }

  post(service: string, id: string){
    return this.http.delete(this.API + service + '/' + id);
  }

  get(service: string, id: any) {
    return this.http.get(this.API + service + '/' + id);
  }
  DESCARGARPDF(){
    return this.http.get(this.API +"/pdf");
  }
  edit(user: any) {
    return this.http.put(this.API+'/actualizar/' + user.id, user); 
  }
  save(user: UserModel): Observable<any> {
      return this.http.post(this.API+"/add", user);
    }
    public validate(user: UserModel): boolean{
      let isValid = true;
      if(!user.name){
        isValid = false;
      }if(!user.email){
        isValid = false;
      }
      return isValid;
    }
    public validateName(name: string): boolean{
      let NameIsValid = true;
      if(!name){
        NameIsValid = false;
      }
      return NameIsValid;
    }
    public validateId(id: number): boolean{
      let IdIsValid = false;
      if(!id){
        IdIsValid = true;
      }
      return IdIsValid;
    }
  REMOVE(user: UserModel){
    return this.http.delete(this.API + "/borrarById/" + user.id);
  }
  removeById(){
    
  }
}
