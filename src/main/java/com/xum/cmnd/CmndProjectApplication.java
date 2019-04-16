package com.xum.cmnd;

//import net.unicon.cas.client.configuration.EnableCasClient;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.xum.cmnd.config.TestDefaultConfig;

@SpringBootApplication
@MapperScan({ "com.xum.cmnd.dao" })
@EnableConfigurationProperties({TestDefaultConfig.class})
//@EnableCasClient
public class CmndProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmndProjectApplication.class, args);
	}

}
