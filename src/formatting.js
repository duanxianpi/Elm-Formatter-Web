const { spawnSync } = require('child_process');

const elmFomartPath = "__dirname/../node_modules/.bin/";

function formating(code) {
    const elmFomartor = spawnSync("elm-format.cmd", ['--stdin'], {input : code, cwd : elmFomartPath})

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
