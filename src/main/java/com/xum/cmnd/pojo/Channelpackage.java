package com.xum.cmnd.pojo;

public class Channelpackage {
    private Integer id;

    private String platform;

    private Integer numberofchs;

    private String lastedit;

    private String createdby;

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

    public Integer getNumberofchs() {
        return numberofchs;
    }

    public void setNumberofchs(Integer numberofchs) {
        this.numberofchs = numberofchs;
    }

    public String getLastedit() {
        return lastedit;
    }

    public void setLastedit(String lastedit) {
        this.lastedit = lastedit == null ? null : lastedit.trim();
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby == null ? null : createdby.trim();
    }
}