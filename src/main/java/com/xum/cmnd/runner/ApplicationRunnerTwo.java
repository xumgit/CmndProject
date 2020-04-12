package com.xum.cmnd.runner;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Order(value=2)
public class ApplicationRunnerTwo implements ApplicationRunner {

    private static final Logger LOG = LogManager.getLogger(ApplicationRunnerTwo.class);

    @Override
    public void run(ApplicationArguments args) throws Exception {
        LOG.info("getSourceArgs():" + Arrays.asList(args.getSourceArgs()));
        LOG.info("getOptionNames():" + args.getOptionNames());
        LOG.info("getOptionValue():" + args.getOptionValues("foo"));
        LOG.info("getOptionValue():" + args.getOptionValues("developer.name"));
    }
}
