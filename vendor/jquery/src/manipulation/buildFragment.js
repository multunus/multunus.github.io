define(["../core","./var/rtagName","./var/rscriptType","./wrapMap","./getAll","./setGlobalEval"],function(e,t,r,n,i,a){"use strict";function o(o,s,c,f,p){for(var d,u,h,m,C,g,v=s.createDocumentFragment(),y=[],w=0,x=o.length;w<x;w++)if((d=o[w])||0===d)if("object"===e.type(d))e.merge(y,d.nodeType?[d]:d);else if(l.test(d)){for(u=u||v.appendChild(s.createElement("div")),h=(t.exec(d)||["",""])[1].toLowerCase(),m=n[h]||n._default,u.innerHTML=m[1]+e.htmlPrefilter(d)+m[2],g=m[0];g--;)u=u.lastChild;e.merge(y,u.childNodes),u=v.firstChild,u.textContent=""}else y.push(s.createTextNode(d));for(v.textContent="",w=0;d=y[w++];)if(f&&e.inArray(d,f)>-1)p&&p.push(d);else if(C=e.contains(d.ownerDocument,d),u=i(v.appendChild(d),"script"),C&&a(u),c)for(g=0;d=u[g++];)r.test(d.type||"")&&c.push(d);return v}var l=/<|&#?\w+;/;return o});