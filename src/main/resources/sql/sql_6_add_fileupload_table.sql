USE `smartinstall`;$$

--
-- Table structure for table `fileupload`
--

CREATE TABLE IF NOT EXISTS `smartinstall`.`fileupload` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NULL,
    `contentType` TEXT NULL,
    `size` INT(11) UNSIGNED DEFAULT 0,
    `uploadDate` DATETIME DEFAULT '0000-00-00 00:00:00',
    `content` LONGBLOB NULL,
    `path` TEXT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC)
) ENGINE = InnoDB; $$

