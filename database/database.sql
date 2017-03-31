
DROP TABLE IF EXISTS usuarios CASCADE;

CREATE TABLE usuarios
(
    id bigserial NOT NULL,
    nombre text NOT NULL,
    paterno text NOT NULL,
    materno text,
    PRIMARY KEY(id)
);


create table productos
(
    id bigserial NOT NULL,
    nombre text NOT NULL,
    precio int,
    PRIMARY KEY (id)
);
