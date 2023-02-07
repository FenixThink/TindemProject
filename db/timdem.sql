DROP DATABASE IF EXISTS Tindem;
CREATE DATABASE IF NOT EXISTS Tindem;
use Tindem;

create table  country (
	id int(11) primary key auto_increment,
    name varchar(60) not null unique
);

create table interest_area(
	id int(11) primary key auto_increment,
    name varchar(60) not null
);

create table user(
	id int(11) primary key auto_increment,
    email varchar(60) not null,
    password varchar(30) not null
);

create table city (
	id int(11) primary key auto_increment,
    name varchar(60) not null,
    id_country int(11) not null,
    constraint fk_id_country foreign key (id_country) references country(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table specific_interest (
	id int(11) primary key auto_increment,
    name varchar(60) not null,
    id_interest int(11) not null,
    constraint fk_id_interest foreign key (id_interest) references interest_area(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table company (
	id int(11) primary key auto_increment,
    company_name varchar(30) not null,
    company_username varchar(30) not null,
    company_fundation date not null,
    company_description varchar(255) not null,
    id_user INT(11) not null,
    id_city INT(11) not null,
    id_interest INT(11) not null,
    constraint fk_id_user foreign key (id_user) references user(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_city foreign key (id_city) references city(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_interest2 foreign key (id_interest) references specific_interest(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table applicant (
	id int(11) primary key auto_increment,
    applicant_name varchar(30) not null,
    applicant_lastname varchar(30) not null,
    applicant_birthdate date not null,
    applicant_description varchar(255) not null,
    applicant_gender enum('masculino', 'femenino') not null,
    id_user int(11) not null,
    id_city int(11) not null,
    id_interest  int(11) not null,
    constraint fk_id_user2 foreign key (id_user) references user(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_city2 foreign key (id_city) references city(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_interest3 foreign key (id_interest) references specific_interest(id) ON DELETE NO ACTION ON UPDATE CASCADE
);

create table actions (
	id int(11) primary key auto_increment,
    action_time datetime not null,
    action enum('like','dislike'),
    action_autor enum('aspirante','empresa'),
    action_match bit not null, 
    id_applicant int(11) not null,
    id_company int(11) not null,
    constraint fk_id_applicant foreign key (id_applicant) references applicant(id) ON DELETE NO ACTION ON UPDATE CASCADE,
    constraint fk_id_company foreign key (id_company) references company(id) ON DELETE NO ACTION ON UPDATE CASCADE
);