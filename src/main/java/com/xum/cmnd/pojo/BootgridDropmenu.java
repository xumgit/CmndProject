package com.xum.cmnd.pojo;

public class BootgridDropmenu {
    private Integer id;

    private String user;

    private String gridId;

    private String invisibleColumnId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user == null ? null : user.trim();
    }

    public String getGridId() {
        return gridId;
    }

    public void setGridId(String gridId) {
        this.gridId = gridId == null ? null : gridId.trim();
    }

    public String getInvisibleColumnId() {
        return invisibleColumnId;
    }

    public void setInvisibleColumnId(String invisibleColumnId) {
        this.invisibleColumnId = invisibleColumnId == null ? null : invisibleColumnId.trim();
    }
}