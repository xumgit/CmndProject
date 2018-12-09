package com.xum.cmnd.pojo;

import java.util.Date;

public class UpgSetting {
    private Integer id;

    private String platform;

    private String version;

    private String ipversion;

    private String upgrename;

    private String createdBy;

    private Date createdDate;

    private String lastUpdatedBy;

    private Date lastUpdatedDate;

    private Date upgPlayedOn;

    private String upgPlayedBy;

    private String isdelete;

    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform == null ? null : platform.trim();
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }

    public String getIpversion() {
        return ipversion;
    }

    public void setIpversion(String ipversion) {
        this.ipversion = ipversion == null ? null : ipversion.trim();
    }

    public String getUpgrename() {
        return upgrename;
    }

    public void setUpgrename(String upgrename) {
        this.upgrename = upgrename == null ? null : upgrename.trim();
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy == null ? null : createdBy.trim();
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getLastUpdatedBy() {
        return lastUpdatedBy;
    }

    public void setLastUpdatedBy(String lastUpdatedBy) {
        this.lastUpdatedBy = lastUpdatedBy == null ? null : lastUpdatedBy.trim();
    }

    public Date getLastUpdatedDate() {
        return lastUpdatedDate;
    }

    public void setLastUpdatedDate(Date lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
    }

    public Date getUpgPlayedOn() {
        return upgPlayedOn;
    }

    public void setUpgPlayedOn(Date upgPlayedOn) {
        this.upgPlayedOn = upgPlayedOn;
    }

    public String getUpgPlayedBy() {
        return upgPlayedBy;
    }

    public void setUpgPlayedBy(String upgPlayedBy) {
        this.upgPlayedBy = upgPlayedBy == null ? null : upgPlayedBy.trim();
    }

    public String getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(String isdelete) {
        this.isdelete = isdelete == null ? null : isdelete.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }
}