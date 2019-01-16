package com.xum.cmnd.pojo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "Devices", description = "Device table info")
public class Devices {
	
	@ApiModelProperty("KeyWord")
    private String id;

	@ApiModelProperty("TV name")
    private String tvname;

	@ApiModelProperty("TV model number")
    private String tvmodelnumber;

	@ApiModelProperty("TV serial number")
    private String tvserialnumber;

	@ApiModelProperty("TV room id")
    private String tvroomid;

	@ApiModelProperty("TV mac address")
    private String tvmacaddress;

	@ApiModelProperty("TV ip address")
    private String tvipaddress;

	@ApiModelProperty("TV vsecuretv id")
    private String vsecuretvid;

	@ApiModelProperty("TV type")
    private String type;

	@ApiModelProperty("TV power status")
    private String powerstatus;

	@ApiModelProperty("TV uniqueid")
    private String tvuniqueid;

	@ApiModelProperty("TV assign firmware id")
    private Integer firmwareid;

	@ApiModelProperty("TV assign clone id")
    private Integer cloneid;

	@ApiModelProperty("TV last clone name")
    private String lastclonerename;

	@ApiModelProperty("TV status")
    private String status;

	@ApiModelProperty("TV progress")
    private String progress;

	@ApiModelProperty("TV siCloneIdentifiers")
    private String siCloneIdentifiers;

	@ApiModelProperty("TV siFirmwareIdentifier")
    private String siFirmwareIdentifier;

	@ApiModelProperty("TV tvCloneIdentifiers")
    private String tvCloneIdentifiers;

	@ApiModelProperty("TV tvFirmwareIdentifier")
    private String tvFirmwareIdentifier;

	@ApiModelProperty("TV successSicloneIdentifier")
    private String successSicloneIdentifier;

	@ApiModelProperty("TV successTvcloneIdentifier")
    private String successTvcloneIdentifier;

	@ApiModelProperty("TV cloneColor")
    private String cloneColor;

	@ApiModelProperty("TV fwColor")
    private String fwColor;

	@ApiModelProperty("TV createddate")
    private String createddate;

	@ApiModelProperty("TV modifieddate")
    private String modifieddate;

	@ApiModelProperty("TV lastonline")
    private String lastonline;

	@ApiModelProperty("TV cloneMode")
    private String cloneMode;

	@ApiModelProperty("TV uploadProgress")
    private String uploadProgress;

	@ApiModelProperty("TV uploadSessionId")
    private String uploadSessionId;

	@ApiModelProperty("TV uploadSessionStart")
    private String uploadSessionStart;

	@ApiModelProperty("TV uploadSessionEnd")
    private String uploadSessionEnd;

	@ApiModelProperty("TV uploadSessionStatus")
    private String uploadSessionStatus;

	@ApiModelProperty("TV channelColor")
    private String channelColor;

	@ApiModelProperty("TV appColor")
    private String appColor;

	@ApiModelProperty("TV upgradeType")
    private String upgradeType;

	@ApiModelProperty("TV networkinterfaceip")
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