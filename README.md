UserApp

- Instuções para instalação e configuração do Ionic
Para iniciamos precisamos instalar o ionic (Versão 4) ou na (Versão 3 na documentação do ionic links no final),
veja o procedimento de instalação via terminal. 
Abra o cmd(Windows), terminal mac ou terminal linux e digite:

"npm install -g ionic"

na versão 3 exemplo:

"npm install -g ionic@3.2"

obs: precisa instalar ultima versão do node e npm(link no final documento).
Logo após isso precisa de criar o template existe 3 populares como: blank, tabs e sidemenu.
Utilizado no projeto ultimo o sidemenu segue abaixo como criar, digite:

"ionic start myApp sidemenu"

Logo após a criação do template entra pasta e digite:

"cd myApp"
"ionic serve"
ou alias 
"ionic s"

- Instuções para pacotes adiconais
Depois de criar nosso projeto agora vamos instalar a versão do firebase da google, digite:

"npm i @angular/fire"

Logo após vamos criar gerar nova pagina e nosso serviço para conectamos banco de dados.
Digite no terminal os comandos abaixo:

"ionic g page pages/adicionar"

"ionic g service services/storage"

- Comentários adiconais:
Links logo abaixo:

Ionic 4: https://ionicframework.com/docs/installation/cli

NodeJs: https://nodejs.org/en/download/

Pacote do firebase: https://www.npmjs.com/package/@angular/fire;


