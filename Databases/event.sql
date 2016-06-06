-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2016 at 10:51 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `club_name` varchar(60) NOT NULL,
  `NUM_OF_INVITEES` int(11) DEFAULT NULL,
  `PRICE` float UNSIGNED DEFAULT NULL,
  `LOCATION` varchar(60) NOT NULL,
  `TIME` date DEFAULT NULL,
  `EVENT_ID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invitee`
--

CREATE TABLE `invitee` (
  `Attending` enum('Y','N') DEFAULT NULL,
  `drinking` enum('Y','N') DEFAULT NULL,
  `invitee_id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `Event_id` int(10) UNSIGNED DEFAULT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invitee`
--

INSERT INTO `invitee` (`Attending`, `drinking`, `invitee_id`, `name`, `Event_id`, `Time`) VALUES
('Y', 'Y', 32454, 'Nathan Chao', 2344, '2016-06-04 20:16:33'),
('N', 'Y', 43243, 'Eric Xiao', 45435, '2016-06-04 20:16:33'),
('Y', 'N', 43564, 'Tommy Ha', 33454, '2016-06-04 20:12:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`EVENT_ID`);

--
-- Indexes for table `invitee`
--
ALTER TABLE `invitee`
  ADD PRIMARY KEY (`invitee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `EVENT_ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `invitee`
--
ALTER TABLE `invitee`
  MODIFY `invitee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43565;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
