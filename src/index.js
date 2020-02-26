var $$ = {
    version: "0.0.1"
};

$$._dfa = (selector, fn) => {
    var els = document.querySelectorAll(selector);
    els.forEach(fn);
};

if(parseInt($$.version.split(".")[2]) > 0) {
    console.warn(`%cHey! %cthis is an experimental/unstable WidenJS version (${$$.version}). Only use this if you know what you are doing!`,
        "color:red;outline:black 1px solid;font-size:30px;",
        "color:initial;outline;initial;font-size:initial;");
}
