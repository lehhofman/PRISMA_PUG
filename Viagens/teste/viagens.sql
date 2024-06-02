-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/06/2024 às 17:34
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `viagens`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `destino`
--

CREATE TABLE `destino` (
  `id` int(11) NOT NULL,
  `destino` varchar(191) NOT NULL,
  `valor` double NOT NULL,
  `data` datetime(3) NOT NULL,
  `imagemUrl` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `destino`
--

INSERT INTO `destino` (`id`, `destino`, `valor`, `data`, `imagemUrl`) VALUES
(1, 'México', 2653, '2029-11-17 00:00:00.000', 'https://conteudo.imguol.com.br/c/galeria/4e/2024/03/13/mexico-1710355650512_v2_750x421.jpg'),
(2, 'Campos do Jordão', 867, '2024-07-09 00:00:00.000', 'https://viajeibonito.com.br/wp-content/uploads/2021/09/lugares-para-visitar-em-campos-do-jordao.jpg'),
(3, 'Paris', 3598, '2027-07-24 00:00:00.000', 'https://th.bing.com/th/id/OIP.XhTay9LMBfkCHf0BXvRTKgAAAA?rs=1&pid=ImgDetMain'),
(4, 'Maragogi', 986.98, '2025-03-12 00:00:00.000', 'https://th.bing.com/th/id/OIP.-HtOq5dmVLRKEcLKMCGmFQHaE7?rs=1&pid=ImgDetMain'),
(5, 'Canada', 5743.34, '2029-08-04 00:00:00.000', 'https://th.bing.com/th/id/OIP.-FD5D__kjgzho6UOhG08DQHaE7?rs=1&pid=ImgDetMain'),
(6, 'Pernambuco', 865, '2026-12-27 00:00:00.000', 'https://www.qualviagem.com.br/wp-content/uploads/2017/01/iStock-477552846-e1484574696356.jpg'),
(7, 'Capitolio', 324.7, '2025-07-29 00:00:00.000', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/capitolio-clima.jpg'),
(8, 'Grécia', 6732.9, '2029-11-09 00:00:00.000', 'https://fajnepodroze.pl/wp-content/uploads/2020/10/akropol-1536x1152.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `hotel`
--

CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `hotel` varchar(191) NOT NULL,
  `valor` double NOT NULL,
  `avaliacao` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `site` varchar(191) NOT NULL,
  `imagemUrl` varchar(191) NOT NULL,
  `destinoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `hotel`
--

INSERT INTO `hotel` (`id`, `hotel`, `valor`, `avaliacao`, `email`, `site`, `imagemUrl`, `destinoId`) VALUES
(1, 'Hotel Housing', 543, 4, 'hotelhpusing@gmail.com', 'http://www.housinghoteis.com', 'https://th.bing.com/th/id/OIP.sI2OdoCKWMtIIdmkjGAWegHaFN?w=768&h=540&rs=1&pid=ImgDetMain', 1),
(2, 'Hotel Marriott', 1354.9, 5, 'marriotg@gmail.com', 'http://www.marriot.com', 'https://i2.wp.com/africaneyereport.com/wp-content/uploads/2018/04/Accra-Marriott-Hotel-Exterior.JPG.jpg', 2),
(3, 'Hotel Estrelar', 257, 2, 'estrelar@gmail.com', 'http://www.estrelars.com', 'https://th.bing.com/th/id/R.a61ec2ceb39c013242b789c9b09a066b?rik=HG4SIMXQ5Aq12w&pid=ImgRaw&r=0', 3),
(4, 'Hotel Nomma', 1575, 5, 'nomma2@gmail.com', 'http://www.nomma.com', 'https://th.bing.com/th/id/OIP.tmJUTwo9xo4V8KnNMV2TZQHaE7?rs=1&pid=ImgDetMain', 4),
(5, 'Hotel Flair', 546, 3, 'retorflair@gmail.com', 'http://www.flair.com', 'https://www.passeios.org/wp-content/uploads/2022/05/Novo-hotel-5-estrelas.jpg', 6),
(6, 'Hotel Hunghada', 869.9, 4, 'hunghada@gmail.com', 'http://www.hunghada.com', 'https://anaclaudiathorpe.ne10.uol.com.br/wp-content/uploads/2021/03/DE1C3BD4-AE87-43E9-8909-EF39EA56E890.jpeg?x75890', 7),
(7, 'Hotel Alegria', 239, 1, 'Alegria@gmail.com', 'http://www.Alegria.com', 'https://th.bing.com/th/id/OIP.CHazZrfh5Xwhl5qNuFXmOgHaFj?rs=1&pid=ImgDetMain', 8),
(8, 'Hotel Star', 877, 3, 'star@gmail.com', 'http://www.star.com', 'https://th.bing.com/th/id/OIP.6A3CjToT8dQvcEv4FLY1SwHaFc?w=847&h=623&rs=1&pid=ImgDetMain', 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `pontosturistico`
--

CREATE TABLE `pontosturistico` (
  `id` int(11) NOT NULL,
  `ponto` varchar(191) NOT NULL,
  `endereco` varchar(191) NOT NULL,
  `telefone` varchar(191) NOT NULL,
  `valor` double NOT NULL,
  `imagemUrl` varchar(191) NOT NULL,
  `destinoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `pontosturistico`
--

INSERT INTO `pontosturistico` (`id`, `ponto`, `endereco`, `telefone`, `valor`, `imagemUrl`, `destinoId`) VALUES
(1, 'Mayan', 'Centro de Rotas', '1999987845', 55.9, 'https://th.bing.com/th/id/OIP.wCPL9MnlS9AmtSDksOiB6gHaE7?rs=1&pid=ImgDetMain', 1),
(2, 'Suiça Brasileira', 'Centro de Rotas', '1999987845', 11, 'https://th.bing.com/th/id/OIP.HgTUxqM0qw6P0ti5RE706gHaE7?rs=1&pid=ImgDetMain', 2),
(3, 'Torre Eiffel', 'Centro de Rotas', '1999987845', 230, 'https://th.bing.com/th/id/OIP.ukeS6Qp1kepDtEH_l221LwHaEL?rs=1&pid=ImgDetMain', 3),
(4, 'Costa dos Corais', 'Centro de Rotas', '1999987845', 0, 'https://th.bing.com/th/id/R.a1d7f2872c8ab1f4e2af4e39c24db1e9?rik=cAYxp5ZF07hyCw&pid=ImgRaw&r=0', 4),
(5, 'Ottawa', 'Centro de Rotas', '1999987845', 2570.1, 'https://th.bing.com/th/id/R.a1c546bbac5af50f00ac9b25974e09e6?rik=3GHhjuoLN8eqSQ&pid=ImgRaw&r=0', 5),
(6, 'Porto de Galinhas', 'Centro de Rotas', '1999987845', 0, 'https://dicasdepassagensaereas.com/wp-content/uploads/2020/01/Ba%C3%ADa-do-Sancho-Fernando-de-Noronha.jpg', 6),
(7, 'Cachoeira da Capivara', 'Centro de Rotas', '1999987845', 0, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/79/de/cf/piscina-dos-desejos.jpg?w=1200&h=-1&s=1', 7),
(8, 'Athenas', 'Centro de Rotas', '1999987845', 0, 'https://th.bing.com/th/id/OIP.Jh4Q3Tp40QBE0VH8_nDlxgHaDe?rs=1&pid=ImgDetMain', 8);

-- --------------------------------------------------------

--
-- Estrutura para tabela `_hoteltopontosturistico`
--

CREATE TABLE `_hoteltopontosturistico` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('9c27bb5c-f994-4236-97a1-0f10ad247d1a', 'e349eae58bf394a01e63bc6a1b29f88919cb101a45114ca6226c4f3f40fde3b6', '2024-05-20 18:33:01.350', '20240520183300_init', NULL, NULL, '2024-05-20 18:33:00.794', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `destino`
--
ALTER TABLE `destino`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Hotel_destinoId_fkey` (`destinoId`);

--
-- Índices de tabela `pontosturistico`
--
ALTER TABLE `pontosturistico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PontosTuristico_destinoId_fkey` (`destinoId`);

--
-- Índices de tabela `_hoteltopontosturistico`
--
ALTER TABLE `_hoteltopontosturistico`
  ADD UNIQUE KEY `_HotelToPontosTuristico_AB_unique` (`A`,`B`),
  ADD KEY `_HotelToPontosTuristico_B_index` (`B`);

--
-- Índices de tabela `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `destino`
--
ALTER TABLE `destino`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `pontosturistico`
--
ALTER TABLE `pontosturistico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `Hotel_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `destino` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `pontosturistico`
--
ALTER TABLE `pontosturistico`
  ADD CONSTRAINT `PontosTuristico_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `destino` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `_hoteltopontosturistico`
--
ALTER TABLE `_hoteltopontosturistico`
  ADD CONSTRAINT `_HotelToPontosTuristico_A_fkey` FOREIGN KEY (`A`) REFERENCES `hotel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_HotelToPontosTuristico_B_fkey` FOREIGN KEY (`B`) REFERENCES `pontosturistico` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
