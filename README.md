# Proyecto Veterinaria Patitas

## Descripción
Este proyecto es un sistema de gestión de citas para una veterinaria. Está desarrollado con Angular para el frontend, Spring Boot para el backend y MongoDB como base de datos.

## Tecnologías utilizadas
- **Frontend**: Angular, Bootstrap
- **Backend**: Spring Boot, Java
- **Base de datos**: MongoDB

## Requisitos previos
- Node.js (v16 o superior)
- Angular CLI (v15 o superior)
- Java JDK (v17 o superior)
- MongoDB (v6 o superior)

## Instalaciónes y Configuraciones

1. Clona el repositorio:
   
		git clone https://github.com/ErickCh94/repositorio-prueba
		
   Ya sea de la branch main o la branch erick
   
   		https://github.com/ErickCh94/repositorio-prueba/tree/erick
   
2.-Instala dependencias del Frontend

-Navegar a la carpeta:
    
    cd veterinaria-frontend

-Instalar dependencias:

     npm install
	
## Configuracion del Backend

1. **Java Development Kit (JDK)**:
   -Se requiere tener instalado
   - Versión: JDK 17 o superior.
   - Verificar instalación:
     
         java -version
     
	 Resultado esperado:

	      openjdk version "17.0.13" 2024-10-15

		    OpenJDK Runtime Environment Temurin-17.0.13+11 (build 17.0.13+11)

		    OpenJDK 64-Bit Server VM Temurin-17.0.13+11 (build 17.0.13+11, mixed mode, sharing)
	
De no tenerlo es necesario descargarlo e instalarlo.

Descargar: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html.


2. **MongoDB**:
   - Versión: MongoDB 6 o superior.
   - Verificar instalación:

         mongod --version

   - Descargar y configurar: [MongoDB Download Center](https://www.mongodb.com/try/download/community).

Verificar que MongoDB esta en ejecución:

    mongod

3. **Configuración de credenciales para la base de datos**:
	
- Asegúrate de que MongoDB esté en ejecución
- Abrir IDE (Eclipse, IntelliJ, VSC)
- Configurar las credenciales para la conexion a la base de datos en el archivo: src/main/resources/application.properties
- Asegúrate de que la URL de MongoDB sea correcta:
  - Ejemplo:
    
		#config de MongoDB
		spring.data.mongodb.uri=mongodb://localhost:27017/test
		spring.data.mongodb.database=test
		#config del puerto del servidor
		server.port=8080

4. **Ejecutar el Backend**
	- Navegar a la carpeta del backend:

	      cd Veterinaria
   
	- Ejecutar el Backend. De preferencia con el comando:
 
	      mvnw.cmd spring-boot:run
 
  -Nota: Tambien puede ser ejecutado desde un IDE como Eclipse
	
5. **Verificar que el backend esta en ejecución**
   
	- Ya sea en http://localhost:8080 o probando los siguientes endpoints en Postman:
	
           GET: http://localhost:8080/citas/listar
              	
           POST: http://localhost:8080/citas/guardar
              		Ejemplo de cuerpo de la solicitud:
              			{
              				"nombreCliente": "Pedro",
              				"nombreMascota": "Dino",
              				"razonCita": "Vacuna",
              				"fechaHora": "2025-02-26T10:30:00"
              			}
              	
           GET: http://localhost:8080/citas/buscar/{id}
              	
          POST: http://localhost:8080/citas/eliminar 
              		Ejemplo de cuerpo de la solicitud:
              		{
              		  "id": "67c0d4fa22a90b1418dbb876"
              		}
## Iniciar el Frontend
	
    cd veterinaria-frontend
	  ng serve
	
Abir navegador y visitar http://localhost:4200 para probar la aplicacion.
