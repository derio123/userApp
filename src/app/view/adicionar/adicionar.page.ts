import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService, User } from 'src/app/models/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  user: User = { //Lista array teste
    id: '',
    nome: '',
    email: '',
    nacionalidade: ['', 'Teste', 'Brasileiro', 'Argentino', 'Indiano', 'Americano', 'Cubano'],
    estado: ['', 'Teste', 'Distrito Federal', 'São Paulo', 'Rio de Janeiro', 'Bahia', 'Minas Gerais'],
    escolaridade: ['', 'Teste', 'Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'],
    situacao_conjugal: ['', 'Teste', 'Solterio', 'Casado', 'Viúvo'],
    situacao_escolar: ['', 'Sim', 'Não'],
    nome_mae: '',
    nome_pai: '',
    modificado: 0
  };
 
  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id'); //passa o parametro para verificar o usuário
    if (id) {
      this.storageService.getUsers(id).subscribe(user => {
        this.user = user;
      });
    }
  }
 
  addUser() { // adiciona o usuário.
    this.storageService.addUser(this.user).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Usuário adicionar');
    }, err => {
      this.showToast('Houve um problema ao adicionar o usuário:(');
    });
  }
 
  atUser() { //atualizar os dados do usuário
    this.storageService.atUser(this.user).then(() => {
      this.showToast('Usuário atualizado');
      this.router.navigateByUrl('/');
    }, err => {
      this.showToast('Houve um problema ao atualizar :(');
    });
  }

  exUser(){  //excluir todos dados do usuário
    this.storageService.exUser(this.user.id).then(()=>{
      this.showToast('Usuário atualizado');
      this.router.navigateByUrl('/');
    }, err => {
      this.showToast('Houve problema ao exlcuir!!!');
    });
  }
 
  showToast(msg) { //Mostra as messagens para usuário
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
