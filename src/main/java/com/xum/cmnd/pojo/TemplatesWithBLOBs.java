package com.xum.cmnd.pojo;

public class TemplatesWithBLOBs extends Templates {
    private String name;

    private String fsPath;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getFsPath() {
        return fsPath;
    }

    public void setFsPath(String fsPath) {
        this.fsPath = fsPath == null ? null : fsPath.trim();
    }
}