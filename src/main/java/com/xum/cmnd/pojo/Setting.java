package com.xum.cmnd.pojo;

import java.util.Date;

public class Setting {
    private Integer id;

    private String platform;

    private String type;

    private String createdBy;

    private Date createdDate;

    private String lastUpdatedBy;

    private Date lastUpdatedDate;

    private String geonameId;

    private String language;

    private String content;

    private Integer channelpackageid;

    private Integer apppackageid;

    private Integer settingpackageid;

    private Integer bannersid;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
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

    public String getGeonameId() {
        return geonameId;
    }

    public void setGeonameId(String geonameId) {
        this.geonameId = geonameId == null ? null : geonameId.trim();
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language == null ? null : language.trim();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public Integer getChannelpackageid() {
        return channelpackageid;
    }

    public void setChannelpackageid(Integer channelpackageid) {
        this.channelpackageid = channelpackageid;
    }

    public Integer getApppackageid() {
        return apppackageid;
    }

    public void setApppackageid(Integer apppackageid) {
        this.apppackageid = apppackageid;
    }

    public Integer getSettingpackageid() {
        return settingpackageid;
    }

    public void setSettingpackageid(Integer settingpackageid) {
        this.settingpackageid = settingpackageid;
    }

    public Integer getBannersid() {
        return bannersid;
    }

    public void setBannersid(Integer bannersid) {
        this.bannersid = bannersid;
    }
}