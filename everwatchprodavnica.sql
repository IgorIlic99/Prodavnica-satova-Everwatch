-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2025 at 12:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `everwatchprodavnica`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `ime` varchar(20) DEFAULT NULL,
  `prezime` varchar(50) DEFAULT NULL,
  `broj_telefona` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `poruka` varchar(500) DEFAULT NULL,
  `datum` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`ime`, `prezime`, `broj_telefona`, `email`, `poruka`, `datum`) VALUES
('Marko', 'Marković', '060222444', 'markomarkovic@gmail.com', 'Zdravo!', '2025-11-01T19:44:54.002Z'),
('Uglješa', 'Pantić', '064777888', 'ugljesapantic@gmail.com', 'Želim da kupim sat.', '2025-11-12T22:24:54.668Z'),
('Mile', 'Kostić', '069555444', 'milekostic@gmail.com', 'Zdravo!', '2025-11-13T19:18:01.618Z'),
('Zdravko', 'Mamić', '060222333', 'zdravkomamic@gmail.com', 'Pozdrav!', '2025-11-13T19:19:35.212Z'),
('Milica', 'Milutinović', '066222333', 'milicamilutinovic@gmail.com', 'Ćao!', '2025-11-15 23:27:56'),
('Saša', 'Đorđević', '064222333', 'sasadjordjevic@gmail.com', 'Pozdrav!', '2025-11-16 10:05:57');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `datum` varchar(50) DEFAULT NULL,
  `kontakt_informacije.broj_telefona` varchar(20) DEFAULT NULL,
  `kontakt_informacije.email` varchar(50) DEFAULT NULL,
  `adresa_za_isporuku.ime` varchar(20) DEFAULT NULL,
  `adresa_za_isporuku.prezime` varchar(50) DEFAULT NULL,
  `adresa_za_isporuku.grad` varchar(30) DEFAULT NULL,
  `adresa_za_isporuku.naselje` varchar(30) DEFAULT NULL,
  `adresa_za_isporuku.adresa` varchar(50) DEFAULT NULL,
  `adresa_za_isporuku.postanski_broj` varchar(5) DEFAULT NULL,
  `adresa_za_isporuku.okrug` varchar(30) DEFAULT NULL,
  `adresa_za_naplatu.ime` varchar(20) DEFAULT NULL,
  `adresa_za_naplatu.prezime` varchar(50) DEFAULT NULL,
  `adresa_za_naplatu.grad` varchar(30) DEFAULT NULL,
  `adresa_za_naplatu.naselje` varchar(30) DEFAULT NULL,
  `adresa_za_naplatu.adresa` varchar(50) DEFAULT NULL,
  `adresa_za_naplatu.postanski_broj` varchar(5) DEFAULT NULL,
  `adresa_za_naplatu.okrug` varchar(30) DEFAULT NULL,
  `napomena` varchar(500) DEFAULT NULL,
  `proizvodi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`proizvodi`)),
  `ukupna_cena` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`datum`, `kontakt_informacije.broj_telefona`, `kontakt_informacije.email`, `adresa_za_isporuku.ime`, `adresa_za_isporuku.prezime`, `adresa_za_isporuku.grad`, `adresa_za_isporuku.naselje`, `adresa_za_isporuku.adresa`, `adresa_za_isporuku.postanski_broj`, `adresa_za_isporuku.okrug`, `adresa_za_naplatu.ime`, `adresa_za_naplatu.prezime`, `adresa_za_naplatu.grad`, `adresa_za_naplatu.naselje`, `adresa_za_naplatu.adresa`, `adresa_za_naplatu.postanski_broj`, `adresa_za_naplatu.okrug`, `napomena`, `proizvodi`, `ukupna_cena`) VALUES
('2025-11-08T10:16:02.801Z', '066555333', 'igorilic@gmail.com', 'Igor', 'Ilić', 'Jagodina', 'Mali Popović', 'Kralja Petra I 21', '35222', 'Pomoravski', 'Igor', 'Ilić', 'Jagodina', 'Mali Popović', 'Kralja Petra I 21', '35222', 'Pomoravski', 'Zdravo!', '[{\"id\":\"LT017\",\"title\":\"Lotus satovi\",\"brand\":\"Lotus\",\"price\":16490,\"category\":\"men\",\"status\":\"Na stanju\",\"img\":\"lotus_satovi_lt017.png\",\"creation_date\":\"2025-08-26T00:00:00.000Z\",\"highlight\":true,\"added_quantity\":3,\"desc\":\"Rolex Submariner — legendarni ronilački sat s vodootpornošću do 300m, automatski mehanizam, keramički bezel.\"},{\"id\":\"SC014\",\"title\":\"Sector satovi\",\"brand\":\"Sector\",\"price\":12500,\"category\":\"men\",\"status\":\"Na stanju\",\"img\":\"sector_satovi_sc014.png\",\"creation_date\":\"2024-12-27T00:00:00.000Z\",\"highlight\":true,\"desc\":\"TAG Heuer Carrera — sportski kronograf inspiriran auto-moto takmičenjima, sa tačimetrom i jasnom čitljivošću.\",\"added_quantity\":1},{\"id\":\"LT003\",\"title\":\"Lotus satovi\",\"brand\":\"Lotus\",\"price\":14590,\"category\":\"men\",\"status\":\"Na stanju\",\"img\":\"lotus_satovi_lt003.png\",\"creation_date\":\"2025-03-05T00:00:00.000Z\",\"highlight\":false,\"desc\":\"Breitling Navitimer — pilotski sat sa kliznim rulem i složenim funkcijama za navigaciju.\",\"added_quantity\":2}]', 91150),
('2025-11-12T22:22:36.590Z', '063555444', 'ruzaruzic@gmail.com', 'Ruža', 'Ružić', 'Priboj', '', 'Svetog Save 28', '33000', '', 'Ruža', 'Ružić', 'Priboj', '', 'Svetog Save 28', '33000', '', '', '[{\"id\":\"TH024\",\"title\":\"Tommy Hilfiger satovi\",\"brand\":\"Tommy Hilfiger\",\"price\":23090,\"category\":\"women\",\"status\":\"Na stanju\",\"img\":\"tommy_hilfiger_satovi_th024.png\",\"creation_date\":\"2025-04-16T22:00:00.000Z\",\"highlight\":0,\"desc\":\"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\",\"added_quantity\":1},{\"id\":\"RO044\",\"title\":\"Rosefield satovi\",\"brand\":\"Rosefield\",\"price\":15990,\"category\":\"women\",\"status\":\"Na stanju\",\"img\":\"rosefield_satovi_ro044.png\",\"creation_date\":\"2025-08-17T00:00:00.000Z\",\"highlight\":0,\"desc\":\"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\",\"added_quantity\":1},{\"id\":\"GU031\",\"title\":\"Guess satovi\",\"brand\":\"Guess\",\"price\":19560,\"category\":\"women\",\"status\":\"Na stanju\",\"img\":\"guess_satovi_gu031.png\",\"creation_date\":\"2025-01-14T00:00:00.000Z\",\"highlight\":0,\"desc\":\"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\",\"added_quantity\":1},{\"id\":\"FA028\",\"title\":\"Fossil satovi\",\"brand\":\"Fossil\",\"price\":41390,\"category\":\"women\",\"status\":\"Na stanju\",\"img\":\"fossil_satovi_fa028.png\",\"creation_date\":\"2025-09-25T00:00:00.000Z\",\"highlight\":0,\"desc\":\"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\",\"added_quantity\":1},{\"id\":\"CL002\",\"title\":\"Calypso satovi\",\"brand\":\"Calypso\",\"price\":4890,\"category\":\"kid\",\"status\":\"Na stanju\",\"img\":\"calypso_satovi_cl002.png\",\"creation_date\":\"2025-06-13T00:00:00.000Z\",\"highlight\":0,\"desc\":\"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\",\"added_quantity\":2}]', 109810),
('2025-11-13T20:43:52.620Z', '062666999', 'markomarkovic@gmail.com', 'Marko', 'Marković', 'Subotica', '', 'Svetog Save 28', '14000', '', 'Marko', 'Marković', 'Subotica', '', 'Svetog Save 28', '14000', '', '', '[{\"id\": \"LT017\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 16490, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt017.png\", \"creation_date\": \"2025-08-26T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Rolex Submariner \\u2014 legendarni ronila\\u010dki sat s vodootporno\\u0161\\u0107u do 300m, automatski mehanizam, kerami\\u010dki bezel.\", \"added_quantity\": 1}, {\"id\": \"LT026\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 23090, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt026.png\", \"creation_date\": \"2024-09-11T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Patek Philippe Calatrava \\u2014 klasi\\u010dni dress sat poznat po jednostavnom i sofisticiranom dizajnu. :contentReference[oaicite:1]{index=1}\", \"added_quantity\": 1}]', 39580),
('2025-11-13T21:44:32.286Z', '065111444', 'lazarlazic@gmail.com', 'Lazar', 'Lazić', 'Niš', '', 'Kneza Miloša 5', '18000', '', 'Lazar', 'Lazić', 'Niš', '', 'Kneza Miloša 5', '18000', '', '', '[{\"id\": \"LT003\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 14590, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt003.png\", \"creation_date\": \"2025-03-05T00:00:00.000Z\", \"highlight\": 0, \"desc\": \"Breitling Navitimer \\u2014 pilotski sat sa kliznim rulem i slo\\u017eenim funkcijama za navigaciju.\", \"added_quantity\": 1}, {\"id\": \"LT019\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 21990, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt019.png\", \"creation_date\": \"2025-06-25T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Hublot Big Bang \\u2014 bold dizajn, kombinacija materijala (keramika, karbonska vlakna), sportski karakter.\", \"added_quantity\": 1}]', 36580),
('2025-11-15T12:35:44.620Z', '062777111', 'danilodanilovic@gmail.com', 'Danilo', 'Danilović', 'Valjevo', '', 'Stefana Nemanje 18', '36000', '', 'Danilo', 'Danilović', 'Valjevo', '', 'Stefana Nemanje 18', '36000', '', '', '[{\"id\": \"LT026\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 23090, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt026.png\", \"creation_date\": \"2024-09-11T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Patek Philippe Calatrava \\u2014 klasi\\u010dni dress sat poznat po jednostavnom i sofisticiranom dizajnu. :contentReference[oaicite:1]{index=1}\", \"added_quantity\": 1}]', 23090),
('2025-11-15T17:31:04.098Z', '062888999', 'markomarkovic@gmail.com', 'Marko', 'Marković', 'Niš', '', 'Cara Konstantina 13', '18000', '', 'Marko', 'Marković', 'Niš', '', 'Cara Konstantina 13', '18000', '', '', '[{\"id\": \"GU018\", \"title\": \"Guess satovi\", \"brand\": \"Guess\", \"price\": 25390, \"category\": \"women\", \"status\": \"Na stanju\", \"img\": \"guess_satovi_gu018.png\", \"creation_date\": \"2025-09-19T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"added_quantity\": 1}]', 25390),
('2025-11-15T17:34:40.605Z', '066888333', 'ivanaivanovic@gmail.com', 'Ivana', 'Ivanović', 'Zrenjanin', '', 'Hajduk Veljka 24', '21000', '', 'Ivana', 'Ivanović', 'Zrenjanin', '', 'Hajduk Veljka 24', '21000', '', '', '[{\"id\": \"FA014\", \"title\": \"Fossil satovi\", \"brand\": \"Fossil\", \"price\": 26790, \"category\": \"women\", \"status\": \"Na stanju\", \"img\": \"fossil_satovi_fa014.png\", \"creation_date\": \"2025-05-13T00:00:00.000Z\", \"highlight\": 0, \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"added_quantity\": 1}]', 26790),
('2025-11-15T17:40:30.154Z', '061222777', 'anafilipovic@gmail.com', 'Ana', 'Filipović', 'Sombor', '', 'Dositeja Obradovića 14', '17000', '', 'Ana', 'Filipović', 'Sombor', '', 'Dositeja Obradovića 14', '17000', '', '', '[{\"id\": \"LT019\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 21990, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt019.png\", \"creation_date\": \"2025-06-25T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Hublot Big Bang \\u2014 bold dizajn, kombinacija materijala (keramika, karbonska vlakna), sportski karakter.\", \"added_quantity\": 1}]', 21990),
('2025-11-15T18:16:28.715Z', '067888555', 'nikolanikolic@gmail.com', 'Nikola', 'Nikolić', 'Priboj', '', 'Cara Dušana 5', '19000', '', 'Nikola', 'Nikolić', 'Priboj', '', 'Cara Dušana 5', '19000', '', '', '[{\"id\": \"LT017\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 16490, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt017.png\", \"creation_date\": \"2025-08-26T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Rolex Submariner \\u2014 legendarni ronila\\u010dki sat s vodootporno\\u0161\\u0107u do 300m, automatski mehanizam, kerami\\u010dki bezel.\", \"added_quantity\": 1}, {\"id\": \"LT019\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 21990, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt019.png\", \"creation_date\": \"2025-06-25T00:00:00.000Z\", \"highlight\": 1, \"desc\": \"Hublot Big Bang \\u2014 bold dizajn, kombinacija materijala (keramika, karbonska vlakna), sportski karakter.\", \"added_quantity\": 1}, {\"id\": \"LT031\", \"title\": \"Lotus satovi\", \"brand\": \"Lotus\", \"price\": 11790, \"category\": \"men\", \"status\": \"Na stanju\", \"img\": \"lotus_satovi_lt031.png\", \"creation_date\": \"2025-08-23T00:00:00.000Z\", \"highlight\": 0, \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"added_quantity\": 1}]', 50270),
('2025-11-15T22:33:40.696Z', '062111333', 'jovanjovanovic@gmail.com', 'Jovan', 'Jovanović', 'Lučani', '', 'Svetog Save 19', '31000', '', 'Jovan', 'Jovanović', 'Lučani', '', 'Svetog Save 19', '31000', '', '', '[{\"brand\": \"Lotus\", \"category\": \"men\", \"creation_date\": \"2025-03-05T00:00:00.000Z\", \"desc\": \"Breitling Navitimer \\u2014 pilotski sat sa kliznim rulem i slo\\u017eenim funkcijama za navigaciju.\", \"highlight\": 0, \"id\": \"LT003\", \"img\": \"lotus_satovi_lt003.png\", \"price\": 14590, \"status\": \"Na stanju\", \"title\": \"Lotus satovi\", \"added_quantity\": 2}, {\"brand\": \"Casio\", \"category\": \"universal\", \"creation_date\": \"2025-04-05T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 1, \"id\": \"CA034\", \"img\": \"casio_satovi_ca034.png\", \"price\": 6390, \"status\": \"Na stanju\", \"title\": \"Casio satovi\", \"added_quantity\": 1}, {\"brand\": \"Daniel Klein\", \"category\": \"men\", \"creation_date\": \"2025-06-12T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"DK028\", \"img\": \"daniel_klein_satovi_dk028.png\", \"price\": 10990, \"status\": \"Na stanju\", \"title\": \"Daniel Klein satovi\", \"added_quantity\": 3}]', 68540),
('2025-11-15T22:47:27.656Z', '067111999', 'milicapavlovic@gmail.com', 'Milica', 'Pavlović', 'Kruševac', '', 'Mihajla Pupina 9', '30000', '', 'Milica', 'Pavlović', 'Kruševac', '', 'Mihajla Pupina 9', '30000', '', '', '[{\"brand\": \"Calypso\", \"category\": \"kid\", \"creation_date\": \"2025-06-13T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"CL002\", \"img\": \"calypso_satovi_cl002.png\", \"price\": 4890, \"status\": \"Na stanju\", \"title\": \"Calypso satovi\", \"added_quantity\": 1}, {\"brand\": \"Calypso\", \"category\": \"kid\", \"creation_date\": \"2024-11-28T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"CL047\", \"img\": \"calypso_satovi_cl047.png\", \"price\": 3690, \"status\": \"Na stanju\", \"title\": \"Calypso satovi\", \"added_quantity\": 1}]', 8580),
('2025-11-16T09:07:42.690Z', '063222555', 'sasadjordjevic@gmail.com', 'Saša', 'Đorđević', 'Čačak', 'Ljubić', 'Stefana Nemanje 18', '32000', 'Moravički', 'Saša', 'Đorđević', 'Čačak', 'Ljubić', 'Stefana Nemanje 18', '32000', 'Moravički', 'Pozdrav dobri ljudi~', '[{\"brand\": \"Esprit\", \"category\": \"women\", \"creation_date\": \"2025-10-30T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"ES008\", \"img\": \"esprit_satovi_es008.png\", \"price\": 12890, \"status\": \"Na stanju\", \"title\": \"Esprit satovi\", \"added_quantity\": 3}, {\"brand\": \"Sector\", \"category\": \"men\", \"creation_date\": \"2024-12-27T00:00:00.000Z\", \"desc\": \"TAG Heuer Carrera \\u2014 sportski kronograf inspiriran auto-moto takmi\\u010denjima, sa ta\\u010dimetrom i jasnom \\u010ditljivo\\u0161\\u0107u.\", \"highlight\": 1, \"id\": \"SC014\", \"img\": \"sector_satovi_sc014.png\", \"price\": 12500, \"status\": \"Na stanju\", \"title\": \"Sector satovi\", \"added_quantity\": 3}, {\"brand\": \"Fossil\", \"category\": \"women\", \"creation_date\": \"2025-05-13T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"FA014\", \"img\": \"fossil_satovi_fa014.png\", \"price\": 26790, \"status\": \"Na stanju\", \"title\": \"Fossil satovi\", \"added_quantity\": 1}]', 102960),
('2025-11-16T09:10:44.754Z', '065222333', 'sasadjordjevic@gmail.com', 'Saša', 'Đorđević', 'Čačak', 'Ljubić', 'Stefana Nemanje 18', '32000', 'Moravički', 'Saša', 'Đorđević', 'Čačak', 'Ljubić', 'Stefana Nemanje 18', '32000', 'Moravički', 'Opet ja!', '[{\"brand\": \"Lotus\", \"category\": \"men\", \"creation_date\": \"2025-08-26T00:00:00.000Z\", \"desc\": \"Rolex Submariner \\u2014 legendarni ronila\\u010dki sat s vodootporno\\u0161\\u0107u do 300m, automatski mehanizam, kerami\\u010dki bezel.\", \"highlight\": 1, \"id\": \"LT017\", \"img\": \"lotus_satovi_lt017.png\", \"price\": 16490, \"status\": \"Na stanju\", \"title\": \"Lotus satovi\", \"added_quantity\": 1}, {\"brand\": \"Rosefield\", \"category\": \"women\", \"creation_date\": \"2025-02-08T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 1, \"id\": \"RO039\", \"img\": \"rosefield_satovi_ro039.png\", \"price\": 18690, \"status\": \"Na stanju\", \"title\": \"Rosefield satovi\", \"added_quantity\": 1}, {\"brand\": \"Calypso\", \"category\": \"kid\", \"creation_date\": \"2024-11-28T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"CL047\", \"img\": \"calypso_satovi_cl047.png\", \"price\": 3690, \"status\": \"Na stanju\", \"title\": \"Calypso satovi\", \"added_quantity\": 1}, {\"brand\": \"Calypso\", \"category\": \"kid\", \"creation_date\": \"2025-06-13T00:00:00.000Z\", \"desc\": \"Seiko Prospex Diver \\u2014 pouzdan ronila\\u010dki sat, ISO-certifikat, automatski mehanizam, odli\\u010dan omjer cijene i kvalitete.\", \"highlight\": 0, \"id\": \"CL002\", \"img\": \"calypso_satovi_cl002.png\", \"price\": 4890, \"status\": \"Na stanju\", \"title\": \"Calypso satovi\", \"added_quantity\": 1}]', 43760);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(5) DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  `brand` varchar(20) DEFAULT NULL,
  `price` float(20,2) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  `creation_date` varchar(50) DEFAULT NULL,
  `highlight` tinyint(1) DEFAULT NULL,
  `desc` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `brand`, `price`, `category`, `status`, `img`, `creation_date`, `highlight`, `desc`) VALUES
('LT017', 'Lotus satovi', 'Lotus', 16490.00, 'men', 'Na stanju', 'lotus_satovi_lt017.png', '2025-08-26T00:00:00.000Z', 1, 'Rolex Submariner — legendarni ronilački sat s vodootpornošću do 300m, automatski mehanizam, keramički bezel.'),
('SC034', 'Sector satovi', 'Sector', 15890.00, 'men', 'Nije na stanju', 'sector_satovi_sc034.png', '2025-04-02T00:00:00.000Z', 1, 'Omega Speedmaster “Moonwatch” — sat koji je nosio astronaut Buzz Aldrin na Mjesecu, kronograf pokretan ručnim navijanjem.'),
('SC009', 'Sector satovi', 'Sector', 17990.00, 'men', 'Nije na stanju', 'sector_satovi_sc009.png', '2025-01-15T00:00:00.000Z', 1, 'Cartier Tank Louis — elegantan dress sat, četvrtasto kućište, rimski brojevi, inspiracija ratnim tenkovima. :contentReference[oaicite:0]{index=0}'),
('LT026', 'Lotus satovi', 'Lotus', 23090.00, 'men', 'Na stanju', 'lotus_satovi_lt026.png', '2024-09-11T00:00:00.000Z', 1, 'Patek Philippe Calatrava — klasični dress sat poznat po jednostavnom i sofisticiranom dizajnu. :contentReference[oaicite:1]{index=1}'),
('SC014', 'Sector satovi', 'Sector', 12500.00, 'men', 'Na stanju', 'sector_satovi_sc014.png', '2024-12-27T00:00:00.000Z', 1, 'TAG Heuer Carrera — sportski kronograf inspiriran auto-moto takmičenjima, sa tačimetrom i jasnom čitljivošću.'),
('LT003', 'Lotus satovi', 'Lotus', 14590.00, 'men', 'Na stanju', 'lotus_satovi_lt003.png', '2025-03-05T00:00:00.000Z', 0, 'Breitling Navitimer — pilotski sat sa kliznim rulem i složenim funkcijama za navigaciju.'),
('LT033', 'Lotus satovi', 'Lotus', 16990.00, 'men', 'Nije na stanju', 'lotus_satovi_lt033.png', '2024-11-28T00:00:00.000Z', 1, 'Audemars Piguet Royal Oak — sportsko-luksuzni sat s osmerokutnim bezelom i integriranom narukvicom.'),
('LT019', 'Lotus satovi', 'Lotus', 21990.00, 'men', 'Na stanju', 'lotus_satovi_lt019.png', '2025-06-25T00:00:00.000Z', 1, 'Hublot Big Bang — bold dizajn, kombinacija materijala (keramika, karbonska vlakna), sportski karakter.'),
('LT024', 'Lotus satovi', 'Lotus', 11850.00, 'men', 'Na stanju', 'lotus_satovi_lt024.png', '2025-04-19T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('LT007', 'Lotus satovi', 'Lotus', 23890.00, 'men', 'Na stanju', 'lotus_satovi_lt007.png', '2025-01-27T00:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('LT016', 'Lotus satovi', 'Lotus', 16890.00, 'men', 'Nije na stanju', 'lotus_satovi_lt016.png', '2024-08-11T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('LT031', 'Lotus satovi', 'Lotus', 11790.00, 'men', 'Na stanju', 'lotus_satovi_lt031.png', '2025-08-23T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('CL002', 'Calypso satovi', 'Calypso', 4890.00, 'kid', 'Na stanju', 'calypso_satovi_cl002.png', '2025-06-13T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('CL047', 'Calypso satovi', 'Calypso', 3690.00, 'kid', 'Na stanju', 'calypso_satovi_cl047.png', '2024-11-28T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('CA011', 'Casio satovi', 'Casio', 5320.00, 'universal', 'Na stanju', 'casio_satovi_ca011.png', '2025-01-21T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('CA034', 'Casio satovi', 'Casio', 6390.00, 'universal', 'Na stanju', 'casio_satovi_ca034.png', '2025-04-05T00:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('FA028', 'Fossil satovi', 'Fossil', 41390.00, 'women', 'Na stanju', 'fossil_satovi_fa028.png', '2025-09-25T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('FA014', 'Fossil satovi', 'Fossil', 26790.00, 'women', 'Na stanju', 'fossil_satovi_fa014.png', '2025-05-13T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('RO039', 'Rosefield satovi', 'Rosefield', 18690.00, 'women', 'Na stanju', 'rosefield_satovi_ro039.png', '2025-02-08T00:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('RO044', 'Rosefield satovi', 'Rosefield', 15990.00, 'women', 'Na stanju', 'rosefield_satovi_ro044.png', '2025-08-17T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('ES008', 'Esprit satovi', 'Esprit', 12890.00, 'women', 'Na stanju', 'esprit_satovi_es008.png', '2025-10-30T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('ES021', 'Esprit satovi', 'Esprit', 15090.00, 'men', 'Na stanju', 'esprit_satovi_es021.png', '2025-02-14T00:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('ED013', 'Edifice satovi', 'Edifice', 37630.00, 'men', 'Na stanju', 'edifice_satovi_ed013.png', '2025-01-09T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('ED036', 'Edifice satovi', 'Edifice', 17890.00, 'men', 'Na stanju', 'edifice_satovi_ed036.png', '2025-05-22T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('GU018', 'Guess satovi', 'Guess', 25390.00, 'women', 'Na stanju', 'guess_satovi_gu018.png', '2025-09-19T00:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('GU031', 'Guess satovi', 'Guess', 19560.00, 'women', 'Na stanju', 'guess_satovi_gu031.png', '2025-01-14T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('PO006', 'Police satovi', 'Police', 35990.00, 'men', 'Na stanju', 'police_satovi_po006.png', '2025-11-04T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('PO043', 'Police satovi', 'Police', 19560.00, 'men', 'Na stanju', 'police_satovi_po043.png', '2025-07-27T22:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('TH024', 'Tommy Hilfiger satov', 'Tommy Hilfiger', 23090.00, 'women', 'Na stanju', 'tommy_hilfiger_satovi_th024.png', '2025-04-16T22:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('TH036', 'Tommy Hilfiger satov', 'Tommy Hilfiger', 19490.00, 'women', 'Na stanju', 'tommy_hilfiger_satovi_th036.png', '2025-03-08T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('DK005', 'Daniel Klein satovi', 'Daniel Klein', 7400.00, 'women', 'Na stanju', 'daniel_klein_satovi_dk005.png', '2025-06-12T00:00:00.000Z', 1, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.'),
('DK028', 'Daniel Klein satovi', 'Daniel Klein', 10990.00, 'men', 'Na stanju', 'daniel_klein_satovi_dk028.png', '2025-06-12T00:00:00.000Z', 0, 'Seiko Prospex Diver — pouzdan ronilački sat, ISO-certifikat, automatski mehanizam, odličan omjer cijene i kvalitete.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
