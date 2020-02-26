# WidenJS
This JavaScript library is full of scripts and useful functions I use across all of my websites and applications. I made it public because I thought others might benefit.

The library was written for browsers that supports es6. It relies heavily on classes, es6 functions, and things like that. However, there 2 versions of it. widenjs and widenjs pre-es6. I used Babel's preset-env preset to compile it to a version that is compatible with browser that don't support es6. I have not yet tested this version **but will once the project hits release 1.0.0**, so it is not supported. It is just there in case it is **needed**.

This library has a lot of different things in it. It has useful functions, ui building functions/classes, and more. That is why you will most likely need to import the styles along with it.

If you want to use the built in styles, all of your html must be inside a `<div>` element with the class `widen-content` or the body must have that class. Please note: when doing this, please import your own styles (if you wrote any) after WidenJS's styles or WidenJS will take control of it and mess things up.

In the future I want to reach a point where you don't need to write your own styles to make a functioning website. But right now I am focusing on getting it to release 1.0.0

## FaQ
#### Why is there random commits named backup?
These are just versions I'm pushing that are backups in case anything happens to anything on my local machine. Most likely these don't mean anything, don't bring new features, and are unstable and not recommended to use.

#### Why is there nothing in the `dist` directory?
You can find all compiled files in the releases section. If you want to use an unstable version, you have to build your own. To build your own, simply just run `npm test` and it will build them and then watch for file changes and re-build it!

## Credits
For the colours, WidenJS uses [open-color](https://yeun.github.io/open-color/). I do not want to include that in the source of this as it has its own github repository. If you want to build the styles yourself, make sure you download the sass build of open-color, place it in the styles directory, and name it `_colours.scss`
