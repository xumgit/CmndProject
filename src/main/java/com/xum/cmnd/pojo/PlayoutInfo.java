package com.xum.cmnd.pojo;

public class PlayoutInfo {
    private Integer playoutid;

    private String rooms;

    private String name;

    private String type;

    private String platform;

    private String version;

    private String schedule;

    private Integer connectid;

    private Integer status;

    public Integer getPlayoutid() {
        return playoutid;
    }

    public void setPlayoutid(Integer playoutid) {
        this.playoutid = playoutid;
    }

    public String getRooms() {
        return rooms;
    }

    public void setRooms(String rooms) {
        this.rooms = rooms == null ? null : rooms.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform == null ? null : platform.trim();
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version == null ? null : version.trim();
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule == null ? null : schedule.trim();
    }

    public Integer getConnectid() {
        return connectid;
    }

    public void setConnectid(Integer connectid) {
        this.connectid = connectid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}