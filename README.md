## 05 - Check Point

In this branch, we will walk through the project directory. Lot of pattern already exist on React Community.

```shell
├── App.js
├── constants
│   ├── appPreset.js
│   ├── categories.js
│   ├── colors.js
│   ├── fixture.js
│   └── textPresets.js
├── core-ui
│   ├── Button.js
│   ├── Card.js
│   ├── DropDown.js
│   ├── Icon.js
│   ├── Separator.js
│   ├── Text.js
│   ├── TextField.js
│   └── index.js
├── images
│   └── logo.png
├── screens
│   └── Login
│       └── Login.js
└── types
    └── index.js
```

Here's, after trying several patterns. For example, `container`, `components` structure. We found those patterns are really difficult to work with when the codebase grows. For example, at the beginning, we think some components are really just stateless component. But, when the feature is addeed, it became clear that the component should be inside `containers`. Secondly, we found that naming thing is difficult. When we are flatten the structure, the naming becomes problematic. Sometimes, we ended up using different suffix. For example, `CardContainer`, `CardWrapper`, `CardContainerWrapper`, and it's really difficult to know what component does unless we see the code.

## Core-UI

Inside the core-ui, we put the ui that is (like its name), core. So, every React Component can actually using this for the sake of design consitency.

## Constants

Sometime, we might ended up adding more variables locally, inside the component. While it might be easy to add, but it will difficult to reason later. Especially, when design changes.

## types

Type will contain the type that will be shared accross the project.

## screens / features

If the application is small, we tend to put the screen directly inside `src` directory.

> I think the bast way to structure your react project is by trying. There's no one size fits for all cases. Change the structure until you're happy to work with, and adding the feature is a breeze!
