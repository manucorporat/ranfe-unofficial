create database journey;

use journey;


create table journey_info
(
    id int not null auto_increment primary key,
    origin char(15) not null,
    destination char(15) not null,
    departure time not null,
    arrival time not null,
    train_model char(10) not null,
    num_seats int not null,
    price char(7) not null
);

create table ocupation (
    id int not null auto_increment primary key,
    num_seats int not null,
    person_info int,
    used int not null,
    day date not null,
    journey_info int not null
);

create table person_info (
    id int not null auto_increment primary key,
    name char(20) not null,
    surname char(20) not null,
    dni char(10) not null,
    phone char(12) not null,
    email char(50) not null,
    ocupation int not null
);

/*
insert into info_recorrido values
(null,'MADRID', 'BILBAO'),
(null,'BILBAO', 'MADRID'),
(null,'MADRID', 'VALLADOLID'),
(null,'VALLADOLID', 'MADRID'),
(null,'MADRID', 'BARCELONA'),
(null,'BARCELONA', 'MADRID'),
(null,'VALLADOLID', 'BARCELONA'),
(null,'BARCELONA', 'VALLADOLID');


insert into info_viaje values 
(null,'06:05:00', '09:15:00','AVE',50,20,1),
(null,'08:05:00', '12:15:00','ALVIA',60,20,1),
(null,'07:05:00', '10:15:00','AVE',50,20,2),
(null,'08:05:00', '12:15:00','ALVIA',50,20,2),
(null,'13:05:00', '15:15:00','AVE',50,20,3),
(null,'03:05:00', '07:15:00','ALVIA',50,20,4),
(null,'05:05:00', '09:15:00','AVE',50,20,4),
(null,'03:05:00', '06:15:00','ALVIA',50,20,5),
(null,'01:05:00', '03:15:00','AVE',50,20,6),
(null,'07:05:00', '10:15:00','TALGO',50,20,7),
(null,'12:05:00', '13:15:00','AVE',50,20,8),
(null,'15:05:00', '19:15:00','TALGO',50,20,8);


insert into ocupacion values
(null,1, null, 0, '2017-12-01',1),
(null,1, null, 0, '2017-12-01',2),
(null,1, null, 0, '2017-12-03',3),
(null,2, null, 0, '2017-12-02',4),
(null,2, null, 0, '2017-12-01',5),
(null,2, null, 0, '2017-12-04',6),
(null,3, null, 0, '2017-12-03',2),
(null,3, null, 0, '2017-12-02',5),
(null,4, null, 0, '2017-12-12',8);


insert into info_persona values
(null, 'Manuel','Martinez-Almeida','72344618u','699780399','manuelgay@gmail.cc',1),
(null, 'Javier','Gonzalez ','11111111i','692841247','javiergay@gmail.jj',2),
(null, 'Pablo','Alvarez','87494792j','7147814214','pablo.9@hotmail.oo',3);

*/