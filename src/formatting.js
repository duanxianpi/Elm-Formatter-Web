const { spawnSync } = require('child_process');

const elmFomartPath = __dirname+"/../node_modules/elm-format/bin/";

const command = process.platform === 'win32' ? 'elm-format.cmd' : 'elm-format';

function formating(code) {
    const elmFomartor = spawnSync(elmFomartPath + command, ["--stdin"]  , {input : code});

    switch(elmFomartor.status) {
        case 0:
            return elmFomartor.stdout.toString();
        case 1:
            return elmFomartor.stderr.toString();
        default:
            return "Unkown Error!"
    }

}

module.exports = {formating};
