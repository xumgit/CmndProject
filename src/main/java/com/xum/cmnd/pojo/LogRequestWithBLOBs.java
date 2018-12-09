package com.xum.cmnd.pojo;

public class LogRequestWithBLOBs extends LogRequest {
    private String commanddata;

    private String parameterdata;

    private String responsedata;

    public String getCommanddata() {
        return commanddata;
    }

    public void setCommanddata(String commanddata) {
        this.commanddata = commanddata == null ? null : commanddata.trim();
    }

    public String getParameterdata() {
        return parameterdata;
    }

    public void setParameterdata(String parameterdata) {
        this.parameterdata = parameterdata == null ? null : parameterdata.trim();
    }

    public String getResponsedata() {
        return responsedata;
    }

    public void setResponsedata(String responsedata) {
        this.responsedata = responsedata == null ? null : responsedata.trim();
    }
}