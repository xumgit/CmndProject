package com.xum.cmnd.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

//@Configuration
//@ConfigurationProperties(prefix = "zookeeper")
//@PropertySource("classpath:config/zookeeperConfig.properties")
public class ZkConfiguration {

	 @Value("${zookeeper.server}")
	 private String zookeeperServer;
	 
	 @Value(("${zookeeper.sessionTimeoutMs}"))
	 private int sessionTimeoutMs;
	 
	 @Value("${zookeeper.connectionTimeoutMs}")
	 private int connectionTimeoutMs;
	 
	 @Value("${zookeeper.maxRetries}")
	 private int maxRetries;
	 
	 @Value("${zookeeper.baseSleepTimeMs}")
	 private int baseSleepTimeMs;

	@Bean(initMethod = "init", destroyMethod = "stop")
	public ZkClient zkClient() {
		ZkClient zkClient = new ZkClient();
		zkClient.setZookeeperServer(zookeeperServer);
	    zkClient.setSessionTimeoutMs(sessionTimeoutMs);
	    zkClient.setConnectionTimeoutMs(connectionTimeoutMs);
	    zkClient.setMaxRetries(maxRetries);
	    zkClient.setBaseSleepTimeMs(baseSleepTimeMs);
	    return zkClient;
	}
	
}
