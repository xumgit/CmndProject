package com.xum.cmnd.pojo;

import java.util.Date;

public class MessageView {
    private Integer id;

    private Date timesend;

    private String issent;

    private String status;

    private Integer roomid;

    private String guestname;

    private String guestgroup;

    private Integer reservationid;

    private String tvgroupname;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTimesend() {
        return timesend;
    }

    public void setTimesend(Date timesend) {
        this.timesend = timesend;
    }

    public String getIssent() {
        return issent;
    }

    public void setIssent(String issent) {
        this.issent = issent == null ? null : issent.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public Integer getRoomid() {
        return roomid;
    }

    public void setRoomid(Integer roomid) {
        this.roomid = roomid;
    }

    public String getGuestname() {
        return guestname;
    }

    public void setGuestname(String guestname) {
        this.guestname = guestname == null ? null : guestname.trim();
    }

    public String getGuestgroup() {
        return guestgroup;
    }

    public void setGuestgroup(String guestgroup) {
        this.guestgroup = guestgroup == null ? null : guestgroup.trim();
    }

    public Integer getReservationid() {
        return reservationid;
    }

    public void setReservationid(Integer reservationid) {
        this.reservationid = reservationid;
    }

    public String getTvgroupname() {
        return tvgroupname;
    }

    public void setTvgroupname(String tvgroupname) {
        this.tvgroupname = tvgroupname == null ? null : tvgroupname.trim();
    }
}