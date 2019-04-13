USE `smartinstall`;$$

--
-- Table structure for table `uicustomizations`
--

CREATE TABLE IF NOT EXISTS `smartinstall`.`uicustomizations`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `platform` varchar(45) DEFAULT NULL,
  `value` longtext,
  `lastEdit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;$$


drop procedure if exists schema_change;$$  

create procedure schema_change() 
begin  

	if not exists (select * from information_schema.columns where table_name = 'setting' and column_name = 'uiCustomizationsId') then  
	   ALTER TABLE `smartinstall`.`setting` ADD COLUMN `uiCustomizationsId` int(11) DEFAULT NULL AFTER `bannersId`;
	end if;

END $$

CALL schema_change() $$
