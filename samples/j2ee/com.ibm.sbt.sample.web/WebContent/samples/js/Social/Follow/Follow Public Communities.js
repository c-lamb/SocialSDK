require(["sbt/connections/CommunityService", "sbt/connections/FollowService", "sbt/connections/FollowConstants", "sbt/dom"], 
    function(CommunityService, FollowService, FollowConstants, dom) {
		var followService = new FollowService();
    	var communityService = new CommunityService();
    	communityService.getPublicCommunities({ ps: 20 }).then(
            function(communities){
                if (communities.length == 0) {
                	text = "There are no public communities.";
                    dom.setText("content", text);
                } else {
                    for(var i=0; i<communities.length; i++){
                        var community = communities[i];
                        createRow(community, followService, FollowConstants, dom);
                    }
                }
            },
            function(error){
                dom.setText("content", "Error code:" +  error.code + ", message:" + error.message);
            }       
    	);
    }
);

function createRow(community, followService, FollowConstants, dom) {
    var table = dom.byId("communitiesTable");
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td = document.createElement("td");
    td.innerHTML = community.getTitle();
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = community.getCommunityUuid();
    tr.appendChild(td);
    td = document.createElement("td");
    var followBtn = document.createElement("button");
    followBtn.innerHTML = "Checking...";
    followBtn.setAttribute("class", "btn");
    td.appendChild(followBtn);
    tr.appendChild(td);

	var followedResource = followService.newFollowedResource();
    followedResource.setSource(FollowConstants.CommunitiesSource);
    followedResource.setResourceType(FollowConstants.CommunitiesResourceType);
    followedResource.setResourceId(community.getCommunityUuid());

    var promise = followService.getFollowedResources(
    		FollowConstants.CommunitiesSource, 
    		FollowConstants.CommunitiesResourceType, 
    		{ resource:community.getCommunityUuid() });
    promise.then(
		function(followedResources) {	
			if (followedResources.length == 0) {
				followBtn.innerHTML = "Follow";
			} else {
				var uuid = followedResources[0].getFollowedResourceUuid();
				followedResource.setFollowedResourceUuid(uuid);
				followBtn.innerHTML = "Unfollow";
			}
		},
    	function(error) {
    		handleError(dom, error);
    	}
    );
    
    followBtn.onclick = function(evt) {
    	clearError(dom);
    	var promise = null;
    	if (followBtn.innerHTML == "Follow") {
    		promise = followService.startFollowing(followedResource);
    	} else {
    		promise = followService.stopFollowing(followedResource);
    	}
    	promise.then(
        	function(followedResource) {
        		followBtn.innerHTML = (followBtn.innerHTML == "Follow") ? "Unfollow" : "Follow";
        	},
        	function(error) {
        		handleError(dom, error);
        	}
        );
    };
};

function handleError(dom, error) {
    dom.setText("error", "Error: " + error.message);
    dom.byId("error").style.display = "";
}

function clearError(dom) {
    dom.setText("error", "");
    dom.byId("error").style.display = "none";
}


