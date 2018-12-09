package com.xum.cmnd.pojo;

public class CmsWithBLOBs extends Cms {
    private String name;

    private byte[] value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public byte[] getValue() {
        return value;
    }

    public void setValue(byte[] value) {
        this.value = value;
    }
}