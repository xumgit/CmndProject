create or replace VIEW `deviceinfo_view` AS select `devices`.`Id` AS `Id`,`devices`.`TVName` AS `TVName`,`devices`.`TVModelNumber` AS `TVModelNumber`,`devices`.`TVSerialNumber` AS `TVSerialNumber`,`devices`.`TVRoomID` AS `TVRoomID`,`devices`.`TVMACAddress` AS `TVMACAddress`,`devices`.`TVIPAddress` AS `TVIPAddress`,`devices`.`VSecureTVID` AS `VSecureTVID`,`devices`.`Type` AS `Type`,`devices`.`PowerStatus` AS `PowerStatus`,`devices`.`TVUniqueID` AS `TVUniqueID`,`devices`.`FirmwareId` AS `FirmwareId`,`devices`.`CloneId` AS `CloneId`,`devices`.`LastCloneRename` AS `LastCloneRename`,`devices`.`Status` AS `Status`,`devices`.`Progress` AS `Progress`,`devices`.`TVStatus` AS `TVStatus`,`devices`.`si_clone_Identifiers` AS `si_clone_Identifiers`,`devices`.`si_firmware_Identifier` AS `si_firmware_Identifier`,`devices`.`tv_clone_Identifiers` AS `tv_clone_Identifiers`,`devices`.`tv_firmware_Identifier` AS `tv_firmware_Identifier`,`devices`.`success_siclone_Identifier` AS `success_siclone_Identifier`,`devices`.`success_tvclone_Identifier` AS `success_tvclone_Identifier`,`devices`.`clone_color` AS `clone_color`,`devices`.`fw_color` AS `fw_color`,`devices`.`CreatedDate` AS `CreatedDate`,`devices`.`ModifiedDate` AS `ModifiedDate`,`devices`.`Lastonline` AS `Lastonline`,`devices`.`clone_mode` AS `clone_mode`,`devices`.`upload_progress` AS `upload_progress`,`devices`.`upload_session_id` AS `upload_session_id`,`devices`.`upload_session_start` AS `upload_session_start`,`devices`.`upload_session_end` AS `upload_session_end`,`devices`.`upload_session_status` AS `upload_session_status`,`devices`.`channel_color` AS `channel_color`,`devices`.`app_color` AS `app_color`,`devices`.`upgrade_type` AS `upgrade_type`,`devices`.`si_Identifiers` AS `si_Identifiers`,`devices`.`networkInterfaceIp` AS `networkInterfaceIp`,`guestinfo`.`guestId` AS `guestId`,`guestinfo`.`guestName` AS `guestName`,`guestinfo`.`title` AS `title`,`guestinfo`.`guestLanguage` AS `guestLanguage`,`guestinfo`.`roomid` AS `roomid`,`guestinfo`.`tvsettingtype` AS `tvsettingtype`,`guestinfo`.`checkin` AS `checkin`,`guestinfo`.`orderid` AS `orderid`,`guestinfo`.`doNotDisturb` AS `doNotDisturb`,`guestinfo`.`viewBill` AS `viewBill`,`guestinfo`.`expressCheckout` AS `expressCheckout`,`guestinfo`.`arrivalDate` AS `arrivalDate`,`guestinfo`.`departureDate` AS `departureDate`,`guestinfo`.`groupName` AS `groupName`,`guestinfo`.`channelPackageId` AS `channelPackageId`,`guestinfo`.`appPackageId` AS `appPackageId`,`guestinfo`.`balance` AS `balance`,`guestinfo`.`viewMessage` AS `viewMessage`,`guestinfo`.`settingPackageId` AS `settingPackageId`,`guestinfo`.`contentId` AS `contentId`,`guestinfo`.`bannerId` AS `bannerId`,`guestinfo`.`scheduleId` AS `scheduleId`,`guestinfo`.`welcomeId` AS `welcomeId`,`apppackage`.`name` AS `appPackageName`,`channelpackage`.`name` AS `channelPackageName`,`reservation`.`reservationId` AS `reservationId`,`reservation`.`startTime` AS `startTime`,`reservation`.`endTime` AS `endTime`,concat(`reservation`.`startTime`,'-',`reservation`.`endTime`) AS `reservation` from ((((`devices` left join `guestinfo` on((`devices`.`TVRoomID` = `guestinfo`.`roomid`))) left join `channelpackage` on((`guestinfo`.`channelPackageId` = `channelpackage`.`id`))) left join `apppackage` on((`guestinfo`.`appPackageId` = `apppackage`.`id`))) left join `reservation` on((find_in_set(`guestinfo`.`guestName`,`reservation`.`guests`) > 0)));$$

