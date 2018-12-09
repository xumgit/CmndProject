package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Templates;
import com.xum.cmnd.pojo.TemplatesWithBLOBs;

public interface TemplatesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TemplatesWithBLOBs record);

    int insertSelective(TemplatesWithBLOBs record);

    TemplatesWithBLOBs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TemplatesWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(TemplatesWithBLOBs record);

    int updateByPrimaryKey(Templates record);
}