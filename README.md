# Prime VanillaJS

[![licence mit](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://hemersonvianna.mit-license.org/)
[![GitHub issues](https://img.shields.io/github/issues/vxtool/prime-vanillajs.svg)](https://github.com/vxtool/prime-vanillajs/issues)
![GitHub package.json version](https://img.shields.io/github/package-json/v/vxtool/prime-vanillajs.svg)
![GitHub Release Date](https://img.shields.io/github/release-date/vxtool/prime-vanillajs.svg)
![GitHub top language](https://img.shields.io/github/languages/top/vxtool/prime-vanillajs.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/vxtool/prime-vanillajs.svg)
![GitHub All Releases](https://img.shields.io/github/downloads/vxtool/prime-vanillajs/total.svg)

## Prerequisites
- Node >= v12.18.2
- NPM >= v6.14.5
- Yarn >= v1.22.0 or npm install -g yarn

## .gitconfig

Git's merge commit message

```
[alias]
    mergelogmsg = "!f() { var=$(git symbolic-ref --short HEAD) && printf 'Merge branch %s into %s\n\n::SUMMARY::\nBranch %s commits:\n' $1 $var $1 > temp_merge_msg && git log --format=format:'%s' $var..$1 >> temp_merge_msg && printf '\n\nBranch %s commits:\n' $var >> temp_merge_msg && git log --format=format:'%s' $1..$var >> temp_merge_msg && printf '\n\n* * * * * * * * * * * * * * * * * * * * * * * * *\n::DETAILS::\n' >> temp_merge_msg && git log --left-right $var...$1 >> temp_merge_msg && git merge --no-ff --no-commit $1 && git commit -eF temp_merge_msg; rm -f temp_merge_msg;}; f"
```

## Install

```
yarn
```

## Commands

- **yarn start**
- **yarn build**
- **yarn lib**
- **yarn release**
- **yarn doc**


## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

## Log

Check [Releases](https://github.com/vxtool/prime-vanillajs/releases) for detailed changelog.

## License

[MIT license](http://hemersonvianna.mit-license.org/) © Hemerson Vianna
