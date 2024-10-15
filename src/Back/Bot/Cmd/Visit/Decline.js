
/**
 * The handler for the 'visit_decline' command.
 */
export default class CodeGen_Back_Bot_Cmd_Visit_Decline {
    constructor() {
        return (ctx) => {
            ctx.reply('Executing visit_decline command...');
        };
    }
}
