/**
 * The handler for the 'help' command.
 */
export default class CodeGen_Back_Bot_Cmd_Help {
    /**
     * @param {typeof CodeGen_Back_Enum_Bot_Command} CMD
     */
    constructor(
        {
            CodeGen_Back_Enum_Bot_Command$: CMD,
        }
    ) {
        return async (ctx) => {
            // https://core.telegram.org/bots/api#sendmessage
            await ctx.reply(
                `This is a test bot for demo.
                
Available commands are:

/${CMD.HELP} - display this text. 
/${CMD.SETTINGS} - configure this bot. 
/${CMD.START} - start the bot. 
/${CMD.SERVICE_CREATE} - create a new service (Vendor only). 
/${CMD.SERVICE_READ} - view details of a service. 
/${CMD.SERVICE_UPDATE} - update an existing service (Vendor only). 
/${CMD.SERVICE_DELETE} - delete a service (Vendor only). 
/${CMD.SERVICE_LIST} - list all available services. 
/${CMD.VISIT_SERVICE} - register for a service (Client only). 
/${CMD.VISIT_LIST} - view your visit history (Client only). 
/${CMD.VISIT_QUEUE} - view visit requests (Vendor only). 
/${CMD.VISIT_APPROVE} - approve a client's visit (Vendor only). 
/${CMD.VISIT_DECLINE} - decline a client's visit (Vendor only). 
/${CMD.VISIT_DELETE} - cancel your visit (Client only).`,
                {parse_mode: 'HTML',}
            );
        };
    }
}
