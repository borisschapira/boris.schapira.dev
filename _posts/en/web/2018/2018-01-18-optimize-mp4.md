---
title: 'Optimize your MP4 video for better performance'
canonical: 'https://blog.dareboost.com/en/2018/01/optimize-your-mp4-video-for-better-performance/'
canonical_title: "Dareboost's Blog"
tags:
    - 'Performance Web'
    - Video
cloudinary_logo: dareboost-logo
slug: optimize-your-mp4-video-for-better-performance
translations:
    fr: video-optimisez-vos-mp4-pour-de-meilleures-performances
---

Representing more than 75% of the videos served on the Internet, MP4 is the most commonly used format today. However, MP4 is often used improperly, which can have an unfortunate impact on the User Experience. Let's see how we can improve this.

{% capture img_alt %}A graphic{% endcapture %} {% capture img_caption %}Usage evolution of the different video files types on the web. Source: HttpArchive through [a BigQuery query](https://goo.gl/srggsf){% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/0_video_usage.png"
alt=img_alt
caption=img_caption
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
%}

Whether you are a luxury player wishing to broadcast extremely high-quality videos or a news platform looking for an eye-catching proposal, video has become an essential part of the Web in just a few years. But adding video to a site can be challenging.

The most widely used and supported encoding is undoubtedly H.264, served by an MP4 file. This format is supported by most video manipulation software: [Handbrake](https://handbrake.fr/), [MPEG Streamclip](http://www.squared5.com/), [OpenShot](https://www.openshot.org/)… even [VLC](https://www.videolan.org/)! But few of them offer a dedicated export for the Web.

However, you don't broadcast a video on the Internet like you do on a desktop computer. There are a few things to be careful about.

{% capture img_alt %}VLC capture{% endcapture %} {% capture img_caption %}VLC "Convert & Stream" interface{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/1_vlc_convert.png"
alt=img_alt
caption=img_caption
%}

_Disclaimer: the following examples will make intensive use of [ffmpeg](https://www.ffmpeg.org/), one of the most popular video editing program among developers, but most of the optimizations should be available in your favorite software._

## Reducing file weight: the right balance between quality and performance

A heavy video will cause an increase in the total page weight. Keep in mind that some Internet Providers sell packages that are limited in total bandwidth. Making your pages unnecessarily heavy will not help your visitors.

To optimize your video, you need to ask yourself how it delivers its content over the network. Even if the file size seems small, it may be possible to improve the bitrate for an optimal diffusion.

What is the bitrate? To say it simply, bitrate is the amount of data needed to encode one second of video. The more data you allocate per second, the better is the quality but the heavier is the file. I don't have a magic formula to share that would compute the perfect bitrate. Instead, I would like to invite you to ask yourself about the quality required for each individual video usage.

For example, it is interesting to evaluate the necessary bitrate according to the abrupt changes presented in the video: the more fixed is the content, the less data you will need to allocate to each second of the video. Alternatively, if the video contains a lot of motion, the bitrate needed for equivalent quality will increase.

You can easily anticipate the weight of a video after encoding by using either a constant bitrate over the entire video, or a [multi-pass encoding](https://en.wikipedia.org/wiki/Variable_bitrate#Multi-pass_encoding_and_single-pass_encoding). Here is a comparison between an original 10-second extract of a footage from the June 2009 Endeavour liftoff and a two-pass encoding with ffmpeg. Left part weighted 85MB, right video weighted 1,2MB after being optimized:

{% include media/youtube.html.liquid id="M99TPB7qMsQ" title="Original vs. Constant Rate Factor 24 (ffmpeg h264)" %}

This example shows what can technically be done to improve the weight of a video, but we can also extrapolate optimizations from the video purpose. It is quite common, for example, to visit web pages containing a large centered content banner with a welcoming message. Sometimes, behind this "Hero Container", a background video is played.

These videos are neither intended to be viewed nor useful for conversion. They often are a subtle improvement, only intended to beautify the page and not meant to be distracting. Do you need this video to be of the highest possible quality? Using a blurring effect like [the frei0r iirblur effect](https://yalantis.com/blog/experiments-with-ffmpeg-filters-and-frei0r-plugin-effects/), you can slightly fog your original content, hence gaining precious kilobytes.

With ffmpeg:

```
ffmpeg -i origin.mp4 -vf frei0r=iirblur:0.4 -a:c copy blurred.mp4
```

The `-vf frei0r=iirblur:0.4` option telles ffmpeg to blur, using a 40 % factor, while the `-a:c copy` option tells it to keep the audio track as it is.

Result:

{% include media/youtube.html.liquid id="nwGDXk9eE8s" title="Clear vs Blur (ffmpeg+frei0r)" %}

Another possible optimization: the audio track. If your video is not meant to play sound, why keep this track? Don't hesitate to remove it:

```shell
ffmpeg -i origin.mp4 -an -vcodec copy muted.mp4
```

The `-an` option tells ffmpeg to disable the audio track while the `-vcodec copy` option tells it to keep the video track as it is. Don't forget to also explicit the absence of sound to the browser by using [the `<video>` element muted attribute](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Video#attr-muted).

Even if your video is lightweight, your work is not finished. You need to focus on the video purpose, which is quite often to be streamed.

## Start playback before downloading the entire content

Here's how streaming works: when a video playback is requested, the browser will fetch the file to find the video metadata. MP4 video metadata includes such things as display characteristics, time scale and duration. Without this information, the browser cannot start playback!

If your server is configured to accept [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving), which means it has included an Accept-Ranges header in its initial HTTP response, the browser will fetch the file piece by piece through several partial content requests (HTTP Code 206) to the resource. As soon as it finds the video metadata, it will be able to start playback while downloading the complete file.

{% capture img_alt %}ChromeDevTools capture, "Network" tab{% endcapture %} {% capture img_caption %}In this example, the browser performs three requests before obtaining metadata and beginning playback.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/2_devtools_capture.png"
alt=img_alt
caption=img_caption
%}

If your server does not support Range Requests, the browser has no choice but to download the entire file. If your video is in autoplay, the bandwidth available to download other resources needed to render the page will be reduced. The time required for the display will increase, degrading the user experience.

## Where is my video metadata stored?

An MP4 file breaks down into several units of data called atoms. The metadata are contained in the movie atom movie, also called `moov` atom. A software such as [MP4creator](http://mp4creator.sourceforge.net/) or [AtomicParsley](http://atomicparsley.sourceforge.net/) can help you visualize the atoms of an MP4 file.

{% capture img_alt %}Command-line use of AtomicParsley{% endcapture %} {% capture img_caption %}In the example above, the `moov` atom comes after the `mdat` atom (4th line).{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2018-01-18/3_console_capture.png"
alt=img_alt
caption=img_caption
%}

There are several methods to move the moov atom to the first position. Software such as Handbrake offers [a Web Optimized option](https://handbrake.fr/docs/en/latest/advanced/web-optimised.html). In other softwares, this option is called MP4 "Fast Start".

ffmpeg can quickly correct a video through the option -movflags faststart, that runs a second pass moving the moov atom to the beginning of the file (see [the documentation](https://ffmpeg.org/ffmpeg-formats.html#toc-Options-8)):

```shell
ffmpeg -i origin.mp4 -acodec copy -vcodec copy -movflags faststart fast_start.mp4
```

If you want to learn more about the movie atom, don’t miss "[Understanding the MPEG-4 Movie Atom](http://www.adobe.com/devnet/video/articles/mp4_movie_atom.html)" by Maxim Levkov.

## Multiple sources for targeted performance

Although h264 is the most widely used and supported codec, it is not necessarily the most effective in every cases. We have already seen that [the `<image>` tag accepts several sources, allowing the browser to fetch WebP images for Chrome users](/notes/2017-10-optimiser-les-images-et-reduire-leur-poids-formats-outils-et-rwd/). The `<video>` element can also accept multiple sources and the WebP equivalent for videos is WebM.

ffmpeg can encode WebM files, provided it is installed with the `--with-libvpx` option. Here is an example of a two-pass encoding with a 1MB targeted bitrate, using [the VP9 video encoder](https://trac.ffmpeg.org/wiki/Encode/VP9) (on Windows, please replace `/dev/null` by `NUL`):

```shell
ffmpeg -i source.mp4 -c:v libvpx-vp9 -b:v 1M -pass 1 -f webm /dev/null && ffmpeg -i source.mp4 -c:v libvpx-vp9 -b:v 1M -pass 2 output.webm
```

From the optimized 1.2MB video of Endeavour Shuttle presented at the beginning of the article, this command generates a WebM file of 715KB, i.e. **a 40% weight cut**. Too bad WebM is not [more widely supported](https://caniuse.com/#feat=webm).

## Last pieces of advice

**Be careful with the autoplay**. Not only is this practice perceived negatively by many users if it is not used properly (in a subtle and unobtrusive way, behind a hero background for example), but also the video playback will always consume some bandwidth, slowing down the download of other resources.

**If you want to play videos in Full HD or maximize UX, use industry-leading solutions.** There is a wide variety of SaaS or appliance for managing, encoding and broadcasting content. Whether you use a streaming solution, an Online Video Platform (OVP) or an Enterprise Video Content Manager (ECVM), your users will appreciate the adaptive bitrate streaming. If they have access to a high quality network: the video is clear and the colors are rich. If their network suddenly loses capacity, the video adapts by sacrificing a little bit of quality, to keep the playback smooth. To achieve this challenge, a JavaScript script detects each user's current bandwidth and dynamically switches the video source between several versions of a video encoded with different bitrates, ensuring an optimal user experience in any situation. If you're interested, take a look at [Brightcove](https://www.brightcove.com/fr/), [Kaltura](https://fr.corp.kaltura.com/), [Qumu](https://www.qumu.com/), etc.

**Sometimes, the best video is no video**. Do not hesitate to hide the video in some situations, especially if it is decorative. A well-placed CSS media query and you'll save your mobile users from a bad experience. Also, consider supporting the [Save-Data Client Hint](https://tools.ietf.org/html/draft-ietf-httpbis-client-hints-04#section-3.5) as it is an explicit browser opt-in into a reduced data usage mode.

## TL;DR

-   **Reduce the weight of your files** by using optimization strategies that depend on the content and purpose of your videos.
-   **Optimize streaming** by encoding your videos to serve metadata as soon as possible.
-   **Propose alternatives to MP4**, such as WebM.
-   Be careful with autoplay, consider dedicated solutions for Full HD and don't hesitate to hide videos when needed.

---

_Thanks to [Ravana Renoncé](https://www.linkedin.com/in/ravana/) and [Rick Viscomi](https://twitter.com/rick_viscomi) for their help._
