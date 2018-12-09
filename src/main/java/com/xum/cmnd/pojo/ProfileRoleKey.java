package com.xum.cmnd.pojo;

public class ProfileRoleKey {
    private String profileId;

    private Integer roleIdrole;

    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId == null ? null : profileId.trim();
    }

    public Integer getRoleIdrole() {
        return roleIdrole;
    }

    public void setRoleIdrole(Integer roleIdrole) {
        this.roleIdrole = roleIdrole;
    }
}