package com.xum.cmnd.pojo;

public class WeatherForecast {
    private String cityid;

    private String lang;

    private String forecasts;

    private String fetchtime;

    private String lastfetchtime;

    private String errormsg;

    private Integer status;

    public String getCityid() {
        return cityid;
    }

    public void setCityid(String cityid) {
        this.cityid = cityid == null ? null : cityid.trim();
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang == null ? null : lang.trim();
    }

    public String getForecasts() {
        return forecasts;
    }

    public void setForecasts(String forecasts) {
        this.forecasts = forecasts == null ? null : forecasts.trim();
    }

    public String getFetchtime() {
        return fetchtime;
    }

    public void setFetchtime(String fetchtime) {
        this.fetchtime = fetchtime == null ? null : fetchtime.trim();
    }

    public String getLastfetchtime() {
        return lastfetchtime;
    }

    public void setLastfetchtime(String lastfetchtime) {
        this.lastfetchtime = lastfetchtime == null ? null : lastfetchtime.trim();
    }

    public String getErrormsg() {
        return errormsg;
    }

    public void setErrormsg(String errormsg) {
        this.errormsg = errormsg == null ? null : errormsg.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}