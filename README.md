# Google Search Console and Indexing API with CLI interface

> This package allows you to manage your  Google Search Console and Indexing API through cli interface.

![Build and Test](https://github.com/ivankristianto/google-search-console-cli/workflows/Build%20and%20Test/badge.svg) [![Release Version](https://img.shields.io/github/release/ivankristianto/google-search-console-cli.svg)](https://github.com/ivankristianto/google-search-console-cli/releases/latest) [![MIT License](https://img.shields.io/github/license/ivankristianto/google-search-console-cli.svg)](https://github.com/ivankristianto/google-search-console-cli/blob/master/LICENSE)

The use of Indexing API, is inspired by [RankMath WordPress plugin](https://rankmath.com/blog/google-indexing-api/), you can follow the steps there sto setup the service account on your Google cloud project.

## Requirements

* Node.js 10 or above

## Install

1. `npm install -g gsc-cli`.
1. Follow the steps to set up your Google cloud service account, [see this doc](https://developers.google.com/search/apis/indexing-api/v3/prereqs#create-service-account)
1. Run `gsc config setup --jsonFile=<path to file>`, and use your api token.
1. Run `gsc --help` for all available commands.

## Documentation

Documentation is available at [the wiki page](https://github.com/ivankristianto/google-search-console-cli/wiki) for all the available commands and the optional arguments.

## Contributing

Pull requests and feedback are welcome. _Contributing guideline will be added later._

## Changelog

A complete listing of all notable changes to this package in [CHANGELOG.md](https://github.com/ivankristianto/google-search-console-cli/blob/master/CHANGELOG.md).
