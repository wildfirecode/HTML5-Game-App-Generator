const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // This makes `appname` a required argument.
        this.argument('appname', { type: String, required: true });

        // And you can then access it later; e.g.
        this.log(this.options.appname);
    }

    initializing() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('h5app') + ' generator!'
        ));
    }

    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'username',
                message: 'What\'s your name',
                store: true
            },
            {
                type: 'input',
                name: 'version',
                message: 'Which version'
            }]).then((answers) => {
                this.username = answers.username;
                this.version = answers.version;
            });
    }

    writing() {
        const appname = this.options.appname;
        this.fs.copyTpl(
            this.templatePath('_app.ts'),
            this.destinationPath(`${appname}/${appname}.ts`),
            {
                version: this.version,
                username: this.username,
                appname: appname,
            }
        );

        this.fs.copyTpl(
            this.templatePath('models/Model.ts'),
            this.destinationPath(`${appname}/models/Model.ts`),
            {
                version: this.version,
                username: this.username,
                appname: appname,
            }
        );

        this.fs.copyTpl(
            this.templatePath('views/View.ts'),
            this.destinationPath(`${appname}/views/View.ts`),
            {
                version: this.version,
                username: this.username,
                appname: appname,
            }
        );

        this.fs.copyTpl(
            this.templatePath('controllers/Controller.ts'),
            this.destinationPath(`${appname}/controllers/Controller.ts`),
            {
                version: this.version,
                username: this.username,
                appname: appname,
            }
        );
    }
};