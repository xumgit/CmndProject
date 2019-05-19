package com.xum.cmnd.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xum.cmnd.service.AsyncService;

@EnableAsync
@Controller(value = "asyncTaskController")
@RequestMapping(value = "/async")
public class AsyncTaskController {

	private static final Logger LOG = LogManager.getLogger(AsyncTaskController.class);
	
	@Autowired
	private AsyncService asyncService;
	
	@PostMapping(value = "/test")
	public void testAsync() throws InterruptedException, ExecutionException {
		List<Future<String>> futures = new ArrayList<>();
		for(int i = 1; i <= 10; i++) {
			Future<String> future = asyncService.testAsync(i);
			futures.add(future);
		}
		for (Future<String> future : futures) {
            String result = future.get();
            LOG.info("result:" + result);
		}
	}
	
}
