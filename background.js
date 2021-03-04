chrome.commands.onCommand.addListener(function(command) {
    console.log("Command:", command);
    if(command == "open-history-tab")
    {
        chrome.tabs.create({url: 'edge://history'});
    }

});

console.log("Estensione caricata")