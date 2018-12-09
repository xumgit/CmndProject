package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Cms;
import com.xum.cmnd.pojo.CmsWithBLOBs;

public interface CmsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CmsWithBLOBs record);

    int insertSelective(CmsWithBLOBs record);

    CmsWithBLOBs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CmsWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(CmsWithBLOBs record);

    int updateByPrimaryKey(Cms record);
}