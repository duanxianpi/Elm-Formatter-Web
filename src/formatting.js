import { spawnSync } from 'child_process';

const elmFomartPath = "../node_modules/.bin/";

function formatting(code) {
    const elmFomartor = spawnSync("elm-format.Cmd", ['--stdin'], {input : code, cwd : elmFomartPath})

    switch(elmFomartor.status) {
        case 0:
            return elmFomartor.stdout.toString();
        case 1:
            return elmFomartor.stderr.toString();
        default:
            return "Unkown Error!"
    }

}
export default formatting
console.log(formatting (`moduled Dom.Compsonents.Header;;`
));