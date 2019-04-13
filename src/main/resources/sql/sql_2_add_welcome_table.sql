USE `smartinstall`;$$

CREATE TABLE IF NOT EXISTS `welcome` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` TEXT NOT NULL,
	`platform` VARCHAR(45) NULL DEFAULT NULL,
	`type` TINYINT(4) NOT NULL DEFAULT '0' COMMENT 'type=0, welcomeLogo,type=1,welcomeApp',
	`lastEdit` VARCHAR(45) NOT NULL DEFAULT '',
	`createdBy` VARCHAR(128) NULL DEFAULT 'admin',
	PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;$$