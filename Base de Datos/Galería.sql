create database galeria
use galeria

-- Create schemas

-- Create tables
IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Usuario'))
BEGIN
  CREATE TABLE Usuario
  (
    idUsuario INT NOT NULL,
    username VARCHAR(20) NOT NULL,
    clave VARCHAR(20) NOT NULL,
    tipo VARCHAR(10) NOT NULL,
    PRIMARY KEY(idUsuario)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Imagen'))
BEGIN
  CREATE TABLE Imagen
  (
    idImagen INT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200),
    ruta VARCHAR(100) NOT NULL,
    idUsuario INT NOT NULL,
    PRIMARY KEY(idImagen)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Mensaje'))
BEGIN
  CREATE TABLE Mensaje
  (
    idMensaje INT NOT NULL,
    mensaje VARCHAR(500) NOT NULL,
    idEmisor INT NOT NULL,
    idReceptor INT NOT NULL,
    PRIMARY KEY(idMensaje)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Lista'))
BEGIN
  CREATE TABLE Lista
  (
    idLista INT NOT NULL,
    nombreLista VARCHAR(20) NOT NULL,
    idUsuario INT NOT NULL,
    PRIMARY KEY(idLista)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'ListaImagen'))
BEGIN
  CREATE TABLE ListaImagen
  (
    idLista INT NOT NULL,
    idImagen INT NOT NULL,
    PRIMARY KEY(idLista, idImagen)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Relacion'))
BEGIN
  CREATE TABLE Relacion
  (
    idUsuarioUno INT NOT NULL UNIQUE,
    idUsuarioDos INT NOT NULL UNIQUE,
    estado INT NOT NULL,
    idUltimaAccion INT NOT NULL,
    PRIMARY KEY(idUsuarioUno, idUsuarioDos)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Comentario'))
BEGIN
  CREATE TABLE Comentario
  (
    idComentario INT NOT NULL,
    comentario VARCHAR(100) NOT NULL,
    idUsuario INT NOT NULL,
    idPerfil INT NOT NULL,
    idImagen INT NOT NULL,
    PRIMARY KEY(idComentario)
  )
END;

IF (NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Perfil'))
BEGIN
  CREATE TABLE Perfil
  (
    idPerfil INT NOT NULL,
    rutaAvatar VARCHAR(100) NOT NULL,
    idUsuario INT NOT NULL,
    PRIMARY KEY(idPerfil)
  )
END;


-- Create FKs
ALTER TABLE Imagen
    ADD    FOREIGN KEY (idUsuario)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Mensaje
    ADD    FOREIGN KEY (idEmisor)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Mensaje
    ADD    FOREIGN KEY (idReceptor)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE ListaImagen
    ADD    FOREIGN KEY (idLista)
    REFERENCES Lista(idLista)
;
    
ALTER TABLE ListaImagen
    ADD    FOREIGN KEY (idImagen)
    REFERENCES Imagen(idImagen)
;
    
ALTER TABLE Relacion
    ADD    FOREIGN KEY (idUsuarioUno)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Relacion
    ADD    FOREIGN KEY (idUsuarioDos)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Relacion
    ADD    FOREIGN KEY (idUltimaAccion)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Lista
    ADD    FOREIGN KEY (idUsuario)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Comentario
    ADD    FOREIGN KEY (idUsuario)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Comentario
    ADD    FOREIGN KEY (idPerfil)
    REFERENCES Perfil(idPerfil)
;

ALTER TABLE Perfil
    ADD    FOREIGN KEY (idUsuario)
    REFERENCES Usuario(idUsuario)
;
    
ALTER TABLE Comentario
    ADD    FOREIGN KEY (idImagen)
    REFERENCES Imagen(idImagen)
;
    

-- Create Indexes

