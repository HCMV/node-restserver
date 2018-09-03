
## Rest Server

  

### esta es una aplicación de rest server que permite consultar bd mongo utilizando métodos GET, PUT, POST, DELETE:
* CRUDS
     * [Usuarios](#usuarios)
     * [Categorías](#categorias)
     * [Productos](#productos)
  

libs: https://documenter.getpostman.com/view/5046705/RWaDVWYQ

  

Set token Environment

```

let resp = pm.response.json();

  

if(resp.ok){

let token = resp.token

let usuario = resp.usuario.nombre;

  

pm.environment.set("token", token);

}else{

console.log('no se actualizó el token');

}

```

Función login: retorna Token JWT, que es validado por todos los métodos.
Call Authorization en Header: `Authorization = {{token}}`

  
## usuarios
**_Crear_**, **_modificar_** y **_eliminar_** usuario son opciones validas sólo para **credenciales de administrador** después de realizar login.

  

**_Buscar_** usuarios es una opción permitida para todos los usuarios:

  

**{{url}}**: dirección donde se aloja la app.

Método GET:

`{{url}}/usuario?desde=0&limite=5`

*  **_Opcional_**

*  **desde**: Inicio de la visualización de registros. Ej. desde=5 comienza con el registro 6.

*  **limite**: Cantidad de registros que serán visualizados en la búsqueda.

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.

  

Método POST:

`{{url}}/login`

*  **_Requerido_**

*  **Body**: *nombre*, *password*, retorna datos de usuario y token que se utiliza para los otros métodos.

  

`{{url}}/google`

*  **_Requerido_**

*  **Body**: *idtoken*, realiza login con google, si el usuario no se encuentra en la bd, lo crea, en caso de que exista anterior al google sign, solicita que ingrese con `{{url}}/login`.

`{{url}}/usuario`

*  **_Requerido_**

*  **Body**: *nombre*, *email*, *password* como parámetros requeridos, parámetro *role* es opcional.

*  **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita crear usuario.

  

Método PUT:

`{{url}}/usuario/id_usuario`

*  **_Requerido_**

*  **Body**: *nombre*, *email*, *img*, *role*, *estado*, se debe enviar al menos 1 parámetro.

*  **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita editar usuario.

  

Método DELETE:

`{{url}}/usuario/id_usuario`

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita eliminar usuario.

Permite editar , enviados en el body.

  ## Categorías
**_eliminar_** categoría es valida sólo para **credenciales de administrador** después de realizar login.

**{{url}}**: dirección donde se aloja la app.

Método GET:

`{{url}}/categoria?desde=0&limite=5`

*  **_Opcional_**

*  **desde**: Inicio de la visualización de registros. Ej. desde=5 comienza con el registro 6.

*  **limite**: Cantidad de registros que serán visualizados en la búsqueda.

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.

`{{url}}/categoria/id_categoria`

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.

Método POST:

`{{url}}/categoria`

*  **_Requerido_**

*  **Body**: *descripcion* como parámetros requeridos.

*  **Headers**: debe ser enviado token que retorna login.

Método PUT:

`{{url}}/categoria/id_categoria`

*  **_Requerido_**

*  **Body**: *descripcion*.

*  **Headers**: debe ser enviado token que retorna login.
  
Método DELETE:

`{{url}}/categoria/id_categoria`

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login, role debe ser *ADMIN_ROLE* para que permita eliminar categoría.

## Productos

**{{url}}**: dirección donde se aloja la app.

Método GET:

`{{url}}/producto?desde=0&limite=5`

*  **_Opcional_**

*  **desde**: Inicio de la visualización de registros. Ej. desde=5 comienza con el registro 6.

*  **limite**: Cantidad de registros que serán visualizados en la búsqueda.

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.

`{{url}}/producto/id_producto`

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.

`{{url}}/producto/buscar/termino`
`termino`: nombre de producto a buscar

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.

Método POST:

`{{url}}/producto`

*  **_Requerido_**

*  **Body**: *descripcion* como parámetros requeridos.

*  **Headers**: debe ser enviado token que retorna login.

Método PUT:

`{{url}}/producto/id_producto`

*  **_Requerido_**

*  **Body**: *descripcion*.

*  **Headers**: debe ser enviado token que retorna login.
  
Método DELETE:

`{{url}}/producto/id_producto`

*  **_Requerido_**

*  **Headers**: debe ser enviado token que retorna login.



Para iniciar no olvidar ejecutar:

```npm install```
