package com.xum.cmnd;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@SpringBootTest
public class CmndProjectApplicationTests {

	private static final Logger LOG = LogManager.getLogger(CmndProjectApplicationTests.class);

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext webApplicationContext;

	@Test
	public void contextLoads() {
	}

	@BeforeAll
	public static void beforeAll(){
		LOG.info("beforeAll");
	}

	@BeforeEach
	public void beforeEach(){
		LOG.info("beforeEach");
		//mockMvc = MockMvcBuilders.standaloneSetup(new IndexController()).build();
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	@AfterEach
	public void afterEach(){
		LOG.info("afterEach");
	}

	@AfterAll
	public static void afterAll(){
		LOG.info("afterAll");
	}

	// API https://zhuanlan.zhihu.com/p/98074553
	@Test
	public void testTwo() throws Exception {
		RequestBuilder request = MockMvcRequestBuilders.post("/tvs/getDevices")
				.param("current","1")          //传参
				.param("rowCount","1")          //传参
				.accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON);  //请求类型 JSON
		MvcResult mvcResult = mockMvc.perform(request)
				.andExpect(MockMvcResultMatchers.status().isOk())     //期望的结果状态 200
				.andDo(MockMvcResultHandlers.print())                 //添加ResultHandler结果处理器，比如调试时 打印结果(print方法)到控制台
				.andReturn();                                         //返回验证成功后的MvcResult；用于自定义验证/下一步的异步处理；
		int status = mvcResult.getResponse().getStatus();                 //得到返回代码
		String content = mvcResult.getResponse().getContentAsString();    //得到返回结果
		LOG.info("status:" + status + ",content:" + content);
	}
	// 测试一个没有定义的api, 期待返回结果是4xx状态
	@DisplayName("测试根据Id获取User")
	@Test
	public void testThree() throws Exception {
		//perform,执行一个RequestBuilders请求，会自动执行SpringMVC的流程并映射到相应的控制器执行处理
		MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders
				//构造一个get请求
				.get("/user/1")
				//请求类型 json
				.contentType(MediaType.APPLICATION_JSON))
				// 期待返回的状态码是4XX，因为我们并没有写/user/{id}的get接口
				.andExpect(MockMvcResultMatchers.status().is4xxClientError())
				.andDo(MockMvcResultHandlers.print())
				.andReturn();
		int status = mvcResult.getResponse().getStatus();
		LOG.info("status:" + status);
	}

}
