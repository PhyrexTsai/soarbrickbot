cheerio = require("cheerio");
//HOST = 'https://www.flickr.com/search/?text=lego';

module.exports = function(robot) {
    robot.hear(/flickr me (.*)/, function(response) {
        var topic = response.match[1];
        var target_url = "https://www.flickr.com/search/?text=" + topic;
        robot.http(target_url).get()(function(err, res, body) {
            if (res.statusCode!= 200) {
				        return response.send("Flickr loading error!");
            }
            var $ = cheerio.load(body);
			      var tag = $("div.photo-list-photo-view")
            for (var i = 0; i < 10; i++) {
              	var image_url = $(tag[i]).css("background-image");
                var image = image_url.substring(4, image_url.length - 1);
				        response.send("http:" + image);
			      }
        })
    });
}
