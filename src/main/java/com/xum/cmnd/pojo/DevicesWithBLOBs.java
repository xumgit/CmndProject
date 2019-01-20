package com.xum.cmnd.pojo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "Devices", description = "devices column info")
public class DevicesWithBLOBs extends Devices {
	
	@ApiModelProperty(notes = "devices tv status", name = "tvstatus", required = true, value = "devices tvstatus")
    private String tvstatus;

	@ApiModelProperty(notes = "devices si Identifiers", name = "siIdentifiers", required = true, value = "devices siIdentifiers")
    private String siIdentifiers;

    public String getTvstatus() {
        return tvstatus;
    }

    public void setTvstatus(String tvstatus) {
        this.tvstatus = tvstatus == null ? null : tvstatus.trim();
    }

    public String getSiIdentifiers() {
        return siIdentifiers;
    }

    public void setSiIdentifiers(String siIdentifiers) {
        this.siIdentifiers = siIdentifiers == null ? null : siIdentifiers.trim();
    }
}