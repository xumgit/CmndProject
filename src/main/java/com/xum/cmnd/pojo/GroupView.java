package com.xum.cmnd.pojo;

public class GroupView {
    private String groupname;

    private Integer firmwareid;

    private Integer cloneid;

    private String createddate;

    private String modifieddate;

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname == null ? null : groupname.trim();
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
}