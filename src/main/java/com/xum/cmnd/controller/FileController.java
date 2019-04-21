package com.xum.cmnd.controller;

import com.xum.cmnd.pojo.FileuploadWithBLOBs;
import com.xum.cmnd.service.FileUploadService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping(value = "/file")
public class FileController {

    private static final Logger LOG = LogManager.getLogger(FileController.class);

    @Autowired
    private FileUploadService fileUploadService;

    private static String STATUSSUCCESS = "{\"status\":\"success\"}";

    private static String STATUSFAILED = "{\"status\":\"failed\"}";

    @RequestMapping(value = "/multifileUpload", method= RequestMethod.POST)
    @ResponseBody
    public String multifileUpload(HttpServletRequest request){
        String status = STATUSFAILED;
        List<MultipartFile> files = ((MultipartHttpServletRequest)request).getFiles("fileName");

        if(files.isEmpty()){
            return status;
        }

        String path = "";
        try {
            String rootPath = System.getProperty("user.dir");
            LOG.info("rootPath:" + rootPath);
            String root = ResourceUtils.getURL("classpath:").getPath();
            LOG.info("root:" + root);
            File rootFile = new File(root);
            if(!rootFile.exists()) {
                rootFile = new File("");
            }
            LOG.info("rootFile:" + rootFile.getAbsolutePath());
            String childPath = "static" + File.separator + "upload" + File.separator;
            File upload = new File(rootFile.getAbsolutePath(),childPath);
            if(!upload.exists()) {
                upload.mkdirs();
            }
            LOG.info("upload url:" + upload.getAbsolutePath());
            path = upload.getAbsolutePath();
        } catch (FileNotFoundException e) {
            LOG.error(e.getMessage(), e);
        }

        LOG.info("path:" + path);
        if ("".equals(path)) {
            return status;
        }
        int totalUploadFiles = files.size();
        LOG.info("total upload file count:" + totalUploadFiles);
        for(MultipartFile file:files){
            String fileName = file.getOriginalFilename();
            int size = (int) file.getSize();
            LOG.info(fileName + "-->" + size);

            if (file.isEmpty()) {
                LOG.info("file is empty");
                continue;
            } else {
                File dest = new File(path + File.separator + fileName);
                if (!dest.getParentFile().exists()) {
                    dest.getParentFile().mkdir();
                }
                try {
                    FileuploadWithBLOBs record = new FileuploadWithBLOBs();
                    record.setName(fileName);
                    record.setContenttype(file.getContentType());
                    record.setSize((int)file.getSize());
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd HH:MM:SS");
                    String uploadDate = sdf.format(new Date());
                    record.setUploaddate(sdf.parse(uploadDate));
                    record.setContent(file.getBytes());
                    record.setPath(dest.getPath());
                    fileUploadService.insert(record);
                    //file.transferTo(dest);  // not save file, only save to database
                    status = STATUSSUCCESS;
                } catch (Exception e) {
                    LOG.error(e.getMessage(), e);
                    return status;
                }
            }
        }
        return status;
    }

    @RequestMapping(value = "/download")
    public String downLoad(HttpServletResponse response){
        String filename = "2.png";

        String path = "";
        try {
            String root = ResourceUtils.getURL("classpath:").getPath();
            LOG.info("root="+root);
            File rootFile = new File(root);
            if(!rootFile.exists()) {
                rootFile = new File("");
            }
            LOG.info("rootFile="+rootFile.getAbsolutePath());
            File upload = new File(rootFile.getAbsolutePath(),"static/upload/");
            if(!upload.exists()) {
                upload.mkdirs();
            }
            LOG.info("download url="+upload.getAbsolutePath());
            path = upload.getAbsolutePath();
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            LOG.error(e.getMessage(), e);
        }

        LOG.info("path="+path);
        if (path == "") {
            return null;
        }

        File file = new File(path + "/" + filename);
        if(file.exists()){ //判断文件父目录是否存在
            response.setContentType("application/force-download");
            response.setHeader("Content-Disposition", "attachment;fileName=" + filename);

            byte[] buffer = new byte[1024];
            FileInputStream fis = null; //文件输入流
            BufferedInputStream bis = null;

            OutputStream os = null; //输出流
            try {
                os = response.getOutputStream();
                fis = new FileInputStream(file);
                bis = new BufferedInputStream(fis);
                int i = bis.read(buffer);
                while(i != -1){
                    os.write(buffer);
                    i = bis.read(buffer);
                }

            } catch (Exception e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            LOG.info("----------file download" + filename);
            try {
                bis.close();
                fis.close();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        } else {
            LOG.info(filename +" is not exist");
        }
        return null;
    }
}
