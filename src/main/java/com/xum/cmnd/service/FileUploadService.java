package com.xum.cmnd.service;

import com.xum.cmnd.dao.FileuploadMapper;
import com.xum.cmnd.pojo.FileuploadWithBLOBs;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service(value = "fileUploadService")
@Transactional
public class FileUploadService {

    private static final Logger LOG = LogManager.getLogger(FileUploadService.class);

    @Resource
    private FileuploadMapper fileuploadMapper;

    public int insert(FileuploadWithBLOBs record) {
        int affectRow = -1;
        affectRow = this.fileuploadMapper.insert(record);
        return affectRow;
    }
}
