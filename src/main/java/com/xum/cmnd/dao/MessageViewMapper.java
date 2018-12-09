package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.MessageViewWithBLOBs;

public interface MessageViewMapper {
    int insert(MessageViewWithBLOBs record);

    int insertSelective(MessageViewWithBLOBs record);
}