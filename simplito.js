var DesignDevta_Site = &quot;http://www.ar1web.co&quot;;
var DesignDevta_Credits = &quot;تصميم <a href='http://www.ar1web.co' id='credit-ar1web'>عرب ويب</a>&quot;;
var DD_Encryption=[&quot;\x30\x2E\x36\x3D\x39\x28\x29\x7B\x61\x20\x65\x3D\x34\x2E\x35\x28\x22\x64\x22\x29\x3B\x37\x3D\x3D\x65\x26\x26\x28\x30\x2E\x38\x2E\x31\x3D\x32\x29\x2C\x65\x2E\x62\x28\x22\x31\x22\x2C\x32\x29\x2C\x65\x2E\x63\x3D\x33\x7D\x3B&quot;,&quot;\x7C&quot;,&quot;\x73\x70\x6C\x69\x74&quot;,&quot;\x77\x69\x6E\x64\x6F\x77\x7C\x68\x72\x65\x66\x7C\x44\x65\x73\x69\x67\x6E\x44\x65\x76\x74\x61\x5F\x53\x69\x74\x65\x7C\x44\x65\x73\x69\x67\x6E\x44\x65\x76\x74\x61\x5F\x43\x72\x65\x64\x69\x74\x73\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x7C\x6F\x6E\x6C\x6F\x61\x64\x7C\x6E\x75\x6C\x6C\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65\x7C\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x7C\x44\x44\x5F\x45\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x7C&quot;,&quot;\x72\x65\x70\x6C\x61\x63\x65&quot;,&quot;&quot;,&quot;\x5C\x77\x2B&quot;,&quot;\x5C\x62&quot;,&quot;\x67&quot;];
eval(function(_0x6600x1,_0x6600x2,_0x6600x3,_0x6600x4,_0x6600x5,_0x6600x6){_0x6600x5=function(_0x6600x3){return _0x6600x3.toString(_0x6600x2)};if(!DD_Encryption[5][DD_Encryption[4]](/^/,String)){while(_0x6600x3--){_0x6600x6[_0x6600x5(_0x6600x3)]=_0x6600x4[_0x6600x3]||_0x6600x5(_0x6600x3)};_0x6600x4=[function(_0x6600x5){return _0x6600x6[_0x6600x5]}];_0x6600x5=function(){return DD_Encryption[6]};_0x6600x3=1;};while(_0x6600x3--){if(_0x6600x4[_0x6600x3]){_0x6600x1=_0x6600x1[DD_Encryption[4]]( new RegExp(DD_Encryption[7]+_0x6600x5(_0x6600x3)+DD_Encryption[7],DD_Encryption[8]),_0x6600x4[_0x6600x3])}};return _0x6600x1;}(DD_Encryption[0],15,15,DD_Encryption[3][DD_Encryption[2]](DD_Encryption[1]),0,{}));
var loriga = document.getElementById(&#39;ar1web-posts&#39;);
var hussam = document.getElementById(&#39;ar1web-post&#39;);
hussam.innerHTML = loriga.innerHTML;
    if (typeof firstText == "undefined") firstText = "First"; 
    if (typeof lastText == "undefined") lastText = "Last";
    var noPage;
    var currentPage;
    var currentPageNo;
    var postLabel;
    pagecurrentg();
  
    function looppagecurrentg(pageInfo) {
        var html = '';
        pageNumber = parseInt(numPages / 2);
        if (pageNumber == numPages - pageNumber) {
            numPages = pageNumber * 2 + 1
        }
        pageStart = currentPageNo - pageNumber;
        if (pageStart < 1) pageStart = 1;
        lastPageNo = parseInt(pageInfo / perPage) + 1;
        if (lastPageNo - 1 == pageInfo / perPage) lastPageNo = lastPageNo - 1;
        pageEnd = pageStart + numPages - 1;
        if (pageEnd > lastPageNo) pageEnd = lastPageNo;
        html += "<li><a>صفحة " + currentPageNo + ' من ' + lastPageNo + "</a></li>";
        var prevNumber = parseInt(currentPageNo) - 1;
      
		//Iccsi was here, doing magic
		
        if (currentPageNo > 1) {
			if (currentPage == "page") {
			  html += '<li class="showpage firstpage"><a href="' + home_page + '">' + firstText + '</a></li>'
			} else {
			  html += '<li class="displaypageNum firstpage"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + firstText + '</a></li>'
			}
		}

		if (currentPageNo > 2) {
            if (currentPageNo == 3) { 
                if (currentPage == "page") {
                    html += '<li class="showpage"><a href="' + home_page + '">' + prevText + '</a></li>'
                } else {
                    html += '<li class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + prevText + '</a></li>'
                }
            } else {
                if (currentPage == "page") {
                    html += '<li class="displaypageNum"><a href="#" onclick="redirectpage(' + prevNumber + ');return false">' + prevText + '</a></li>'
                } else {
                    html += '<li class="displaypageNum"><a href="#" onclick="redirectlabel(' + prevNumber + ');return false">' + prevText + '</a></li>'
                }
            }
        }
        if (pageStart > 1) {
            if (currentPage == "page") {
                html += '<li class="displaypageNum"><a href="' + home_page + '">1</a></li>'
            } else {
                html += '<li class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></li>'
            }
        }
        if (pageStart > 2) {
            html += '<li><a> ... </li></a>'
        }
        for (var jj = pageStart; jj <= pageEnd; jj++) {
            if (currentPageNo == jj) {
                html += '<li class="active"><a href="#">' + jj + '</a></li>'
            } else if (jj == 1) {
                if (currentPage == "page") {
                    html += '<li class="displaypageNum"><a href="' + home_page + '">1</a></li>'
                } else {
                    html += '<li class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></li>'
                }
            } else {
                if (currentPage == "page") {
                    html += '<li class="displaypageNum"><a href="#" onclick="redirectpage(' + jj + ');return false">' + jj + '</a></li>'
                } else {
                    html += '<li class="displaypageNum"><a href="#" onclick="redirectlabel(' + jj + ');return false">' + jj + '</a></li>'
                }
            }
        }
        if (pageEnd < lastPageNo - 1) {
            html += '<li><a>...</li></a>'
        }
        if (pageEnd < lastPageNo) {
            if (currentPage == "page") {
                html += '<li class="displaypageNum"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></li>'
            } else {
                html += '<li class="displaypageNum"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></li>'
            }
        }


        var nextnumber = parseInt(currentPageNo) + 1;
        if (currentPageNo < (lastPageNo - 1)) {
            if (currentPage == "page") {
                html += '<li class="displaypageNum"><a href="#" onclick="redirectpage(' + nextnumber + ');return false">' + nextText + '</a></li>'
            } else {
                html += '<li class="displaypageNum"><a href="#" onclick="redirectlabel(' + nextnumber + ');return false">' + nextText + '</a></li>'
            }
		}
		
		if (currentPageNo < lastPageNo) {
			//Iccsi was here, doing magic
			if (currentPage == "page") {
			  html += '<li class="displaypageNum lastpage"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + '</a></li>'
			} else {
			  html += '<li class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + '</a></li>'
			}
        }

        var pageArea = document.getElementsByName("pageArea");
        var blogPager = document.getElementById("blog-pager");
        for (var p = 0; p < pageArea.length; p++) {
            pageArea[p].innerHTML = html
        }
        if (pageArea && pageArea.length > 0) {
            html = ''
        }
        if (blogPager) {
            if(advancedPager=="active" && devWidth > 768){
				blogPager.innerHTML = html
            }else{
              document.write('<style>.pagination{display:block}</style>')
            }
        }
    }

    function totalcountdata(root) {
        var feed = root.feed;
        var totaldata = parseInt(feed.openSearch$totalResults.$t, 10);
        looppagecurrentg(totaldata)
    }

    function pagecurrentg() {
        var thisUrl = urlactivepage;
        if (thisUrl.indexOf("/search/label/") != -1) {
            if (thisUrl.indexOf("?updated-max") != -1) {
                postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"))
            } else {
                postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"))
            }
        }
        if (thisUrl.indexOf("?q=") == -1 && thisUrl.indexOf(".html") == -1) {
            if (thisUrl.indexOf("/search/label/") == -1) {
                currentPage = "page";
                if (urlactivepage.indexOf("#PageNo=") != -1) {
                    currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
                } else {
                    currentPageNo = 1
                }
                document.write("<script src=\"" + home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata\"><\/script>")
            } else {
                currentPage = "label";
                if (thisUrl.indexOf("&max-results=") == -1) {
                    perPage = 20
                }
                if (urlactivepage.indexOf("#PageNo=") != -1) {
                    currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
                } else {
                    currentPageNo = 1
                }
                document.write('<script src="' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')
            }
        }
    }

    function redirectpage(numberpage) {
        jsonstart = (numberpage - 1) * perPage;
        noPage = numberpage;
        var nameBody = document.getElementsByTagName('head')[0];
        var newInclude = document.createElement('script');
        newInclude.type = 'text/javascript';
        newInclude.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
        nameBody.appendChild(newInclude)
    }

    function redirectlabel(numberpage) {
        jsonstart = (numberpage - 1) * perPage;
        noPage = numberpage;
        var nameBody = document.getElementsByTagName('head')[0];
        var newInclude = document.createElement('script');
        newInclude.type = 'text/javascript';
        newInclude.setAttribute("src", home_page + "feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
        nameBody.appendChild(newInclude)
    }

    function finddatepost(root) {
        post = root.feed.entry[0];
        var timestamp1 = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
        var timestamp = encodeURIComponent(timestamp1);
        if (currentPage == "page") {
            var pAddress = "/search?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
        } else {
            var pAddress = "/search/label/" + postLabel + "?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
        }
        location.href = pAddress
    }
