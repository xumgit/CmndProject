package com.xum.cmnd.pojo;

public class Billitem {
    private Integer id;

    private String billitemdisplayname;

    private String billitemamount;

    private String billitemdate;

    private String billitemtime;

    private String roomid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBillitemdisplayname() {
        return billitemdisplayname;
    }

    public void setBillitemdisplayname(String billitemdisplayname) {
        this.billitemdisplayname = billitemdisplayname == null ? null : billitemdisplayname.trim();
    }

    public String getBillitemamount() {
        return billitemamount;
    }

    public void setBillitemamount(String billitemamount) {
        this.billitemamount = billitemamount == null ? null : billitemamount.trim();
    }

    public String getBillitemdate() {
        return billitemdate;
    }

    public void setBillitemdate(String billitemdate) {
        this.billitemdate = billitemdate == null ? null : billitemdate.trim();
    }

    public String getBillitemtime() {
        return billitemtime;
    }

    public void setBillitemtime(String billitemtime) {
        this.billitemtime = billitemtime == null ? null : billitemtime.trim();
    }

    public String getRoomid() {
        return roomid;
    }

    public void setRoomid(String roomid) {
        this.roomid = roomid == null ? null : roomid.trim();
    }
}