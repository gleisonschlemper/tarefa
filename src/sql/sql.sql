create table usuario(
    usu_codigo serial not null,
    usu_nome varchar(200) not null,
    usu_email varchar(200) not null,
    usu_senha varchar(200) not null,
    CONSTRAINT pk_usuario PRIMARY KEY (usu_codigo)
);


// Alta Urgência, Média Urgência, Baixa Urgência
create urgencia(){ 
    urg_codigo serial not null,
    urg_descricao varchar(200)
    CONSTRAINT pk_urgencia PRIMARY KEY (urg_codigo)
}

create table lista (
    lis_codigo serial not null,
    lis_descricao varchar(200)
    CONSTRAINT pk_urgencia PRIMARY KEY (lis_codigo)
)

create tarefa (){
       urg_codigo int not null
    CONSTRAINT "FK lista -> urgencia" 
    FOREIGN KEY (CATCodigo) 
    REFERENCES MERCADO.TBCATEGORIA(CATCodigo),
}

INSERT INTO usuario(usu_nome,usu_email,usu_senha) values ('Gleison','dev.schlemper@gmail.com','12345');