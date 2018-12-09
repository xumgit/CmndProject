package com.xum.cmnd.iptvpolling;

public class CloneToServerParameters {
	
	private String CloneToServerStatus;
	private SessionStatus CloneToServerSessionStatus;
	private CloneItemDetails[] CloneItemsAvailableToServer;

	public String getCloneToServerStatus() {
		return CloneToServerStatus;
	}

	public void setCloneToServerStatus(String cloneToServerStatus) {
		CloneToServerStatus = cloneToServerStatus;
	}

	public SessionStatus getCloneToServerSessionStatus() {
		return CloneToServerSessionStatus;
	}

	public void setCloneToServerSessionStatus(SessionStatus cloneToServerSessionStatus) {
		CloneToServerSessionStatus = cloneToServerSessionStatus;
	}
	
	public CloneItemDetails[] getCloneItemsAvailableToServer() {
		return CloneItemsAvailableToServer;
	}

	public void setCloneItemsAvailableToServer(CloneItemDetails[] cloneItemsAvailableToServer) {
		CloneItemsAvailableToServer = cloneItemsAvailableToServer;
	}
	
}
