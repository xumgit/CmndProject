package com.xum.cmnd.pojo;

public class Guestinfo {
    private Integer guestid;

    private String guestname;

    private String title;

    private String guestlanguage;

    private Integer roomid;

    private String tvsettingtype;

    private String checkin;

    private String orderid;

    private String donotdisturb;

    private String viewbill;

    private String expresscheckout;

    private String arrivaldate;

    private String departuredate;

    private String groupname;

    private Integer channelpackageid;

    private Integer apppackageid;

    private String balance;

    public Integer getGuestid() {
        return guestid;
    }

    public void setGuestid(Integer guestid) {
        this.guestid = guestid;
    }

    public String getGuestname() {
        return guestname;
    }

    public void setGuestname(String guestname) {
        this.guestname = guestname == null ? null : guestname.trim();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getGuestlanguage() {
        return guestlanguage;
    }

    public void setGuestlanguage(String guestlanguage) {
        this.guestlanguage = guestlanguage == null ? null : guestlanguage.trim();
    }

    public Integer getRoomid() {
        return roomid;
    }

    public void setRoomid(Integer roomid) {
        this.roomid = roomid;
    }

    public String getTvsettingtype() {
        return tvsettingtype;
    }

    public void setTvsettingtype(String tvsettingtype) {
        this.tvsettingtype = tvsettingtype == null ? null : tvsettingtype.trim();
    }

    public String getCheckin() {
        return checkin;
    }

    public void setCheckin(String checkin) {
        this.checkin = checkin == null ? null : checkin.trim();
    }

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid == null ? null : orderid.trim();
    }

    public String getDonotdisturb() {
        return donotdisturb;
    }

    public void setDonotdisturb(String donotdisturb) {
        this.donotdisturb = donotdisturb == null ? null : donotdisturb.trim();
    }

    public String getViewbill() {
        return viewbill;
    }

    public void setViewbill(String viewbill) {
        this.viewbill = viewbill == null ? null : viewbill.trim();
    }

    public String getExpresscheckout() {
        return expresscheckout;
    }

    public void setExpresscheckout(String expresscheckout) {
        this.expresscheckout = expresscheckout == null ? null : expresscheckout.trim();
    }

    public String getArrivaldate() {
        return arrivaldate;
    }

    public void setArrivaldate(String arrivaldate) {
        this.arrivaldate = arrivaldate == null ? null : arrivaldate.trim();
    }

    public String getDeparturedate() {
        return departuredate;
    }

    public void setDeparturedate(String departuredate) {
        this.departuredate = departuredate == null ? null : departuredate.trim();
    }

    public String getGroupname() {
        return groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname == null ? null : groupname.trim();
    }

    public Integer getChannelpackageid() {
        return channelpackageid;
    }

    public void setChannelpackageid(Integer channelpackageid) {
        this.channelpackageid = channelpackageid;
    }

    public Integer getApppackageid() {
        return apppackageid;
    }

    public void setApppackageid(Integer apppackageid) {
        this.apppackageid = apppackageid;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance == null ? null : balance.trim();
    }
}