package com.xum.cmnd.config;

import com.xum.cmnd.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.redis.config.ConfigureRedisAction;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@Configuration
//maxInactiveIntervalInSeconds 默认是1800秒过期，这里测试修改为10*60秒
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 10*60)
public class RedisSessionConfig {

    @Autowired
    RedisUtil redisUtil;

    @Bean
    public static ConfigureRedisAction configureRedisAction() {
        return ConfigureRedisAction.NO_OP;
    }

}
