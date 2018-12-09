package com.xum.cmnd.pojo;

public class Siconfig {
    private Integer id;

    private String weatherService;

    private String refreshRate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWeatherService() {
        return weatherService;
    }

    public void setWeatherService(String weatherService) {
        this.weatherService = weatherService == null ? null : weatherService.trim();
    }

    public String getRefreshRate() {
        return refreshRate;
    }

    public void setRefreshRate(String refreshRate) {
        this.refreshRate = refreshRate == null ? null : refreshRate.trim();
    }
}