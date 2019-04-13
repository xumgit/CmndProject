USE `smartinstall` ;$$

--
-- Table structure for table `settingpackage`
--

CREATE TABLE IF NOT EXISTS `smartinstall`.`settingpackage`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `platform` varchar(45) DEFAULT NULL,
  `value` longtext,
  `lastEdit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;$$

CREATE TABLE IF NOT EXISTS `smartinstall`.`exapi`(
  `id` int(11) NOT NULL,
  `api` enum('on','off') DEFAULT 'off',
  `apiurl` varchar(256) DEFAULT NULL,
  `apikey` varchar(256) DEFAULT NULL,
  `apikeyname` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;$$

CREATE TABLE IF NOT EXISTS `smartinstall`.`banners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `content` varchar(45) DEFAULT NULL,
  `schedule` varchar(45) DEFAULT NULL,
  `triggers` varchar(45) DEFAULT NULL,
  `lastEdit` varchar(45) DEFAULT NULL,
  `response` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5;$$


drop procedure if exists schema_change;$$ 

create procedure schema_change() 
begin  

	if not exists (select * from information_schema.columns where table_name = 'setting' and column_name = 'settingPackageId') then  
		ALTER TABLE `smartinstall`.`setting` ADD COLUMN `settingPackageId` int(11) DEFAULT NULL AFTER `appPackageId`;
	end if;

	if not exists (select * from information_schema.columns where table_name = 'setting' and column_name = 'bannersId') then  
   		ALTER TABLE `smartinstall`.`setting` ADD COLUMN `bannersId` int(11) DEFAULT NULL AFTER `settingPackageId`;
	end if;

 	if not exists (select * from information_schema.columns where table_name = 'profile' and column_name = 'config') then  
   		ALTER TABLE `smartinstall`.`profile` ADD COLUMN `config` TEXT DEFAULT NULL AFTER `last_updated_date`;
 	end if;
 	
  	if not exists (select * from information_schema.columns where table_name = 'setting' and column_name = 'cloneItemStatus') then  
   		ALTER TABLE `smartinstall`.`setting` ADD COLUMN `cloneItemStatus` TEXT DEFAULT NULL AFTER `appPackageId`;
 	end if;

	if not exists (select * from information_schema.columns where table_name = 'playout_info' and column_name = 'connectId') then  
	   ALTER TABLE `smartinstall`.`playout_info` ADD COLUMN `connectId` int(11) DEFAULT NULL AFTER `schedule`;
	end if;
	
	if not exists (select * from information_schema.columns where table_name = 'playout_info' and column_name = 'status') then  
	   ALTER TABLE `smartinstall`.`playout_info` ADD COLUMN `status` int(11) DEFAULT NULL AFTER `connectId`;
	end if;

	if not exists (select * from information_schema.columns where table_name = 'banners' and column_name = 'date') then  
	   ALTER TABLE `smartinstall`.`banners`  ADD COLUMN `date` VARCHAR(45) NULL AFTER `response`;
	end if;

end;$$ 

CALL schema_change();$$

DROP PROCEDURE IF EXISTS `schema_banners_control`;$$
CREATE PROCEDURE schema_banners_control()
BEGIN

	if not exists (select * from banners where id = '1') then  
	   INSERT INTO `smartinstall`.`banners` VALUES (1,'banners1','Evacuation',null,'Now or at each startup','02-Nov-2018-T105300','',null);   
	end if;
	
	if not exists (select * from banners where id = '2') then  
	   INSERT INTO `smartinstall`.`banners` VALUES (2,'banners2','Firealert',null,'Now or at each startup','02-Nov-2018-T105300','',null);   
	end if;
	
	if not exists (select * from banners where id = '3') then  
	   INSERT INTO `smartinstall`.`banners` VALUES (3,'banners3','Star',null,'Now or at each startup','02-Nov-2018-T105300','',null);   
	end if;

END;$$

CALL schema_banners_control();$$
