# Advanced React Native Trainings

**Getting convidence** using _React Native_ 💯 for your future project! This is quite high barrier

_Improved productivity with the practical 🤓 use of the power 💪 of React Native_

[![chat-badge][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

**Before You Start**

We've used this repo to teach about **Advanced React Native** concept. We've branched the
repo for each one of them. Reference those branches based on what you're
following along with:

- Video Training: [`coming soon`]()

To checkout that branch run: `git checkout <branch name>`. From there on you
should be good.

You may also want to check out the `Changes` section in the README below.

## Welcome

By coding along with us in this workshop you’ll:

- Seting up tools for modern development using **JS** using [Flow](https://github.com/facebook/flow), [ESLint](https://eslint.org/), and [Prettier](https://github.com/prettier/prettier).
- Learn how type your React Native component using [Flow](https://github.com/facebook/flow)
- Learn different way to costruct _React Component_ (eg: [HoC](https://reactjs.org/docs/higher-order-components.html), [Render Props](https://reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns), [React Children](https://reactjs.org/docs/react-api.html#reactchildrenmap), and [React Context](https://reactjs.org/docs/context.html#___gatsby))
- Testing your business logic and _React Component_ using [Jest](https://jestjs.io/)
- Understanding different way to route your application using [React Navigation v2](https://reactnavigation.org/).
- Understand how to compose your routing using _Stack Navigator, Tab Navigator, and combine those two_
- Learn about Redux and state management in general with just plain React.
- Deep dive into [Redux Saga](https://github.com/redux-saga/redux-saga)
- Incremental adaptation of [Graphql][graphql]
- Learn to use [Apollo Graphql][apollo-graphql]

## Workshop workflow

The workflow of this workshop is fairly simple and based on
[Make It Stick][makeitstick] methodologies:

1. Learn a few concepts via demos
2. Apply the concepts via exercises
3. Write down three core concepts you learned and provide feedback on the
   exercise (elaboration and reflection)

## Project

### System Requirements

- [git][git] v2.10.2 or greater
- [NodeJS][node] v6.9.5 or greater
- [yarn][yarn] v0.20.3 or greater (or [npm][npm] v4.2.0 or greater)
- [react-native-cli][reactn] v2.0.1 or greater
  All of these must be available in your `PATH`. To verify things are set up
  properly, you can run this:

```
git --version
node --version
yarn --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for
[windows][win-path] or [mac/linux][mac-path].

### Setup

After you've made sure to have the correct things (and versions) installed, you should be able to just run a few
commands to get set up:

```shell
$ git clone https://github.com/frontend-craftsmanship/advanced-react-native-training.git
$ cd advanced-react-native-training
```

This may take a few minutes. If you get any errors, please read the error output
and see whether there's any instructions to fix things and try again. If you're
still getting errors or need any help at all, then please
[file an issue][issue].

If this finishes without issues, great 👏! However, if you have problems, please
file an issue on this repo [here][setup-issue].

### Note on yarn

If you don't have `yarn` installed and don't want to use it for some reason, you
can use [`npm`][npm] as well. Instead of `yarn start setup`, run
`node ./scripts/install && npm start validate` and enjoy waiting (and hopefully
things don't break for you). May be a good idea to still run
`node ./scripts/verify` to verify you have the right version of other things
too.

## Running the workshop

To run the workshop, please go to specific branch. It goes lineary from 01 - the last.

```shell
$ yarn install
<!-- to start development using ios simulator -->
$ yarn ios
<!-- to start development using android simulator -->
$ yarn android
```

### Contributing

If you have any questions, [let me know][issue].

## Changes

The community and tools move fast. Here's a list of changes since I first gave
this workshop:

## Contributors

Thanks goes to these wonderful people and thanks for [Kent C Dodds](https://twitter.com/kentcdodds) for his open source, and this Readme template is coming from his training repo.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars0.githubusercontent.com/u/7804066?s=460&v=4" width="100px;"/><br /><sub>Juang Wiantoro</sub>](https://github.com/broerjuang)<br /> | [<img src="https://avatars2.githubusercontent.com/u/15160023?s=400&v=4" width="100px;"/><br /><sub>Ronaldo Vitto Lewerissa</sub>](https://github.com/rvlewerissa)<br /> | [<img src="https://avatars0.githubusercontent.com/u/25166631?s=460&v=4" width="100px;"/><br /><sub>Dominggus Octovianus</sub>](https://github.com/greensirius)<br /> |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

# LICENSE

MIT

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[chat]: https://discordapp.com/channels/499145225437052929
[chat-badge]: https://img.shields.io/discord/102860784329052160.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/frontend-craftsmanship/advanced-react-native-training/master.svg?style=flat-squqre
[build]: https://travis-ci.org/frontend-craftsmanship/advanced-react-native-training
[license-badge]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/frontend-craftsmanship/advanced-react-native-training.svg?style=social
[github-watch]: https://github.com/frontend-craftsmanship/advanced-react-native-training/watchers
[github-star-badge]: https://img.shields.io/github/stars/frontend-craftsmanship/advanced-react-native-training/master.svg?style=social
[github-star]: https://github.com/frontend-craftsmanship/advanced-react-native-training/stargazers
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/asts-workshop.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[makeitstick]: http://makeitstick.net/
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/frontend-craftsmanship/advanced-react-native-training/issues/new
[setup-issue]: https://github.com/frontend-craftsmanship/advanced-react-native-training/issues/new?title=Issues%20Setting%20Up&body=Here%27s%20my%20node/yarn%20version%20and%20the%20output%20when%20I%20run%20the%20commands:
[makepr]: http://makeapullrequest.com
[nps]: https://npmjs.com/package/nps
[graphql]: https://graphql.org/
[apollo-graphql]: https://www.apollographql.com/
[reactn]: (https://www.npmjs.com/package/react-native-cli)
