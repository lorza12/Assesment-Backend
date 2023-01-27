# Assesment-Backend

### Documentation:

Proyecto backend montado en node.js y express, con base de datos MoongoDb No SQl y conexion mongoose para peticiones http.

La funcionalidad del proyecto tiene como objetico los siguientes requerimientos:

![req](https://user-images.githubusercontent.com/115027137/215222150-24689bc0-5d67-4dd7-8cb0-e7b1e59f57cb.png)




## Para correr el codigo y probar 

- Descarga el pryocento y ejecuta el comando npm install para installar tocas lasd dependencias

- Despues use Postman u otro sofward de su preferencia para ejecutar las peticiones http

- Para crear un usuario debes hacer lo siguiente:

- Debes agregue la siguiente ruta: http://localhost:8080/api/users y agregue la siguiente estructura en JSON con metodo POST
 

```
{
     "firstName": "***",
     "lastName": "***",
     "email": "***",
     "password": "***"
}
    
    
 ```
    
- Despues de haber creado tu el usuario deberas logiarte con la siguiente ruta: http://localhost:8080/auth/local/login y agregar la siguiente estructura en JSON con metodo POST

```

{
    "email":"***",
    "password":"***"
}

```
- Esto data al sistema un Token de validacion con el cual podremos estar autentticados dentro de la aplicacion y podremos seguirn con los siguientes pasos:

- Creacion de una lista personalizada 

Para la creacion de una lista de favoritos tendremos que ir a la siguiente ruta: http://localhost:8080/api/lists y agregar la siguiente estructura en JSOn con metodo POST y adicionalmente agregue el Token que obtuvo al darle login en el apartado de Auth => Bearer Token 


```
{
    "tittle":"***",
    "description":"***This is Yula's playlist.She listening to different gendre***",
    "link":"https://*****",
}
```

- Para consultar todas las listas de favoritos que tienes como usuario debes ir a la siguiente ruta: http://localhost:8080/api/lists con metodo GET y se te van a listar todas las listas de favoritos que pertenescan al usuario expecifico 

- Tambien si quieres listar una lista de favortios en expecifico deberas ir a la siguiente ruta: http://localhost:8080/api/lists/:id (id asignado a esa lista de favoritos ) con metodo GET y tendras como respuestas solo esa lista en expecifico 

## NOTA 

- tener en cuenta que el codigo esta configurado para que no permita que otro usuario pueda eliminar o actualizar una lista que no corresponda a la suya 

## RUTAS

![fdfgf](https://user-images.githubusercontent.com/115027137/215222198-289dfabd-3a43-400e-ad80-6dbab78334eb.png)




## preguntas

### Indique cuales son las partes de la siguiente url:

![lllll](https://user-images.githubusercontent.com/115027137/215222216-6b69caf1-8e08-4133-b255-5016f09f0bb6.png)


### Qué es una Web API

Son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.


### Qué es una Web API Restful 

a API Restful  es una interfaz que dos sistemas de computación utilizan para intercambiar información de manera segura a través de Internet. La mayoría de las aplicaciones para empresas deben comunicarse con otras aplicaciones internas o de terceros para llevar a cabo varias tareas. Por ejemplo, para generar nóminas mensuales, su sistema interno de cuentas debe compartir datos con el sistema bancario de sRestful  admiten este intercambio de información porque siguen estándares de comunicación de software seguros, confiables y eficientes.
​
### Cuáles son los códigos de estado 200-, 400-, 500

​
## status 200 (SUCCESSFUL RESPONSE)
​
  - Succeeded request deppeding of the method GET,POST, PATCH , PUT , DELETE 
​
​
## status 400 (CLIENT ERROR RESPONSE)
​
  - bad request: the server could not process the request because of any invalid data 
​
## status 500 (SERVER ERROR RESPONSE)
​
​
  - Internal server error : the server found and error that it  cannot handle
​

​
### When we talk about CRUD, what does it mean?
When someone build an API  the model should have funtionalities like create, read, update, and delete . A model must have the correct funtion in order to complete different actions. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.
​
