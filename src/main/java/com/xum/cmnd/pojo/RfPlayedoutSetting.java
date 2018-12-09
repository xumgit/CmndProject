package com.xum.cmnd.pojo;

import java.util.Date;

public class RfPlayedoutSetting {
    private Integer id;

    private String createdBy;

    private Date createdDate;

    private String lastUpdatedBy;

    private Date lastUpdatedDate;

    private Date rfPlayedOn;

    private String rfPlayedBy;

    private String value;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Date getRfPlayedOn() {
        return rfPlayedOn;
    }

    public void setRfPlayedOn(Date rfPlayedOn) {
        this.rfPlayedOn = rfPlayedOn;
    }

    public String getRfPlayedBy() {
        return rfPlayedBy;
    }

    public void setRfPlayedBy(String rfPlayedBy) {
        this.rfPlayedBy = rfPlayedBy == null ? null : rfPlayedBy.trim();
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value == null ? null : value.trim();
    }
}