# ng2share Expandable Share buttons for angular 2 !

![ng2share preview](http://i.imgur.com/L9EbBaa.png)

A module to easily implement share button within an angular 2 app. The buttons are expandable, and highly costumizable. [Live demo](https://cedvdb.github.io/ng2share/).

###Note

Inspired from [ng2-sharebuttons by MurhafSousli](https://github.com/MurhafSousli/ng2-sharebuttons), if you don't know it already,
go check it out.

Also visually inspired from the share buttons at http://mashable.com



## Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [Options](#options)

 * [Costumization](#costumization)

 * [Multiple shared content by url](#multiple-shared-content-by-url)

 * [Thanks for your feedback](#thanks for your feedback)


## Installation

This widget requires font awesome so 

```
      npm install ng2share --save
```

Add the icons to your angular-cli.json :

```
      "styles": [
        "styles.css",
        "../node_modules/font-awesome/css/font-awesome.css" 
      ],
```


 Then import it in your module.

```
import {ShareModule} from 'ng2share/share.module'

 @NgModule({
   imports: [..., ShareModule ],
 })
```

## Usage

You then can use the share container in your app

```
    <share-container
                        direction="horizontal"
                        addedText="your creation"
                        [expandable]="true"
                        [textEnabled]="true"
                        [platforms]="['reddit','twitter','facebook','mail']">
    </share-container>

```

 By default, ng2share takes the url and the title of your website to pass it in the parameters of the share url.

 However, it's good practice to use the meta tags if you intend your website to be shared, so you shouldn't rely on the default behavior.

 Here are the meta tags you can add to your head tag.

 ```
  <meta property="og:url" content="www.google.com" />
  <meta property="og:title" content="google" />
  <meta property="og:description" content="A site to make researches" />
  <meta property="og:image" content="google.png" />
  <meta property="n2s:via" content="Google" />
  <meta property="n2s:hashtags" content="Google"/>
 ```
 As you can see there is two additional tags that ng2share uses internally: *n2s:via* and *n2s:hashtags*. Those tags are used for twitter,
 thus if you don't need twitter as a sharing platform there is no need to put those. Actually none of the tags are mendatory, but it is advised
 nonetheless to be quite exhaustive.

 *Want to share more than one content by url and can't rely on meta tags ? See [Multiple shared content by url](#multiple-shared-content-by-url)*

 Then you just have to use the component tag in your angular 2 app.

 ```
<share-container> </share-container>
```

There is quite a few options however, so we are gonna see that next

## Options

```
	<share-container
						direction="horizontal"
						addedText="your creation"
						[expandable]="true"
						[textEnabled]="true"
						[platforms]="['reddit','twitter','facebook','mail']">
	</share-container>
```

**platforms**: Array of string of platform's name that are displayed in the primary panel. Can be anything in : ['reddit','twitter','facebook','googlePlus','stumbleUpon','tumblr','linkedin','pinterest','mail']
Default is ['twitter', 'facebook'].

**secondaryPlatforms**: Array of string of platform's name that are displayed in the secondary panel (the expanding div). Can be anything in : ['reddit','twitter','facebook','googlePlus','stumbleUpon','tumblr','linkedin','pinterest','mail']
Default is ['googlePlus','reddit','pinterest', 'linkedin']

**expandable**: true (default) / false; Specify if the component is expandable (whether the secondary panel is present or not).

**direction**: horizontal (default) / vertical; You might want to put your share buttons on the top of an article or you might want to put it on the right.
In which case having the share buttons being displayed vertically is useful. That's what this option is for.

**textEnabled**: true (default) / false; Specify whether the buttons in the primary pannel have text appended to them. Example: "Tweet".

**addedText**: 'some string'; specify the text appended to the default text, example: "Tweet some string".

**properties**: specify the properties. Useful if you share multiple content by url. You shouldn't use it if you don't though. See [Multiple shared content by url](#multiple-shared-content-by-url) for more info.


## Costumization

If you want to costumize the share buttons on a global scope, on the whole website, you can directly change the css source code in the css. There is two files.
*share-button.component.css* which is the css for individual buttons, and *share-container.component.css* which is the css for the container ( and the + expandable button).


## Multiple shared content by url

If however you have multiple share buttons on your website and want multiple different styles, you can just override the css properties with !important.
That is what is done on the demo website, see costumizable section at https://cedvdb.github.io/ng2share/

The code in the source code is actually :


 ```
	 .customizable .n2s-share-btn{
	  background: #666!important;
	  color:white!important;
	}
	.customizable .n2s-share-btn:hover{
	  color:#f15c66!important;
	}

	<span class="customizable">
		<share-container> </share-container>
	<span class="customizable">
 ```

 To give a grey background and a red color on hover:

 ![ng2share custom](http://i.imgur.com/QDRIyxi.png)


 Remember that !important is used here because there is multiple different styles on the page, so there is a need to overwrite the default style in some places.
 If that was not the case, changing the source css would be more straight forward.

 If you have multiple content you will need the use of the **properties** option.
 Indeed the meta tags won't suffice as you want to share multiple things for the same url. You want multiple desciptions, titles, etc.
 Thus those properties are a replacement for the meta tags, but being focussed on 1 specific share component level (in contrast to meta tags, that are url level).
 Here is an example :

  ```
     [properties]='{title:'my title', description:'my desc', img:' an image', via:'Ced_VDB', hashtags:'someHashTag'}'
  ```

 Note that url properties doesn't appear here. It will still use the meta tag (or if not specified the current url). It wouldn't make sens to have an url prop here.
 None of the properties are mendatory but it is advised to be quite exhaustive. Via and hashtags are limited to twitter.

## Thanks for your feedback

Your feedback is very much appreciated as it will be used to improve ng2share. Feel free to post issues, request for new features or if you want to participate you are welcome to.

You might be interested in following me on twitter as well https://twitter.com/Ced_VDB
