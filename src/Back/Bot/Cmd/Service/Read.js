
/**
 * The handler for the 'service_read' command.
 */
export default class CodeGen_Back_Bot_Cmd_Service_Read {
    constructor() {
        return (ctx) => {
            ctx.reply('Executing service_read command...');
        };
    }
}
