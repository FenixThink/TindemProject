CREATE DATABASE IF NOT EXISTS Tindem;

USE Tindem;

DROP TABLE IF EXISTS UserSpecialization; 
DROP TABLE IF EXISTS ServiceMatch;
DROP TABLE IF EXISTS Applicant;
DROP TABLE IF EXISTS ProfileAccount;
DROP TABLE IF EXISTS City;
DROP TABLE IF EXISTS Country;
DROP TABLE IF EXISTS Company;
DROP TABLE IF EXISTS UserAccount;
DROP TABLE IF EXISTS Career;
DROP TABLE IF EXISTS Specialization;

CREATE TABLE Career (
    id_career INT(11) PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);

CREATE TABLE UserAccount (
	id_user INT(11) AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(40) NOT NULL UNIQUE,
    userPassword VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE Specialization (
    id_specialization INT(11) PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);

CREATE TABLE Company(
	id_company INT(11) AUTO_INCREMENT PRIMARY KEY,
	nit INT(11) NOT NULL,
    dayOfFounded DATE NOT NULL
);

CREATE TABLE Country(
	id_country INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE City(
	id_city INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(85) NOT NULL,
    id_country INT(11) NOT NULL,
    CONSTRAINT FK_Country_Id FOREIGN KEY(id_country) REFERENCES Country(id_country) ON DELETE NO ACTION ON UPDATE CASCADE
);

CREATE TABLE ProfileAccount(
	id_profile INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    profileDescription VARCHAR(255) NULL,
    id_company INT(11) NOT NULL,
    id_user INT(11) NOT NULL,
    id_city INT(11) NOT NULL,
    id_career INT(11) NOT NULL,
    CONSTRAINT FK_Company_Id FOREIGN KEY(id_company) REFERENCES Company(id_company) ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT FK_UserAccount_Id FOREIGN KEY(id_user) REFERENCES UserAccount(id_user) ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT FK_City_Id FOREIGN KEY(id_city) REFERENCES City(id_city) ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT FK_career_Id FOREIGN KEY(id_career) REFERENCES Career(id_career) ON DELETE NO ACTION ON UPDATE CASCADE
);

CREATE TABLE Applicant(
	id_applicant  INT AUTO_INCREMENT PRIMARY KEY,
    dateOfBirth DATE NOT NULL,
    id_profile INT(11),
    CONSTRAINT FK_Profile_Id FOREIGN KEY(id_profile) REFERENCES ProfileAccount(id_profile) ON DELETE NO ACTION ON UPDATE CASCADE
);

CREATE TABLE ServiceMatch (
	id_match INT AUTO_INCREMENT PRIMARY KEY,
    id_applicant INT(11) NOT NULL,
    id_company INT(11) NOT NULL,
    CONSTRAINT FK_Applicant_Id FOREIGN KEY(id_applicant) REFERENCES Applicant(id_applicant) ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT FK_Company_Id2 FOREIGN KEY(id_company) REFERENCES Company(id_company) ON DELETE NO ACTION ON UPDATE CASCADE
);

CREATE TABLE UserSpecialization (
    id_user_specialization INT(11) PRIMARY KEY,
    id_profile  INT(11) NOT NULL,
    id_specialization INT(11) NOT NULL,
    CONSTRAINT PK_profile_id FOREIGN KEY (id_profile)REFERENCES ProfileAccount(id_profile) ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT PK_id_specialization FOREIGN KEY (id_specialization)REFERENCES Specialization(id_specialization) ON DELETE NO ACTION ON UPDATE CASCADE
);
