/*CMD
  command: /onMeme
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

var c = JSON.parse(content)
var t = c.title
var y = c.url
var a = c.author
Api.sendPhoto({
  photo: y,
  caption:
    "*✅ Title = " +
    t +
    " \n ✅ Author = " +
    a +
    "\n ✅ Meme logo = *Click here \n *🙇 Generated by @" +
    bot.name +
    "*",
  parse_mode: "Markdown"
})

