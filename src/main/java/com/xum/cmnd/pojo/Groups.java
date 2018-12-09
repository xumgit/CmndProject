package com.xum.cmnd.pojo;

public class Groups {
    private Integer id;

    private String groupname;

    private String tvid;

    private Integer firmwareid;

    private Integer cloneid;

    private String status;

    private String progress;

    private String powerstatus;

    private String createddate;

    private String modifieddate;

    private String tvstatus;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname == null ? null : groupname.trim();
    }

    public String getTvid() {
        return tvid;
    }

    public void setTvid(String tvid) {
        this.tvid = tvid == null ? null : tvid.trim();
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

    public String getPowerstatus() {
        return powerstatus;
    }

    public void setPowerstatus(String powerstatus) {
        this.powerstatus = powerstatus == null ? null : powerstatus.trim();
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

    public String getTvstatus() {
        return tvstatus;
    }

    public void setTvstatus(String tvstatus) {
        this.tvstatus = tvstatus == null ? null : tvstatus.trim();
    }
}