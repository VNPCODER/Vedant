/*CMD
  command: /setTransferSecret
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter any secret symbols

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// send this link only in PM - secure reason
if(chat.chat_type!="private"){
  return
}

let secret = message;
User.setProperty("transferSecret", secret, "string");
Bot.sendMessage("Transfer secret:\n\n" + secret);

