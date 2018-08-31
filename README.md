## Rest Server

### esta es una aplicación de rest server que permite consultar bd mongo utilizando métodos: 
- GET
- PUT
- POST
- DELETE

Función login: retorna Token JWT, que es validado por todos los métodos.

**_Crear_**, **_modificar_** y **_eliminar_** usuario son opciones validas sólo para **credenciales de administrador** después de realizar login.

**_Buscar_** usuarios es una opción permitida para todos los usuarios:

**{{url}}**: dirección donde se aloja la app.
Método GET:
`{{url}}/usuario?desde=0&limite=5`
* **_Opcional_**
     * **desde**: Inicio de la visualización de registros. Ej. desde=5 comienza con el registro 6.
     * **limite**: Cantidad de registros que serán visualizados en la búsqueda.
* **_Requerido_**
     * **Headers**: debe ser enviado token que retorna login.

Método POST:
`{{url}}/login`
* **_Requerido_**
     * **Body**: *nombre*, *password*, retorna datos de usuario y token que se utiliza para los otros métodos.

`{{url}}/usuario`
* **_Requerido_**
     * **Body**: *nombre*, *email*, *password* como parámetros requeridos, parámetro *role* es opcional.
     * **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita crear usuario.

Método PUT:
`{{url}}/usuario/_id_usuario`
* **_Requerido_**
     * **Body**: *nombre*, *email*, *img*, *role*, *estado*, se debe enviar al menos 1 parámetro.
     * **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita crear usuario.
Permite editar , enviados en el body.

Método DELETE:
`{{url}}/usuario/_id_usuario`
* **_Requerido_**
     * **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita crear usuario.
Permite editar , enviados en el body.


Para iniciar no olvidar ejecutar:
```npm install```