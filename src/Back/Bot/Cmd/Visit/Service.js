
/**
 * The handler for the 'visit_service' command.
 */
export default class CodeGen_Back_Bot_Cmd_Visit_Service {
    constructor() {
        return (ctx) => {
            ctx.reply('Executing visit_service command...');
        };
    }
}
