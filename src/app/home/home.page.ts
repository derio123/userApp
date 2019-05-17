import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageService, User } from '../models/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
   private users: Observable<User[]>;

  constructor(private ToastCtrl: ToastController,
    private storageService: StorageService, 
    private toastController: ToastController) {
  }

  ngOnInit() {
    this.users = this.storageService.getTodosUsers(); //Carrega todos os usuários
  }
  

  //mostra para o usuario as atulizações feitas
  async showToast(msg) {
    const message = await this.ToastCtrl.create({
      translucent: true,
      message: msg,
      duration: 2000
    });
    message.present();
  }
}