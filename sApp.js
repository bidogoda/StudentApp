const sGradeSys = require("./sGradeSys");
const { command, describe } = require("yargs");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "This Add Description",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
    name: {
      type: "string",
      demandOption: true,
    },
    grade: {
      type: "array",
      demandOption: true,
    },
    Comment: {
      type: "string",
    },
  },
  handler: () => {
    // sGradeSys.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.grade);
    sGradeSys.addStudent(yargs.argv);
  },
});

yargs.command({
  command: "delete",
  describe: "Delete Student",
  builder: {
    id: {
      describe: "this is id description of delete command",
      type: "number",
      demandOption: true,
    },
  },
  handler: () => {
    sGradeSys.removeStudent(yargs.argv.id);
  },
});

yargs.command({
  command: "read",
  describe: "Read Student",
  builder: {
    id: {
      describe: "this is id description of read command",
      type: "number",
      demandOption: true,
    },
  },

  handler: () => {
    sGradeSys.readStudent(yargs.argv.id);
  },
});

yargs.command({
  command: "list",
  describe: "list Students",
  handler: () => {
    sGradeSys.listStudents();
  },
});

yargs.command({
  command: "update",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
    name: {
      type: "string",
      demandOption: true,
    },
  },
  handler: () => {
    sGradeSys.updateStudent(yargs.argv.id, yargs.argv.name);
  },
});

yargs.parse();
