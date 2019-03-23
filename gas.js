function doPost(e){
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var slackApp = SlackApp.create(token);

  var params = JSON.parse(e.postData.getDataAsString());
  var channelId = params.event.channel;
  var userId = params.event.user;


  var options = {
    channelId: channelId, // 参加したチャンネルのID、 #test などのチャンネル名でも投稿可能
    userName: "Welcome Bot", // 投稿するbotの名前
    message: "<@" + userId + "> Welcome！！！ :zany_face:", // 投稿するメッセージ
  };

  slackApp.postMessage(options.channelId, options.message, {username: options.userName});
}

function doGet(e){
  doPost(e);
}
