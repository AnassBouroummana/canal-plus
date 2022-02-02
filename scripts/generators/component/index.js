const { action } = require("commander");
const {
  componentAlreadyExists,
  componentsFolderExists,
  pagesFolderExists,
  modulesFolderExists,
} = require("../utils/component-exists");

const choices = [];
if (componentsFolderExists()) choices.push("Component");
if (pagesFolderExists()) choices.push("Page");
if (modulesFolderExists()) choices.push("Module");
const FolderType = {
  Component: "components",
  Page: "pages",
  Module: "modules",
};
module.exports = {
  description: "Add a component / page / module",
  prompts: [
    {
      type: "list",
      name: "componentType",
      message: "Do you want a page or a component or Module?",
      default: "Component",
      choices: () => choices,
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentAlreadyExists(value)
            ? "A component or page with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "list",
      name: "component",
      message: "Select a type of component:",
      default: "Component",
      when: (data) => data.componentType !== "Module",
      choices: () => ["Component"],
    },
    {
      type: "confirm",
      name: "wantStyledComponents",
      default: true,
      message: "Do you want to use styled-components?",
      when: (data) => data.componentType !== "Module",
    },
    {
      type: "confirm",
      name: "wantSnapshotTests",
      default: true,
      message: "Do you want snapshot tests?",
      when: (data) => data.componentType !== "Module",
    },
  ],
  actions: (data) => {
    let componentTemplate;
    const componentType = FolderType[data.componentType];
    console.log(data.componentType);

    switch (data.component) {
      case "Component": {
        componentTemplate = "./component/component.tsx.hbs";
        break;
      }
      case "Stateless": {
        componentTemplate = "./component/component.stateless.tsx.hbs";
        break;
      }
      default: {
        componentTemplate = "./component/component.pure.tsx.hbs";
      }
    }

    let actions = [];
    if (data.componentType !== "Module") {
      actions = [
        {
          type: "add",
          path: `../../src/${componentType}/{{properCase name}}/{{properCase name}}.tsx`,
          templateFile: componentTemplate,
          abortOnFail: true,
          data,
        },
        {
          type: "add",
          path: `../../src/${componentType}/{{properCase name}}/index.ts`,
          templateFile: "./component/index.ts.hbs",
          abortOnFail: true,
          data,
        },
      ];
    } else {
      actions = [
        {
          type: "add",
          path: `../../src/${componentType}/{{properCase name}}/slice.ts`,
          templateFile: "./module/slice.ts.hbs",
          abortOnFail: true,
          data,
        },
        {
          type: "add",
          path: `../../src/${componentType}/{{properCase name}}/selectors.ts`,
          templateFile: "./module/selectors.ts.hbs",
          abortOnFail: true,
          data,
        },
        {
          type: "add",
          path: `../../src/${componentType}/{{properCase name}}/hooks.ts`,
          templateFile: "./module/hooks.ts.hbs",
          abortOnFail: true,
          data,
        },
        {
          type: "add",
          path: `../../src/${componentType}/{{properCase name}}/index.ts`,
          templateFile: "./module/index.ts.hbs",
          abortOnFail: true,
          data,
        },
      ];
    }
    if (data.wantStyledComponents) {
      actions.push({
        type: "add",
        path: `../../src/${componentType}/{{properCase name}}/{{properCase name}}.style.ts`,
        templateFile: `./component/style.ts.hbs`,
        abortOnFail: true,
        data,
      });
    }
    if (data.wantSnapshotTests) {
      actions.push({
        type: "add",
        path: `../../src/${componentType}/{{properCase name}}/tests/{{properCase name}}.snapshot.test.tsx`,
        templateFile: "./component/snapshot.test.tsx.hbs",
        abortOnFail: true,
        data,
      });
    }

    return actions;
  },
};
