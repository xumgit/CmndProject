package com.xum.cmnd.dao;

import com.xum.cmnd.pojo.Fileupload;
import com.xum.cmnd.pojo.FileuploadWithBLOBs;

public interface FileuploadMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FileuploadWithBLOBs record);

    int insertSelective(FileuploadWithBLOBs record);

    FileuploadWithBLOBs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FileuploadWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(FileuploadWithBLOBs record);

    int updateByPrimaryKey(Fileupload record);
}