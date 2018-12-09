package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.BootgridDropmenu;

public interface BootgridDropmenuMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(BootgridDropmenu record);

    int insertSelective(BootgridDropmenu record);

    BootgridDropmenu selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(BootgridDropmenu record);

    int updateByPrimaryKey(BootgridDropmenu record);
}