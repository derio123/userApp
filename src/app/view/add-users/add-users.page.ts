import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, User } from 'src/app/models/storage.service';
import { ToastController, Platform, IonList } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.page.html',
  styleUrls: ['./add-users.page.scss'],
})
export class AddUsersPage implements OnInit {

  constructor() {}
   ngOnInit() {
  }

  //Criação de um novo usuário
  addUser(){
    
  }
  //Carrega os dados dos usuarios
  loadUser(){
   
  }

  atUser(user: User) {
    
  }
  //mostra para o usuario as operações
  async showToast(msg){
    
  }


}
