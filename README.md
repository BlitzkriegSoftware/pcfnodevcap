# pcfnodevcap #

NodeJS demo on PCF reading VCAP Environment Variables

## Libaries of interest ##

https://www.npmjs.com/package/cfenv

## Overview ##

Using the `cfenv` library it's pretty easy to get environment information from Cloud Foundry (CF). 

One thing that's nice about it is that it allows us to inject our own values when we're debugging locally. 

You can see there is a little helper built around to help with this at `vcapdemo/public/javascripts/cfenvhelper.js` which reads the JSON in the *UPS* folder and uses it to seed the UPS values when running locally. These same JSON values are scripted to be services in CF.

## An observation about PUG ##

I like PUG as a template library, it has many improvements over the older versions of the library or JADE which it replaces.

One tricky part is the nesting required to render what you want, and in some cases it can be hard to pull values out of complex structures like `VCAP_SERVICES`. So the helper library adds another convenience function on top of the `npm` package. 

## About me ##

**Stuart Williams**

* Cloud/DevOps
* Practice Lead
* <a href="http://magenic.com" target="_blank">Magenic Technologies</a>
* Office of the CTO
* <a href="mailto:stuartw@magenic.com" target="_blank">stuartw@magenic.com</a> (e-mail)
* Blog: <a href="http://blitzkriegsoftware.net/Blog" target="_blank">http://blitzkriegsoftware.net/Blog</a>
* LinkedIn: <a href="http://lnkd.in/P35kVT" target="_blank">http://lnkd.in/P35kVT</a>
* YouTube: <a href="https://www.youtube.com/channel/UCO88zFRJMTrAZZbYzhvAlMg" target="_blank">https://www.youtube.com/channel/UCO88zFRJMTrAZZbYzhvAlMg</a> 