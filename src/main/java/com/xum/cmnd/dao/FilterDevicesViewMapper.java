package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.FilterDevicesView;

public interface FilterDevicesViewMapper {
    int insert(FilterDevicesView record);

    int insertSelective(FilterDevicesView record);
}