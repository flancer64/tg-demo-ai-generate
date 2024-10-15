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
     * @param {CodeGen_Back_Bot_Filter_Message} filterMessage
     * @param {typeof CodeGen_Back_Enum_Bot_Command} CMD
     */
    constructor(
        {
            TeqFw_Core_Shared_Api_Logger$$: logger,
            CodeGen_Back_Bot_Cmd_Help$: cmdHelp,
            CodeGen_Back_Bot_Cmd_Settings$: cmdSettings,
            CodeGen_Back_Bot_Cmd_Start$: cmdStart,
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
            ]);
            logger.info(`A total of ${Object.keys(CMD).length} commands have been set for the bot.`);
            return bot;
        };

        this.handlers = function (bot) {
            bot.command(CMD.HELP, cmdHelp);
            bot.command(CMD.SETTINGS, cmdSettings);
            bot.command(CMD.START, cmdStart);
            bot.on('message', filterMessage);
            return bot;
        };
    }
}
