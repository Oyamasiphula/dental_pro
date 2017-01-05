# dental_pro
Dentist Website for mobile phones

create database DrJones_data;

CREATE USER Dr_Jones@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON DrJones_data.* TO Dr_Jones@localhost;
flush privileges;
