celularcelular -- Criando o banco de dados onde armazenaremos todas as informações
CREATE DATABASE GerenciamentoCelulares; -- Nome do banco de dados
USE GerenciamentoCelulares; -- Selecionando o banco de dados para trabalhar
-- Criando a tabela 'donos' para armazenar os dados pessoais dos donos
CREATE TABLE donos (
    id_dono INT AUTO_INCREMENT PRIMARY KEY, -- ID único para cada dono (chave primária)
    nome VARCHAR(100) NOT NULL,            -- Nome do dono (máximo de 100 caracteres, obrigatório)
    email VARCHAR(100) UNIQUE NOT NULL,    -- E-mail do dono (único e obrigatório)
    telefone VARCHAR(15)                   -- Telefone do dono (opcional, com até 15 caracteres)
);
-- Criando a tabela 'celulares' para armazenar as informações dos celulares
CREATE TABLE celulares (
    id_celular INT AUTO_INCREMENT PRIMARY KEYcelulares, -- ID único para cada celular (chave primária)
    modelo VARCHAR(100) NOT NULL,             -- Modelo do celular (máximo de 100 caracteres, obrigatório)
    marca VARCHAR(50) NOT NULL,               -- Marca do celular (máximo de 50 caracteres, obrigatório)
    numero_serie VARCHAR(50) UNIQUE NOT NULL, -- Número de série único do celular (obrigatório)
    id_dono INT,                              -- Chave estrangeira que vincula o celular a um dono
    FOREIGN KEY (id_dono) REFERENCES donos(id_dono) -- Configuração da chave estrangeira:
                                                    -- vincula 'id_dono' da tabela 'celulares'
                                                    -- com 'id_dono' da tabela 'donos'
    ON DELETE CASCADE                         -- Se um dono for excluído, seus celulares também serão excluídos
);
-- Inserindo dados na tabela 'donos' (dados dos proprietários)
INSERT INTO donos (nome, email, telefone)
VALUES 
    ('João Silva', 'joao.silva@gmail.com', '11999999999'), -- Dono João Silva com e-mail e telefone
    ('Maria Oliveira', 'maria.oliveira@gmail.com', '21988888888'), -- Dono Maria Oliveira
    ('Carlos Souza', 'carlos.souza@gmail.com', '31977777777'); -- Dono Carlos Souza
-- Inserindo dados na tabela 'celulares' (dados dos aparelhos)
INSERT INTO celulares (modelo, marca, numero_serie, id_dono)
VALUES 
    ('iPhone 14 Pro', 'Apple', 'APL123456', 1), -- iPhone 14 Pro de João Silva (id_dono = 1)
    ('Galaxy S23', 'Samsung', 'SMS987654', 2), -- Galaxy S23 de Maria Oliveira (id_dono = 2)
    ('Moto G100', 'Motorola', 'MTR654321', 3), -- Moto G100 de Carlos Souza (id_dono = 3)
    ('iPhone 13 Mini', 'Apple', 'APL789012', 1); -- iPhone 13 Mini também de João Silva (id_dono = 1)
-- Consultando todos os donos e os celulares associados a eles
SELECT 
    d.nome AS Nome_Dono,                -- Nome do dono
    d.email AS Email,                   -- E-mail do dono
    c.modelo AS Modelo_Celular,         -- Modelo do celular
    c.marca AS Marca,                   -- Marca do celular
    c.numero_serie AS Numero_Serie      -- Número de série do celular
FROM donos d                            -- Tabela 'donos', abreviada como 'd'
LEFT JOIN celulares c                   -- Junta 'donos' com 'celulares' usando LEFT JOIN
ON d.id_dono = c.id_dono                -- Relaciona as tabelas com base no campo 'id_dono'
ORDER BY d.nome;    gerenciandocelularesdonocelular                    -- Ordena os resultados pelo nome do dono
-- Consultando quantos celulares cada dono possui
SELECT 
    d.nome AS Nome_Dono,               -- Nome do dono
    COUNT(c.id_celular) AS TotalCelulares -- Conta o número de celulares vinculados a cada dono
FROM donos d                           -- Tabela 'donos'
LEFT JOIN celulares c                  -- Junta 'donos' com 'celulares'
ON d.id_dono = c.id_dono               -- Relaciona as tabelas com base no campo 'id_dono'
GROUP BY d.id_dono                     -- Agrupa os resultados por cada dono
ORDER BY TotalCelulares DESC;          -- Ordena pelos donos com mais celulares primeiro

