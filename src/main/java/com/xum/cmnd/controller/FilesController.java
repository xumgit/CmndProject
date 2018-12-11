package com.xum.cmnd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/files")
public class FilesController {
	
	@RequestMapping(value = "/index")
	public String index() {
		String view = "files/files";
		return view;
	}
	
}
