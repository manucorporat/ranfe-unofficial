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

create table seat (
    id int not null auto_increment primary key,
    num_seats int not null,/*asientos que van ocupados*/
    person_info int,
    used int not null,
    day date not null,
    journey_info int not null
);

create table person_info (
    id int not null auto_increment primary key,
    name_ char(20) not null,
    surname char(20) not null,
    dni char(10) not null,
    phone char(12) not null,
    email char(50) not null
);
