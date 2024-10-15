/**
 * Display the messages about the processing of an API request.
 */
// IMPORTS

// CLASSES
/**
 * @implements {Telegram_Bot_Back_Api_Setup}
 */
export default class CodeGen_Back_Bot_Setup {
    /**
     * @param {TeqFw_Core_Shared_Api_Logger} logger -  instance
     * @param {CodeGen_Back_Bot_Cmd_Help} cmdHelp
     * @param {CodeGen_Back_Bot_Cmd_Settings} cmdSettings
     * @param {CodeGen_Back_Bot_Cmd_Start} cmdStart
     * @param {CodeGen_Back_Bot_Cmd_Service_Create} cmdServiceCreate
     * @param {CodeGen_Back_Bot_Cmd_Service_Read} cmdServiceRead
     * @param {CodeGen_Back_Bot_Cmd_Service_Update} cmdServiceUpdate
     * @param {CodeGen_Back_Bot_Cmd_Service_Delete} cmdServiceDelete
     * @param {CodeGen_Back_Bot_Cmd_Service_List} cmdServiceList
     * @param {CodeGen_Back_Bot_Cmd_Visit_Service} cmdVisitService
     * @param {CodeGen_Back_Bot_Cmd_Visit_List} cmdVisitList
     * @param {CodeGen_Back_Bot_Cmd_Visit_Queue} cmdVisitQueue
     * @param {CodeGen_Back_Bot_Cmd_Visit_Approve} cmdVisitApprove
     * @param {CodeGen_Back_Bot_Cmd_Visit_Decline} cmdVisitDecline
     * @param {CodeGen_Back_Bot_Cmd_Visit_Delete} cmdVisitDelete
     * @param {CodeGen_Back_Bot_Filter_Message} filterMessage
     * @param {typeof CodeGen_Back_Enum_Bot_Command} CMD
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            CodeGen_Back_Bot_Cmd_Help$: cmdHelp,
            CodeGen_Back_Bot_Cmd_Settings$: cmdSettings,
            CodeGen_Back_Bot_Cmd_Start$: cmdStart,
            CodeGen_Back_Bot_Cmd_Service_Create$: cmdServiceCreate,
            CodeGen_Back_Bot_Cmd_Service_Read$: cmdServiceRead,
            CodeGen_Back_Bot_Cmd_Service_Update$: cmdServiceUpdate,
            CodeGen_Back_Bot_Cmd_Service_Delete$: cmdServiceDelete,
            CodeGen_Back_Bot_Cmd_Service_List$: cmdServiceList,
            CodeGen_Back_Bot_Cmd_Visit_Service$: cmdVisitService,
            CodeGen_Back_Bot_Cmd_Visit_List$: cmdVisitList,
            CodeGen_Back_Bot_Cmd_Visit_Queue$: cmdVisitQueue,
            CodeGen_Back_Bot_Cmd_Visit_Approve$: cmdVisitApprove,
            CodeGen_Back_Bot_Cmd_Visit_Decline$: cmdVisitDecline,
            CodeGen_Back_Bot_Cmd_Visit_Delete$: cmdVisitDelete,
            CodeGen_Back_Bot_Filter_Message$: filterMessage,
            CodeGen_Back_Enum_Bot_Command$: CMD,
        }
    ) {
        // INSTANCE METHODS
        this.commands = async function (bot) {
            bot.api.setMyCommands([
                {command: CMD.HELP, description: 'Get help.'},
                {command: CMD.SETTINGS, description: 'Configure bot settings.'},
                {command: CMD.START, description: 'Start using the bot.'},
                {command: CMD.SERVICE_CREATE, description: 'Create a new service (Vendor only).'},
                {command: CMD.SERVICE_READ, description: 'View details of a service.'},
                {command: CMD.SERVICE_UPDATE, description: 'Update an existing service (Vendor only).'},
                {command: CMD.SERVICE_DELETE, description: 'Delete a service (Vendor only).'},
                {command: CMD.SERVICE_LIST, description: 'List all available services.'},
                {command: CMD.VISIT_SERVICE, description: 'Register for a service (Client only).'},
                {command: CMD.VISIT_LIST, description: 'View your visit history (Client only).'},
                {command: CMD.VISIT_QUEUE, description: 'View visit requests (Vendor only).'},
                {command: CMD.VISIT_APPROVE, description: 'Approve a client\'s visit (Vendor only).'},
                {command: CMD.VISIT_DECLINE, description: 'Decline a client\'s visit (Vendor only).'},
                {command: CMD.VISIT_DELETE, description: 'Cancel your visit (Client only).'}
            ]);
            logger.info(`A total of ${Object.keys(CMD).length} commands have been set for the bot.`);
            return bot;
        };

        this.handlers = function (bot) {
            bot.command(CMD.HELP, cmdHelp);
            bot.command(CMD.SETTINGS, cmdSettings);
            bot.command(CMD.START, cmdStart);
            bot.command(CMD.SERVICE_CREATE, cmdServiceCreate);
            bot.command(CMD.SERVICE_READ, cmdServiceRead);
            bot.command(CMD.SERVICE_UPDATE, cmdServiceUpdate);
            bot.command(CMD.SERVICE_DELETE, cmdServiceDelete);
            bot.command(CMD.SERVICE_LIST, cmdServiceList);
            bot.command(CMD.VISIT_SERVICE, cmdVisitService);
            bot.command(CMD.VISIT_LIST, cmdVisitList);
            bot.command(CMD.VISIT_QUEUE, cmdVisitQueue);
            bot.command(CMD.VISIT_APPROVE, cmdVisitApprove);
            bot.command(CMD.VISIT_DECLINE, cmdVisitDecline);
            bot.command(CMD.VISIT_DELETE, cmdVisitDelete);
            bot.on('message', filterMessage);
            return bot;
        };
    }
}

