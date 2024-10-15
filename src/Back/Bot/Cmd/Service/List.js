
/**
 * The handler for the 'service_list' command.
 */
export default class CodeGen_Back_Bot_Cmd_Service_List {
    constructor() {
        return (ctx) => {
            ctx.reply('Executing service_list command...');
        };
    }
}
