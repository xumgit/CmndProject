package com.xum.cmnd;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan({ "com.xum.cmnd.dao" })
public class CmndProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmndProjectApplication.class, args);
	}

}
