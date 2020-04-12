package com.xum.cmnd.runner;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(value=1)
public class StartUpRunnerOne implements CommandLineRunner {

    private static final Logger LOG = LogManager.getLogger(StartUpRunnerOne.class);

    @Override
    public void run(String... args) throws Exception {
        LOG.info("first order execute:" + args.length);
    }
}
