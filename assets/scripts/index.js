const languageColor = {
    "1C Enterprise": {"color": "#814CCC"},
    "4D": {"color": null},
    "ABAP": {"color": "#E8274B"},
    "ABAP CDS": {"color": "#555e25"},
    "ActionScript": {"color": "#882B0F"},
    "Ada": {"color": "#02f88c"},
    "Agda": {"color": "#315665"},
    "AGS Script": {"color": "#B9D9FF"},
    "AL": {"color": "#3AA2B5"},
    "Alloy": {"color": "#64C800"},
    "Alpine Abuild": {"color": null},
    "AMPL": {"color": "#E6EFBB"},
    "AngelScript": {"color": "#C7D7DC"},
    "ANTLR": {"color": "#9DC3FF"},
    "Apex": {"color": "#1797c0"},
    "API Blueprint": {"color": "#2ACCA8"},
    "APL": {"color": "#5A8164"},
    "Apollo Guidance Computer": {"color": "#0B3D91"},
    "AppleScript": {"color": "#101F1F"},
    "Arc": {"color": "#aa2afe"},
    "ASL": {"color": null},
    "ASP.NET": {"color": "#9400ff"},
    "AspectJ": {"color": "#a957b0"},
    "Assembly": {"color": "#6E4C13"},
    "Asymptote": {"color": "#ff0000"},
    "ATS": {"color": "#1ac620"},
    "Augeas": {"color": null},
    "AutoHotkey": {"color": "#6594b9"},
    "AutoIt": {"color": "#1C3552"},
    "Awk": {"color": null},
    "Ballerina": {"color": "#FF5000"},
    "Batchfile": {"color": "#C1F12E"},
    "Beef": {"color": "#a52f4e"},
    "Befunge": {"color": null},
    "Bison": {"color": "#6A463F"},
    "BitBake": {"color": null},
    "Blade": {"color": "#f7523f"},
    "BlitzBasic": {"color": null},
    "BlitzMax": {"color": "#cd6400"},
    "Bluespec": {"color": null},
    "Boo": {"color": "#d4bec1"},
    "Boogie": {"color": "#c80fa0"},
    "Brainfuck": {"color": "#2F2530"},
    "Brightscript": {"color": null},
    "Browserslist": {"color": "#ffd539"},
    "C": {"color": "#555555"},
    "C#": {"color": "#178600"},
    "C++": {"color": "#f34b7d"},
    "C2hs Haskell": {"color": null},
    "Cap'n Proto": {"color": null},
    "CartoCSS": {"color": null},
    "Ceylon": {"color": "#dfa535"},
    "Chapel": {"color": "#8dc63f"},
    "Charity": {"color": null},
    "ChucK": {"color": null},
    "Cirru": {"color": "#ccccff"},
    "Clarion": {"color": "#db901e"},
    "Classic ASP": {"color": "#6a40fd"},
    "Clean": {"color": "#3F85AF"},
    "Click": {"color": "#E4E6F3"},
    "CLIPS": {"color": null},
    "Clojure": {"color": "#db5855"},
    "Closure Templates": {"color": "#0d948f"},
    "CMake": {"color": null},
    "COBOL": {"color": null},
    "CodeQL": {"color": null},
    "CoffeeScript": {"color": "#244776"},
    "ColdFusion": {"color": "#ed2cd6"},
    "ColdFusion CFC": {"color": "#ed2cd6"},
    "Common Lisp": {"color": "#3fb68b"},
    "Common Workflow Language": {"color": "#B5314C"},
    "Component Pascal": {"color": "#B0CE4E"},
    "Cool": {"color": null},
    "Coq": {"color": null},
    "Crystal": {"color": "#000100"},
    "CSON": {"color": "#244776"},
    "Csound": {"color": null},
    "Csound Document": {"color": null},
    "Csound Score": {"color": null},
    "CSS": {"color": "#563d7c"},
    "Cuda": {"color": "#3A4E3A"},
    "CWeb": {"color": null},
    "Cycript": {"color": null},
    "Cython": {"color": null},
    "D": {"color": "#ba595e"},
    "Dafny": {"color": "#FFEC25"},
    "Dart": {"color": "#00B4AB"},
    "DataWeave": {"color": "#003a52"},
    "Dhall": {"color": "#dfafff"},
    "DIGITAL Command Language": {"color": null},
    "DM": {"color": "#447265"},
    "Dockerfile": {"color": "#384d54"},
    "Dogescript": {"color": "#cca760"},
    "DTrace": {"color": null},
    "Dylan": {"color": "#6c616e"},
    "E": {"color": "#ccce35"},
    "eC": {"color": "#913960"},
    "ECL": {"color": "#8a1267"},
    "ECLiPSe": {"color": null},
    "Eiffel": {"color": "#4d6977"},
    "EJS": {"color": "#a91e50"},
    "Elixir": {"color": "#6e4a7e"},
    "Elm": {"color": "#60B5CC"},
    "Emacs Lisp": {"color": "#c065db"},
    "EmberScript": {"color": "#FFF4F3"},
    "EQ": {"color": "#a78649"},
    "Erlang": {"color": "#B83998"},
    "F#": {"color": "#b845fc"},
    "F*": {"color": "#572e30"},
    "Factor": {"color": "#636746"},
    "Fancy": {"color": "#7b9db4"},
    "Fantom": {"color": "#14253c"},
    "Faust": {"color": "#c37240"},
    "Filebench WML": {"color": null},
    "Filterscript": {"color": null},
    "fish": {"color": null},
    "FLUX": {"color": "#88ccff"},
    "Forth": {"color": "#341708"},
    "Fortran": {"color": "#4d41b1"},
    "Fortran Free Form": {"color": null},
    "FreeMarker": {"color": "#0050b2"},
    "Frege": {"color": "#00cafe"},
    "Futhark": {"color": "#5f021f"},
    "G-code": {"color": "#D08CF2"},
    "Game Maker Language": {"color": "#71b417"},
    "GAML": {"color": "#FFC766"},
    "GAMS": {"color": null},
    "GAP": {"color": null},
    "GCC Machine Description": {"color": null},
    "GDB": {"color": null},
    "GDScript": {"color": "#355570"},
    "Genie": {"color": "#fb855d"},
    "Genshi": {"color": null},
    "Gentoo Ebuild": {"color": null},
    "Gentoo Eclass": {"color": null},
    "Gherkin": {"color": "#5B2063"},
    "GLSL": {"color": null},
    "Glyph": {"color": "#c1ac7f"},
    "Gnuplot": {"color": "#f0a9f0"},
    "Go": {"color": "#00ADD8"},
    "Golo": {"color": "#88562A"},
    "Gosu": {"color": "#82937f"},
    "Grace": {"color": null},
    "Grammatical Framework": {"color": "#ff0000"},
    "GraphQL": {"color": "#e10098"},
    "Groovy": {"color": "#e69f56"},
    "Groovy Server Pages": {"color": null},
    "Hack": {"color": "#878787"},
    "Haml": {"color": "#ece2a9"},
    "Handlebars": {"color": "#f7931e"},
    "Harbour": {"color": "#0e60e3"},
    "Haskell": {"color": "#5e5086"},
    "Haxe": {"color": "#df7900"},
    "HCL": {"color": null},
    "HiveQL": {"color": "#dce200"},
    "HLSL": {"color": null},
    "HolyC": {"color": "#ffefaf"},
    "HTML": {"color": "#e34c26"},
    "Hy": {"color": "#7790B2"},
    "HyPhy": {"color": null},
    "IDL": {"color": "#a3522f"},
    "Idris": {"color": "#b30000"},
    "IGOR Pro": {"color": "#0000cc"},
    "ImageJ Macro": {"color": "#99AAFF"},
    "Inform 7": {"color": null},
    "Inno Setup": {"color": null},
    "Io": {"color": "#a9188d"},
    "Ioke": {"color": "#078193"},
    "Isabelle": {"color": "#FEFE00"},
    "Isabelle ROOT": {"color": null},
    "J": {"color": "#9EEDFF"},
    "Jasmin": {"color": null},
    "Java": {"color": "#b07219"},
    "Java Server Pages": {"color": null},
    "JavaScript": {"color": "#f1e05a"},
    "JavaScript+ERB": {"color": null},
    "JFlex": {"color": "#DBCA00"},
    "Jison": {"color": null},
    "Jison Lex": {"color": null},
    "Jolie": {"color": "#843179"},
    "JSONiq": {"color": "#40d47e"},
    "Jsonnet": {"color": "#0064bd"},
    "Julia": {"color": "#a270ba"},
    "Jupyter Notebook": {"color": "#DA5B0B"},
    "Kaitai Struct": {"color": "#773b37"},
    "Kotlin": {"color": "#F18E33"},
    "KRL": {"color": "#28430A"},
    "LabVIEW": {"color": null},
    "Lark": {"color": "#0b130f"},
    "Lasso": {"color": "#999999"},
    "Latte": {"color": "#f2a542"},
    "Lean": {"color": null},
    "Less": {"color": "#1d365d"},
    "Lex": {"color": "#DBCA00"},
    "LFE": {"color": "#4C3023"},
    "LilyPond": {"color": null},
    "Limbo": {"color": null},
    "Liquid": {"color": "#67b8de"},
    "Literate Agda": {"color": null},
    "Literate CoffeeScript": {"color": null},
    "Literate Haskell": {"color": null},
    "LiveScript": {"color": "#499886"},
    "LLVM": {"color": "#185619"},
    "Logos": {"color": null},
    "Logtalk": {"color": null},
    "LOLCODE": {"color": "#cc9900"},
    "LookML": {"color": "#652B81"},
    "LoomScript": {"color": null},
    "LSL": {"color": "#3d9970"},
    "Lua": {"color": "#000080"},
    "M": {"color": null},
    "M4": {"color": null},
    "M4Sugar": {"color": null},
    "Macaulay2": {"color": "#d8ffff"},
    "Makefile": {"color": "#427819"},
    "Mako": {"color": null},
    "Markdown": {"color": "#083fa1"},
    "Marko": {"color": "#42bff2"},
    "Mask": {"color": "#f97732"},
    "Mathematica": {"color": null},
    "MATLAB": {"color": "#e16737"},
    "Max": {"color": "#c4a79c"},
    "MAXScript": {"color": "#00a6a6"},
    "mcfunction": {"color": "#E22837"},
    "Mercury": {"color": "#ff2b2b"},
    "Meson": {"color": "#007800"},
    "Metal": {"color": "#8f14e9"},
    "MiniD": {"color": null},
    "Mirah": {"color": "#c7a938"},
    "mIRC Script": {"color": "#3d57c3"},
    "MLIR": {"color": "#5EC8DB"},
    "Modelica": {"color": null},
    "Modula-2": {"color": null},
    "Modula-3": {"color": "#223388"},
    "Module Management System": {"color": null},
    "Monkey": {"color": null},
    "Moocode": {"color": null},
    "MoonScript": {"color": null},
    "Motorola 68K Assembly": {"color": null},
    "MQL4": {"color": "#62A8D6"},
    "MQL5": {"color": "#4A76B8"},
    "MTML": {"color": "#b7e1f4"},
    "MUF": {"color": null},
    "mupad": {"color": null},
    "Mustache": {"color": "#724b3b"},
    "Myghty": {"color": null},
    "NASL": {"color": null},
    "NCL": {"color": "#28431f"},
    "Nearley": {"color": "#990000"},
    "Nemerle": {"color": "#3d3c6e"},
    "nesC": {"color": "#94B0C7"},
    "NetLinx": {"color": "#0aa0ff"},
    "NetLinx+ERB": {"color": "#747faa"},
    "NetLogo": {"color": "#ff6375"},
    "NewLisp": {"color": "#87AED7"},
    "Nextflow": {"color": "#3ac486"},
    "Nim": {"color": "#ffc200"},
    "Nit": {"color": "#009917"},
    "Nix": {"color": "#7e7eff"},
    "NSIS": {"color": null},
    "Nu": {"color": "#c9df40"},
    "NumPy": {"color": "#9C8AF9"},
    "Nunjucks": {"color": "#3d8137"},
    "NWScript": {"color": "#111522"},
    "Objective-C": {"color": "#438eff"},
    "Objective-C++": {"color": "#6866fb"},
    "Objective-J": {"color": "#ff0c5a"},
    "ObjectScript": {"color": "#424893"},
    "OCaml": {"color": "#3be133"},
    "Odin": {"color": "#60AFFE"},
    "Omgrofl": {"color": "#cabbff"},
    "ooc": {"color": "#b0b77e"},
    "Opa": {"color": null},
    "Opal": {"color": "#f7ede0"},
    "Open Policy Agent": {"color": null},
    "OpenCL": {"color": null},
    "OpenEdge ABL": {"color": null},
    "OpenQASM": {"color": "#AA70FF"},
    "OpenRC runscript": {"color": null},
    "OpenSCAD": {"color": null},
    "Org": {"color": "#77aa99"},
    "Ox": {"color": null},
    "Oxygene": {"color": "#cdd0e3"},
    "Oz": {"color": "#fab738"},
    "P4": {"color": "#7055b5"},
    "Pan": {"color": "#cc0000"},
    "Papyrus": {"color": "#6600cc"},
    "Parrot": {"color": "#f3ca0a"},
    "Parrot Assembly": {"color": null},
    "Parrot Internal Representation": {"color": null},
    "Pascal": {"color": "#E3F171"},
    "Pawn": {"color": "#dbb284"},
    "Pep8": {"color": "#C76F5B"},
    "Perl": {"color": "#0298c3"},
    "PHP": {"color": "#4F5D95"},
    "PicoLisp": {"color": null},
    "PigLatin": {"color": "#fcd7de"},
    "Pike": {"color": "#005390"},
    "PLpgSQL": {"color": null},
    "PLSQL": {"color": "#dad8d8"},
    "PogoScript": {"color": "#d80074"},
    "Pony": {"color": null},
    "PostScript": {"color": "#da291c"},
    "POV-Ray SDL": {"color": null},
    "PowerBuilder": {"color": "#8f0f8d"},
    "PowerShell": {"color": "#012456"},
    "Prisma": {"color": "#0c344b"},
    "Processing": {"color": "#0096D8"},
    "Prolog": {"color": "#74283c"},
    "Propeller Spin": {"color": "#7fa2a7"},
    "Pug": {"color": "#a86454"},
    "Puppet": {"color": "#302B6D"},
    "PureBasic": {"color": "#5a6986"},
    "PureScript": {"color": "#1D222D"},
    "Python": {"color": "#3572A5"},
    "Python console": {"color": null},
    "q": {"color": "#0040cd"},
    "Q#": {"color": "#fed659"},
    "QMake": {"color": null},
    "QML": {"color": "#44a51c"},
    "Qt Script": {"color": "#00b841"},
    "Quake": {"color": "#882233"},
    "R": {"color": "#198CE7"},
    "Racket": {"color": "#3c5caa"},
    "Ragel": {"color": "#9d5200"},
    "Raku": {"color": "#0000fb"},
    "RAML": {"color": "#77d9fb"},
    "Rascal": {"color": "#fffaa0"},
    "REALbasic": {"color": null},
    "Reason": {"color": "#ff5847"},
    "Rebol": {"color": "#358a5b"},
    "Record Jar": {"color": "#0673ba"},
    "Red": {"color": "#f50000"},
    "Redcode": {"color": null},
    "Ren'Py": {"color": "#ff7f7f"},
    "RenderScript": {"color": null},
    "ReScript": {"color": "#ed5051"},
    "REXX": {"color": null},
    "Ring": {"color": "#2D54CB"},
    "Riot": {"color": "#A71E49"},
    "RobotFramework": {"color": null},
    "Roff": {"color": "#ecdebe"},
    "Rouge": {"color": "#cc0088"},
    "RPC": {"color": null},
    "Ruby": {"color": "#701516"},
    "RUNOFF": {"color": "#665a4e"},
    "Rust": {"color": "#dea584"},
    "Sage": {"color": null},
    "SaltStack": {"color": "#646464"},
    "SAS": {"color": "#B34936"},
    "Sass": {"color": "#a53b70"},
    "Scala": {"color": "#c22d40"},
    "Scaml": {"color": "#bd181a"},
    "Scheme": {"color": "#1e4aec"},
    "Scilab": {"color": null},
    "SCSS": {"color": "#c6538c"},
    "sed": {"color": "#64b970"},
    "Self": {"color": "#0579aa"},
    "ShaderLab": {"color": null},
    "Shell": {"color": "#89e051"},
    "ShellSession": {"color": null},
    "Shen": {"color": "#120F14"},
    "Sieve": {"color": null},
    "Slash": {"color": "#007eff"},
    "Slice": {"color": "#003fa2"},
    "Slim": {"color": "#2b2b2b"},
    "Smali": {"color": null},
    "Smalltalk": {"color": "#596706"},
    "Smarty": {"color": null},
    "SmPL": {"color": "#c94949"},
    "SMT": {"color": null},
    "Solidity": {"color": "#AA6746"},
    "SourcePawn": {"color": "#f69e1d"},
    "SQF": {"color": "#3F3F3F"},
    "SQLPL": {"color": null},
    "Squirrel": {"color": "#800000"},
    "SRecode Template": {"color": "#348a34"},
    "Stan": {"color": "#b2011d"},
    "Standard ML": {"color": "#dc566d"},
    "Starlark": {"color": "#76d275"},
    "Stata": {"color": null},
    "Stylus": {"color": "#ff6347"},
    "SuperCollider": {"color": "#46390b"},
    "Svelte": {"color": "#ff3e00"},
    "SVG": {"color": "#ff9900"},
    "Swift": {"color": "#ffac45"},
    "SWIG": {"color": null},
    "SystemVerilog": {"color": "#DAE1C2"},
    "Tcl": {"color": "#e4cc98"},
    "Tcsh": {"color": null},
    "Terra": {"color": "#00004c"},
    "TeX": {"color": "#3D6117"},
    "Thrift": {"color": null},
    "TI Program": {"color": "#A0AA87"},
    "TLA": {"color": null},
    "TSQL": {"color": null},
    "TSX": {"color": null},
    "Turing": {"color": "#cf142b"},
    "Twig": {"color": "#c1d026"},
    "TXL": {"color": null},
    "TypeScript": {"color": "#2b7489"},
    "Unified Parallel C": {"color": "#4e3617"},
    "Unix Assembly": {"color": null},
    "Uno": {"color": "#9933cc"},
    "UnrealScript": {"color": "#a54c4d"},
    "UrWeb": {"color": null},
    "V": {"color": "#4f87c4"},
    "Vala": {"color": "#fbe5cd"},
    "VBA": {"color": "#867db1"},
    "VBScript": {"color": "#15dcdc"},
    "VCL": {"color": "#148AA8"},
    "Verilog": {"color": "#b2b7f8"},
    "VHDL": {"color": "#adb2cb"},
    "Vim script": {"color": "#199f4b"},
    "Visual Basic .NET": {"color": "#945db7"},
    "Volt": {"color": "#1F1F1F"},
    "Vue": {"color": "#2c3e50"},
    "wdl": {"color": "#42f1f4"},
    "WebAssembly": {"color": "#04133b"},
    "WebIDL": {"color": null},
    "wisp": {"color": "#7582D1"},
    "Wollok": {"color": "#a23738"},
    "X10": {"color": "#4B6BEF"},
    "xBase": {"color": "#403a40"},
    "XC": {"color": "#99DA07"},
    "Xojo": {"color": null},
    "XProc": {"color": null},
    "XQuery": {"color": "#5232e7"},
    "XS": {"color": null},
    "XSLT": {"color": "#EB8CEB"},
    "Xtend": {"color": null},
    "Yacc": {"color": "#4B6C4B"},
    "YAML": {"color": "#cb171e"},
    "YARA": {"color": "#220000"},
    "YASnippet": {"color": "#32AB90"},
    "ZAP": {"color": "#0d665e"},
    "Zeek": {"color": null},
    "ZenScript": {"color": "#00BCD1"},
    "Zephir": {"color": "#118f9e"},
    "Zig": {"color": "#ec915c"},
    "ZIL": {"color": "#dc75e5"},
    "Zimpl": {"color": null}
};


window.$ = (selector) => {
    return document.querySelectorAll(selector);
}

window.ce = ({name, classList, id, innerHTML, attrs, onclick}) => {
    let e = document.createElement(name)
    if (classList != null)
        e.setAttribute("class", classList.join(" "));
    if (id != null)
        e.id = id;
    if (innerHTML != null)
        e.innerHTML = innerHTML;
    if (attrs != null)
        attrs.forEach(attr => {
            e.setAttribute(attr[0], attr[1]);
        });
    e.addEventListener("click", onclick);
    return e;
}

Object.with = (exec) => {
    return exec(this);
}

HTMLAllCollection.forEach = Array.prototype.forEach;

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setRepoData(data) {
    localStorage.setItem("storedRepos", data);
}

function readRepoData() {
    return localStorage.getItem("storedRepos");
}

function setSelectedRepoData(data) {
    localStorage.setItem("storedSelectedRepos", data);
}

function readSelectedRepoData() {
    return localStorage.getItem("storedSelectedRepos");
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function openUrl(url) {
    window.open(url);
}

function toggleDarkMode() {
    if (document.documentElement.hasAttribute("dark")) {
        document.documentElement.removeAttribute("dark");
        document.documentElement.setAttribute("light", "");
        setCookie("darkmode", "0", "60");
    } else {
        document.documentElement.setAttribute("dark", "");
        document.documentElement.removeAttribute("light");
        setCookie("darkmode", "1", "60");
    }
    if (document.documentElement.hasAttribute('article') !== undefined) {
        $("link[href^='//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/atom-one']")[0].remove()
        document.head.appendChild(ce({
            name: "link",
            attrs: [["rel", "stylesheet"], ["href", `//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/atom-one-${document.documentElement.hasAttribute('dark') ? 'dark' : 'light'}.min.css`]]
        }))
    }
}

function init() {
    if (document.documentElement.classList.contains('indexPage'))
        fetch("data/strings.json")
            .then(response => response.json())
            .then(data => {
                window.resourceString = data;

                (function initResources() {
                    $("[resource]").forEach(e => {
                        if (e.attributes["resource"].value === "randText")
                            e.innerText = resourceString["randText" + (Math.floor(Math.random() * Math.floor(3)) + 1)]
                        else e.innerText = resourceString[e.attributes["resource"].value];
                    });
                }());
            });

    (function initDarkMode() {
        if (getCookie("darkmode") === "1") document.documentElement.setAttribute("dark", "");
        if (getCookie("darkmode") === "0") document.documentElement.setAttribute("light", "");
        if (getCookie("darkmode") === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute("dark", "");
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (getCookie("darkmode") === null)
                if (e.matches) {
                    document.documentElement.setAttribute("dark", "");
                } else {
                    document.documentElement.removeAttribute("dark");
                    document.documentElement.setAttribute("light", "");
                }
            if (document.documentElement.hasAttribute('article') !== undefined) {
                $("link[href^='//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/atom-one']")[0].remove()
                document.head.appendChild(ce({
                    name: "link",
                    attrs: [["rel", "stylesheet"], ["href", `//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/atom-one-${document.documentElement.hasAttribute('dark') ? 'dark' : 'light'}.min.css`]]
                }))
            }
        });
        if (document.documentElement.hasAttribute('article') !== undefined)
            document.head.appendChild(ce({
                name: "link",
                attrs: [["rel", "stylesheet"], ["href", `//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/atom-one-${document.documentElement.hasAttribute('dark') ? 'dark' : 'light'}.min.css`]]
            }))
    })();

    (function initHeader() {
        const container = ce({name: "div", classList: ["header"]})
        container.appendChild(ce({
            name: "a",
            attrs: [["href", "/"]],
            classList: ["title"],
            innerHTML: "霜羽 Hoarfroster"
        }))
        container.appendChild(ce({
            name: "a",
            attrs: [["href", "/archive.html"]],
            classList: ["archive"],
            innerHTML: "Archive"
        }))
        container.appendChild(ce({
            name: "a",
            attrs: [["href", "/about.html"]],
            classList: ["about"],
            innerHTML: "About"
        }))
        container.appendChild(ce({
            name: "span", classList: ["icon", "mode"], onclick: () => {
                toggleDarkMode()
            }
        }))
        container.appendChild(ce({
            name: "span", classList: ["icon", "github"], onclick: () => {
                openUrl("https://github.com/PassionPenguin")
            }
        }))
        container.appendChild(ce({
            name: "span", classList: ["icon", "bilibili"], onclick: () => {
                openUrl("https://space.bilibili.com/201469972")
            }
        }))
        container.appendChild(ce({
            name: "span", classList: ["icon", "zhihu"], onclick: () => {
                openUrl("https://www.zhihu.com/people/shuang-yu-29-75")
            }
        }))
        container.appendChild(ce({
            name: "span", classList: ["icon", "juejin"], onclick: () => {
                openUrl("https://juejin.cn/user/474638410324526")
            }
        }))
        document.body.appendChild(container);
    })();

    window.addEventListener("scroll", (evt) => {
        if (window.scrollY > 48) document.documentElement.setAttribute("scroll", "");
        else document.documentElement.removeAttribute("scroll");
    });

    $(".footer")[0].innerHTML =
        `<div class="container">
            <p>霜羽 Hoarfroster</p>
            <div class="flex-content">
                <p>霜羽 Hoarfroster</p>
                <ul>
                    <li class="title">本站链接</li>
                    <li><a href="/archive.html">Archive</a></li>
                    <li><a href="/repos.html">Repos</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li class="title">其他账号</li>
                    <li><a href="https://github.com/PassionPenguin">GitHub</a></li>
                    <li><a href="https://juejin.cn/user/474638410324526">掘金</a></li>
                    <li><a href="https://www.zhihu.com/people/shuang-yu-29-75">知乎</a></li>
                    <li><a href="https://space.bilibili.com/201469972">BiliBili</a></li>
                </ul>
                <ul>
                    <li class="title">Repos</li>
                    <li><a href="https://github.com/PassionPenguin/Ditiezu">地铁族 APP</a></li>
                    <li><a href="https://github.com/xitu/gold-miner">掘金翻译计划</a></li>
                    <li><a href="https://github.com/xitu/Annual-Survey">年度总结系列文章</a></li>
                    <li><a href="https://github.com/wongchito/RailMapGenerator">RailMapGenerator</a></li>
                </ul>
            </div>
            <div class="bottom">
                <a href='/' class="title">&copy; 霜羽 Hoarfroster</a>
                <span>Powered Hoarfroster, 由衷感谢一切亲人、朋友、老师～</span>
            </div>
        </div>`
}
