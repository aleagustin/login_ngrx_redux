import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'
import * as action from  '../redux/login.actions'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String
  password: String
  count$ : Observable<Boolean>


  constructor(private data$: DataServiceService, private store: Store<{login: Boolean}>) { }

  ngOnInit() {
    this.count$ = this.store.pipe(select('login'))
  }


  getLogin() {

    let data = {
      user: {
        'email': this.email,
        'password': this.password
      }
    }

    console.log(data)

    this.data$.doLogin(data).subscribe((data: any) => {

      console.log("DATA ==>", data)
      this.islogin()

    }, (err) => {
   
      console.log("ERR ==>", err)
      this.notLogin()
    })

  }


  islogin(){
    this.store.dispatch(action.is_login({login: true}))
  }

  notLogin(){
    this.store.dispatch(action.not_login({login: false}))
  }





}
