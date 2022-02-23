const Service = require('node-windows').Service

const svc = new Service({
    name: "FileWatcher",
    description: "Service Flex 2.0 FileWatcher",
    script: "./index.js"
})

const entryCommand = process.argv[2] && process.argv[2].replace('--','');

const _ENTRY_COMMANDS_ = {
    'install': install,
    'uninstall': uninstall
};

function install() {
    svc.on('install', function() {
        svc.start();
        console.log("Service was installed");
    })
}


svc.on('alreadyinstalled', function () {
    console.log("Service is already installed.");
})
svc.on('start', function () {
})

svc.install()


function uninstall(){
    svc.on('uninstall', function() {
        svc.start();
        console.log("Service was installed")
    })
    svc.uninstall();
}
function init() {
    _ENTRY_COMMANDS_[entryCommand] && _ENTRY_COMMANDS_[entryCommand]();
}

init();