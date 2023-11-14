 # 🅰Curso con Angular16: Proyecto del curso Cluster Tic Galicia
 
 # 🤘Impartido por: David García Valiñas
 
 # <p align="center"> <img src="https://readme-typing-svg.demolab.com?font=Libre+Baskerville&size=45&duration=3100&pause=500&color=1e295a&center=true&vCenter=true&width=940&lines=Tweempus" align="middle" alt="Tweempus" width="100%"/>![100px](Tweempus/../src/assets/images/TwLoginDark.png) 
 </p> 

 # <p align="center"> Proyecto realizado con ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular16</p> 

## Descripción del Proyecto:
### <p align="center"> "Tweempus" es una aplicación Angular16 que permite el registro de usuarios y almacena la información en un servidor JSON. La documentación detallada incluye información sobre la estructura del proyecto, comandos útiles y recursos utilizados. </p>

## 🐦 Sitio Web
### Hosting URL: [Tweempus](https://tweempus.netlify.app/)  


## 🎱 URL Importantes
### Diseño 👉 :  [Bootstrap](https://getbootstrap.com/) 
### Hosting GitHub 👉  : [AngularComponentBasic](https://cintutudev.github.io/AngularComponentBasic) 
### Flexbox  👉 : [Conceptos básicos](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
### HostListener  👉 : [HostListener](https://angular.io/api/core/HostListener)
### npmjs 👉 : [Migrar de css a scss](https://www.npmjs.com/package/schematics-scss-migrate)
### Transloco : [Traduciones](https://github.com/ngneat/transloco/tree/master)

## 🎮Comando de Instalación
* Crear proyecto con prefijo para especificar todos los componentes:
```
ng new Tweempus --prefix tweempus
```
* Instalación de JSON Server de manera global:
```
npm install -g json-server
```
## 🛠Comando de Compilación (Opcional)
* Instalación de JSON Server de manera global:
```
npm install -g json-server
```
## 🕹Comando de Ejecución
* Iniciar un servidor de desarrollo:
```
ng serve
```
```
ng s -o
```
* Ejecutar JSON Server dentro del proyecto:
```
json-server --watch db.json
```
## ✔ Detalles Adicionales

### Tecnologías Utilizadas
En el desarrollo de "Tweempus", se emplearon las siguientes tecnologías:

- Angular16: El framework principal que proporciona una estructura robusta y modular para construir aplicaciones web.
- FormBuilder 📝: Utilizado para crear y gestionar formularios reactivos en Angular, facilitando la captura y validación de datos de usuario.
- Servicios de Autenticación  🔐: Implementados para gestionar la autenticación de usuarios, permitiendo un acceso seguro y personalizado a la aplicación.

### Arquitectura de la Aplicación
La arquitectura de "Tweempus" sigue un patrón de diseño Modelo-Vista-Controlador (MVC), que facilita la separación de responsabilidades y el mantenimiento del código. La estructura del proyecto se ha diseñado siguiendo una organización por pantallas, lo que ayuda a mantener la claridad y la escalabilidad del código. Además, se implementa el concepto de entidades para agrupar lógica relacionada, facilitando la comprensión y la gestión de la aplicación.

### Decisiones Técnicas

Durante el desarrollo de este proyecto, se tomaron varias decisiones técnicas para mejorar la eficiencia y la calidad del código. Algunas de estas decisiones incluyen:

- **Diseño Responsive:** Se implementó un diseño responsive para asegurar que la interfaz de usuario se adapte de manera óptima a una variedad de tamaños de pantalla. Esto garantiza una experiencia de usuario consistente y amigable en diferentes dispositivos.

- **FormBuilder para Formularios Reactivos:** La creación y gestión de formularios reactivos se lleva a cabo mediante `FormBuilder`, una característica de Angular que simplifica la captura y validación de datos de usuario en formularios.

- **Servicios de Autenticación:** Se implementaron servicios de autenticación para garantizar un acceso seguro a la aplicación, gestionando la identidad de los usuarios de manera eficiente.

- **Migración a SCSS:** Para mejorar la mantenibilidad y la estructura del código, se migró de CSS a SCSS utilizando el paquete npm "schematics-scss-migrate".

## 🧠 Lo Que He Aprendido 
### Angular16 y Frameworks Web
- Profundización en el uso de Angular16 para construir aplicaciones web modernas y escalables.
- Exploración de las mejores prácticas en el desarrollo de componentes, módulos y servicios.
### Formularios Reactivos con FormBuilder
- Implementación de formularios reactivos utilizando `FormBuilder` de Angular para una gestión eficiente de la entrada de usuario.
- Validación de datos de usuario y respuesta a eventos en tiempo real en formularios.
### Servicios de Autenticación
- Diseño e implementación de servicios de autenticación para garantizar la seguridad y la personalización en el acceso a la aplicación.
- Integración de la autenticación con las funcionalidades del proyecto.
### Diseño Responsivo y Flexbox
- Desarrollo de un diseño responsive para asegurar una experiencia de usuario consistente en diferentes dispositivos y pantallas.
- Implementación de Flexbox para la disposición y el posicionamiento flexibles de elementos en la interfaz de usuario.
### Uso de Herramientas y Comandos
- Utilización efectiva de comandos de Angular para la creación de proyectos, generación de componentes, módulos y más.
- Integración de herramientas externas como JSON Server para simular un servidor y facilitar el desarrollo y pruebas.

## Diferentes Tipos de Binding en Angular 🔄

Durante el curso de Angular16, he profundizado en los conceptos clave de enlace de datos (binding) y he practicado activamente con:

### Property Binding
- Aprendí a enlazar propiedades de un componente a propiedades de un elemento del DOM.
### Event Binding
- Comprendí la dinámica de la vinculación de eventos, permitiendo que acciones del usuario desencadenen funciones en el componente.
### Two-Way Binding
- Experimenté con el poder del enlace bidireccional, facilitando la actualización sincrónica entre el componente y la interfaz de usuario.
- Aprendí a utilizar la sintaxis de `[(ngModel)]` para simplificar la manipulación de datos en ambos sentidos.
### @Input y @Output
- Utilicé decoradores como `@Input` para recibir datos en un componente desde su componente padre.
- Implementé `@Output` para emitir eventos desde un componente hijo y capturarlos en el componente padre.

Además, he incorporado Transloco para la internacionalización de la aplicación, permitiéndome gestionar las traducciones de manera eficiente. Esta herramienta me ha brindado la flexibilidad necesaria para adaptar fácilmente la interfaz de usuario a diferentes idiomas, mejorando así la accesibilidad y la experiencia del usuario en todo el mundo.

Estas prácticas adicionales han fortalecido mi comprensión de los fundamentos de Angular y me han proporcionado la capacidad de diseñar aplicaciones más interactivas y dinámicas.

## 🙌 Agradecimientos

Quisiera expresar mi sincero agradecimiento a las siguientes personas y plataformas, que han sido fundamentales en mi formación con Angular16:

### David García Valiñas
- 🤘 Gracias a mi tutor [David](https://www.linkedin.com/in/davidvalinhas/) por su guía, paciencia y conocimientos compartidos durante el curso. Su apoyo ha sido fundamental para mi desarrollo como desarrollador Angular.

### Campus MVP
- 🚀 Agradezco a [Campus MVP](https://www.campusmvp.es/) por proporcionar un entorno educativo excepcional y recursos valiosos que han enriquecido mi experiencia de aprendizaje.

### Cluster Tic Galicia
- 🌐 Agradezco a [Cluster Tic Galicia](https://formacion.clusterticgalicia.com/) por brindarme la oportunidad de participar en esta acción formativa y contribuir a mi crecimiento profesional.
<div align="center">
 <img src="https://github.com/argyleink/transition.css/blob/main/gif/wipe-up.gif?raw=true" />
</div>
 ¡Gracias por su apoyo continuo!

