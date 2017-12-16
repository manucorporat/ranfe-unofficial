create database journey;

use journey;

create table journey_info
(
    id int not null auto_increment primary key,
    origin char(20) not null,
    destination char(20) not null,
    departure time not null,
    arrival time not null,
    train_model char(20) not null,
    num_seats int not null,
    price float not null
);

insert into journey_info values
(null, "valladolid", "madrid", "17:00:00", "19:00:00", "ave", 100, 12),
(null, "valladolid", "sevilla", "17:00:00", "20:00:00", "talgo", 80, 100),
(null, "valladolid", "madrid", "17:00:00", "23:00:00", "ave", 200, 59),
(null, "valladolid", "sevilla", "18:00:00", "19:45:00", "alvia", 100, 23),
(null, "valladolid", "madrid", "17:00:00", "19:15:00", "ave", 90, 66),
(null, "valladolid", "sevilla", "07:22:00", "12:00:00", "ave", 200, 70),
(null, "valladolid", "madrid", "11:33:00", "19:00:00", "ave", 250, 70),
(null, "valladolid", "sevilla", "11:59:00", "15:15:00", "alvia", 100, 55),
(null, "madrid", "valladolid", "17:00:00", "19:00:00", "ave", 100, 12),
(null, "sevilla", "valladolid", "17:00:00", "20:00:00", "talgo", 80, 100),
(null, "madrid", "valladolid", "17:00:00", "23:00:00", "ave", 200, 59),
(null, "sevilla", "valladolid", "18:00:00", "19:45:00", "alvia", 100, 23),
(null, "madrid", "valladolid", "17:00:00", "19:15:00", "ave", 90, 66),
(null, "sevilla", "valladolid", "07:22:00", "12:00:00", "ave", 200, 70),
(null, "madrid", "valladolid", "11:33:00", "19:00:00", "ave", 250, 70),
(null, "sevilla", "valladolid", "11:59:00", "15:15:00", "alvia", 100, 55);

create table seats (
    id int not null auto_increment primary key,
    seat int not null,/*asientos que van ocupados*/
    used int not null,
    day date not null,
    journey_info int not null,
    name char(20) not null,
    surname char(20) not null,
    dni char(20) not null,
    phone char(20) not null,
    email char(60) not null
);