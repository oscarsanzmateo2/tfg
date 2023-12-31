-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-12-2023 a las 11:52:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfg-2023-2024`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `AssignaturaID` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `ProfessorID` int(11) DEFAULT NULL,
  `Descripcio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`AssignaturaID`, `Nom`, `ProfessorID`, `Descripcio`) VALUES
(2, 'prova1', 14, ''),
(3, 'prova2', 14, ''),
(4, 'prova3', 14, ''),
(5, 'prova 4', 14, NULL),
(6, 'prova6', 14, NULL),
(7, 'prova7', 14, 'Algo com a descripcio'),
(8, 'provaAlumne', 14, ''),
(12, 'hola assignatura', 16, ''),
(13, 'matematiques 2', 17, 'En aquesta assignatura es podran fer problemes...'),
(14, 'efgsdgsd', 17, 'dfsgsdgdsgsdgsdg'),
(15, 'prova assignatura', 19, 'aixo es una prova'),
(16, 'segona prova', 19, 'askdfjasfasfasfa'),
(17, 'assignatura 1', 14, 'assignatura asidhasifjnsdfgljksdjngfsdg'),
(18, 'assignatura 1', 24, 'descripcio assignatura 1'),
(19, 'assignatura 2', 24, 'desijsfdvnboadhjgnosdigj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `problema`
--

CREATE TABLE `problema` (
  `ProblemaID` int(11) NOT NULL,
  `Enunciat` text NOT NULL,
  `TemaID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `problema`
--

INSERT INTO `problema` (`ProblemaID`, `Enunciat`, `TemaID`) VALUES
(2, '5x^2 + 7x - 6 = 0', 1),
(3, '-3x^2 - 4x + 1 = 0', 1),
(4, '2x^2 + 1x - 2 = 0', 1),
(5, '-6x^2 - 5x + 3 = 0', 1),
(6, '4x^2 + 9x + 2 = 0', 1),
(7, '-1x^2 - 3x + 5 = 0', 1),
(8, '3x^2 + 2x - 1 = 0', 1),
(9, '-8x^2 - 6x + 4 = 0', 1),
(10, '7x^2 + 8x - 9 = 0', 1),
(11, '-2x^2 - 1x + 3 = 0', 1),
(12, '5x^2 + 7x - 6 = 0', 9),
(13, '-3x^2 - 4x + 1 = 0', 9),
(14, '2x^2 + 1x - 2 = 0', 9),
(15, '-6x^2 - 5x + 3 = 0', 9),
(16, '4x^2 + 9x + 2 = 0', 9),
(17, '-1x^2 - 3x + 5 = 0', 9),
(18, '3x^2 + 2x - 1 = 0', 9),
(19, '-8x^2 - 6x + 4 = 0', 9),
(20, '7x^2 + 8x - 9 = 0', 9),
(21, '-2x^2 - 1x + 3 = 0', 9),
(22, '2x^2 + 3x - 5 = 0', 11),
(23, '-4x^2 - 6x + 10 = 0', 11),
(24, '3x^2 - 5x + 2 = 0', 11),
(25, '-2x^2 + 4x - 2 = 0', 11),
(26, '5x^2 + 2x - 7 = 0', 11),
(27, '-3x^2 - 2x + 6 = 0', 11),
(28, '4x^2 - 8x + 4 = 0', 11),
(29, '-5x^2 + 7x - 2 = 0', 11),
(30, '6x^2 + 4x - 10 = 0', 11),
(31, '-1x^2 - 3x + 2 = 0', 11),
(32, '-2x^2 + 3x - 1 = 0', 1),
(33, '4x^2 - 8x + 4 = 0', 1),
(34, '-5x^2 + 2x + 3 = 0', 1),
(35, '6x^2 + 9x + 3 = 0', 1),
(36, '-3x^2 + 6x - 3 = 0', 1),
(37, '7x^2 - 14x + 7 = 0', 1),
(38, '-8x^2 + 16x - 8 = 0', 1),
(39, '2x^2 - 7x + 5 = 0', 1),
(40, '-9x^2 - 12x - 4 = 0', 1),
(41, '10x^2 + 5x - 15 = 0', 1),
(42, '-2x^2 + 3x + 1 = 0', 13),
(43, '4x^2 - 6x - 4 = 0', 13),
(44, '5x^2 + 2x - 1 = 0', 13),
(45, '-3x^2 - 5x + 2 = 0', 13),
(46, '2x^2 - 7x - 3 = 0', 13),
(47, '-6x^2 + 4x + 2 = 0', 13),
(48, '8x^2 + 9x - 4 = 0', 13),
(49, '-4x^2 - 3x + 5 = 0', 13),
(50, '7x^2 + 2x + 3 = 0', 13),
(51, '-5x^2 - 7x - 2 = 0', 13),
(52, '-2x^2 + 2x - 12 = 0', 15),
(53, '3x^2 + 6x + 3 = 0', 15),
(54, '-x^2 + 5x - 6 = 0', 15),
(55, '4x^2 - 8x + 4 = 0', 15),
(56, '-5x^2 - 25x + 30 = 0', 15),
(57, '2x^2 - 4x + 2 = 0', 15),
(58, '-6x^2 + 24x - 16 = 0', 15),
(59, '-x^2 + 2x - 1 = 0', 15),
(60, '7x^2 + 7x + 2 = 0', 15),
(61, '-3x^2 - 6x - 3 = 0', 15),
(62, '2x^2 + 4x - 2 = 0', 16),
(63, '-3x^2 - 6x + 3 = 0', 16),
(64, '5x^2 - 10x + 5 = 0', 16),
(65, '-4x^2 + 8x - 4 = 0', 16),
(66, '6x^2 - 12x + 6 = 0', 16),
(67, '-7x^2 + 14x - 7 = 0', 16),
(68, '9x^2 + 18x - 9 = 0', 16),
(69, '-2x^2 - 4x + 2 = 0', 16),
(70, '8x^2 - 16x + 8 = 0', 16),
(71, '-10x^2 + 20x - 10 = 0', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registralumne`
--

CREATE TABLE `registralumne` (
  `RegistreID` int(11) NOT NULL,
  `AlumneID` int(11) DEFAULT NULL,
  `AssignaturaID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registralumne`
--

INSERT INTO `registralumne` (`RegistreID`, `AlumneID`, `AssignaturaID`) VALUES
(2, 22, 2),
(3, 22, 2),
(4, 22, 2),
(5, 18, 17),
(6, 18, 12),
(7, 18, 15),
(8, 23, 18),
(9, 23, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tema`
--

CREATE TABLE `tema` (
  `TemaID` int(11) NOT NULL,
  `NomTema` varchar(255) NOT NULL,
  `AssignaturaID` int(11) DEFAULT NULL,
  `DescripcioTema` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tema`
--

INSERT INTO `tema` (`TemaID`, `NomTema`, `AssignaturaID`, `DescripcioTema`) VALUES
(1, 'tema1', 2, 'asdfasfsadfasf'),
(2, 'tema2', 2, 'hola soc el tema 2'),
(3, 'tema1', 2, 'sdofgikjaga'),
(4, 'temaAlgo', 4, 'Algo de descripcio'),
(5, 'adadad', 6, 'sdfgsdfgsdgs'),
(6, '1243324', 3, 'sdfsafasdfasdf'),
(7, 'asdfasfasf', 5, 'sdfasfasfasf'),
(8, 'tema hola', 12, 'holaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholaholahola'),
(9, 'equacions 2n grau', 13, 'equacions de segon grau generades per IA!'),
(10, '<zxcz<c', 14, '<zxc<zcx<zc<zc'),
(11, 'vzxcvzxvzxv', 14, 'zxvzxvzxvzxvzx'),
(12, 'tema de prova', 16, 'aixo es un tema de prova'),
(13, 'tema', 16, 'tema proca '),
(14, 'tema', 16, 'tema proca '),
(15, 'tema1 assignatura 1', 17, 'qerwfgsdgsdfg'),
(16, 'tema 1', 18, 'descripcio tema 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuari`
--

CREATE TABLE `usuari` (
  `UsuariID` int(11) NOT NULL,
  `NomUsuari` varchar(255) NOT NULL,
  `Correu` varchar(255) NOT NULL,
  `Contrasenya` varchar(255) NOT NULL,
  `TipusUsuari` enum('Alumne','Professor','Administrador') NOT NULL,
  `AlumnesAssignaturesLlista` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`AlumnesAssignaturesLlista`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuari`
--

INSERT INTO `usuari` (`UsuariID`, `NomUsuari`, `Correu`, `Contrasenya`, `TipusUsuari`, `AlumnesAssignaturesLlista`) VALUES
(11, '2345235', '235235', '$2a$10$pxqXEThNwg1NkmihXjdzduoLhuYrALK8nhEBqwPyq0kcKM/ceVGmK', 'Alumne', NULL),
(12, 'Oscar', 'adsdad', '$2a$10$pn93ybe2r6l86UM2zXVleOstfpqBXycY1au8SFMWpc/QDxLDcKNBu', 'Alumne', NULL),
(13, 'Oscar', '1234@gmail.com', '$2a$10$g1hio71BxwUZX4Z.vZtdeOg/EqzNJxRmUrnYbwFV3jh1TBh7MXFP2', 'Professor', NULL),
(14, 'provaProfessor', 'testP@gmail.com', '$2a$10$IOb/Qi5fscdMT4shaYS7Qufbj.v26u3upo0mZwuBg3j4f7RMaeL.i', 'Professor', NULL),
(15, 'provaAlumne', 'testA@gmail.com', '$2a$10$7dUCTe/YNibUbpJ3Z4zWReTAl6cL4FahZPLknf66HJpWr08reqvTC', 'Alumne', NULL),
(16, 'hola bones', 'hola@gmail.com', '$2a$10$pPnOjN2XnO3ubcbGX3ns/OQ1DDS7fNEMrnS560JC3/2v7wkrwtH5C', 'Professor', NULL),
(17, 'Oscar Professor', 'oscar@gmail.com', '$2a$10$u2ByZAwAGKDyHdRs71EpkOztMJj9/XP.w2dMZ8omiusJ0AxECqkKK', 'Professor', NULL),
(18, 'alumne@gmail.com', 'alumne@gmail.com', '$2a$10$o9hXVGgCLOE0nZbgsBStNeyltsjL1jZ0tz2hdWKaGdPZUfKIx8H/C', 'Alumne', NULL),
(19, 'prova profe', 'pprofe@gmail.com', '$2a$10$wEHgpp8STJsbowX9I0zHcOaLH8gU59mfZ1lakuzDEagjxJGjd7qYO', 'Professor', NULL),
(20, 'alumne prova', 'provaAlumne', '$2a$10$RmeI0ALn.q7O9gEH/IoARuyHVnChEdlQq09Z3gEC4saaAUGhlwFJ.', 'Alumne', NULL),
(21, 'prova', 'provaAlumne@gmail.com', '$2a$10$s9LPYQkM74zhBXfiQV9greRzNtFFcpAYnjLLm/g/STtT.BL.hD6M6', 'Alumne', NULL),
(22, 'algoAlu', 'algoAlu@gmail.com', '$2a$10$OlaPneditKkt002G7YDo7eG7LYDNwwRT5/A/rfA6tMJIpncRZUhra', 'Alumne', NULL),
(23, 'alumne', 'alumne1@gmail.com', '$2a$10$uIKiTyXSiyPdW4bc2yYDG.bSpmAdShRDqbDmf3VtcOM43xkxbJByW', 'Alumne', NULL),
(24, 'professor', 'professor1@gmail.com', '$2a$10$9E9Tn0PCgOiZCqKNyPgEXeexJ4tu2FxnKD98EhChTGzi3AKRLBWIu', 'Professor', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`AssignaturaID`),
  ADD KEY `ProfesorID` (`ProfessorID`);

--
-- Indices de la tabla `problema`
--
ALTER TABLE `problema`
  ADD PRIMARY KEY (`ProblemaID`),
  ADD KEY `TemaID` (`TemaID`);

--
-- Indices de la tabla `registralumne`
--
ALTER TABLE `registralumne`
  ADD PRIMARY KEY (`RegistreID`),
  ADD KEY `AlumneID` (`AlumneID`),
  ADD KEY `AssignaturaID` (`AssignaturaID`);

--
-- Indices de la tabla `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`TemaID`),
  ADD KEY `AsignaturaID` (`AssignaturaID`);

--
-- Indices de la tabla `usuari`
--
ALTER TABLE `usuari`
  ADD PRIMARY KEY (`UsuariID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `AssignaturaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `problema`
--
ALTER TABLE `problema`
  MODIFY `ProblemaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `registralumne`
--
ALTER TABLE `registralumne`
  MODIFY `RegistreID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tema`
--
ALTER TABLE `tema`
  MODIFY `TemaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `usuari`
--
ALTER TABLE `usuari`
  MODIFY `UsuariID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD CONSTRAINT `asignatura_ibfk_1` FOREIGN KEY (`ProfessorID`) REFERENCES `usuari` (`UsuariID`);

--
-- Filtros para la tabla `problema`
--
ALTER TABLE `problema`
  ADD CONSTRAINT `problema_ibfk_1` FOREIGN KEY (`TemaID`) REFERENCES `tema` (`TemaID`);

--
-- Filtros para la tabla `registralumne`
--
ALTER TABLE `registralumne`
  ADD CONSTRAINT `registralumne_ibfk_1` FOREIGN KEY (`AlumneID`) REFERENCES `usuari` (`UsuariID`),
  ADD CONSTRAINT `registralumne_ibfk_2` FOREIGN KEY (`AssignaturaID`) REFERENCES `asignatura` (`AssignaturaID`);

--
-- Filtros para la tabla `tema`
--
ALTER TABLE `tema`
  ADD CONSTRAINT `tema_ibfk_1` FOREIGN KEY (`AssignaturaID`) REFERENCES `asignatura` (`AssignaturaID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
