package com.xum.cmnd.iptvpolling;

public class SessionStatus {
	
	private CloneItemStatus[] CloneItemStatus;
	private String SessionEndTime;
	private String SessionStartTime;
	private String SessionStatus;
	
	public CloneItemStatus[] getCloneItemStatus() {
		return CloneItemStatus;
	}
	
	public void setCloneItemStatus(CloneItemStatus[] cloneItemStatus) {
		CloneItemStatus = cloneItemStatus;
	}
	
	public String getSessionEndTime() {
		return SessionEndTime;
	}
	
	public void setSessionEndTime(String sessionEndTime) {
		SessionEndTime = sessionEndTime;
	}
	
	public String getSessionStartTime() {
		return SessionStartTime;
	}
	
	public void setSessionStartTime(String sessionStartTime) {
		SessionStartTime = sessionStartTime;
	}
	
	public String getSessionStatus() {
		return SessionStatus;
	}
	
	public void setSessionStatus(String sessionStatus) {
		SessionStatus = sessionStatus;
	}
	
}
