# # primeiro-app-nodejs


Aplicativo realizado na aula de Desenvolvimento Mobile da Fatec Itu pelo professor Ricardo Leme.
A aplicação fala algumas frases estabelecidas aleatoriamente e se você quiser pode parar quando achar necessária.

Bibliotecas e Software utilizado na aplicação:
- Visual Code
- React Native
- Json
- NodeJS

# Primeiros passos
Em ambiente Windows, configure o PowerShell como Administrador, para evitar erros na execução de scripts, digitando:
`$ Set-ExecutionPolicy Unrestricted (selecione a opção A-All)`

## Instale o expo-cli de forma global
`$ npm install -g expo-cli`

## Para inicializar o projeto
    $ expo init fala-einstein
    $ cd fala-einstein
    $ expo init

## Para instalar a API Speech do Expo

    $ cd fala-einstein
    $ expo install expo-speech
    $ expo init

## Instalação
Fala Eistein necessita do node.js para rodar.

## Instale as dependências e devDependências e inicie o servidor

    $ git clone https://github.com/karolinelope/primeiro-app-nodejs
    $ cd fala-einstein
    $ npm install -d
    $ node app
	
## Gerando a APK para o Android
Obtenha uma conta gratuita do Expo antes de iniciar
Edite o arquivo app.json e informe os dados do bundle, conforme exemplo:
    "ios": {
          "bundleIdentifier": "br.edu.fatecitu.falaeinstein",
          "buildNumber": "1.0.0"
        },
    "android": {
          "package": "br.edu.fatecitu.falaeinstein",
          "versionCode": 1
        },
		
## Digite o comando de geração da APK:
`$ expo build:android -t apk`
