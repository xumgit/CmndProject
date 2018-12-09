package com.xum.cmnd.pojo;

public class DevicesWithBLOBs extends Devices {
    private String tvstatus;

    private String siIdentifiers;

    public String getTvstatus() {
        return tvstatus;
    }

    public void setTvstatus(String tvstatus) {
        this.tvstatus = tvstatus == null ? null : tvstatus.trim();
    }

    public String getSiIdentifiers() {
        return siIdentifiers;
    }

    public void setSiIdentifiers(String siIdentifiers) {
        this.siIdentifiers = siIdentifiers == null ? null : siIdentifiers.trim();
    }
}