package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.CmsTemplate;

public interface CmsTemplateMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CmsTemplate record);

    int insertSelective(CmsTemplate record);

    CmsTemplate selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CmsTemplate record);

    int updateByPrimaryKey(CmsTemplate record);
}