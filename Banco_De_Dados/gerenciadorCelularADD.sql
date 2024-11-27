-- INSERINDO UM NOVO DONO
INSERT INTO donos (nome,email,telefone)
VALUES 
('Lucas','lucas@gmail.com','454546465136'),
('Luis','luis@gmail.com','515461115'),
('Kaue','kaue@gmail.com','11324531351');

-- Associando um celular a esse dono 
INSERT INTO celulares (modelo, marca, numero_serie, id_dono)
VALUES 
('Poco2','xiaomi2','54645645123152', LAST_INSERT_ID()),
('Poco3','xiaomi3','54645645123153', LAST_INSERT_ID()),
('Poco4','xiaomi4','54645645123154', LAST_INSERT_ID());