var APPLICATION_NAME='SmartInstall';
function Profile() {
	this.id = null;
	this.password = null;
	this.firstName = null;
	this.lastName = null;
	this.middleName = null;
	this.email = null;
	this.mobile = null;
	this.phone = null;
	this.extn = null;
	this.isDeleted = null;
	this.createdBy = null;
	this.createdDate = null;
	this.lastUpdatedBy = null;
	this.lastUpdatedDate = null;
}
function ProfileRole() {
	this.profileId = null;
	this.roleIdrole = null;
}
function Role() {
	this.idrole = null;
	this.name = null;
}
var profileManager =  profileManager || {};
profileManager.loadByKey =  function(id, callback) {
	$.post('/'+APPLICATION_NAME+'/profile/view', {'id':id}, function(data) {
		var profile = new Profile();
		profile.id= data.request.response.profile.id;
		profile.password= data.request.response.profile.password;
		profile.firstName= data.request.response.profile.firstName;
		profile.lastName= data.request.response.profile.lastName;
		profile.middleName= data.request.response.profile.middleName;
		profile.email= data.request.response.profile.email;
		profile.mobile= data.request.response.profile.mobile;
		profile.phone= data.request.response.profile.phone;
		profile.extn= data.request.response.profile.extn;
		profile.isDeleted= data.request.response.profile.isDeleted;
		profile.createdBy= data.request.response.profile.createdBy;
		profile.createdDate= data.request.response.profile.createdDate;
		profile.lastUpdatedBy= data.request.response.profile.lastUpdatedBy;
		profile.lastUpdatedDate= data.request.response.profile.lastUpdatedDate;
		callback(profile);
	});
};

profileManager.insert =  function(profile, callback) {
	$.post('/'+APPLICATION_NAME+'/profile/insert', {'id':profile.id, 'password':profile.password, 'firstName':profile.firstName, 'lastName':profile.lastName, 'middleName':profile.middleName, 'email':profile.email, 'mobile':profile.mobile, 'phone':profile.phone, 'extn':profile.extn, 'isDeleted':profile.isDeleted, 'createdBy':profile.createdBy, 'createdDate':profile.createdDate, 'lastUpdatedBy':profile.lastUpdatedBy, 'lastUpdatedDate':profile.lastUpdatedDate}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};

profileManager.update =  function(profile, callback) {
	$.post('/'+APPLICATION_NAME+'/profile/update', {'id':profile.id, 'password':profile.password, 'firstName':profile.firstName, 'lastName':profile.lastName, 'middleName':profile.middleName, 'email':profile.email, 'mobile':profile.mobile, 'phone':profile.phone, 'extn':profile.extn, 'isDeleted':profile.isDeleted, 'createdBy':profile.createdBy, 'createdDate':profile.createdDate, 'lastUpdatedBy':profile.lastUpdatedBy, 'lastUpdatedDate':profile.lastUpdatedDate}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};

profileManager.delete =  function(id, callback) {
	$.post('/'+APPLICATION_NAME+'/profile/delete', {'id':id}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};
profileManager.search =  function(searchQuery, callback) {
	$.post('/'+APPLICATION_NAME+'/profile/search', searchQuery, function(data) {
		if(data.request.response.profile_list) {
			var profileArr = data.request.response.profile_list.profile;
			if(!$.isArray(profileArr)) {
				profileArr = [data.request.response.profile_list.profile];
			}
			callback(profileArr);
		}
	});
};

var profileRoleManager =  profileRoleManager || {};
profileRoleManager.loadByKey =  function(profileId, roleIdrole, callback) {
	$.post('/'+APPLICATION_NAME+'/profileRole/view', {'profileId':profileId, 'roleIdrole':roleIdrole}, function(data) {
		var profileRole = new ProfileRole();
		profileRole.profileId= data.request.response.profileRole.profileId;
		profileRole.roleIdrole= data.request.response.profileRole.roleIdrole;
		callback(profileRole);
	});
};

profileRoleManager.insert =  function(profileRole, callback) {
	$.post('/'+APPLICATION_NAME+'/profileRole/insert', {'profileId':profileRole.profileId, 'roleIdrole':profileRole.roleIdrole}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};

profileRoleManager.update =  function(profileRole, callback) {
	$.post('/'+APPLICATION_NAME+'/profileRole/update', {'profileId':profileRole.profileId, 'roleIdrole':profileRole.roleIdrole}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};

profileRoleManager.delete =  function(profileId, roleIdrole, callback) {
	$.post('/'+APPLICATION_NAME+'/profileRole/delete', {'profileId':profileId, 'roleIdrole':roleIdrole}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};
profileRoleManager.search =  function(searchQuery, callback) {
	$.post('/'+APPLICATION_NAME+'/profileRole/search', searchQuery, function(data) {
		if(data.request.response.profileRole_list) {
			var profileRoleArr = data.request.response.profileRole_list.profileRole;
			if(!$.isArray(profileRoleArr)) {
				profileRoleArr = [data.request.response.profileRole_list.profileRole];
			}
			callback(profileRoleArr);
		}
	});
};

var roleManager =  roleManager || {};
roleManager.loadByKey =  function(idrole, callback) {
	$.post('/'+APPLICATION_NAME+'/role/view', {'idrole':idrole}, function(data) {
		var role = new Role();
		role.idrole= data.request.response.role.idrole;
		role.name= data.request.response.role.name;
		callback(role);
	});
};

roleManager.insert =  function(role, callback) {
	$.post('/'+APPLICATION_NAME+'/role/insert', {'idrole':role.idrole, 'name':role.name}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};

roleManager.update =  function(role, callback) {
	$.post('/'+APPLICATION_NAME+'/role/update', {'idrole':role.idrole, 'name':role.name}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};

roleManager.delete =  function(idrole, callback) {
	$.post('/'+APPLICATION_NAME+'/role/delete', {'idrole':idrole}, function(data) {
		callback(data.request.response.status == 'SUCCESS');
	});
};
roleManager.search =  function(searchQuery, callback) {
	$.post('/'+APPLICATION_NAME+'/role/search', searchQuery, function(data) {
		if(data.request.response.role_list) {
			var roleArr = data.request.response.role_list.role;
			if(!$.isArray(roleArr)) {
				roleArr = [data.request.response.role_list.role];
			}
			callback(roleArr);
		}
	});
};

