# React HLS Player V1
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Pre-Intro

This is the official release of React HLS Player V1. I originally forked this project so I could fix some underlying issues that I was running in to and the original project was no longer being maintained. Since then, this project has seen a gradual increase of usage, and I've decided on maintaining and improving it for the long term. This V1 release is a rewrite of the original, includes Typescript definitions to take advantage of VSCode's intellisense, and has completely migrated to Webpack from Parcel.

This project will continue to be a work in progress, and I will always welcome PRs, issues, and recommendations. I'll continue to look for better ways of handling things, as well as look for ways to improve and add on to this module.

## Introduction

`react-hls-player` is a simple hls/rtmp live stream player.
It uses [hls.js](https://github.com/video-dev/hls.js) to play your hls live stream if your browser supports `html 5 video` and `MediaSource Extension`.

## Examples

```javascript
// General Usage
<ReactHlsPlayer
    url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    autoplay={false}
    controls={true}
    width={500}
    height={375}
/>
```

```javascript
// Responsive
<ReactHlsPlayer
    url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
    autoplay={false}
    controls={true}
    width="100%"
    height="auto"
/>
```
## Props

All [video properties](https://www.w3schools.com/tags/att_video_poster.asp) are supported and passed down to the underlying video component

Prop | Description
------------ | -------------
style `Object` | React CSS properties
className `String` | Custom classes
url `String`, `required` | The hls url that you want to play
autoplay `Boolean` | Autoplay when component is ready. Defaults to `false`
controls `Boolean` | Whether or not to show the playback controls. Defaults to `false`
width `Number` | Video width. Defaults to `100%`
height `Number` | Video height. Defaults to `auto`
hlsConfig `Object` | `hls.js` config, you can see all config [here](https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning)
playerRef `React Ref` | Pass in your own ref to interact with the video player directly. This will override the default ref.

### Additional Notes

By default, the HLS config will have `enableWorker` set to `false`. There have been issues with the HLS.js library that breaks some React apps, so I've disabled it to prevent people from running in to this issue. If you want to enable it and see if it works with your React app, you can simply pass in `enableWorker: true` to the `hlsConfig` prop object. [See this issue for more information](https://github.com/video-dev/hls.js/issues/2064)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.chrisrshort.com"><img src="https://avatars3.githubusercontent.com/u/13677134?v=4" width="100px;" alt=""/><br /><sub><b>Chris Short</b></sub></a><br /><a href="https://github.com/devcshort/react-hls/commits?author=devcshort" title="Code">💻</a> <a href="#projectManagement-devcshort" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!