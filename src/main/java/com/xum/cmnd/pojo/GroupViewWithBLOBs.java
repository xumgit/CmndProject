package com.xum.cmnd.pojo;

public class GroupViewWithBLOBs extends GroupView {
    private String clonename;

    private String upgname;

    public String getClonename() {
        return clonename;
    }

    public void setClonename(String clonename) {
        this.clonename = clonename == null ? null : clonename.trim();
    }

    public String getUpgname() {
        return upgname;
    }

    public void setUpgname(String upgname) {
        this.upgname = upgname == null ? null : upgname.trim();
    }
}