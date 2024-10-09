# index.js
Goat.newVersionDetected=You are using version %1, the latest version is %2. Please update to use the bot better by typing into the console/cmd command: node update
Goat.autoRestart1=Bot will auto restart in %1
Goat.autoRestart2=Bot will auto restart by cron job: %1
Goat.googleApiTokenExpired=Google API refresh token has expired or been revoked, please get a new token at https://developers.google.com/oauthplayground/

# bot/login/login.js
login.currentlyLogged=Login in progress
login.notFoundDirAccount=Cannot find file %1
login.loginToken=Login with access token
login.loginCookieString=Login with cookie string
login.loginCookieNetscape=Login with cookie netscape
login.loginCookieArray=Login with cookie array
login.loginPassword=Login with email & password...
login.accountError=Please enter the full permission token in the form of %1 or cookie in the form of string %2 or cookie in the form of array:\n[\n  { name: %3, value: %4 },\n  { name: %5, value: %6 }\n]\n or\n[\n  { key: %3, value: %4 },\n  { key: %5, value: %6 }\n]\ninto the file %7
login.cannotFindAccount=Cannot find facebook account, choose one of the following options (enter the number to choose or press down and up to choose and enter to confirm):
login.chooseAccount=Login with email and password
login.chooseToken=Login with token full permission
login.chooseCookieString=Login with cookie string
login.chooseCookieArray=Login with cookie array
login.loginWith=You choose to %1
login.inputEmail=> Please enter your email (id) or phone number facebook account:
login.inputPassword=> Please enter your password:
login.input2FA=> Please enter the 2FA code (leave blank if you don't have 2FA enabled):
login.inputToken=> Please enter your token full permission (start wit EAAAA):
login.inputCookieString=> Please enter your cookie string:
login.inputCookieArray=> Please enter your cookie array:
login.refreshCookie=Refreshing cookie...
login.refreshCookieError=An error occurred when refreshing the cookie
login.refreshCookieSuccess=Refreshed cookie successfully, restart the bot to use the new cookie
login.refreshCookieWarning=You have enabled the auto refresh cookie mode, but you have not configured email and password in the file config.json
login.tokenError=Token is invalid or expired. Please enter the full permission token in the form of %1 into the file %2
login.cookieError=Cookie is invalid or expired.
login.loginPasswordError=Error occurred when logging in with email & password in config.json
login.loginSuccess=Successful login
login.loginError=An error occurred while signing in
login.openDashboardSuccess=Successfully opened bot management page
login.openDashboardError=An error occurred when opening the bot management page
login.changeGbanData=DATA HAS BEEN CHANGED, IT IS CURRENTLY IMPOSSIBLE TO LAUNCH A BOT
login.errorNoti=An error occurred when retrieving the message
login.refreshFbstateSuccess=Refreshed %1 file
login.refreshFbstateError=An error occurred when refreshing the %1 file
login.youAreBanned=You have been banned from the Goat-Bot project
login.runBot=Launch bot successfully, start receiving messages from users
login.notLoggedIn=An error occurred, please check your Facebook account again
login.callBackError=An error occurred when callback listenMqtt
login.userBanned=You've been banned from using a bot!!
login.checkGbanError=An error occurred while checking GBAN, try update source to latest version (open cmd and type: node update)
login.gbanMessage=You have been banned from the Goat-Bot project on %1 for the reason: %2\n» Time: %3
login.gbanMessageToDate=You have been banned from the Goat-Bot project on %1 for the reason: %2\n» Time: %3\n» To date: %4
login.gbanAdminMessage=User %1 has been banned from the Goat-Bot project on %2 for the reason: %3
login.openServerUptimeSuccess=🚀 Opened uptime server: %1
login.openServerUptimeError=An error has occurred, cannot open server uptime
login.restartListenMessage=ListenMQTT restart enabled every %1
login.stopRestartListenMessage=ListenMQTT restart disabled
login.restartListenMessageError=An error occurred when restarting ListenMQTT
login.restartListenMessage2=Successfully restarted ListenMQTT
login.refreshCookieAfter=Refreshing cookie after %1
login.listenMqttClose=ListenMQTT closed
login.listenMqttCloseByUser=ListenMQTT closed by user
login.retryCheckLiveCookie=Retrying to check cookie... %1
login.startBotSuccess=Bot has been started successfully, start receiving messages from users

version.tooOldVersion=You are using a too old version of Goat-Bot, please update to the latest version by typing the command: %1 into the cmd/console/terminal/shell

# bot/custom.js
custom.refreshedFb_dtsg=Refreshed fb_dtsg and jazoest successfully
custom.refreshedFb_dtsgError=An error occurred when refreshing fb_dtsg and jazoest

# bot/login/loadData.js
loadData.loadThreadDataSuccess=Loaded %1 group's data successfully!
loadData.loadUserDataSuccess=Loaded %1 user's data successfully!
loadData.refreshingThreadData=Updating the information of the groups...
loadData.refreshThreadDataSuccess=Updated information of %1 group!
loadData.refreshThreadDataError=Something went wrong when updating the groups information!

# bot/login/loadScripts.js
loadScripts.loadScriptsError=The %1 files have an error during loading:
loadScripts.loadScriptsNotMatchOrigin=The %1 files do not match the original files on the github project, make sure that these command files are reliable:
loadScripts.NOT_FOUND=NOT FOUND IN THE ORIGINAL SOURCE CODE:
loadScripts.NOT_MATCH=DOES NOT MATCH THE ORIGINAL SOURCE CODE:

# bot/login/socketIO.js
socketIO.connected=Connected to socket.io server
socketIO.error=An error occurred when connecting to the socket.io server

# bot/handler/handlerCheckData.js
handlerCheckData.cantCreateThread=Groups with id '%1' cannot be written to the database!
handlerCheckData.cantCreateUser=Users with id '%1' cannot be written to the database!

# bot/handler/handlerEvents.js
handlerEvents.userBanned=┏━━━━━┫ ❌  ┣━━━━━┓\n┃ ⎎ 𝐁𝐀𝐍𝐍𝐄𝐃 ⎎ ┃\n┣━━━━━━━━━━━━━━━┫\n┃𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒃𝒂𝒏𝒏𝒆𝒅 𝒇𝒓𝒐𝒎\n┃𝒖𝒔𝒊𝒏𝒈 𝒕𝒉𝒆 𝒃𝒐𝒕\n┃➤ 𝑹𝒆𝒂𝒔𝒐𝒏: %1\n┃➤ 𝑻𝒊𝒎𝒆: %2\n┃➤ 𝑼𝒔𝒆𝒓 𝑰𝑫: %3\n┗━━━━━┫ ❌  ┣━━━━━┛
handlerEvents.threadBanned=┏━━━━━┫ ❌  ┣━━━━━┓\n┃ ⎎ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐀𝐍𝐍𝐄𝐃 ⎎ ┃\n┣━━━━━━━━━━━━━━━┫\n┃𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒃𝒂𝒏-\n┃-𝒆𝒅 𝒇𝒓𝒐𝒎 𝒖𝒔𝒊𝒏𝒈 𝒕𝒉𝒆 𝒃𝒐𝒕\n┃➤ 𝑹𝒆𝒂𝒔𝒐𝒏: %1\n┃➤ 𝑻𝒊𝒎𝒆: %2\n┃➤ 𝑼𝒔𝒆𝒓 𝑰𝑫: %3\n┗━━━━━┫ ❌  ┣━━━━━┛
handlerEvents.onlyAdminBox=┏━━━━━┫ ❌  ┣━━━━━┓\n┃    ⎎ 𝐎𝐍𝐋𝐘-𝐀𝐃𝐌𝐈𝐍 ⎎    ┃\n┣━━━━━━━━━━━━━━━┫\n┃𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒐𝒏𝒍𝒚 𝒈𝒓𝒐𝒖𝒑 𝒂𝒅𝒎-\n┃-𝒊𝒏 𝒄𝒂𝒏 𝒖𝒔𝒆 𝒄𝒉𝒂𝒕𝒃𝒐𝒕.\n┗━━━━━┫ ❌  ┣━━━━━┛
handlerEvents.onlyAdminBot=┏━━━━━┫ ❌  ┣━━━━━┓\n┃    ⎎ 𝐎𝐍𝐋𝐘-𝐀𝐃𝐌𝐈𝐍 ⎎    ┃\n┣━━━━━━━━━━━━━━━┫\n┃𝑪𝒖𝒓𝒓𝒆𝒏𝒕𝒍𝒚 𝒐𝒏𝒍𝒚 𝒃𝒐𝒕 𝒂𝒅𝒎-\n┃-𝒊𝒏 𝒄𝒂𝒏 𝒖𝒔𝒆 𝒄𝒉𝒂𝒕𝒃𝒐𝒕.\n┗━━━━━┫ ❌  ┣━━━━━┛
handlerEvents.=       𝐃𝐎𝐄𝐒 𝐍𝐎𝐓 𝐄𝐗𝐈𝐒𝐓𝐒\n┣━━━━━━━━━━━━━━━┫\n┃𝑪𝒐𝒎𝒎𝒂𝒏𝒅 %1 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒆𝒙-\n┃-𝒊𝒔𝒕 𝒊𝒏 𝑴𝒂𝒕𝒆𝒐 𝒔𝒚𝒔𝒕𝒆𝒎 𝒕𝒚𝒑𝒆 %2𝒉-\n┃-𝒆𝒍𝒑 𝒕𝒐 𝒔𝒆𝒆 𝒎𝒚 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒔.\n┗━━━━━┫ ❌  ┣━━━━━┛
handlerEvents.commandNotFound2=          𝐍𝐎 𝐏𝐑𝐎𝐌𝐏𝐓 ┣━━━━━━━━━━━━━━━┫\n┃𝒉𝒆𝒍𝒍𝒐 %1 𝒊𝒔 𝒎𝒚 𝒑𝒓𝒆𝒇𝒊𝒙 𝒃𝒖𝒕 \n┃𝒖 𝒅𝒊𝒅𝒏'𝒕 𝒂𝒅𝒅 𝒂𝒏𝒚 𝒑𝒓𝒐𝒎𝒑𝒕 𝒕𝒚𝒑𝒆 \n┃%1help 𝒕𝒐 𝒔𝒆𝒆 𝒎𝒚 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒔.\n┗━━━━━┫ ✅  ┣━━━━━┛
handlerEvents.commandSyntaxError=       𝐖𝐑𝐎𝐍𝐆 𝐒𝐘𝐍𝐓𝐀𝐗\n┣━━━━━━━━━━━━━━━┫\n┃𝐓𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐮𝐬𝐢𝐧𝐠 \n┃𝐢𝐬 𝐰𝐫𝐨𝐧𝐠 𝐬𝐲𝐧𝐭𝐚𝐱, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐲𝐩𝐞\n┃%1𝐡𝐞𝐥𝐩 %2 𝐭𝐨 𝐬𝐞𝐞 𝐭𝐡𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬 \n┃𝐨𝐟 𝐡𝐨𝐰 𝐭𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝\n┗━━━━━┫ ❌  ┣━━━━━┛
handlerEvents.onlyAdmin=┏━━━━━┫❌ ┣━━━━━\n┃➣ Command: %1\n┃➣ 𝐑𝐨𝐥𝐞: 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧\n┃➣ 𝐌𝐨𝐝𝐞: 𝐨𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚-\n┃-𝐝𝐦𝐢𝐧 𝐜𝐚𝐧 𝐮𝐬𝐞 it\n┣━━━━━┫❌ ┣━━━━━┓\n┃.      𝐎𝐍𝐋𝐘 𝐀𝐃𝐌𝐈𝐍      ┃\n┗━━━━━━━ ━━━━━━━┛
handlerEvents.onlyAdminToUseOnReply=❌ | Only group administrators can use the reply function of the command "%1"
handlerEvents.onlyAdminToUseOnReaction=❌ | Only group administrators can use the reaction function of the command "%1"
handlerEvents.onlyAdminBot2=
handlerEvents.onlyAdminBot2ToUseOnReply=❌ | Only bot's admin can use the reply function of the command "%1"
handlerEvents.onlyAdminBot2ToUseOnReaction=❌ | Only bot's admin can use the reaction function of the command "%1"
handlerEvents.waitingForCommand=⏱ You are in the waiting time to use this command, please come back after %1s
handlerEvents.errorOccurred=❌ [ %1 ]\nAn error occurred at command "%2"\n\n%3
handlerEvents.errorOccurred2=❌ [ %1 ]\nAn error occurred at command onChat in command "%2"\n\n%3
handlerEvents.errorOccurred3=❌ [ %1 ]\nAn error occurred when executing onReply at command "%2"\n\n%3
handlerEvents.errorOccurred4=❌ [ %1 ]\nAn error occurred when executing onReaction at command "%2"\n\n%3
handlerEvents.errorOccurred5=❌ [ %1 ]\nAn error occurred when executing onEvent at command "%2"\n\n%3
handlerEvents.errorOccurred6=❌ [ %1 ]\nAn error occurred when executing onEvent at command "%2"\n\n%3
handlerEvents.errorOccurred7=❌ [ %1 ]\nAn error occurred when executing onAnyEvent at command "%2"\n\n%3
handlerEvents.cannotFindCommandName=❌ Cannot find command name to execute this reply!
handlerEvents.cannotFindCommand=❌ Cannot find command "%1" to execute this reply!

# bot/autoUptime.js
autoUptime.autoUptimeTurnedOn=AutoUptime mode turned on

# database/controller/index.js
indexController.connectingMongoDB=Connecting a MONGODB database
indexController.connectMongoDBSuccess=Successfully connected mongodb database!
indexController.connectMongoDBError=An error occurred when connecting the Mongodb database:
indexController.connectingMySQL=Connecting a SQLITE database
indexController.connectMySQLSuccess=Successfully connected SQLITE database!
indexController.connectMySQLError=An error occurred while connecting to a SQLITE database:

# updater.js
updater.updateTooFast=Please wait at least 5 minutes after the latest commit to update without error, %1 minutes %2 seconds left
updater.latestVersion=You are using the latest version
updater.cantFindVersion=You are using an undefined version (%1), please check your package.json file again
updater.newVersions=There are %1 new versions to update, starting to update...
updater.updateSuccess=Update successfully%1
updater.configChanged=The %1 has been changed, please check your config.json file again
updater.installingPackages=Installing dependencies for bot...
updater.installSuccess=Installed dependencies successfully, restart the bot to use the new version
updater.backupSuccess=Successfully backed up changed files, see in the %1 folder
updater.restartToApply=. Restart the bot to apply the new version
updater.skipFile=There is a new version of the %1 file, but you have skipped this file during the update process with the comment %2 in this file

# dashboard/routes/verifyfbid.js
verifyfbid.sendCode=Your verification code is:\n%1\nThe verification code is valid for %2 minutes

# utils.js
utils.errorOccurred=❌ An error occurred:\n\n%1

# for command
command.restartedBot=Bot has been restarted

# dashboard/app.js
app.googleApiRefreshTokenExpired=Google API refresh token has expired or been revoked, please get a new token at https://developers.google.com/oauthplayground/
app.tooManyRequests=Too many requests in the last minute. Please try again later.
app.notPermissionChangeFbstate=You do not have permission to change fbstate!
app.notFoundFbstate=Please enter fbstate!
app.changedFbstateSuccess=Successfully changed fbstate!
app.serverError=Server an error, please try again later!
ate!
app.serverError=Server an error, please try again later!
