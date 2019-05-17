import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface User {
  id: string,
  nome: string,
  email: string,
  nacionalidade: ['', 'Teste', 'Brasileiro', 'Argentino', 'Indiano', 'Americano', 'Cubano'],
  estado: ['', 'Teste', 'Distrito Federal', 'São Paulo', 'Rio de Janeiro', 'Bahia', 'Minas Gerais'],
  escolaridade: ['', 'Teste', 'Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'],
  situacao_conjugal: ['', 'Teste', 'Solterio', 'Casado', 'Viúvo'],
  situacao_escolar: ['', 'Sim', 'Não'],
  nome_mae: string,
  nome_pai: string,
  modificado: number
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private userCollection: AngularFirestoreCollection<User>;

  private users: Observable<User[]>;

  constructor(private db: AngularFirestore) {
    this.userCollection = db.collection<User>('user');

    this.users = this.userCollection.snapshotChanges().pipe( 
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTodosUsers(): Observable<User[]>  { //Retorna todos os usuários.
    return this.users;
  }

  getUsers(id:string): Observable<User> { //pega os usuários existentes no banco do firebase.
    return this.userCollection.doc<User>(id).valueChanges().pipe(
      take(1),
      map(user => {
        user.id = id;
        return user
      })
    );
  }
  //Criação para adicionar os usuários no sistema
  addUser(user: User): Promise<DocumentReference> { //Adiciona os dados no banco.
    return this.userCollection.add(user);
  }

  atUser(user: User): Promise<void> {
    return this.userCollection.doc(user.id).update({ //atualiza os dados no banco.
      name: user.nome, email: user.email, nacionalidade: user.nacionalidade,
      estado: user.estado, escolaridade: user.escolaridade, 
      situacao_conjugal: user.situacao_conjugal, situacao_escolar: user.situacao_escolar,
      nome_mae: user.nome_mae
    });
  }

  exUser(id: string): Promise<void>  { // exclui os dados do banco.
    return this.userCollection.doc(id).delete();
  }
}
