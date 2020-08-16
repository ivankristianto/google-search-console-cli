# Google Search Console and Indexing API with CLI interface

> This package allows you to manage your  Google Search Console and Indexing API through cli interface.

![Build and Test](https://github.com/ivankristianto/google-search-console-cli/workflows/Build%20and%20Test/badge.svg) [![Release Version](https://img.shields.io/github/release/ivankristianto/google-search-console-cli.svg)](https://github.com/ivankristianto/google-search-console-cli/releases/latest) [![MIT License](https://img.shields.io/github/license/ivankristianto/google-search-console-cli.svg)](https://github.com/ivankristianto/google-search-console-cli/blob/master/LICENSE)

The use of Indexing API, is inspired by [RankMath WordPress plugin](https://rankmath.com/blog/google-indexing-api/), you can follow the steps there sto setup the service account on your Google cloud project.

## Requirements

* Node.js 10 or above

## Install

1. `npm install -g gsc-cli`.
1. Follow the steps to set up your Google cloud service account, see the how to below.
1. Run `gsc config setup --jsonFile=<path to file>`, and use your api token.
1. Run `gsc --help` for all available commands.

## Steps to set up Google Cloud API

1. Create your Google cloud account if you don't have one.
1. Feel free to create a new project or use existing one.
1. Enable Google Indexing API, [click here](https://console.developers.google.com/flows/enableapi?apiid=indexing.googleapis.com&credential=client_key) to automatically set it up.
1. Now create a [service account](https://console.developers.google.com/iam-admin/serviceaccounts)
1. Select and copy the whole **Service Account ID** (the one that looks like an email address) because you will need it later.
1. Now create the API Key in JSON format (you need this for authentication)
1. Add the Service Account as an owner of your Google Search Console Property
1. From Search Console > Settings > Users and Permissions, choose the "Manage property owners" from the main user.
1. Add owner with the email address you copy before for the search console property
1. That's it
1. Now from you cli, run `gsc config setup --jsonFile=<path to json file>`
1. Now the cli package is ready to use

## Documentation

Documentation is available at [the wiki page](https://github.com/ivankristianto/google-search-console-cli/wiki) for all the available commands and the optional arguments.

## Contributing

Pull requests and feedback are welcome. _Contributing guideline will be added later._

## Changelog

A complete listing of all notable changes to this package in [CHANGELOG.md](https://github.com/ivankristianto/google-search-console-cli/blob/master/CHANGELOG.md).
