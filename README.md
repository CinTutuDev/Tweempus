 # 🅰Módulo 2 del curso con Angular16: Proyecto del curso Cluster Tic Galicia
 # <p align="center"> <img src="https://readme-typing-svg.demolab.com?font=Libre+Baskerville&size=45&duration=3100&pause=500&color=ff3d5c&center=true&vCenter=true&width=940&lines=Tweempus" align="middle" alt="fotosgram" width="100%"/>![100px](https://github.com/CinTutuDev/Tweempus/assets/71487857/5fc98eca-4fc0-4b55-9062-51d7a7389b32) 
 </p> 

 # <p align="center"> Proyecto realizado con ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular16</p> 

## 🐦 Sitio Web
### Hosting URL: 

## 🏍 Servidor

Ejecutar `ng serve` ó `ng s -o`para un servidor de desarrollo. Navegue a `http://localhost:4200/

## 🛠 Build

Para construir el proyecto `ng build` to build the project. Se almacenarán en la carpeta  `dist/` directory.

## 🎱 URL Importantes
### Diseño 👉 :  [Bootstrap](https://getbootstrap.com/) 
### Hosting GitHub 👉  : [AngularComponentBasic](https://cintutudev.github.io/AngularComponentBasic) 
### Flexbox  👉 : [Conceptos básicos](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
### HostListener  👉 : [HostListener](https://angular.io/api/core/HostListener)

## 🎮Comandos
* Crear proyecto con prefijo para especificar todos los componentes que se van ha crear

```
 ng new Tweempus --prefix tweempus
```
* Crear módulos
 ```
 ng g m core
 ```
* Crear módulos y routing
```
ng g m profile  --routing
```
* Crear componentes sin archivo de prueba
```
 ng g c header --skip-tests
```
* Crear enviroments
```
ng generate environments
```
* Generar un modulo con un componente sin archivo de pruebas y en la carpeta que estamos
```
 ng g c dashboard --skip-tests --flat
```
* Generar componente sin archivo de prueba ni hoja de estilo
```
ng g c contador --skip-tests --style none
```
* Generar clase modelo sin archivo de prueba
```
ng g class twimp.model --skip-tests
```
* Generar directivas
```
ng g directive confirmation-panel --skip-tests
```
* Generar Pipe
```
ng g pipe number-prefix --skip-tests
```
* Generar Service
```
ng g service author --skip-tests
```
* Generar Clase
```
ng g class token --skip-tests
```
* Crear Pipes sin archivo de pruebas
```
 ng g pipe sort-by --skip-tests
```
## 📊 Instalación de JSON Server 
1º De manera global:
```
npm install -g json-server
```
2º Dentro del proyecto
```
json-server --watch db.json
```
## 👀❗ Para cambiar el último commit
```
 git commit --amend -m "Add(formulario de login):Reactive Forms"
```
```
git push --force
```




