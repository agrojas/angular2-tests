# angular2-tests

- Pruebas de ng2 utilizando angular-cli (https://github.com/angular/angular-cli) 

:warning: Para cada prueba crear un branch distinto

- Manejo de branchs (https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)

### Crear el esqueleto de una aplicación Angular 2

``` 
ng new mi-nuevo-proyecto-angular2
``` 


En la carpeta se va a crear una estructura de archivos y carpetas con el siguiente formato

``` 
-> config
-> e2e
-> node_modules
-> public
-> src
-> typings
.clang-format
.editorconfig
.gitignore
.angular-cli.json
.angular-cli-build.json
.package.json
.tslint.json
.typings.json
``` 

### Ejecutar server

:warning: Ejecutar con permisos de administrador 
``` 
ng server
``` 

Por defecto se ejecutara en

``` 
http://localhost:4200
``` 

Si se quiere cambiar el puerto se puede utilioizando
``` 
ng serve --port <portNumber>
``` 
