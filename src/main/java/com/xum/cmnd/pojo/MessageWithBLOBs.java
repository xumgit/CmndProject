package com.xum.cmnd.pojo;

public class MessageWithBLOBs extends Message {
    private String content;

    private String guestids;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getGuestids() {
        return guestids;
    }

    public void setGuestids(String guestids) {
        this.guestids = guestids == null ? null : guestids.trim();
    }
}