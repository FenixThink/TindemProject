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
    name varchar(60) not null
);

create table specific_interest (
	id int(11) primary key auto_increment,
    name varchar(60) not null,
    id_interest int(11) not null,
    constraint fk_id_interest foreign key (id_interest) references interest_area(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table user_account(
	id int(11) primary key auto_increment,
    email varchar(40) not null unique,
    password varchar(30) not null unique
);

create table profile_account(
	id int(11) primary key auto_increment,
	name varchar(30) not null,
    description varchar(255) not null,
    type enum('applicant','company'),
    key_rol int not null,
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
    day_of_birth date not null
);

create table company (
    id int(11) primary key auto_increment,
    nit VARCHAR(15) not null
);

create table actions (
    id int(11) primary key auto_increment,
    action_time datetime not null,
    action ENUM('like','dislike'),
    action_author ENUM ('applicant','company'),
    action_match bit not null,
    id_applicant int(11) not null,
	id_company int(11) not null,
    constraint fk_id_applicant foreign key (id_applicant) references applicant(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_company foreign key (id_company) references company(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

INSERT INTO user_account VALUES ( 1,"neutro@gmail.com","short321" );
INSERT INTO user_account VALUES ( 2,"jose1@gmail.com","yogurt456" );
INSERT INTO user_account VALUES ( 3,"johan@gmail.com","apexsql" );
INSERT INTO user_account VALUES ( 4,"alcapone@gmail.com","newyork" );
INSERT INTO user_account VALUES ( 5,"policeman@gmail.com","N914511G" );

INSERT INTO user_account VALUES ( 6,"google@gmail.com","N91321G" );
INSERT INTO user_account VALUES ( 7,"accor@gmail.com","N91121G" );
INSERT INTO user_account VALUES ( 8,"arcoiris@gmail.com","N94311G" );
INSERT INTO user_account VALUES ( 9,"coex@gmail.com","N91561G" );
INSERT INTO user_account VALUES ( 10,"shel@gmail.com","N9132411G" );

INSERT INTO interest_area VALUES ( 1,"Ingenieria de sistemas" );
INSERT INTO interest_area VALUES ( 2,"Gastronomia" );
INSERT INTO interest_area VALUES ( 3,"Derecho" );
INSERT INTO interest_area VALUES ( 4,"Psicologia" );
INSERT INTO interest_area VALUES ( 5,"Ingenieria Electronica" );

INSERT INTO specific_interest VALUES ( 1,"implementaciones y gestiones de: sistemas electrónicos",5 );
INSERT INTO specific_interest VALUES ( 2,"Auxiliar juridico",3 );
INSERT INTO specific_interest VALUES ( 3,"Ayudante de cocina",2 );
INSERT INTO specific_interest VALUES ( 4,"Psicólogo organizacional",4 );
INSERT INTO specific_interest VALUES ( 5,"Mantenimiento de los sistemas informáticos",1 );

INSERT INTO country VALUES ( 1,"Colombia" );
INSERT INTO country VALUES ( 2,"Canada" );
INSERT INTO country VALUES ( 3,"Bolivia" );
INSERT INTO country VALUES ( 4,"Estados unidos" );
INSERT INTO country VALUES ( 5,"Inglaterra" );

INSERT INTO city VALUES ( 1,"Bucaramanga",1 );
INSERT INTO city VALUES ( 2,"Toronto",2 );
INSERT INTO city VALUES ( 3,"La Paz",3 );
INSERT INTO city VALUES ( 4,"Los angeles",4 );
INSERT INTO city VALUES ( 5,"Manchester",5 );


INSERT INTO profile_account VALUES ( 1,"Google","Google LLC es una compañía principal subsidiaria de la estadounidense Alphabet cuya especialización son los productos y servicios relacionados con internetGoogle LLC es una compañía principal subsidiaria de la estadounidense Alphabet cuya especialización son los productos y servicios relacionados con internet","company",1,6,1);
INSERT INTO profile_account VALUES ( 2,"Liomar","increliblo","applicant",1,1,3);

INSERT INTO profile_account VALUES ( 3,"Accor","Google LLC es una compañía principal subsidiaria de la estadounidense Alphabet cuya especialización son los productos y servicios relacionados con internetGoogle LLC es una compañía principal subsidiaria de la estadounidense Alphabet cuya especialización son los productos y servicios relacionados con internet","company",2,7,2);

INSERT INTO profile_account VALUES ( 4,"jose","nao nao","applicant",2,2,4);

INSERT INTO profile_account VALUES ( 5,"johan","yes yes","applicant",3,3,5);


INSERT INTO profile_specialization VALUES ( 1,1,1 );
INSERT INTO profile_specialization VALUES ( 2,2,2 );
INSERT INTO profile_specialization VALUES ( 3,3,3 );
INSERT INTO profile_specialization VALUES ( 4,4,4 );
INSERT INTO profile_specialization VALUES ( 5,5,5 );


INSERT INTO company VALUES ( 1,"123441141");
INSERT INTO company VALUES ( 2,"463523424");

INSERT INTO applicant VALUES ( 1,"1994-06-19");
INSERT INTO applicant VALUES ( 2,"1990-08-03");
INSERT INTO applicant VALUES ( 3,"2005-02-07");


INSERT INTO actions VALUES ( 1,"2000-09-07","like","company",1,1,1);
INSERT INTO actions VALUES ( 2,"2004-09-07","dislike","company",0,2,2);
/*INSERT INTO actions VALUES ( 3,"2003-09-07","like","aspirante",1,3,2);
INSERT INTO actions VALUES ( 4,"2002-09-07","dislike","aspirant",0,2,2);
INSERT INTO actions VALUES ( 5,"2001-09-07","dislike","aspirant",0,3,1);*/





