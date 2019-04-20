package com.xum.cmnd.controller;

import com.xum.cmnd.pojo.MongoTest;
import com.xum.cmnd.utils.MailUtil;
import com.xum.cmnd.utils.MongoUtil;
import com.xum.cmnd.utils.RedisUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value = "/test")
public class TestController {

    private static final Logger LOG = LogManager.getLogger(TestController.class);

    private static final String DEFAULT_NAME = "admin";

    private static final String DEFAULT_SUBJECT = "subjectTitle";

    private static final String DEFAULT_CONTENT= "contentText";

    private static String STATUSSUCCESS = "{\"status\":\"success\"}";

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    MongoUtil mongoUtil;

    @Autowired
    MailUtil mailUtil;

    @RequestMapping(value = "/redisTest")
    @ResponseBody
    public String redisTest(HttpServletRequest request) {
        HttpSession session = request.getSession();
        String strSessionId = session.getId();
        int iPort = request.getServerPort();
        Object obj = session.getAttribute("session");
        if (obj == null) {
            session.setAttribute("session", "sessionTest");
        }
        LOG.info("strSessionId:" + strSessionId);
        LOG.info("iPort:" + iPort);
        LOG.info("obj:" + obj);
        redisUtil.set("sessionId", strSessionId);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/addMongoData")
    @ResponseBody
    public String addMongoData(@RequestParam(value = "id") Integer id,
                             @RequestParam(value = "name", required = false, defaultValue = DEFAULT_NAME) String name,
                             @RequestParam(value = "age", required = false, defaultValue = "1") Integer age) {
        MongoTest mongoTest = new MongoTest();
        mongoTest.setId(id);
        mongoTest.setAge(age);
        mongoTest.setName(name);
        mongoUtil.saveTest(mongoTest);
        LOG.info("add Mongo data success, id:" + id + ",age:" + age + ",name:" + name);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/queryMongoData")
    @ResponseBody
    public String queryMongoData(@RequestParam(value = "name", required = false, defaultValue = DEFAULT_NAME) String name) {
        MongoTest mongoTest = mongoUtil.findTestByName(name);
        LOG.info("query name:" + name + ",result:" + mongoTest);
        if (mongoTest != null) {
            LOG.info("id:" + mongoTest.getId() + ",age:" + mongoTest.getAge());
        }

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/updateMongoData")
    @ResponseBody
    public String updateMongoData(@RequestParam(value = "id") Integer id,
                                @RequestParam(value = "name", required = false, defaultValue = DEFAULT_NAME) String name,
                                @RequestParam(value = "age", required = false, defaultValue = "2") Integer age) {
        MongoTest mongoTest = new MongoTest();
        mongoTest.setId(id);
        mongoTest.setAge(age);
        mongoTest.setName(name);
        mongoUtil.updateTest(mongoTest);
        LOG.info("update Mongo data success, id:" + id + ",age:" + age + ", name:" + name);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/deleteMongoData")
    @ResponseBody
    public String deleteMongoData(@RequestParam(value="id") Integer id) {
        mongoUtil.deleteTestById(id);
        LOG.info("delete Mongo test data success, id:" + id);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/sendSimpleMail")
    @ResponseBody
    public String sendSimpleMail(@RequestParam(value = "from") String from,
                               @RequestParam(value = "to") String to,
                               @RequestParam(value = "subject", required = false, defaultValue = DEFAULT_SUBJECT) String subject,
                               @RequestParam(value = "content", required = false, defaultValue = DEFAULT_CONTENT) String content) {
        //String to = "meng.xu@tpv-tech.com";
        //String subject = "test subject title";
        //String content = "text content";
        LOG.info("from:" + from);
        LOG.info("to:" + to);
        LOG.info("subject:" + subject);
        LOG.info("content:" + content);
        mailUtil.sendSimpleMail(from, to, subject, content);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/sendHtmlMail")
    @ResponseBody
    public String sendHtmlMail(@RequestParam(value = "from") String from,
                             @RequestParam(value = "to") String to,
                             @RequestParam(value = "subject", required = false, defaultValue = DEFAULT_SUBJECT) String subject,
                             @RequestParam(value = "content", required = false, defaultValue = DEFAULT_CONTENT) String content) {
		//String to = "meng.xu@tpv-tech.com";
		//String subject = "test html subject";
		//String content = "<html><body>\n<h3><span style='color:red;'>hello world!</span>this is html email!\n</h3></body>\n</html>";
        LOG.info("from:" + from);
        LOG.info("to:" + to);
        LOG.info("subject:" + subject);
        LOG.info("content:" + content);
		mailUtil.sendHtmlMail(from, to, subject, content);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/sendAttachmentsMail")
    @ResponseBody
    public String sendAttachmentsMail(@RequestParam(value = "from") String from,
                                    @RequestParam(value = "to") String to,
                                    @RequestParam(value = "subject", required = false, defaultValue = DEFAULT_SUBJECT) String subject,
                                    @RequestParam(value = "content", required = false, defaultValue = DEFAULT_CONTENT) String content,
                                    @RequestParam(value = "filePath") String filePath) {
        //String to = "meng.xu@tpv-tech.com";
        //String subject = "test html subject";
        //String content = "Has attachment zip file!";
        //String filePath = "D:\\upg\\sample\\TPM187HE_CloneData.zip";
        LOG.info("from:" + from);
        LOG.info("to:" + to);
        LOG.info("subject:" + subject);
        LOG.info("content:" + content);
        LOG.info("filePath:" + filePath);
        mailUtil.sendAttachmentsMail(from, to, subject, content, filePath);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/sendInlineResourceMail")
    @ResponseBody
    public String sendInlineResourceMail(@RequestParam(value = "from") String from,
                                       @RequestParam(value = "to") String to,
                                       @RequestParam(value = "subject", required = false, defaultValue = DEFAULT_SUBJECT) String subject,
                                       @RequestParam(value = "content", required = false, defaultValue = DEFAULT_CONTENT) String content,
                                       @RequestParam(value = "rscId") String rscId,
                                       @RequestParam(value = "rscPath") String rscPath) {
        //String rscId = "neo008";
        //String to = "meng.xu@tpv-tech.com";
        //String subject = "test resource subject";
        //String content = "<html><body>\n<h3><span style=\"color:red;\">hello world!</span>this is html email!</h3>\n"
        //        + "<img src=\"cid:" + rscId + "\"></body></body>\n</html>";
        //String rscPath = "D:\\upg\\test.png";
        LOG.info("from:" + from);
        LOG.info("to:" + to);
        LOG.info("subject:" + subject);
        LOG.info("content:" + content);
        LOG.info("rscId:" + rscId);
        LOG.info("rscPath:" + rscPath);
        mailUtil.sendInlineResourceMail(from, to, subject, content, rscPath, rscId);

        return STATUSSUCCESS;
    }

    @RequestMapping(value = "/sendTemplateMail")
    @ResponseBody
    public String sendTemplateMail(@RequestParam(value = "from") String from,
                                 @RequestParam(value = "to") String to,
                                 @RequestParam(value = "subject", required = false, defaultValue = DEFAULT_SUBJECT) String subject,
                                 @RequestParam(value = "content", required = false, defaultValue = DEFAULT_CONTENT) String content,
                                 @RequestParam(value = "id", required = false, defaultValue = "1") String id) {
		//String to = "meng.xu@tpv-tech.com";
		//String subject = "test html subject";
		//String id = "008";
        LOG.info("from:" + from);
        LOG.info("to:" + to);
        LOG.info("subject:" + subject);
        LOG.info("content:" + content);
        LOG.info("id:" + id);
		mailUtil.sendTemplateMail(from,to, subject, id);

        return STATUSSUCCESS;
    }
}
