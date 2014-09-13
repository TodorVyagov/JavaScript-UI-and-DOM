window.onload = function () {
    
    function generateTagCloud(tags, minFontSize, maxFontSize) {
        var cloud = [];
        cloud.push(createItem(tags[0].toLowerCase()));

        for (var i = 1, len = tags.length; i < len; i++) {
            var currentElement = tags[i];
            var isRepeated = false;

            for (var j = 0, cloudLen = cloud.length; j < cloudLen; j++) {
                if (currentElement.toLowerCase() === cloud[j].name) {
                    cloud[j].count += 1;
                    isRepeated = true;
                    break;
                }
            }

            if (!isRepeated) {
                cloud.push(createItem(currentElement.toLowerCase()));
            }
        }

        // Find min and max appearances of words
        var maxAppearances = cloud[0].count;
        var minAppearances = cloud[0].count;
        for (var i = 1, len = cloud.length; i < len; i++) {
            if (cloud[i].count > maxAppearances) {
                maxAppearances = cloud[i].count;
            }
            if (cloud[i].count < minAppearances) {
                minAppearances = cloud[i].count;
            }
        }

        // set font size of tags
        for (var i = 0, len = cloud.length; i < len; i++) {
            //console.log(cloud[i].count - minAppearances);
            var fontToAdd = (cloud[i].count - minAppearances)*(maxFontSize - minFontSize)/(maxAppearances - minAppearances);
            cloud[i].fontSize += Math.floor(fontToAdd);
        }

        // add tags to div
        var tagCloud = document.createElement('div');
        tagCloud.style.width = '200px';
		tagCloud.style.border = '1px solid black';
        var tag = document.createElement('span');

        for (var i = 0, len = cloud.length; i < cloud.length; i++) {
            tag.innerHTML = cloud[i].name + ' ';
            tag.style.fontSize = cloud[i].fontSize + 'px';

            tagCloud.appendChild(tag.cloneNode(true));
        }

        return tagCloud;

        function createItem(tagName) {
            return {
                name: tagName,
                count: 1,
                fontSize: minFontSize
            };
        }
    }

    var tags = ["cms", "javascript", "javascript", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "web", "web", "web", "web", "web", "web", "wordpress", "xaml", "web", "js", "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"]
    var tagCloud = generateTagCloud(tags, 17, 42);
    document.body.appendChild(tagCloud);
}