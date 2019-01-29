package com.xum.cmnd.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Tag;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	// http://localhost:8081/v2/api-docs
	// http://localhost:8081/swagger-ui.html
	
	@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .tags(new Tag("TVSList", "Refer to TVS List function"), getTags())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.xum.cmnd.controller"))
                .paths(PathSelectors.any())
                .build();
    }
 
	private Tag[] getTags() {
        Tag[] tags = {
        	new Tag("IPTV", "Receive tv response content"),
            new Tag("IPTVHandle", "Handle tv response content"),
            new Tag("IPTVPolling", "Time check"),
            new Tag("OutputFormat", "Output format")
        };
        return tags;
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Test API")
                .description("cmnd api function")
                .termsOfServiceUrl("http://localhost:8081/navi/index")
                .version("1.0")
                .build();
    }
}
