require(["sbt/connections/BlogService", "sbt/dom"], 
    function(BlogService, dom) {
	    var createRow = function(post) {
	    	console.log("post.getSource().toSource() "+post.getSource().toSource());
	        var table = dom.byId("blogsTable");
	        var tr = document.createElement("tr");
	        table.appendChild(tr);
	        var td = document.createElement("td");
	        td.innerHTML = post.getTitle();
	        tr.appendChild(td);
	        td = document.createElement("td");
	        td.innerHTML = post.getBlogPostUuid();
	        tr.appendChild(td);
	    };
    
    	var blogService = new BlogService();
    	blogService.getBlogsPosts({ ps: 5 }).then(
            function(posts){
                if (posts.length == 0) {
                    text = "All blogs posts returned no results.";
                    dom.setText("content", text);
                } else {
                    for(var i=0; i<posts.length; i++){
                        var post = posts[i];
                        createRow(post);
                    }
                }
            },
            function(error){
                dom.setText("content", "Error code:" +  error.code + ", message:" + error.message);
            }       
    	);
    }
);