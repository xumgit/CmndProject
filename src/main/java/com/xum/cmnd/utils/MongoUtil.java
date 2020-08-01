package com.xum.cmnd.utils;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.xum.cmnd.pojo.MongoTest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "mongoUtil")
public class MongoUtil {

    private static final Logger LOG = LogManager.getLogger(MongoUtil.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * 创建对象
     */
    public void saveTest(MongoTest test) {
        mongoTemplate.save(test);
    }

    /**
     * 根据用户名查询对象
     * @return
     */
    public MongoTest findTestByName(String name) {
        Query query = new Query(Criteria.where("name").is(name));
        MongoTest mgt =  mongoTemplate.findOne(query , MongoTest.class);
        return mgt;
    }

    /**
     * 更新对象
     */
    public void updateTest(MongoTest test) {
        Query query = new Query(Criteria.where("id").is(test.getId()));
        Update update = new Update().set("age", test.getAge()).set("name", test.getName());
        //更新查询返回结果集的第一条
        mongoTemplate.updateFirst(query,update,MongoTest.class);
        //更新查询返回结果集的所有
        // mongoTemplate.updateMulti(query,update,TestEntity.class);
    }

    /**
     * 删除对象
     * @param id
     */
    public void deleteTestById(Integer id) {
        Query query = new Query(Criteria.where("id").is(id));
        mongoTemplate.remove(query,MongoTest.class);
    }

    /**
    * 查询总数
    * */
    public long queryCount() {
        Query query = new Query();
        return mongoTemplate.count(query, MongoTest.class);
    }

    /**
    *  学习Mongodb 查询、删除、更新等操作
    * */
    public List<MongoTest> testMongoDBQuery() {
        //Query q1 = new Query(Criteria.where("age").gte(10));
        //Query q2 = new Query(Criteria.where("age").gte(10)).with(Sort.by(Sort.Direction.DESC, "id"));

        /*List<Sort.Order> orders = new ArrayList<Sort.Order>();  //排序
        orders.add(new Sort.Order(Sort.Direction.DESC, "id"));
        Query q3 = new Query(Criteria.where("age").gte(10))
                       .with(Sort.by(orders))
                       .limit(5)
                       .skip(5);*/
        Query q4 = new Query().with(getPageRequest(0, 3));
        List<MongoTest> resData = mongoTemplate.find(q4, MongoTest.class);
        return resData;
    }

    private PageRequest getPageRequest(int currentPage, int pageSize) {
        return PageRequest.of(currentPage, pageSize, Sort.Direction.DESC, "id");
    }

}
