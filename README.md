# repo-tmpl-tg-bot

This template (`flancer32/repo-tmpl-tg-bot`) is designed to help developers quickly create new Telegram bots using the
`flancer32/teq-telegram-bot` package. It provides a ready-to-use structure and minimal functionality, allowing you to
focus on adding custom bot logic without worrying about the initial setup.

## Features

- Predefined directory structure for your bot project.
- Basic bot commands (`help`, `start`, `settings`) implemented.
- Easy to extend with additional bot commands and functionality.
- Ready to use with `flancer32/teq-telegram-bot`, which simplifies starting and stopping the bot in long polling or
  webhook modes.

## Getting Started

Once you've created a new repository using this template, there are several key steps you need to follow to personalize
the bot and implement custom features.

### 1. Replace Namespace `Ns_App`

In the relevant files, where the namespace `Ns_App` is used, replace it with your own custom namespace. Ensure that the
new namespace aligns with the structure used in TeqFW (similar to PHP Zend 1).

### 2. Add Additional Commands

In the object `Ns_App_Back_Enum_Bot_Command`, add the names of any additional commands you want to organize within the
codebase. This enumeration is used by the developer to maintain consistency in command names across the project.

### 3. Create Command Handlers

For each new command you added to the enumeration, create a corresponding handler in the `src/Back/Bot/Cmd/` directory.
You can base new handlers on the existing examples, such as `Ns_App_Back_Bot_Cmd_Help`. Ensure your handlers implement
the logic for each command.

### 4. Update Help Command

The help command (`Ns_App_Back_Bot_Cmd_Help`) provides users with a list of available commands. Be sure to update this
command with descriptions of your new custom commands.

### 5. Modify Setup Class

In the `Ns_App_Back_Bot_Setup` class, you'll need to:

- Add your new commands to the `commands` method, ensuring they are made available to the bot.
- Attach the new command handlers in the `handlers` method so that your bot can process the commands correctly.

## Example

Here is a quick example of how to add a new command to your bot.

1. Define the command names:

```javascript
const Ns_App_Back_Enum_Bot_Command = {
  HELP: 'help',
  SETTINGS: 'settings',
  START: 'start',
  NEW_COMMAND: 'new_command',
};
```

2. Create the handler in `src/Back/Bot/Cmd/New/Command.js`:

```javascript
export default class Ns_App_Back_Bot_Cmd_New_Command {
  async execute(ctx) {
    await ctx.reply('This is the new command!');
  }
}
```

3. Update the help command to include the new command:

```javascript
export default class Ns_App_Back_Bot_Cmd_Help {
  constructor({Ns_App_Back_Enum_Bot_Command$: CMD}) {
    return async (ctx) => {
      await ctx.reply(
              `This is a test bot for demo.
                
Available commands are:

/${CMD.HELP} - display this text. 
/${CMD.SETTINGS} - configure this bot. 
/${CMD.START} - start the bot.
/${CMD.NEW_COMMAND} - description of the new command.`,
              {parse_mode: 'HTML',}
      );
    };
  }
}
```

4. Update the `Ns_App_Back_Bot_Setup` class to include the new command and handler:

```javascript
this.commands = async function (bot) {
  bot.api.setMyCommands([
    {command: CMD.HELP, description: 'Get help.'},
    {command: CMD.SETTINGS, description: 'Configure bot settings.'},
    {command: CMD.START, description: 'Start using the bot.'},
    {command: CMD.NEW_COMMAND, description: 'Description of the new command.'},
  ]);
  // ...
};

this.handlers = function (bot) {
  bot.command(CMD.HELP, cmdHelp);
  bot.command(CMD.SETTINGS, cmdSettings);
  bot.command(CMD.START, cmdStart);
  bot.command(CMD.NEW_COMMAND, cmdNewCommand);
  // ...
};
```

## License

This template is licensed under the MIT License. You are free to use it, modify it, and distribute it as you see fit.

---

This template is meant to serve as a starting point. Please refer to the `flancer32/teq-telegram-bot` package
documentation for more detailed instructions on working with the framework.

Happy bot building!