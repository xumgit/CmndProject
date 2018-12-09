package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.WeatherForecast;

public interface WeatherForecastMapper {
    int deleteByPrimaryKey(String cityid);

    int insert(WeatherForecast record);

    int insertSelective(WeatherForecast record);

    WeatherForecast selectByPrimaryKey(String cityid);

    int updateByPrimaryKeySelective(WeatherForecast record);

    int updateByPrimaryKey(WeatherForecast record);
}