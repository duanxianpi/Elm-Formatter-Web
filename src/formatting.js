const { spawnSync } = require('child_process');

const command = process.platform === 'win32' ? (__dirname+"\\..\\node_modules\\.bin\\"+'elm-format.cmd') : (__dirname+"/../node_modules/elm-format/bin/" + 'elm-format');

console.log(command);

function formating(code) {
    const elmFomartor = spawnSync(command, ["--stdin"]  , {input : code});

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
