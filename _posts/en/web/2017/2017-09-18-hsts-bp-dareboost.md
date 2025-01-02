---
title: 'Ensure secured connections with HSTS (HTTP Strict Transport Security)'
thumbnail_background: /assets/images/2017-09-18/1.jpg
canonical: 'https://blog.dareboost.com/en/2017/09/hsts-ensure-secured-connections/'
canonical_title: "Dareboost's Blog"
canonical_dismissed: true
tags:
    - 'Performance Web'
cloudinary_logo: dareboost-logo
slug: hsts-ensure-secured-connections
last_modified_at: 2017-10-16
translations:
    fr: hsts-fiabiliser-connexions-securisees
---

Our regular readers [of the Dareboost blog](https://blog.dareboost.com/en/) already know that [HTTPS is now a requirement for any websites](https://blog.dareboost.com/en/2016/03/https-requirement-for-your-website/ 'HTTPs is a requirement for your website ∣ Dareboost Blog'). The urge to get rid of unsecured navigation has never been stronger: each release of Google Chrome or Mozilla Firefox comes with a new warning sign for users sharing private data. Soon, all forms will be concerned.

But offering an HTTPS version of your website is not enough to automatically redirect all your HTTP traffic to this secured version.

{% capture img_alt %}Along a railway switch, a two-color light indicates if a train can pass.{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-09-18/1.jpg"
alt=img_alt
%}

<!-- more -->

{% include canonical.html.liquid
    locale=page.locale
    title=page.canonical_title
    canonical=page.canonical
    dismissed=page.canonical_dismissed
%}

## Implementing a redirection: a limited solution

One of the most efficient way to redirect traffic is to use a permanent redirection (HTTP code 301, with a `Location` header containing the target URL). That way, users and search engines are instantly redirected to your HTTPS website for every HTTP request.

Is that enough? Unfortunately, no. Because that redirection will not change, for most users, the first action that drove them to request an unsecured URL. Some of them may have directly typed the URL with `http://`, others clicked an icon within their favorites bar or have followed a link located on a third-party website. You are even not self-immune from forgetting a couple of internal HTTP links into your own HTTPS website! In all these cases, redirecting is not enough to guarantee a secured traffic for your visitors. Furthermore, each redirect affects your web performance.

Moreover, redirecting one user to a secure version implies that an unsecure page has been called/requested first. During this initial request, navigation is likely to be captured. If a malicious person is able to access to your visitor’s network, he will be able to intercept the traffic and, worse, divert it to steal confidential data. Some of your visitors may be at risk, visiting your website from public Wifi hotspots, internet connections provided by transport companies (which are sometimes the first to inject content into unsecured traffic), or a compromised private network…

You need to avoid as much as possible this kind of redirections, for both safety and performance.

## HSTS to force HTTPS

HTTP Strict Transport Security (<abbr lang="en" title="HTTP Strict Transport Security">HSTS</abbr>) is a directive specified in [RFC 6797](https://tools.ietf.org/html/rfc6797). The security policy is transmitted by the server to the user agent via a header response **declaring that for any further call, this domain should be requested over HTTPS**.

The browser (or any other user agent) stores the information then every new unsecured request to any URL of this domain will be automatically rerouted via an internal redirect (HTTP code 307) to the HTTPS scheme. Please note that the 301 redirect remains necessary, as the directive only considers future calls.

The HSTS directive must have an activity period defined by the `max-age` parameter, in seconds. A 300 value will instruct the browser to memorize the internal redirect for five minutes. A value set to 63072000 will keep the redirect up for two years.

We highly recommend you to implement HSTS with a small activity period first, and then increase it step by step. At each step, make sure to wait for the defined period, detect the errors through observation or your analytics, then fix the issues and continue.

Here is an example of HSTS implementation with Apache, for a 5-minute activity period:

```apache
Header always set Strict-Transport-Security "max-age=300; includeSubDomains;"
```

The `includeSubDomains` parameter indicates that HTTPS is available for all the subdomains of the current domain. Please make sure that all of your assets are available in HTTPS before applying this switch or your assets will become unreachable.

Do not worry. If you make mistakes, you can deactivate the HSTS policy by setting a "0" value to the `max-age`.

> A max-age value of zero (i.e., `max-age=0`) signals the UA to cease regarding the host as a Known HSTS Host, including the includeSubDomains directive (if asserted for that HSTS Host).  
> <cite>[RFC 6797, Section 6.1.1](https://tools.ietf.org/html/rfc6797#section-6.1.1)</cite>

In a nutshell, the HSTS directive can be used in addition to a 301 redirect to secure all future requests on a domain (and eventually its subdomain) from a user over a specific period. One security issue still remains, though: the initial request is still unsecure.

## HSTS Preloading to reliably secure the exchanges

To secure even the first request, the Chromium Projects maintains a list of valid HSTS domain that is hardcoded into Chrome as being HTTPS only. [Firefox](https://blog.mozilla.org/security/2012/11/01/preloading-hsts/ 'Preloading HSTS ∣ Mozilla Security Blog'), Opera, Safari, [IE 11 and Edge](https://blogs.windows.com/msedgedev/2015/06/09/http-strict-transport-security-comes-to-internet-explorer-11-on-windows-8-1-and-windows-7/ 'HTTP Strict Transport Security comes to Internet Explorer 11 on Windows 8.1 and Windows 7 - Microsoft Edge Dev BlogMicrosoft Edge Dev Blog') also have their list derived from this one.

In order to be accepted to the HSTS preload list, a website has to meet the following set of requirements:

1.  Present a valid certificate.
2.  Automatically redirect from to HTTPS on the same host
3.  Serve all subdomains over HTTPS
4.  Respond an HSTS header on the base domain for HTTPS requests:
    - The max-age must be at least <del datetime="2017-10-16" cite="https://hstspreload.org/">10886400 seconds (18 weeks)</del> <ins datetime="2017-10-16" cite="https://hstspreload.org/">31536000 seconds (a year)</ins>[^twalle].
    - The directive header must include the subdomains.
    - The preload directive must be specified.
    - If you are serving an additional redirect from your HTTPS site, that redirect must still have the HSTS header (rather than the page it redirects to).

[^twalle]: The value was 18 weeks when I wrote the post. It has been changed to a year between october 11<sup>th</sup> and october 16<sup>th</sup>. Thanks to [@Thibault_Walle](https://twitter.com/Thibault_Walle) for pointing that out.

If your website is eligible, you can submit its domain for inclusion [over this form](https://hstspreload.org/ 'HSTS Preload List Submission').

{% capture img_alt %}A screencapture of Chrome DevTools{% endcapture %} {% capture img_caption %}Internal HTTPS redirection of a request to Facebook made over HTTP, Chrome 60{% endcapture %} {% include rwd-image.html.liquid
path="/assets/images/2017-09-18/2.png"
alt=img_alt
caption=img_caption
%}

Beware: the modification of the directive with a 0-second `max-age` will not switch off HSTS preloading. Domains can be deleted from the HSTS Preload registry but you will have to wait for months since the next update of the browser needs to reach all the users. So, a word of advice: do not register for HSTS Preload if you are not strongly confident into your capacity to offer HTTPS on your domain and its subdomains over time.

## Protect your users with HSTS

The HSTS directive exists for several years. It can secure requests and response between your server and your visitors’ browsers. The first request can be secured with HSTS Preloading, ensuring that all traffic is protected against threats. HSTS must be activated with caution but when it is done, user experience do not suffer from extended request time. As Google value security, HSTS is also an optimization for <abbr title="Search Engine Optimization">SEO</abbr>.

## Bonus: with HSTS Preload, protect your domain from SSL strip attacks

If you watch closely at InfoSec news, you may have noticed the danger represented by [Krack Attacks](https://www.krackattacks.com/), the demonstration of a serious weaknesses in WPA2, a protocol that secures all modern protected Wi-Fi networks. One of the steps in the attack procedure is for the malicious software to intercept the SSL requests sent by the browser, request the URL itself, then answer the result in HTTP instead of HTTPS. A simple off-guard moment is enough for a pirate to intercept private information. If your domain is indexed in the HSTS Preload list, the browser will refuse to switch to HTTP, thus protecting your visitors.

## Further information about HSTS

- [HTTP Strict Transport Security – The Chromium Projects](https://www.chromium.org/hsts)
- [HTTP Strict Transport Security Cheat Sheet – OWASP](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet)
