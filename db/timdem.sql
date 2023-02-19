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



INSERT INTO country VALUES ( 1,"Colombia" );




INSERT INTO city VALUES ( null,"Bucaramanga",1);
INSERT INTO city VALUES ( null,"Bogotá",1);
INSERT INTO city VALUES ( null,"Medellín",1);
INSERT INTO city VALUES ( null,"Cali",1);
INSERT INTO city VALUES ( null,"Barranquilla",1);
INSERT INTO city VALUES ( null,"Cartagena ",1);
INSERT INTO city VALUES ( null,"Soledad",1);
INSERT INTO city VALUES ( null,"Cúcuta",1);
INSERT INTO city VALUES ( null,"Ibagué",1);
INSERT INTO city VALUES ( null,"Soacha",1);
INSERT INTO city VALUES ( null,"Villavicencio",1);
INSERT INTO city VALUES ( null,"Santa Marta",1);
INSERT INTO city VALUES ( null,"Valledupar",1);
INSERT INTO city VALUES ( null,"Bello",1);
INSERT INTO city VALUES ( null,"Pereira",1);
INSERT INTO city VALUES ( null,"Montería",1);
INSERT INTO city VALUES ( null,"Pasto",1);
INSERT INTO city VALUES ( null,"Buenaventura",1);
INSERT INTO city VALUES ( null,"Manizales",1);
INSERT INTO city VALUES ( null,"Neiva",1);


INSERT INTO user_account VALUES ( null,"atorresgarcia92@gmail.com","m5jK7fP8z" );
INSERT INTO user_account VALUES ( null,"pmendozaortiz84@outlook.com","t7pG9nF2c" );
INSERT INTO user_account VALUES ( null,"sjimenezcastro80@gmail.com","W8dL2hN9k" );
INSERT INTO user_account VALUES ( null,"lhernandezramos93@yahoo.com","q3rD5sT6y" );
INSERT INTO user_account VALUES ( null,"mgonzalezsanchez89@hotmail.com","F6mJ9cP2b" );
INSERT INTO user_account VALUES ( null,"eramirezvargas86@gmail.com","v7nH8kY3t" );
INSERT INTO user_account VALUES ( null,"vcastrojimenez87@yahoo.com","Z9cR5bL2j" );
INSERT INTO user_account VALUES ( null,"jmorenoortiz91@outlook.com","T6gX5fN1m" );
INSERT INTO user_account VALUES ( null,"kgarciavega85@gmail.com","b3hY7sJ4t" );
INSERT INTO user_account VALUES ( null,"slopezbeltran94@hotmail.com","s4qW8zK9c" );
INSERT INTO user_account VALUES ( null,"nperezmoreno83@yahoo.com","P9lS2nF6t" );
INSERT INTO user_account VALUES ( null,"dsanchezrivas88@outlook.com","d7fN2kT6j" );
INSERT INTO user_account VALUES ( null,"mfloresgarcia81@gmail.com","x8pJ9cM4b" );
INSERT INTO user_account VALUES ( null,"avegahernandez90@yahoo.com","H6mZ5nL2t" );
INSERT INTO user_account VALUES ( null,"abeltrancastro95@hotmail.com","K2cB7vR8y" );
INSERT INTO user_account VALUES ( null,"sortizjimenez82@gmail.com","g9sL4bN5c" );
INSERT INTO user_account VALUES ( null,"lvargaslopez87@yahoo.com","W8fP7tC3n" );
INSERT INTO user_account VALUES ( null,"aramirezsanchez83@hotmail.com","R4mT6yS9b" );
INSERT INTO user_account VALUES ( null,"cgonzalezvega89@gmail.com","j5cK7xN2h" );
INSERT INTO user_account VALUES ( null,"jhernandezcastro84@yahoo.com","Q2dL8kR5n" );
INSERT INTO user_account VALUES ( null,"gtorresmoreno93@outlook.com","s3gH7jF9z" );
INSERT INTO user_account VALUES ( null,"ccastrojimenez81@gmail.com","v5rK8bN1m" );
INSERT INTO user_account VALUES ( null,"lgarciaortiz86@yahoo.com","z9hJ7fC6t" );
INSERT INTO user_account VALUES ( null,"mbeltranramos88@hotmail.com","b2nX5tL8c" );
INSERT INTO user_account VALUES ( null,"amendozasanchez90@gmail.com","T8cM6fG5h" );
INSERT INTO user_account VALUES ( null,"ltirresvega85@yahoo.com","y7jR2kF9z" );
INSERT INTO user_account VALUES ( null,"vramirezcastro82@outlook.com","S5mB6nL3p" );
INSERT INTO user_account VALUES ( null,"jlopezhernandez91@gmail.com","q6dH9tP7c" );
INSERT INTO user_account VALUES ( null,"ogonzalezjimenez84@yahoo.com","V8jK5yN3f" );
INSERT INTO user_account VALUES ( null,"vmorenoperez87@hotmail.com","f3bG9sT7r" );


INSERT INTO user_account VALUES ( null,"info@ecopetrol.com","K8fP2cT7r" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@claro.com.co","s9jN5kC1m" );
INSERT INTO user_account VALUES ( null,"contactenos@terpel.com","F2gP5yL7z" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@exito.com","b7nK3mT8f" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@epm.com.co","v9hJ2zR5t" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@alkosto.com.co","M6kT8jC5n" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@d1.com.co","d5fH9pG3s" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@olimpica.com","L7sZ3mF9n" );
INSERT INTO user_account VALUES ( null,"contactenos@suraeps.com.co","P8rT2gC5j" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@codensa.com.co","Q6yN4kS9t" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@sanitas.com.co","V5nB2hL7f" );
INSERT INTO user_account VALUES ( null,"info@drummondltd.com","x7cF3mJ5t" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@bavaria.com.co","Z9zG8fH1p" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@primax.com.co","R6mL2nC5j" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@emgesa.com.co","b4dP5tK7s" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@saludtotal.com.co","Y7fT4zS6g" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@homecenter.com.co","w8pC3hN7j" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@cencosud.com.co","M5jL7nS9k" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@medimas.com.co","G9hK6fV5t" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@compensar.com.co","T2cP7mR6y" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@samsung.com.co","q5tC8gZ2m" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@avianca.com","H7fN6kT8j" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@coomevaeps.com.co","s3bM6nJ9z" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@audifarma.com.co","X9tG7yR5c" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@argos.com.co","p2kF8cL7s" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@postobon.com","V3rN7jT9m" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@alpina.com.co","S9nL6tM2h" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@cemex.com","f7gC5kR3y" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@italcol.com","Z8zH6tP2m" );
INSERT INTO user_account VALUES ( null,"recursoshumanos@makro.com.co","b5mJsdeqf" );


INSERT INTO applicant VALUES (null,"Torres","1975-11-07");
INSERT INTO applicant VALUES (null,"Mendoza","2003-01-30");
INSERT INTO applicant VALUES (null,"Jiménez","1993-06-14");
INSERT INTO applicant VALUES (null,"Hernández","1984-08-13");
INSERT INTO applicant VALUES (null,"González","1973-02-16");
INSERT INTO applicant VALUES (null,"Ramírez","1996-10-02");
INSERT INTO applicant VALUES (null,"Castro","1989-12-01");
INSERT INTO applicant VALUES (null,"Moreno","1978-05-22");
INSERT INTO applicant VALUES (null,"García","2001-07-07");
INSERT INTO applicant VALUES (null,"López","1990-11-18");
INSERT INTO applicant VALUES (null,"Pérez","2005-09-16");
INSERT INTO applicant VALUES (null,"Sánchez","1998-03-22");
INSERT INTO applicant VALUES (null,"Flores","1976-12-05");
INSERT INTO applicant VALUES (null,"Vega","2003-01-09");
INSERT INTO applicant VALUES (null,"Beltrán","1989-07-14");
INSERT INTO applicant VALUES (null,"Ortiz","1965-10-18");
INSERT INTO applicant VALUES (null,"Vargas","2002-11-27");
INSERT INTO applicant VALUES (null,"Ramírez","1991-05-03");
INSERT INTO applicant VALUES (null,"González","1982-02-01");
INSERT INTO applicant VALUES (null,"Hernández","1978-08-26");
INSERT INTO applicant VALUES (null,"Torres","1999-04-19");
INSERT INTO applicant VALUES (null,"Castro","2007-06-12");
INSERT INTO applicant VALUES (null,"García","1972-09-30");
INSERT INTO applicant VALUES (null,"Beltrán","1987-11-11");
INSERT INTO applicant VALUES (null,"Mendoza","1968-01-28");
INSERT INTO applicant VALUES (null,"Torres","1974-04-08");
INSERT INTO applicant VALUES (null,"Ramírez","1990-12-23");
INSERT INTO applicant VALUES (null,"López","1963-03-07");
INSERT INTO applicant VALUES (null,"González","2001-05-15");
INSERT INTO applicant VALUES (null,"Moreno","1971-07-24");


INSERT INTO company VALUES (null,"760085654","1994-02-23");
INSERT INTO company VALUES (null,"900355409","1987-08-10");
INSERT INTO company VALUES (null,"830106269","2001-04-17");
INSERT INTO company VALUES (null,"890283152","1979-11-28");
INSERT INTO company VALUES (null,"720659514","1998-07-09");
INSERT INTO company VALUES (null,"880301321","1985-05-12");
INSERT INTO company VALUES (null,"860262986","1972-12-31");
INSERT INTO company VALUES (null,"900254364","2004-09-26");
INSERT INTO company VALUES (null,"720015789","1990-03-05");
INSERT INTO company VALUES (null,"830160010","1981-10-20");
INSERT INTO company VALUES (null,"760087624","2002-01-14");
INSERT INTO company VALUES (null,"890044405","1996-06-08");
INSERT INTO company VALUES (null,"860043440","1989-04-22");
INSERT INTO company VALUES (null,"720418682","1976-08-16");
INSERT INTO company VALUES (null,"900184245","1997-12-03");
INSERT INTO company VALUES (null,"720194616","1983-02-05");
INSERT INTO company VALUES (null,"860011031","1971-09-29");
INSERT INTO company VALUES (null,"830067553","2000-11-12");
INSERT INTO company VALUES (null,"880017221","1992-07-26");
INSERT INTO company VALUES (null,"890069271","1988-03-09");
INSERT INTO company VALUES (null,"760087019","1974-06-25");
INSERT INTO company VALUES (null,"900058217","1995-05-19");
INSERT INTO company VALUES (null,"830175524","1982-01-27");
INSERT INTO company VALUES (null,"880048129","1969-10-08");
INSERT INTO company VALUES (null,"860041071","2005-04-06");
INSERT INTO company VALUES (null,"720029617","1999-08-11");
INSERT INTO company VALUES (null,"900213983","1986-12-17");
INSERT INTO company VALUES (null,"890247230","1977-02-18");
INSERT INTO company VALUES (null,"720105439","1991-09-10");
INSERT INTO company VALUES (null,"720105439","1980-05-28");





INSERT INTO profile_account VALUES (null,"Ana","Desarrolladora de software, Diseñadora y programadora de software para sistemas informáticos y dispositivos móviles.","applicant",1,"img-ana",1,7);
INSERT INTO profile_account VALUES (null,"Pedro","Administrador de bases de datos, Gestiona, mantiene y actualiza bases de datos para asegurar la disponibilidad de la información.","applicant",2,"img-pedro",2,2);
INSERT INTO profile_account VALUES (null,"Sofía","Ingeniera de redes, Planifica, implementa y mantiene redes de comunicaciones para empresas y organizaciones.","applicant",3,"img-sofia",3,2);
INSERT INTO profile_account VALUES (null,"Luisa","Analista de seguridad informática, Evalua y fortalece la seguridad de los sistemas informáticos y redes de una empresa.","applicant",4,"img-luisa",4,6);
INSERT INTO profile_account VALUES (null,"Martín","Especialista en inteligencia artificial, Desarrollador y diseñador de algoritmos y sistemas basados en inteligencia artificial para optimizar procesos y mejorar la toma de decisiones.","applicant",5,"img-martin",5,4);
INSERT INTO profile_account VALUES (null,"Esteban","Gerente de operaciones, Planifica y supervisa el funcionamiento de las operaciones de la empresa, incluyendo la producción y distribución de productos o servicios.","applicant",6,"img-esteban",6,3);
INSERT INTO profile_account VALUES (null,"Valeria","Analista de finanzas, Realiza análisis financieros para informar la toma de decisiones de inversión y financiamiento de la empresa.","applicant",7,"img-valeria",7,8);
INSERT INTO profile_account VALUES (null,"Juan","Coordinador de recursos humanos, Gestiona la contratación, formación, desarrollo y retención de los empleados de la empresa.","applicant",8,"img-juan",8,4);
INSERT INTO profile_account VALUES (null,"Karla","Especialista en marketing, Planifica y ejecuta estrategias de marketing para promover productos y servicios de la empresa.","applicant",9,"img-karla",9,11);
INSERT INTO profile_account VALUES (null,"Santiago","Redactor de contenidos, Escribe textos para medios impresos y digitales como periódicos, revistas, sitios web, blogs y redes sociales.","applicant",10,"img-santiago",10,12);
INSERT INTO profile_account VALUES (null,"Natalia","Relacionista público, Establece relaciones positivas y efectivas entre la empresa y los clientes, proveedores, comunidades y otros grupos de interés.","applicant",11,"img-natalia",11,10);
INSERT INTO profile_account VALUES (null,"Daniel","Productor audiovisual, Crea y produce contenidos audiovisuales para la difusión de la marca o la empresa en diferentes medios.","applicant",12,"img-daniel",12,3);
INSERT INTO profile_account VALUES (null,"Mariana","Soy Especialista en comercio exterior, Asesoro a empresas en el proceso de importación y exportación de productos y servicios.","applicant",13,"img-mariana",13,5);
INSERT INTO profile_account VALUES (null,"Andrés","Especialista en inversiones, Asesora a empresas y particulares en la toma de decisiones de inversión.","applicant",14,"img-andres",14,4);
INSERT INTO profile_account VALUES (null,"Sebastián","Guardia de seguridad: Experto en prevención de robos y vigilancia, apto para patrullar y garantizar la seguridad de instalaciones y eventos.","applicant",15,"img-sebastian",15,2);
INSERT INTO profile_account VALUES (null,"Laura","Analista de seguridad informática: Experto en ciberseguridad con habilidades en análisis de riesgos y medidas de protección de sistemas informáticos.","applicant",16,"img-laura",16,10);
INSERT INTO profile_account VALUES (null,"Antonio","Especialista en seguridad física: Habilidad en medidas de prevención y defensa personal en situaciones de emergencia.","applicant",17,"img-antonio",17,1);
INSERT INTO profile_account VALUES (null,"Camila","Coordinadora de seguridad: Habilidad en liderazgo y planeamiento estratégico, garantizando la seguridad en instalaciones y eventos.","applicant",18,"img-camila",18,10);
INSERT INTO profile_account VALUES (null,"José","Técnico de mantenimiento: Habilidad en reparación de equipos y sistemas eléctricos, uso de herramientas manuales y eléctricas.","applicant",19,"img-jose",19,12);
INSERT INTO profile_account VALUES (null,"Gabriela","Especialista en limpieza: Habilidad en manejo de productos químicos y técnicas de limpieza, garantizando espacios seguros y limpios.","applicant",20,"img-gabriela",20,11);
INSERT INTO profile_account VALUES (null,"Carlos","Chofer: Habilidad en conducción segura, mantenimiento y reparación de vehículos, garantizando el traslado seguro de personas o mercancías.","applicant",21,"img-carlos",21,2);
INSERT INTO profile_account VALUES (null,"Luis","Recepcionista: Habilidad en atención telefónica, atención al cliente y manejo de paquetes de oficina.","applicant",22,"img-luis",22,3);
INSERT INTO profile_account VALUES (null,"Victoria","Técnica en radiología: Habilidad en diagnóstico por imágenes, seguridad radiológica y interpretación de imágenes, garantizando un servicio de alta calidad.","applicant",23,"img-victoria",23,4);
INSERT INTO profile_account VALUES (null,"Valentina","Médico general: Habilidad en diagnóstico médico y evaluación clínica, garantizando la atención y tratamiento de afecciones médicas.","applicant",24,"img-valentina",24,5);
INSERT INTO profile_account VALUES (null,"Oscar","Especialista en terapia física: Habilidad en terapia física, rehabilitación y trabajo en equipo, ayudando a los pacientes a recuperar su movilidad y mejorar su calidad de vida.","applicant",25,"img-oscar",25,5);
INSERT INTO profile_account VALUES (null,"Andrea","Especialista en cuidados paliativos: Habilidad en atención al paciente y su entorno familiar, ofreciendo cuidados paliativos de alta calidad.","applicant",26,"img-andrea",26,2);
INSERT INTO profile_account VALUES (null,"Manuel","Supervisor de seguridad: Habilidad en liderazgo y coordinación de equipos de seguridad, garantizando la seguridad en instalaciones y eventos.","applicant",27,"img-manuel",27,2);
INSERT INTO profile_account VALUES (null,"Luciana","Especialista en medicina interna: Habilidad en diagnóstico y tratamiento de enfermedades crónicas, brindando atención integral a pacientes.","applicant",28,"img-luciana",28,6);
INSERT INTO profile_account VALUES (null,"Mariluz","Especialista en cirugía: Habilidad en diagnóstico y tratamiento quirúrgico de enfermedades, garantizando la seguridad del paciente.","applicant",29,"img-mariluz",29,5);
INSERT INTO profile_account VALUES (null,"Pablo","Especialista en ginecología y obstetricia: Habilidad en diagnóstico y tratamiento de enfermedades ginecológicas, garantizando la seguridad del paciente en procesos obstétricos.","applicant",30,"img-pablo",30,7);



INSERT INTO profile_account VALUES (null,"Ecopetrol","Ecopetrol es un grupo integrado de energía, que participa en todos los eslabones de la cadena de hidrocarburos (exploración, producción, transporte, refinación y comercialización) y en infraestructura lineal","company",1,"img-ecopetrol",31,7);
INSERT INTO profile_account VALUES (null,"Claro","Claro es una subsidiaria de América Móvil, el proveedor líder de servicios de telecomunicaciones en América Latina con operaciones en 18 países del Continente Americano y del Caribe.","company",2,"img-claro",32,1);
INSERT INTO profile_account VALUES (null,"Terpel","Terpel es una compañía de origen, tradición y talante colombiano que durante 50 años ha estado comprometida con el país, promoviendo su desarrollo, creciendo de la mano de sus afiliados.","company",3,"img-terpel",33,10);
INSERT INTO profile_account VALUES (null,"Éxito","Los almacenes éxito se caracterizan por ser de gran superficie, en donde se ofrecen todo tipo de productos de mercado y para el hogar, usualmente cuentan con panadería y restaurante dentro del supermercado.","company",4,"img-exito",34,18);
INSERT INTO profile_account VALUES (null,"EPM","EPM es una empresa de servicios públicos domiciliarios que tiene una historia para contar, con cifras y hechos de una responsabilidad social y ambiental que le da sentido a su origen y a su estrategia de negocios.","company",5,"img-epm",35,15);
INSERT INTO profile_account VALUES (null,"Alkosto","Alkosto es una cadena de almacenes colombiana, comercializadora de electrodomésticos, mercado, llantas, tecnología, motos y productos del hogar, de propiedad del Grupo Corbeta.","company",6,"img-alkosto",36,13);
INSERT INTO profile_account VALUES (null,"D1","D1, es la compañía con más puntos de venta en Colombia, alcanza 2.000 tiendas lo que significa estar cada vez más cerca de todos los hogares colombianos, cubriendo el 87% del territorio, en 28 departamentos y 450 municipios.","company",7,"img-d1",37,11);
INSERT INTO profile_account VALUES (null,"Olímpica","Somos reconocidos como una compañía líder en la comercialización de productos de consumo masivo de óptima calidad, a través de una cadena privada de establecimientos.","company",8,"img-olimpica",38,12);
INSERT INTO profile_account VALUES (null,"EPS Sura","A través de la Compañía de Servicio de Salud IPS Suramericana S.A., la EPS cuenta con divisiones asistenciales para apoyar su gestión con entidades como: IPS Punto de Salud, Dinámica IPS, Salud en Casa.","company",9,"img-eps sura",39,7);
INSERT INTO profile_account VALUES (null,"Codensa","Codensa S.A. ESP es una empresa de distribución y comercialización de energía eléctrica, líder en el mercado, con más de 3'400.000 clientes.","company",10,"img-codensa",40,4);
INSERT INTO profile_account VALUES (null,"Sanitas","En la actualidad, ofrecemos productos y servicios adaptados a las necesidades reales de salud de las personas en todas las etapas de su vida.","company",11,"img-sanitas",41,5);
INSERT INTO profile_account VALUES (null,"Drummond","En el 2021 cumplimos seis años consecutivos de ser los mayores productores y exportadores de carbón — cerca de 32 millones de toneladas transportadas a más de 24 países alrededor del mundo.","company",12,"img-drummond",42,10);
INSERT INTO profile_account VALUES (null,"Bavaria","La sociedad tiene como objeto Principal la fabricación de cervezas; la producción y transformación de bebidas alimenticias,fermentadas o destiladas, así como la fabricación, producción, y transformación de toda clase se debidas.","company",13,"img-bavaria",43,19);
INSERT INTO profile_account VALUES (null,"Primax ","Es una empresa que opera principalmente en el sector Petróleo y Gas y Energía Eléctrica. Conecta con sus contactos clave, proyectos, accionistas, noticias relacionadas y más.","company",14,"img-primax",44,18);
INSERT INTO profile_account VALUES (null,"Emgesa","Descripción: Emgesa S.A. E.S.P. es una empresa colombiana dedicada a la generación eléctrica para el mercado mayorista y clientes industriales del mercado desregulado.","company",15,"img-emgesa",45,15);
INSERT INTO profile_account VALUES (null,"Salud Total","Ofrecemos servicios de salud con Calidad Total, Salud Total EPS es una Entidad Promotora de Salud líder en el mercado brindando servicios con calidad y cubrimiento en el territorio nacional.","company",16,"img-salud total",46,10);
INSERT INTO profile_account VALUES (null,"Homecenter","Su actividad se focaliza en desarrollar y proveer soluciones a los proyectos de remodelación y construcción de sus clientes, además de satisfacer las necesidades de mejoramiento y decoración de sus hogares.","company",17,"img-homecenter",47,9);
INSERT INTO profile_account VALUES (null,"Cencosud","Cencosud S.A. es una Compañía con presencia en cinco países de América Latina (Chile, Argentina, Brasil, Perú y Colombia), en Estados Unidos y en China -con una oficina comercial.","company",18,"img-cencosud",48,2);
INSERT INTO profile_account VALUES (null,"Medimás EPS","Medimás, llega como una nueva entidad creada por el consorcio Prestasalud y está habilitada para prestar el servicio de salud tanto en el Régimen Contributivo, como en el Régimen Subsidiado.","company",19,"img-medima eps",49,5);
INSERT INTO profile_account VALUES (null,"Compensar","Compensar como entidad de Seguridad Social facilita a sus afiliados, a través de los Planes de Bienestar, un amplio portafolio de servicios que le permite,generar condiciones que favorecen el desarrollo personal.","company",20,"img-compensar",50,16);
INSERT INTO profile_account VALUES (null,"Samsung Colombia","Samsung es un conglomerado de empresas multinacionales con sede en Seúl, Corea del Sur. Se trata del mayor grupo empresarial surcoreano, con numerosas filiales que abarcan negocios como la electrónica de consumo.","company",21,"img-samsung colombia",51,8);
INSERT INTO profile_account VALUES (null,"Avianca","La red de rutas Avianca es una de las más amplias de Latinoamérica, operando en sus aviones de corto, mediano y largo alcance, vuelos a 108 destinos en América y Europa en 26 países.","company",22,"img-avianca",52,3);
INSERT INTO profile_account VALUES (null,"Coomeva EPS","Somos un Grupo Empresarial Cooperativo cuya entidad matriz es Coomeva Cooperativa, conformada por profesionales que se asocian para satisfacer necesidades comunes.","company",23,"img-coomeva",53,20);
INSERT INTO profile_account VALUES (null,"Audifarma","dedicada al comercio al por mayor y al por menor de productos farmacéuticos medicinales, cosméticos y tocador. La empresa es un gestor farmacéutico integral, brindando soluciones globales a los clientes.","company",24,"img-audifarma",54,5);
INSERT INTO profile_account VALUES (null,"Cementos Argos","Cementos Argos es una compañía líder en la producción de cemento y concreto en los mercados en los que tiene presencia. Hoy es la primera productora en cemento y concreto en Colombia.","company",25,"img-cementos argos",55,7);
INSERT INTO profile_account VALUES (null,"Postobon","Postobón es la compañía de bebidas líder en Colombia, que con la diversidad de productos y sabores que ofrece genera sensaciones únicas a sus consumidores.","company",26,"img-postobon",56,3);
INSERT INTO profile_account VALUES (null,"Alpina","Alpina Productos Alimenticios S.A. es una empresa multinacional colombiana productora de alimentos a base de lácteos. Tiene operación en Colombia, Ecuador, Venezuela y Estados Unidos y comercializa sus productos en centro América.","company",27,"img-alpina",57,4);
INSERT INTO profile_account VALUES (null,"Cemex Colombia","CEMEX es una compañía global de materiales para la industria de la construcción que ofrece productos de alta calidad y servicios confiables a clientes y comunidades en América, Europa, África, Medio Oriente y Asia.","company",28,"img-cemex colombia",58,14);
INSERT INTO profile_account VALUES (null,"Italcol","Italcol es una empresa colombiana especializada en la producción, distribución, venta y exportación de alimentos concentrados para todas las especies pecuarias, venta de materias primas y premezclas.","company",29,"img-italcol",59,12);
INSERT INTO profile_account VALUES (null,"Makro","Makro: autoservicio mayorista, comercializa productos en las áreas de alimentos secos, alimentos perecederos y no alimentos. Bajo el concepto 'PAGUE Y LLEVE' y la estrategia de mejor calidad al más bajo precio.","company",30,"img-makro",60,1);



INSERT INTO interest_area VALUES ( null,"Ingenieria de sistemas" );
INSERT INTO interest_area VALUES ( null,"Administracion de empresas" );
INSERT INTO interest_area VALUES ( null,"Comunicacion Social" );
INSERT INTO interest_area VALUES ( null,"Finanzas y negocios internacionales" );
INSERT INTO interest_area VALUES ( null,"Mercadeo y publicidad" );
INSERT INTO interest_area VALUES ( null,"Seguridad" );
INSERT INTO interest_area VALUES ( null,"Servicios generales" );
INSERT INTO interest_area VALUES ( null,"Medicina" );



INSERT INTO specific_interest VALUES (null,"Inteligencia artificial y algoritmia",1 );
INSERT INTO specific_interest VALUES (null,"Sistemas digitales",1 );
INSERT INTO specific_interest VALUES (null,"Produt manager",1 );
INSERT INTO specific_interest VALUES (null,"Backend",1 );
INSERT INTO specific_interest VALUES (null,"Diseño de redes",1 );

INSERT INTO specific_interest VALUES (null,"Finanzas y contabilidad",2 );
INSERT INTO specific_interest VALUES (null,"Recursos humanos y gestión de personal",2 );
INSERT INTO specific_interest VALUES (null,"Gestión y liderazgo empresarial",2 );
INSERT INTO specific_interest VALUES (null,"Gestión de proyectos",2 );
INSERT INTO specific_interest VALUES ( null,"Emprendimiento y creación de empresas",2 );

INSERT INTO specific_interest VALUES ( null,"Periodismo",3 );
INSERT INTO specific_interest VALUES ( null,"Comunicación digital",3 );
INSERT INTO specific_interest VALUES ( null,"Producción audiovisual",3 );
INSERT INTO specific_interest VALUES ( null,"Relaciones públicas",3 );
INSERT INTO specific_interest VALUES ( null,"Publicidad",3 );

INSERT INTO specific_interest VALUES ( null,"Analista financiero",4 );
INSERT INTO specific_interest VALUES ( null,"Consultor financiero",4 );
INSERT INTO specific_interest VALUES ( null,"Gerente financiero",4 );
INSERT INTO specific_interest VALUES ( null,"Comercio internacional",4 );
INSERT INTO specific_interest VALUES ( null,"Planificación estratégica",4 );

INSERT INTO specific_interest VALUES ( null,"Gerente de marketing",5 );
INSERT INTO specific_interest VALUES ( null,"Investigador de mercado",5 );
INSERT INTO specific_interest VALUES ( null,"Ejecutivo de cuentas",5 );
INSERT INTO specific_interest VALUES ( null,"Publicista",5 );
INSERT INTO specific_interest VALUES ( null,"Diseñador gráfico",5 );

INSERT INTO specific_interest VALUES ( null,"Oficial de seguridad",6 );
INSERT INTO specific_interest VALUES ( null,"Gerente de seguridad",6 );
INSERT INTO specific_interest VALUES ( null,"Especialista en seguridad física",6 );
INSERT INTO specific_interest VALUES ( null,"Especialista en protección ambiental",6 );
INSERT INTO specific_interest VALUES ( null,"Consultor de seguridad",6 );

INSERT INTO specific_interest VALUES ( null,"Auxiliar de cocina",7 );
INSERT INTO specific_interest VALUES ( null,"Conserje",7 );
INSERT INTO specific_interest VALUES ( null,"Conductor",7 );
INSERT INTO specific_interest VALUES ( null,"Asistente de mantenimiento",7 );
INSERT INTO specific_interest VALUES ( null,"Coordinador de logística",7 );

INSERT INTO specific_interest VALUES ( null,"Médico de atención primaria",8 );
INSERT INTO specific_interest VALUES ( null,"Farmacología",8 );
INSERT INTO specific_interest VALUES ( null,"Enfermería",8 );
INSERT INTO specific_interest VALUES ( null,"Salud pública",8 );
INSERT INTO specific_interest VALUES ( null,"Odontología",8 );


INSERT INTO profile_specialization VALUES ( null,1,2 );
INSERT INTO profile_specialization VALUES ( null,1,3 );
INSERT INTO profile_specialization VALUES ( null,1,4 );

INSERT INTO profile_specialization VALUES ( null,2,20);
INSERT INTO profile_specialization VALUES ( null,2,9 );
INSERT INTO profile_specialization VALUES ( null,2,4 );

INSERT INTO profile_specialization VALUES ( null,3,4);
INSERT INTO profile_specialization VALUES ( null,3,16 );
INSERT INTO profile_specialization VALUES ( null,3,19 );

INSERT INTO profile_specialization VALUES ( null,4,25);
INSERT INTO profile_specialization VALUES ( null,4,30);
INSERT INTO profile_specialization VALUES ( null,4,16);
INSERT INTO profile_specialization VALUES ( null,4,26);
INSERT INTO profile_specialization VALUES ( null,4,21);

INSERT INTO profile_specialization VALUES ( null,5,9);
INSERT INTO profile_specialization VALUES ( null,5,20);
INSERT INTO profile_specialization VALUES ( null,5,24);
INSERT INTO profile_specialization VALUES ( null,5,25);

INSERT INTO profile_specialization VALUES ( null,6,35 );
INSERT INTO profile_specialization VALUES ( null,6,20 );
INSERT INTO profile_specialization VALUES ( null,6,15 );

INSERT INTO profile_specialization VALUES ( null,7,2);
INSERT INTO profile_specialization VALUES ( null,7,23 );
INSERT INTO profile_specialization VALUES ( null,7,12 );

INSERT INTO profile_specialization VALUES ( null,8,7);
INSERT INTO profile_specialization VALUES ( null,8,8 );
INSERT INTO profile_specialization VALUES ( null,8,14 );

INSERT INTO profile_specialization VALUES ( null,9,24);
INSERT INTO profile_specialization VALUES ( null,9,21);
INSERT INTO profile_specialization VALUES ( null,9,15);
INSERT INTO profile_specialization VALUES ( null,9,21);
INSERT INTO profile_specialization VALUES ( null,9,22);

INSERT INTO profile_specialization VALUES ( null,10,7);
INSERT INTO profile_specialization VALUES ( null,10,11);
INSERT INTO profile_specialization VALUES ( null,10,24);
INSERT INTO profile_specialization VALUES ( null,10,12);

INSERT INTO profile_specialization VALUES ( null,11,1 );
INSERT INTO profile_specialization VALUES ( null,11,9 );
INSERT INTO profile_specialization VALUES ( null,11,14 );

INSERT INTO profile_specialization VALUES ( null,12,12);
INSERT INTO profile_specialization VALUES ( null,12,23 );
INSERT INTO profile_specialization VALUES ( null,12,13 );

INSERT INTO profile_specialization VALUES ( null,13,19);
INSERT INTO profile_specialization VALUES ( null,13,18 );
INSERT INTO profile_specialization VALUES ( null,13,13 );

INSERT INTO profile_specialization VALUES ( null,14,11);
INSERT INTO profile_specialization VALUES ( null,14,10);
INSERT INTO profile_specialization VALUES ( null,14,16);
INSERT INTO profile_specialization VALUES ( null,14,23);
INSERT INTO profile_specialization VALUES ( null,14,9);

INSERT INTO profile_specialization VALUES ( null,15,7);
INSERT INTO profile_specialization VALUES ( null,15,35);
INSERT INTO profile_specialization VALUES ( null,15,24);
INSERT INTO profile_specialization VALUES ( null,15,27);

INSERT INTO profile_specialization VALUES ( null,16,16 );
INSERT INTO profile_specialization VALUES ( null,16,20 );
INSERT INTO profile_specialization VALUES ( null,16,15 );

INSERT INTO profile_specialization VALUES ( null,17,28);
INSERT INTO profile_specialization VALUES ( null,17,23 );
INSERT INTO profile_specialization VALUES ( null,17,12 );

INSERT INTO profile_specialization VALUES ( null,18,27);
INSERT INTO profile_specialization VALUES ( null,18,18 );
INSERT INTO profile_specialization VALUES ( null,18,13 );

INSERT INTO profile_specialization VALUES ( null,19,30);
INSERT INTO profile_specialization VALUES ( null,19,21);
INSERT INTO profile_specialization VALUES ( null,19,34);
INSERT INTO profile_specialization VALUES ( null,19,23);
INSERT INTO profile_specialization VALUES ( null,19,35);

INSERT INTO profile_specialization VALUES ( null,20,31);
INSERT INTO profile_specialization VALUES ( null,20,38);
INSERT INTO profile_specialization VALUES ( null,20,32);
INSERT INTO profile_specialization VALUES ( null,20,39);

INSERT INTO profile_specialization VALUES ( null,21,33 );
INSERT INTO profile_specialization VALUES ( null,21,34);
INSERT INTO profile_specialization VALUES ( null,21,35 );

INSERT INTO profile_specialization VALUES ( null,22,24);
INSERT INTO profile_specialization VALUES ( null,22,23 );
INSERT INTO profile_specialization VALUES ( null,22,35 );

INSERT INTO profile_specialization VALUES ( null,23,36);
INSERT INTO profile_specialization VALUES ( null,23,38 );
INSERT INTO profile_specialization VALUES ( null,23,37 );

INSERT INTO profile_specialization VALUES ( null,24,11);
INSERT INTO profile_specialization VALUES ( null,24,21);
INSERT INTO profile_specialization VALUES ( null,24,36);
INSERT INTO profile_specialization VALUES ( null,24,23);
INSERT INTO profile_specialization VALUES ( null,24,22);

INSERT INTO profile_specialization VALUES ( null,25,39);
INSERT INTO profile_specialization VALUES ( null,25,18);
INSERT INTO profile_specialization VALUES ( null,25,24);
INSERT INTO profile_specialization VALUES ( null,25,15);

INSERT INTO profile_specialization VALUES ( null,26,38 );
INSERT INTO profile_specialization VALUES ( null,26,6 );
INSERT INTO profile_specialization VALUES ( null,26,15 );

INSERT INTO profile_specialization VALUES ( null,27,27);
INSERT INTO profile_specialization VALUES ( null,27,23 );
INSERT INTO profile_specialization VALUES ( null,27,26 );

INSERT INTO profile_specialization VALUES ( null,28,37);
INSERT INTO profile_specialization VALUES ( null,28,38 );
INSERT INTO profile_specialization VALUES ( null,28,36 );

INSERT INTO profile_specialization VALUES ( null,29,38);
INSERT INTO profile_specialization VALUES ( null,29,36);
INSERT INTO profile_specialization VALUES ( null,29,16);
INSERT INTO profile_specialization VALUES ( null,29,37);
INSERT INTO profile_specialization VALUES ( null,29,22);

INSERT INTO profile_specialization VALUES ( null,30,36);
INSERT INTO profile_specialization VALUES ( null,30,37);
INSERT INTO profile_specialization VALUES ( null,30,38);
INSERT INTO profile_specialization VALUES ( null,30,39);


INSERT INTO profile_specialization VALUES ( null,31,5 );
INSERT INTO profile_specialization VALUES ( null,31,20 );
INSERT INTO profile_specialization VALUES ( null,31,15 );

INSERT INTO profile_specialization VALUES ( null,32,3);
INSERT INTO profile_specialization VALUES ( null,32,8 );
INSERT INTO profile_specialization VALUES ( null,32,18 );

INSERT INTO profile_specialization VALUES ( null,33,16);
INSERT INTO profile_specialization VALUES ( null,33,11 );
INSERT INTO profile_specialization VALUES ( null,33,25 );

INSERT INTO profile_specialization VALUES ( null,34,4);
INSERT INTO profile_specialization VALUES ( null,34,9);
INSERT INTO profile_specialization VALUES ( null,34,14);
INSERT INTO profile_specialization VALUES ( null,34,6);
INSERT INTO profile_specialization VALUES ( null,34,19);

INSERT INTO profile_specialization VALUES ( null,35,2);
INSERT INTO profile_specialization VALUES ( null,35,22);
INSERT INTO profile_specialization VALUES ( null,35,12);
INSERT INTO profile_specialization VALUES ( null,35,17);

INSERT INTO profile_specialization VALUES ( null,36,5 );
INSERT INTO profile_specialization VALUES ( null,36,20 );
INSERT INTO profile_specialization VALUES ( null,36,15 );

INSERT INTO profile_specialization VALUES ( null,37,3);
INSERT INTO profile_specialization VALUES ( null,37,8 );
INSERT INTO profile_specialization VALUES ( null,37,18 );

INSERT INTO profile_specialization VALUES ( null,38,16);
INSERT INTO profile_specialization VALUES ( null,38,11 );
INSERT INTO profile_specialization VALUES ( null,38,25 );

INSERT INTO profile_specialization VALUES ( null,39,4);
INSERT INTO profile_specialization VALUES ( null,39,9);
INSERT INTO profile_specialization VALUES ( null,39,14);
INSERT INTO profile_specialization VALUES ( null,39,6);
INSERT INTO profile_specialization VALUES ( null,39,19);

INSERT INTO profile_specialization VALUES ( null,40,2);
INSERT INTO profile_specialization VALUES ( null,40,22);
INSERT INTO profile_specialization VALUES ( null,40,12);
INSERT INTO profile_specialization VALUES ( null,40,17);

INSERT INTO profile_specialization VALUES ( null,41,5 );
INSERT INTO profile_specialization VALUES ( null,41,20 );
INSERT INTO profile_specialization VALUES ( null,41,15 );

INSERT INTO profile_specialization VALUES ( null,42,3);
INSERT INTO profile_specialization VALUES ( null,42,8 );
INSERT INTO profile_specialization VALUES ( null,42,18 );

INSERT INTO profile_specialization VALUES ( null,43,16);
INSERT INTO profile_specialization VALUES ( null,43,11 );
INSERT INTO profile_specialization VALUES ( null,43,25 );

INSERT INTO profile_specialization VALUES ( null,44,4);
INSERT INTO profile_specialization VALUES ( null,44,9);
INSERT INTO profile_specialization VALUES ( null,44,14);
INSERT INTO profile_specialization VALUES ( null,44,6);
INSERT INTO profile_specialization VALUES ( null,44,19);

INSERT INTO profile_specialization VALUES ( null,45,2);
INSERT INTO profile_specialization VALUES ( null,45,22);
INSERT INTO profile_specialization VALUES ( null,45,12);
INSERT INTO profile_specialization VALUES ( null,45,17);

INSERT INTO profile_specialization VALUES ( null,46,5 );
INSERT INTO profile_specialization VALUES ( null,46,20 );
INSERT INTO profile_specialization VALUES ( null,46,15 );

INSERT INTO profile_specialization VALUES ( null,47,3);
INSERT INTO profile_specialization VALUES ( null,47,8 );
INSERT INTO profile_specialization VALUES ( null,47,18 );

INSERT INTO profile_specialization VALUES ( null,48,16);
INSERT INTO profile_specialization VALUES ( null,48,11 );
INSERT INTO profile_specialization VALUES ( null,48,25 );

INSERT INTO profile_specialization VALUES ( null,49,4);
INSERT INTO profile_specialization VALUES ( null,49,9);
INSERT INTO profile_specialization VALUES ( null,49,14);
INSERT INTO profile_specialization VALUES ( null,49,6);
INSERT INTO profile_specialization VALUES ( null,49,19);

INSERT INTO profile_specialization VALUES ( null,50,2);
INSERT INTO profile_specialization VALUES ( null,50,22);
INSERT INTO profile_specialization VALUES ( null,50,12);
INSERT INTO profile_specialization VALUES ( null,50,17);

INSERT INTO profile_specialization VALUES ( null,51,5 );
INSERT INTO profile_specialization VALUES ( null,51,20 );
INSERT INTO profile_specialization VALUES ( null,51,15 );

INSERT INTO profile_specialization VALUES ( null,52,3);
INSERT INTO profile_specialization VALUES ( null,52,8 );
INSERT INTO profile_specialization VALUES ( null,52,18 );

INSERT INTO profile_specialization VALUES ( null,53,16);
INSERT INTO profile_specialization VALUES ( null,53,11 );
INSERT INTO profile_specialization VALUES ( null,53,25 );

INSERT INTO profile_specialization VALUES ( null,54,4);
INSERT INTO profile_specialization VALUES ( null,54,9);
INSERT INTO profile_specialization VALUES ( null,54,14);
INSERT INTO profile_specialization VALUES ( null,54,6);
INSERT INTO profile_specialization VALUES ( null,54,19);

INSERT INTO profile_specialization VALUES ( null,55,2);
INSERT INTO profile_specialization VALUES ( null,55,22);
INSERT INTO profile_specialization VALUES ( null,55,12);
INSERT INTO profile_specialization VALUES ( null,55,17);

INSERT INTO profile_specialization VALUES ( null,56,5 );
INSERT INTO profile_specialization VALUES ( null,56,20 );
INSERT INTO profile_specialization VALUES ( null,56,15 );

INSERT INTO profile_specialization VALUES ( null,57,3);
INSERT INTO profile_specialization VALUES ( null,57,8 );
INSERT INTO profile_specialization VALUES ( null,57,18 );

INSERT INTO profile_specialization VALUES ( null,58,16);
INSERT INTO profile_specialization VALUES ( null,58,11 );
INSERT INTO profile_specialization VALUES ( null,58,25 );

INSERT INTO profile_specialization VALUES ( null,59,4);
INSERT INTO profile_specialization VALUES ( null,59,9);
INSERT INTO profile_specialization VALUES ( null,59,14);
INSERT INTO profile_specialization VALUES ( null,59,6);
INSERT INTO profile_specialization VALUES ( null,59,19);

INSERT INTO profile_specialization VALUES ( null,60,2);
INSERT INTO profile_specialization VALUES ( null,60,22);
INSERT INTO profile_specialization VALUES ( null,60,12);
INSERT INTO profile_specialization VALUES ( null,60,17);


-- ACCIONES (MATCHS)

INSERT INTO actions VALUES ( null,"2020-01-01","like","applicant",0,0,1,30);
INSERT INTO actions VALUES ( null,"2020-03-15","like","company",1,0,1,30);

INSERT INTO actions VALUES ( null,"2020-05-20","like","applicant",0,0,2,1);
INSERT INTO actions VALUES ( null,"2020-07-04","dislike","company",0,0,2,1);

INSERT INTO actions VALUES ( null,"2020-09-22","like","applicant",0,0,3,3);
INSERT INTO actions VALUES ( null,"2020-11-11","like","company",1,0,3,3);

INSERT INTO actions VALUES ( null,"2021-01-01","like","applicant",0,0,4,6);
INSERT INTO actions VALUES ( null,"2021-03-17","Like","company",0,0,4,6);

INSERT INTO actions VALUES ( null,"2021-05-23","like","applicant",0,0,1,5);
INSERT INTO actions VALUES ( null,"2021-07-11","like","company",1,0,1,5);

INSERT INTO actions VALUES ( null,"2021-09-30","like","applicant",0,0,1,2);
INSERT INTO actions VALUES ( null,"2021-11-25","Dislike","company",0,0,1,2);

INSERT INTO actions VALUES ( null,"2022-01-01","like","applicant",0,0,2,7);
INSERT INTO actions VALUES ( null,"2022-02-14","Dislike","company",0,0,2,7);

INSERT INTO actions VALUES ( null,"2022-03-19","like","applicant",0,0,3,8);
INSERT INTO actions VALUES ( null,"2022-05-01","Dislike","company",0,0,3,8);

INSERT INTO actions VALUES ( null,"2022-06-20","like","applicant",0,0,4,9);
INSERT INTO actions VALUES ( null,"2022-08-07","like","company",1,0,4,9);

INSERT INTO actions VALUES ( null,"2022-10-05","like","applicant",0,0,24,10);
INSERT INTO actions VALUES ( null,"2022-12-25","Dislike","company",0,0,24,10);


INSERT INTO actions VALUES ( null,"2020-02-29","like","company",0,0,7,11);
INSERT INTO actions VALUES ( null,"2020-04-12","like","applicant",1,0,7,11);

INSERT INTO actions VALUES ( null,"2020-06-10","like","company",0,0,18,15);
INSERT INTO actions VALUES ( null,"2020-08-14","Dislike","applicant",0,0,18,15);

INSERT INTO actions VALUES ( null,"2020-10-19","like","company",0,0,2,13);
INSERT INTO actions VALUES ( null,"2020-12-08","like","applicant",1,0,2,13);

INSERT INTO actions VALUES ( null,"2021-02-02","like","company",0,0,30,17);
INSERT INTO actions VALUES ( null,"2021-04-08","like","applicant",1,0,30,17);

INSERT INTO actions VALUES ( null,"2021-06-15","like","company",0,0,12,25);
INSERT INTO actions VALUES ( null,"2021-08-21","Dislike","applicant",0,0,12,25);

INSERT INTO actions VALUES ( null,"2021-10-27","like","company",0,0,25,24);
INSERT INTO actions VALUES ( null,"2022-02-01","Dislike","applicant",0,0,25,24);

INSERT INTO actions VALUES ( null,"2022-04-17","like","company",0,0,13,16);
INSERT INTO actions VALUES ( null,"2022-06-24","like","applicant",1,0,13,16);

INSERT INTO actions VALUES ( null,"2022-08-30","like","company",0,0,29,29);
INSERT INTO actions VALUES ( null,"2022-11-06","like","applicant",1,0,29,29);

INSERT INTO actions VALUES ( null,"2023-01-01","like","company",0,0,6,23);
INSERT INTO actions VALUES ( null,"2023-03-17","Dislike","applicant",0,0,6,23);

INSERT INTO actions VALUES ( null,"2023-05-25","like","company",0,0,27,16);
INSERT INTO actions VALUES ( null,"2023-07-22","like","applicant",1,0,27,16);



select * from actions






