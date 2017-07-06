const samples = {
  'SykrlbpMW': {
    value: `
class Graph:
  def __init__(self):
    self.nodes = set()
    self.edges = defaultdict(list)
    self.distances = {}

  def add_node(self, value):
    self.nodes.add(value)

  def add_edge(self, from_node, to_node, distance):
    self.edges[from_node].append(to_node)
    self.edges[to_node].append(from_node)
    self.distances[(from_node, to_node)] = distance


def dijsktra(graph, initial):
  visited = {initial: 0}
  path = {}

  nodes = set(graph.nodes)

  while nodes: 
    min_node = None
    for node in nodes:
      if node in visited:
        if min_node is None:
          min_node = node
        elif visited[node] < visited[min_node]:
          min_node = node

    if min_node is None:
      break

    nodes.remove(min_node)
    current_weight = visited[min_node]

    for edge in graph.edges[min_node]:
      weight = current_weight + graph.distance[(min_node, edge)]
      if edge not in visited or weight < visited[edge]:
        visited[edge] = weight
        path[edge] = min_node

  return visited, path
    `,
    mode: 'solarized_dark',
    language: 'python',
    fontSize: 16,
    showLineNumbers: true,
  },
  'BJ0op-9QW': {
    value: 
  `\n\n\n\n\n\npublic class Me {\n    private Boolean alive = true;\n    public void run() {\n        while (this.alive) {\n            this.love(new You());\n        }\n    }\n}\n`,
    showLineNumbers: false,
    mode: 'eclipse',
    fontSize: 30,
    horPadding: 50,
    language: 'java',
    size: '10x10',
  },

  'ByiYjKOVZ': {
    value: 
`\n\n\n\n\n                                       =   (
                                        255,
                                      lambda
                               V       ,B,c
                             :c   and Y(V*V+B,B,  c
                               -1)if(abs(V)<6)else
               (              2+c-4*abs(V)**-0.4)/i
                 )  ;v,      x=1500,1000;C=range(v*x
                  );import  struct;P=struct.pack;M,\
            j  ='<QIIHHHH',open('M.bmp','wb').write
for X in j('BM'+P(M,v*x*3+26,26,12,v,x,1,24))or C:
            i  ,Y=_;j(P('BBB',*(lambda T:(T*80+T**9
                  *i-950*T  **99,T*70-880*T**18+701*
                 T  **9     ,T*i**(1-T**45*2)))(sum(
               [              Y(0,(A%3/3.+X%v+(X/v+
                               A/3/3.-x/2)/1j)*2.5
                             /x   -2.7,i)**2 for  \
                               A       in C
                                      [:9]])
                                        /9)
                                       )   )`,
    showLineNumbers: false,
    mode: 'solarized_light',
    size: '10x10',
    language: 'python',
    fontSize: 20
  },

  'rJqG7YwQW': {
    value: 
`!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();
else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.React=t()}}
(function(){return function t(e,n,r){function o(a,u){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);
if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}
var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n||t)},l,l.exports,t,e,n,r)}
return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);
return o}({1:[function(t,e,n){"use strict";function r(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}
function o(t){var e=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===t[0]&&"$"===t[1]?
t.substring(2):t.substring(1))).replace(e,function(t){return n[t]})}var i={escape:r,unescape:o};
e.exports=i},{}],2:[function(t,e,n){"use strict";var r=t(19),o=(t(24),function(t){var e=this;
if(e.instancePool.length){var n=e.instancePool.pop();return e.call(n,t),n}return new e(t)}),
i=function(t,e){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,t,e),r}
return new n(t,e)},a=function(t,e,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return 
r.call(o,t,e,n),o}return new r(t,e,n)},u=function(t,e,n,r){var o=this;if(o.instancePool.length){
var i=o.instancePool.pop();return o.call(i,t,e,n,r),i}return new o(t,e,n,r)},s=function(t){
var e=this;t instanceof e||r("25"),t.destructor(),e.instancePool.length<e.poolSize&&e.instancePool.push(t)},
c=o,l=function(t,e){var n=t;return n.instancePool=[],n.getPooled=e||c,n.poolSize||(n.poolSize=10),
n.release=s,n},f={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u};e.exports=f},
{19:19,24:24}],3:[function(t,e,n){"use strict";var r=t(26),o=t(4),i=t(5),a=t(7),u=t(8),
s=t(11),c=t(13),l=t(15),f=t(18),p=u.createElement,d=u.createFactory,y=u.cloneElement,
h=r,m=function(t){return t},v={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:f},
Component:o.Component,PureComponent:o.PureComponent,createElement:p,cloneElement:y,isValidElement:u.isValidElement,PropTypes:s,createClass:l,createFactory:d,createMixin:m,DOM:a,version:c,__spread:h};e.exports=v},
{11:11,13:13,15:15,18:18,26:26,4:4,5:5,7:7,8:8}],4:[function(t,e,n){"use strict";function r(t,e,n){
this.props=t,this.context=e,this.refs=c,this.updater=n||s}function o(t,e,n){this.props=t,
this.context=e,this.refs=c,this.updater=n||s}function i(){}var a=t(19),u=t(26),s=t(10),c=(t(14),t(23));t(24),t(17);
r.prototype.isReactComponent={},r.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&a("85"),
this.updater.enqueueSetState(this,t),e&&this.updater.enqueueCallback(this,e,"setState")},
r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this),t&&this.updater.enqueueCallback(this,t,"forceUpdate")};
i.prototype=r.prototype,o.prototype=new i,o.prototype.constructor=o,u(o.prototype,r.prototype),
o.prototype.isPureReactComponent=!0,e.exports={Component:r,PureComponent:o}},{10:10,14:14,17:17,19:19,23:23,24:24,26:26}],
5:[function(t,e,n){"use strict";function r(t){return(""+t).replace(E,"$&/")}function o(t,e){this.func=t,this.context=e,this.count=0}
function i(t,e,n){var r=t.func,o=t.context;r.call(o,e,t.count++)}function a(t,e,n){
if(null==t)return t;var r=o.getPooled(e,n);v(t,i,r),o.release(r)}function u(t,e,n,r){
this.result=t,this.keyPrefix=e,this.func=n,this.context=r,this.count=0}function s(t,e,n){
var o=t.result,i=t.keyPrefix,a=t.func,u=t.context,s=a.call(u,e,t.count++);Array.isArray(s)?c(s,o,n,m.thatReturnsArgument):
null!=s&&(h.isValidElement(s)&&(s=h.cloneAndReplaceKey(s,i+(!s.key||e&&e.key===s.key?"":r(s.key)+"/")+n)),
o.push(s))}function c(t,e,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(e,a,o,i);v(t,s,c),u.release(c)}
function l(t,e,n){if(null==t)return t;var r=[];return c(t,r,null,e,n),r}function f(t,e,n){
return null}function p(t,e){return v(t,f,null)}function d(t){var e=[];return c(t,e,null,m.thatReturnsArgument),e}
var y=t(2),h=t(8),m=t(22),v=t(20),b=y.twoArgumentPooler,g=y.fourArgumentPooler,E=/\/+/g;
o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},y.addPoolingTo(o,b),
u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,
this.context=null,this.count=0},y.addPoolingTo(u,g);var x={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:p,toArray:d};e.exports=x},
{2:2,20:20,22:22,8:8}],6:[function(t,e,n){"use strict";var r={current:null};e.exports=r},{}],
7:[function(t,e,n){"use strict";var r=t(8),o=r.createFactory,i={a:o("a"),abbr:o("abbr"),
address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),
bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),
cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),
dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),
h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),
meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),
var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=i},
{8:8}],8:[function(t,e,n){"use strict";function r(t){return void 0!==t.ref}function o(t){
return void 0!==t.key}var i=t(26),a=t(6),u=(t(25),t(14),Object.prototype.hasOwnProperty),
s=t(9),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(t,e,n,r,o,i,a){return{$$typeof:s,type:t,key:e,ref:n,props:a,_owner:i}};
l.createElement=function(t,e,n){var i,s={},f=null,p=null;if(null!=e){r(e)&&(p=e.ref),o(e)&&(f=""+e.key),void 0===e.__self?null:e.__self,void 0===e.__source?null:e.__source;for(i in e)
u.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var 
`,
    mode: 'monokai',
    fontSize: 14,
    language: 'javascript',
    showLineNumbers: false,
  }
};

export default samples;
