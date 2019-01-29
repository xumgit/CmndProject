package com.xum.cmnd.pojo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import org.springframework.beans.factory.annotation.Value;

/*
 * @ApiModelProperty()用于方法，字段； 表示对model属性的说明或者数据操作更改 
 *	value–字段说明 
 *	name–重写属性名字 
 *	dataType–重写属性类型 
 *	required–是否必填 
 *	example–举例说明 
 *	hidden–隐藏
 * 
 * */

@ApiModel(value = "Devices", description = "devices column info")
public class Devices {
	
	@ApiModelProperty(notes = "devices id", name = "id",
			required = true, value = "devices id, uniqueid")
    private String id;

	@ApiModelProperty(notes = "devices name", name = "tvname", 
			required = true, value = "devices name")
	@Value("null")
    private String tvname;

	@ApiModelProperty(notes = "devices model number", name = "tvmodelnumber", 
			required = true, value = "devices tvmodelnumber")
    private String tvmodelnumber;

	@ApiModelProperty(notes = "devices serial number", name = "tvserialnumber", 
			required = true, value = "devices tvserialnumber")
    private String tvserialnumber;

	@ApiModelProperty(notes = "devices room id", name = "tvroomid", 
			required = true, value = "devices tvroomid")
    private String tvroomid;

	@ApiModelProperty(notes = "devices mac address", name = "tvmacaddress", 
			required = true, value = "devices tvmacaddress")
    private String tvmacaddress;

	@ApiModelProperty(notes = "devices ip address", name = "tvipaddress", 
			required = true, value = "devices tvipaddress")
    private String tvipaddress;

	@ApiModelProperty(notes = "devices vsecure id", name = "vsecuretvid", 
			required = true, value = "devices vsecuretvid")
    private String vsecuretvid;

	@ApiModelProperty(notes = "devices type", name = "type", 
			required = true, value = "devices type")
    private String type;

	@ApiModelProperty(notes = "devices power status", name = "powerstatus", 
			required = true, value = "devices powerstatus")
    private String powerstatus;

	@ApiModelProperty(notes = "devices tvunique id", name = "tvuniqueid", 
			required = true, value = "devices tvuniqueid")
    private String tvuniqueid;

	@ApiModelProperty(notes = "devices firmware id", name = "firmwareid", 
			required = true, value = "devices firmwareid")
    private Integer firmwareid;

	@ApiModelProperty(notes = "devices clone id", name = "cloneid", 
			required = true, value = "devices cloneid")
    private Integer cloneid;

	@ApiModelProperty(notes = "devices last clone name", name = "lastclonerename", 
			required = true, value = "devices lastclonerename")
	@Value("{\"old\":\"Unknown\",\"new\":\"Unknown\"}")
    private String lastclonerename;

	@ApiModelProperty(notes = "devices status", name = "status", 
			required = true, value = "devices status")
    private String status;

	@ApiModelProperty(notes = "devices progress", name = "progress", 
			required = true, value = "devices progress")
    private String progress;
    
	@ApiModelProperty(notes = "devices si Clone Identifiers", name = "siCloneIdentifiers", 
			required = true, value = "devices siCloneIdentifiers")
    private String siCloneIdentifiers;

	@ApiModelProperty(notes = "devices si Firmware Identifier", name = "siFirmwareIdentifier", 
			required = true, value = "devices siFirmwareIdentifier")
    private String siFirmwareIdentifier;

	@ApiModelProperty(notes = "devices tv Clone Identifiers", name = "tvCloneIdentifiers", 
			required = true, value = "devices tvCloneIdentifiers")
    private String tvCloneIdentifiers;

	@ApiModelProperty(notes = "devices tv Firmware Identifier", name = "tvFirmwareIdentifier", 
			required = true, value = "devices tvFirmwareIdentifier")
    private String tvFirmwareIdentifier;

	@ApiModelProperty(notes = "devices success siclone Identifier", name = "successSicloneIdentifier", 
			required = true, value = "devices successSicloneIdentifier")
    private String successSicloneIdentifier;

	@ApiModelProperty(notes = "devices success tv cloneIdentifier", name = "successTvcloneIdentifier", 
			required = true, value = "devices successTvcloneIdentifier")
    private String successTvcloneIdentifier;

	@ApiModelProperty(notes = "devices clone color", name = "cloneColor", 
			required = true, value = "devices cloneColor")
    private String cloneColor;

	@ApiModelProperty(notes = "devices fw color", name = "fwColor", 
			required = true, value = "devices fwColor")
    private String fwColor;

	@ApiModelProperty(notes = "devices created date", name = "createddate", 
			required = true, value = "devices createddate")
    private String createddate;

	@ApiModelProperty(notes = "devices modified date", name = "modifieddate", 
			required = true, value = "devices modifieddate")
    private String modifieddate;

	@ApiModelProperty(notes = "devices last online", name = "lastonline", 
			required = true, value = "devices last online time")
    private String lastonline;

	@ApiModelProperty(notes = "devices clone mode", name = "cloneMode", 
			required = true, value = "devices cloneMode")
    private String cloneMode;

	@ApiModelProperty(notes = "devices upload progress", name = "uploadProgress", 
			required = true, value = "devices uploadProgress")
    private String uploadProgress;

	@ApiModelProperty(notes = "devices upload session id", name = "uploadSessionId", 
			required = true, value = "devices uploadSessionId")
    private String uploadSessionId;

	@ApiModelProperty(notes = "devices upload session start", name = "uploadSessionStart", 
			required = true, value = "devices uploadSessionStart")
    private String uploadSessionStart;

	@ApiModelProperty(notes = "devices upload session status", name = "uploadSessionStatus", 
			required = true, value = "devices uploadSessionStatus")
    private String uploadSessionEnd;

	@ApiModelProperty(notes = "devices progress", name = "progress", 
			required = true, value = "devices progress")
    private String uploadSessionStatus;

	@ApiModelProperty(notes = "devices channel color", name = "channelColor", 
			required = true, value = "devices channelColor")
    private String channelColor;

	@ApiModelProperty(notes = "devices app color", name = "appColor", 
			required = true, value = "devices appColor")
    private String appColor;

	@ApiModelProperty(notes = "devices upgrade type", name = "upgradeType", 
			required = true, value = "devices upgradeType")
    private String upgradeType;

	@ApiModelProperty(notes = "devices network interface ip", name = "networkinterfaceip", 
			required = true, value = "devices networkinterfaceip")
    private String networkinterfaceip;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getTvname() {
        return tvname;
    }

    public void setTvname(String tvname) {
        this.tvname = tvname == null ? null : tvname.trim();
    }

    public String getTvmodelnumber() {
        return tvmodelnumber;
    }

    public void setTvmodelnumber(String tvmodelnumber) {
        this.tvmodelnumber = tvmodelnumber == null ? null : tvmodelnumber.trim();
    }

    public String getTvserialnumber() {
        return tvserialnumber;
    }

    public void setTvserialnumber(String tvserialnumber) {
        this.tvserialnumber = tvserialnumber == null ? null : tvserialnumber.trim();
    }

    public String getTvroomid() {
        return tvroomid;
    }

    public void setTvroomid(String tvroomid) {
        this.tvroomid = tvroomid;
    }

    public String getTvmacaddress() {
        return tvmacaddress;
    }

    public void setTvmacaddress(String tvmacaddress) {
        this.tvmacaddress = tvmacaddress == null ? null : tvmacaddress.trim();
    }

    public String getTvipaddress() {
        return tvipaddress;
    }

    public void setTvipaddress(String tvipaddress) {
        this.tvipaddress = tvipaddress == null ? null : tvipaddress.trim();
    }

    public String getVsecuretvid() {
        return vsecuretvid;
    }

    public void setVsecuretvid(String vsecuretvid) {
        this.vsecuretvid = vsecuretvid == null ? null : vsecuretvid.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getPowerstatus() {
        return powerstatus;
    }

    public void setPowerstatus(String powerstatus) {
        this.powerstatus = powerstatus == null ? null : powerstatus.trim();
    }

    public String getTvuniqueid() {
        return tvuniqueid;
    }

    public void setTvuniqueid(String tvuniqueid) {
        this.tvuniqueid = tvuniqueid == null ? null : tvuniqueid.trim();
    }

    public Integer getFirmwareid() {
        return firmwareid;
    }

    public void setFirmwareid(Integer firmwareid) {
        this.firmwareid = firmwareid;
    }

    public Integer getCloneid() {
        return cloneid;
    }

    public void setCloneid(Integer cloneid) {
        this.cloneid = cloneid;
    }

    public String getLastclonerename() {
        return lastclonerename;
    }

    public void setLastclonerename(String lastclonerename) {
        this.lastclonerename = lastclonerename == null ? null : lastclonerename.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress == null ? null : progress.trim();
    }

    public String getSiCloneIdentifiers() {
        return siCloneIdentifiers;
    }

    public void setSiCloneIdentifiers(String siCloneIdentifiers) {
        this.siCloneIdentifiers = siCloneIdentifiers == null ? null : siCloneIdentifiers.trim();
    }

    public String getSiFirmwareIdentifier() {
        return siFirmwareIdentifier;
    }

    public void setSiFirmwareIdentifier(String siFirmwareIdentifier) {
        this.siFirmwareIdentifier = siFirmwareIdentifier == null ? null : siFirmwareIdentifier.trim();
    }

    public String getTvCloneIdentifiers() {
        return tvCloneIdentifiers;
    }

    public void setTvCloneIdentifiers(String tvCloneIdentifiers) {
        this.tvCloneIdentifiers = tvCloneIdentifiers == null ? null : tvCloneIdentifiers.trim();
    }

    public String getTvFirmwareIdentifier() {
        return tvFirmwareIdentifier;
    }

    public void setTvFirmwareIdentifier(String tvFirmwareIdentifier) {
        this.tvFirmwareIdentifier = tvFirmwareIdentifier == null ? null : tvFirmwareIdentifier.trim();
    }

    public String getSuccessSicloneIdentifier() {
        return successSicloneIdentifier;
    }

    public void setSuccessSicloneIdentifier(String successSicloneIdentifier) {
        this.successSicloneIdentifier = successSicloneIdentifier == null ? null : successSicloneIdentifier.trim();
    }

    public String getSuccessTvcloneIdentifier() {
        return successTvcloneIdentifier;
    }

    public void setSuccessTvcloneIdentifier(String successTvcloneIdentifier) {
        this.successTvcloneIdentifier = successTvcloneIdentifier == null ? null : successTvcloneIdentifier.trim();
    }

    public String getCloneColor() {
        return cloneColor;
    }

    public void setCloneColor(String cloneColor) {
        this.cloneColor = cloneColor == null ? null : cloneColor.trim();
    }

    public String getFwColor() {
        return fwColor;
    }

    public void setFwColor(String fwColor) {
        this.fwColor = fwColor == null ? null : fwColor.trim();
    }

    public String getCreateddate() {
        return createddate;
    }

    public void setCreateddate(String createddate) {
        this.createddate = createddate == null ? null : createddate.trim();
    }

    public String getModifieddate() {
        return modifieddate;
    }

    public void setModifieddate(String modifieddate) {
        this.modifieddate = modifieddate == null ? null : modifieddate.trim();
    }

    public String getLastonline() {
        return lastonline;
    }

    public void setLastonline(String lastonline) {
        this.lastonline = lastonline == null ? null : lastonline.trim();
    }

    public String getCloneMode() {
        return cloneMode;
    }

    public void setCloneMode(String cloneMode) {
        this.cloneMode = cloneMode == null ? null : cloneMode.trim();
    }

    public String getUploadProgress() {
        return uploadProgress;
    }

    public void setUploadProgress(String uploadProgress) {
        this.uploadProgress = uploadProgress == null ? null : uploadProgress.trim();
    }

    public String getUploadSessionId() {
        return uploadSessionId;
    }

    public void setUploadSessionId(String uploadSessionId) {
        this.uploadSessionId = uploadSessionId == null ? null : uploadSessionId.trim();
    }

    public String getUploadSessionStart() {
        return uploadSessionStart;
    }

    public void setUploadSessionStart(String uploadSessionStart) {
        this.uploadSessionStart = uploadSessionStart == null ? null : uploadSessionStart.trim();
    }

    public String getUploadSessionEnd() {
        return uploadSessionEnd;
    }

    public void setUploadSessionEnd(String uploadSessionEnd) {
        this.uploadSessionEnd = uploadSessionEnd == null ? null : uploadSessionEnd.trim();
    }

    public String getUploadSessionStatus() {
        return uploadSessionStatus;
    }

    public void setUploadSessionStatus(String uploadSessionStatus) {
        this.uploadSessionStatus = uploadSessionStatus == null ? null : uploadSessionStatus.trim();
    }

    public String getChannelColor() {
        return channelColor;
    }

    public void setChannelColor(String channelColor) {
        this.channelColor = channelColor == null ? null : channelColor.trim();
    }

    public String getAppColor() {
        return appColor;
    }

    public void setAppColor(String appColor) {
        this.appColor = appColor == null ? null : appColor.trim();
    }

    public String getUpgradeType() {
        return upgradeType;
    }

    public void setUpgradeType(String upgradeType) {
        this.upgradeType = upgradeType == null ? null : upgradeType.trim();
    }

    public String getNetworkinterfaceip() {
        return networkinterfaceip;
    }

    public void setNetworkinterfaceip(String networkinterfaceip) {
        this.networkinterfaceip = networkinterfaceip == null ? null : networkinterfaceip.trim();
    }
}