package com.xum.cmnd.pojo;

public class SettingWithBLOBs extends Setting {
    private String name;

    private String value;

    private String clonerename;

    private String isdelete;

    private String androidapps;

    private String cloneitemstatus;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value == null ? null : value.trim();
    }

    public String getClonerename() {
        return clonerename;
    }

    public void setClonerename(String clonerename) {
        this.clonerename = clonerename == null ? null : clonerename.trim();
    }

    public String getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(String isdelete) {
        this.isdelete = isdelete == null ? null : isdelete.trim();
    }

    public String getAndroidapps() {
        return androidapps;
    }

    public void setAndroidapps(String androidapps) {
        this.androidapps = androidapps == null ? null : androidapps.trim();
    }

    public String getCloneitemstatus() {
        return cloneitemstatus;
    }

    public void setCloneitemstatus(String cloneitemstatus) {
        this.cloneitemstatus = cloneitemstatus == null ? null : cloneitemstatus.trim();
    }
}