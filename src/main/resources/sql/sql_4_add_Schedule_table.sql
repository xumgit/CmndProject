USE `smartinstall`;$$

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `smartinstall`.`schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `platform` varchar(45) DEFAULT NULL,
  `schedule` varchar(45) DEFAULT NULL,
  `content` TEXT DEFAULT NULL,
  `lastEdit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;$$

drop procedure if exists schema_change_schedule;$$  

create procedure schema_change_schedule() 
begin  

	if not exists (select * from information_schema.columns where table_name = 'setting' and column_name = 'scheduleId') then  
	   ALTER TABLE `smartinstall`.`setting` ADD COLUMN `scheduleId` int(11) DEFAULT NULL AFTER `uiCustomizationsId`;
	end if;

END;$$

CALL schema_change_schedule();$$

drop procedure if exists setting_table_change;$$  

create procedure setting_table_change() 
begin  

	if not exists (select * from information_schema.columns where table_name = 'setting' and column_name = 'appPackageId') then  
   		ALTER TABLE `smartinstall`.`setting` ADD COLUMN `appPackageId` int(11) DEFAULT NULL AFTER `channelPackageId`;
	end if;

END;$$

CALL setting_table_change();$$

drop procedure if exists get_setting_count;$$  

create procedure get_setting_count(in platform varchar(45), out totalCounts integer) 
begin  
	
	select count(1) from `smartinstall`.`setting` where setting.`platform` = platform into totalCounts;

END;$$
