DROP DATABASE IF EXISTS Tindem;
CREATE DATABASE IF NOT EXISTS Tindem;
 
USE Tindem;

DROP DATABASE IF EXISTS Tindem;
CREATE DATABASE IF NOT EXISTS Tindem;
use Tindem;

create table  country (
	id int(11) primary key auto_increment,
    name varchar(60) not null unique
);

create table city (
	id int(11) primary key auto_increment,
    name varchar(60) not null,
    id_country int(11) not null,
    constraint fk_id_country foreign key (id_country) references country(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table interest_area(
	id int(11) primary key auto_increment,
    name varchar(60) not null unique
);

create table specific_interest (
	id int(11) primary key auto_increment,
    name varchar(60) not null unique,
    id_interest int(11) not null,
    constraint fk_id_interest foreign key (id_interest) references interest_area(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table user_account(
	id int(11) primary key auto_increment,
    email varchar(40) not null unique,
    password varchar(30) not null 
);

create table profile_account(
	id int(11) primary key auto_increment,
    name varchar(30) not null,
    description varchar(255) not null,
    type enum('applicant','company'),
    key_rol int not null,
    img varchar(255) not null,
    id_user int(11) not null,
    id_city int(11) not  null,
    constraint fk_id_user foreign key (id_user) references user_account(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_city foreign key (id_city) references city(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table profile_specialization(
	id int(11) primary key not null auto_increment,
    id_profile_account int(11) not null,
    id_specialization int(11) not null,
	constraint fk_id_profile_account foreign key (id_profile_account) references profile_account(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_specific_interest foreign key (id_specialization) references specific_interest(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table applicant (
    id int(11) primary key auto_increment,
	lastname varchar(30) not null,
    day_of_birth date not null
);

create table company (
    id int(11) primary key auto_increment,
    nit VARCHAR(15) not null,
    day_of_founded date not null
);

create table actions (
    id int(11) primary key auto_increment,
    action_time datetime not null,
    action ENUM('like','dislike'),
    action_author ENUM ('applicant','company'),
    action_match bit not null,
    blocked_status bit not null,
    id_applicant int(11) not null,
	id_company int(11) not null,
    constraint fk_id_applicant foreign key (id_applicant) references applicant(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_company foreign key (id_company) references company(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

-- PAIS

INSERT INTO country VALUES ( 1,"Colombia" );
INSERT INTO country VALUES ( 2,"Canada" );
INSERT INTO country VALUES ( 3,"Bolivia" );
INSERT INTO country VALUES ( 4,"Estados unidos" );
INSERT INTO country VALUES ( 5,"Inglaterra" );

-- CIUDAD

INSERT INTO city VALUES ( 1,"Bucaramanga",1 );
INSERT INTO city VALUES ( 2,"Toronto",2 );
INSERT INTO city VALUES ( 3,"La Paz",3 );
INSERT INTO city VALUES ( 4,"Los angeles",4 );
INSERT INTO city VALUES ( 5,"Manchester",5 );


-- USUARIO
-- usuario aplicante
INSERT INTO user_account VALUES ( 1,"neutro@gmail.com","short321" );
INSERT INTO user_account VALUES ( 2,"jose1@gmail.com","yogurt456" );
INSERT INTO user_account VALUES ( 3,"johan@gmail.com","apexsql" );
INSERT INTO user_account VALUES ( 4,"alcapone@gmail.com","newyork" );
INSERT INTO user_account VALUES ( 5,"policeman@gmail.com","N914511G" );
-- usuario empresa
INSERT INTO user_account VALUES ( 6,"google@gmail.com","N91321G" );
INSERT INTO user_account VALUES ( 7,"PepsiCo@gmail.com","N91121G" );
INSERT INTO user_account VALUES ( 8,"Tesla@gmail.com","N94311G" );
INSERT INTO user_account VALUES ( 9,"PsicoSalud@gmail.com","N91561G" );
INSERT INTO user_account VALUES ( 10,"Garrigues@gmail.com","N9132411G" );


-- APPLICANTE
INSERT INTO applicant VALUES (1,"Messi","1994-06-19");
INSERT INTO applicant VALUES (2,"Orejarena","1990-08-03");
INSERT INTO applicant VALUES (3,"Orechana","2005-02-07");
INSERT INTO applicant VALUES (4,"Ruiz","2006-04-21");
INSERT INTO applicant VALUES (5,"Olaya","2013-04-17");

-- COMPAÑYA
INSERT INTO company VALUES (6,"123441141","1994-06-30");
INSERT INTO company VALUES (7,"621644264","1990-05-12");
INSERT INTO company VALUES (8,"643523424","1980-04-16");
INSERT INTO company VALUES (9,"123456456","2000-02-19");
INSERT INTO company VALUES (10,"699862137","2005-03-20");


-- CUENTA DE PERFIL
-- cuenta aplicante
INSERT INTO profile_account VALUES ( 1,"Valentina","Persona comprometida con su trabajo","applicant",1,"img-valentina",5,1);
INSERT INTO profile_account VALUES ( 2,"Liomar","Siempre quiero aprender mas","applicant",5,"img-liomar",1,3);
INSERT INTO profile_account VALUES ( 3,"Vicente ","Ingeniero en sistemas, especializado en desarrollo web","applicant",4,"img-vicente",4,2);
INSERT INTO profile_account VALUES ( 4,"Jose","Interesados en seguir estudiando","applicant",2,"img-jose",2,4);
INSERT INTO profile_account VALUES ( 5,"Johan","Persona activa con actitud para trabajar en equipo","applicant",3,"img-johan",3,5);

-- cuenta Empresa
INSERT INTO profile_account VALUES ( 6,"Google","Google LLC es una compañía principal subsidiaria de la estadounidense Alphabet cuya especialización son los productos y servicios relacionados con internetGoogle LLC es una compañía principal subsidiaria de la estadounidense Alphabet cuya especialización son los productos y servicios relacionados con internet","company",6,"img-google",6,1);

INSERT INTO profile_account VALUES ( 7,"PepsiCo","compañía líder global de alimentos y bebidas. Nuestros consumidores disfrutan nuestros productos mil millones de veces al día en más de 200 países y territorios.","company",7,"img-pepsico",7,3);

INSERT INTO profile_account VALUES ( 8,"Tesla","compañía perteneciente a la industria Automotriz, que se encarga de producir y distribuir vehículos eléctricos junto a sistemas de almacenamiento de baterías. Tesla, Inc. cuenta con 45,000 trabajadores distribuidos alrededor del mundo.","company",8,"img-tesla",8,2);

INSERT INTO profile_account VALUES ( 9,"PsicoSalud"," grupo de Gabinetes de Psicología y Psicoanálisis con 11 centros en la provincia de Málaga desde 1995 y con mas de 50 profesionales de la Salud Mental en el que encontrará soluciones a todo aquello psicológico que le preocupa y/o quiere solventar, garantizándole un trato personalizado y adaptado a sus necesidades, poniendo a su disposición, toda nuestra experiencia y nuestra profesionalidad.","company",9,"img-psicosalud",9,5);

INSERT INTO profile_account VALUES ( 10,"Garrigues","Garrigues es una firma internacional de servicios legales y fiscales que asesora a nivel local, regional y global desde todos los ángulos del derecho de los negocios. La fuerza de Garrigues reside en su equipo, más de 2.000 personas que trabajan de manera transversal para resolver los problemas de sus clientes.","company",10,"img-garrigues",10,4);

-- AREAS 
INSERT INTO interest_area VALUES ( 1,"Ingenieria de sistemas" );
INSERT INTO interest_area VALUES ( 2,"Gastronomia" );
INSERT INTO interest_area VALUES ( 3,"Derecho" );
INSERT INTO interest_area VALUES ( 4,"Psicologia" );
INSERT INTO interest_area VALUES ( 5,"Ingenieria Electronica" );

-- INTERES ESPECIFICO
INSERT INTO specific_interest VALUES ( 1,"Telecomunicaciones",5 );
INSERT INTO specific_interest VALUES ( 2,"Auxiliar juridico",3 );
INSERT INTO specific_interest VALUES ( 3,"Ayudante de cocina",2 );
INSERT INTO specific_interest VALUES ( 4,"Psicólogo organizacional",4 );
INSERT INTO specific_interest VALUES ( 5,"Mantenimiento de los sistemas informáticos",1 );

INSERT INTO specific_interest VALUES ( 6,"implementaciones y gestiones de: sistemas electrónicos",5 );
INSERT INTO specific_interest VALUES ( 7,"Abogado",3 );
INSERT INTO specific_interest VALUES ( 8,"Chef ejecutivo",2 );
INSERT INTO specific_interest VALUES ( 9,"Psicólogo",4 );
INSERT INTO specific_interest VALUES ( 10,"Diseñador de base de datos",1 );

INSERT INTO specific_interest VALUES ( 11,"Diseño y desarrollo de equipos electrónicos",5 );
INSERT INTO specific_interest VALUES ( 12,"Magistrado",3 );
INSERT INTO specific_interest VALUES ( 13,"Pastelero",2 );
INSERT INTO specific_interest VALUES ( 14,"Psicólogo General",4 );
INSERT INTO specific_interest VALUES ( 15,"Arquitecto de software",1 );

INSERT INTO specific_interest VALUES ( 16,"Fabricacion de semiconductores y circuitos integrados.",5 );
INSERT INTO specific_interest VALUES ( 17,"Notario público",3 );
INSERT INTO specific_interest VALUES ( 18,"Chef repostero",2 );
INSERT INTO specific_interest VALUES ( 19,"Psicólogo deportivo",4 );
INSERT INTO specific_interest VALUES ( 20,"manejo de sistemas electrónicos y de telecomunicaciones",1 );

INSERT INTO specific_interest VALUES ( 21,"consultoría en el sector electrónico",5 );
INSERT INTO specific_interest VALUES ( 22,"Abogado litigante",3 );
INSERT INTO specific_interest VALUES ( 23,"Expenditer",2 );
INSERT INTO specific_interest VALUES ( 24,"Psicólogo forense",4 );
INSERT INTO specific_interest VALUES ( 25,"Diseño de circuitos",1 );




-- INTERES CON PERFIL

-- interes aplicante
INSERT INTO profile_specialization VALUES ( 1,1,1 );
INSERT INTO profile_specialization VALUES ( 2,1,6 );
INSERT INTO profile_specialization VALUES ( 3,1,15 );

INSERT INTO profile_specialization VALUES ( 4,2,2);
INSERT INTO profile_specialization VALUES ( 5,2,23 );
INSERT INTO profile_specialization VALUES ( 6,2,12 );

INSERT INTO profile_specialization VALUES ( 7,3,3);
INSERT INTO profile_specialization VALUES ( 8,3,18 );
INSERT INTO profile_specialization VALUES ( 9,3,13 );

INSERT INTO profile_specialization VALUES ( 10,4,11);
INSERT INTO profile_specialization VALUES ( null,4,21);
INSERT INTO profile_specialization VALUES ( null,4,16);
INSERT INTO profile_specialization VALUES ( null,4,23);
INSERT INTO profile_specialization VALUES ( null,4,22);

INSERT INTO profile_specialization VALUES ( null,5,7);
INSERT INTO profile_specialization VALUES ( null,5,18);
INSERT INTO profile_specialization VALUES ( null,5,24);
INSERT INTO profile_specialization VALUES ( null,5,15);

-- interes compañia
INSERT INTO profile_specialization VALUES ( null,6,5 );
INSERT INTO profile_specialization VALUES ( null,6,20 );
INSERT INTO profile_specialization VALUES ( null,6,15 );

INSERT INTO profile_specialization VALUES ( null,7,3);
INSERT INTO profile_specialization VALUES ( null,7,8 );
INSERT INTO profile_specialization VALUES ( null,7,18 );

INSERT INTO profile_specialization VALUES ( null,8,16);
INSERT INTO profile_specialization VALUES ( null,8,11 );
INSERT INTO profile_specialization VALUES ( null,8,25 );

INSERT INTO profile_specialization VALUES ( null,9,4);
INSERT INTO profile_specialization VALUES ( null,9,9);
INSERT INTO profile_specialization VALUES ( null,9,14);
INSERT INTO profile_specialization VALUES ( null,9,6);
INSERT INTO profile_specialization VALUES ( null,9,19);

INSERT INTO profile_specialization VALUES ( null,10,2);
INSERT INTO profile_specialization VALUES ( null,10,22);
INSERT INTO profile_specialization VALUES ( null,10,12);
INSERT INTO profile_specialization VALUES ( null,10,17);


-- ACCIONES (MATCHS)

INSERT INTO actions VALUES ( 1,"2000-09-07","like","company",0,0,1,6);
INSERT INTO actions VALUES ( 2,"2004-09-07","like","applicant",1,0,1,6);

INSERT INTO actions VALUES ( 3,"2002-09-07","like","applicant",0,0,2,7);
INSERT INTO actions VALUES ( 4,"2002-09-17","like","company",1,0,2,7);

INSERT INTO actions VALUES ( 5,"2010-09-07","like","company",0,0,3,8);
INSERT INTO actions VALUES ( 6,"2010-09-10","like","applicant",1,0,3,8);

INSERT INTO actions VALUES ( 7,"2015-09-07","like","applicant",0,0,4,9);
INSERT INTO actions VALUES ( 8,"2015-09-15","like","company",1,0,4,9);

select * from actions
/*
INSERT INTO actions VALUES ( 5,"2001-09-07","dislike","aspirant",0,3,1);*/





