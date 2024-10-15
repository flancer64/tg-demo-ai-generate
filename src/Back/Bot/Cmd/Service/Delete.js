
/**
 * The handler for the 'service_delete' command.
 */
export default class CodeGen_Back_Bot_Cmd_Service_Delete {
    constructor() {
        return (ctx) => {
            ctx.reply('Executing service_delete command...');
        };
    }
}
