package com.xum.cmnd.dao;

import java.util.List;
import java.util.Map;

import com.xum.cmnd.pojo.Devices;
import com.xum.cmnd.pojo.DevicesWithBLOBs;

public interface DevicesMapper {
    int deleteByPrimaryKey(String id);

    int insert(DevicesWithBLOBs record);

    int insertSelective(DevicesWithBLOBs record);

    DevicesWithBLOBs selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(DevicesWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(DevicesWithBLOBs record);

    int updateByPrimaryKey(Devices record);
    
    int selectAllCount();
    
    List<Map<String, Object>> selectAllWithMap();
    
    List<DevicesWithBLOBs> selectAllWithList();
    
    List<Map<String, Object>> selectDevicesWithBootGrid(Map<String, Object> mapPara);
}