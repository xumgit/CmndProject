package com.xum.cmnd.pojo;

import java.util.Date;

public class Message {
    private Integer id;

    private Date timesend;

    private String issent;

    private String status;

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
}