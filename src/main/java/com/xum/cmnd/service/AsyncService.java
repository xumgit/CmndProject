package com.xum.cmnd.service;

import java.util.concurrent.Future;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Service;

@Service(value = "asyncService")
public class AsyncService {

	private static final Logger LOG = LogManager.getLogger(AsyncService.class);

	@Async(value= "asyncPoolTaskExecutor")
	public Future<String> testAsync(int i) {
		try {          		
			Thread.sleep(1000);            
		} catch (InterruptedException e) {
			LOG.error(e.getMessage(), e);
			Thread.currentThread().interrupt();
		} 
		return new AsyncResult<>(String.format("testAsyncTask->{%s}", i));
	}
	
}
