let e,n,t=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,n,t,l)=>e.addEventListener(n,t,l),rel:(e,n,t,l)=>e.removeEventListener(n,t,l),ce:(e,n)=>new CustomEvent(e,n)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,n,...t)=>{let l=null,s=!1,o=!1,r=[];const c=n=>{for(let t=0;t<n.length;t++)l=n[t],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?d(null,l):l),o=s)};if(c(t),n){const e=n.className||n.class;e&&(n.class="object"!=typeof e?e:Object.keys(e).filter((n=>e[n])).join(" "))}const i=d(e,null);return i.u=n,r.length>0&&(i.$=r),i},d=(e,n)=>({t:0,m:e,i:n,p:null,$:null,u:null}),m={},y=(e,n,t,s,r,c)=>{if(t!==s){let i=N(e,n),u=n.toLowerCase();if("class"===n){const n=e.classList,l=h(t),o=h(s);n.remove(...l.filter((e=>e&&!o.includes(e)))),n.add(...o.filter((e=>e&&!l.includes(e))))}else if("ref"===n)s&&s(e);else if(i||"o"!==n[0]||"n"!==n[1]){const l=f(s);if((i||l&&null!==s)&&!r)try{if(e.tagName.includes("-"))e[n]=s;else{let l=null==s?"":s;"list"===n?i=!1:null!=t&&e[n]==l||(e[n]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(n)||e.removeAttribute(n):(!i||4&c||r)&&!l&&e.setAttribute(n,s=!0===s?"":s)}else n="-"===n[2]?n.slice(3):N(l,u)?u.slice(2):u[2]+n.slice(3),t&&o.rel(e,n,t,!1),s&&o.ael(e,n,s,!1)}},p=/\s/,h=e=>e?e.split(p):[],w=(e,n,t,l)=>{const s=11===n.p.nodeType&&n.p.host?n.p.host:n.p,o=e&&e.u||a,r=n.u||a;for(l in o)l in r||y(s,l,o[l],void 0,t,n.t);for(l in r)y(s,l,o[l],r[l],t,n.t)},b=(n,t,l)=>{let o,r,c=t.$[l],i=0;if(null!==c.i)o=c.p=s.createTextNode(c.i);else if(o=c.p=s.createElement(c.m),w(null,c,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=b(n,c,i),r&&o.appendChild(r);return o},g=(e,t,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=b(null,l,o),c&&(s[o].p=c,i.insertBefore(c,t)))},S=(e,n,t,l,s)=>{for(;n<=t;++n)(l=e[n])&&(s=l.p,M(l),s.remove())},j=(e,n)=>e.m===n.m,v=(e,n)=>{const t=n.p=e.p,l=e.$,s=n.$,o=n.i;null===o?(w(e,n,!1),null!==l&&null!==s?((e,n,t,l)=>{let s,o=0,r=0,c=n.length-1,i=n[0],u=n[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=n[++o]:null==u?u=n[--c]:null==f?f=l[++r]:null==$?$=l[--a]:j(i,f)?(v(i,f),i=n[++o],f=l[++r]):j(u,$)?(v(u,$),u=n[--c],$=l[--a]):j(i,$)?(v(i,$),e.insertBefore(i.p,u.p.nextSibling),i=n[++o],$=l[--a]):j(u,f)?(v(u,f),e.insertBefore(u.p,i.p),u=n[--c],f=l[++r]):(s=b(n&&n[r],t,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?g(e,null==l[a+1]?null:l[a+1].p,t,l,r,a):r>a&&S(n,o,c)})(t,l,n,s):null!==s?(null!==e.i&&(t.textContent=""),g(t,null,n,s,0,s.length-1)):null!==l&&S(l,0,l.length-1)):e.i!==o&&(t.data=o)},M=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(M)},k=(e,n)=>{n&&!e.h&&n["s-p"]&&n["s-p"].push(new Promise((n=>e.h=n)))},C=(e,n)=>{if(e.t|=16,!(4&e.t))return k(e,e.g),X((()=>O(e,n)));e.t|=512},O=(e,n)=>{const t=e.S;return A(void 0,(()=>P(e,t,n)))},P=async(t,l,o)=>{const r=t.j,c=r["s-rc"];o&&(e=>{const n=e.v,t=e.j,l=n.t,o=((e,n)=>{let t=u(n),l=B.get(t);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let n,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(t)||(n=s.createElement("style"),n.innerHTML=l,e.insertBefore(n,e.querySelector("link")),o&&o.add(t))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return t})(t.shadowRoot?t.shadowRoot:t.getRootNode(),n);10&l&&(t["s-sc"]=o,t.classList.add(o+"-h"))})(t);((t,l)=>{const s=t.j,o=t.M||d(null,null),r=(e=>e&&e.m===m)(l)?l:$(null,null,l);n=s.tagName,r.m=null,r.t|=4,t.M=r,r.p=o.p=s.shadowRoot||s,e=s["s-sc"],v(o,r)})(t,x(t,l)),c&&(c.map((e=>e())),r["s-rc"]=void 0);{const e=r["s-p"],n=()=>E(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},x=(e,n)=>{try{n=n.render(),e.t&=-17,e.t|=2}catch(n){V(n,e.j)}return n},E=e=>{const n=e.j,t=e.g;64&e.t||(e.t|=64,L(n),e.k(n),t||T()),e.h&&(e.h(),e.h=void 0),512&e.t&&Q((()=>C(e,!1))),e.t&=-517},T=()=>{L(s.documentElement),Q((()=>(e=>{const n=o.ce("appload",{detail:{namespace:"all-components"}});return e.dispatchEvent(n),n})(l)))},A=(e,n)=>e&&e.then?e.then(n):n(),L=e=>e.classList.add("hydrated"),R=(e,n,t)=>{if(n.C){const l=Object.entries(n.C),s=e.prototype;l.map((([e,[n]])=>{(31&n||2&t&&32&n)&&Object.defineProperty(s,e,{get(){return((e,n)=>q(this).O.get(n))(0,e)},set(n){((e,n,t)=>{const l=q(e),s=l.O.get(n),o=l.t,r=l.S;t=(e=>(null==e||f(e),e))(t),8&o&&void 0!==s||t===s||(l.O.set(n,t),r&&2==(18&o)&&C(l,!1))})(this,e,n)},configurable:!0,enumerable:!0})}))}return e},U=(e,n={})=>{const t=[],r=n.exclude||[],i=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let m,y=!0;Object.assign(o,n),o.l=new URL(n.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((n=>{const l={t:n[0],o:n[1],C:n[2],P:n[3]};l.C=n[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),H(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),y?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const n=q(e),t=n.v,l=()=>{};if(!(1&n.t)){n.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){k(n,n.g=t);break}}(async(e,n,t,l,s)=>{if(0==(32&n.t)){{if(n.t|=32,(s=z(t)).then){const e=()=>{};s=await s,e()}s.isProxied||(R(s,t,2),s.isProxied=!0);const e=()=>{};n.t|=8;try{new s(n)}catch(e){V(e)}n.t&=-9,e()}if(s.style){let e=s.style;const n=u(t);if(!B.has(n)){const l=()=>{};((e,n,t)=>{let l=B.get(e);c&&t?(l=l||new CSSStyleSheet,l.replace(n)):l=n,B.set(e,l)})(n,e,!!(1&t.t)),l()}}}const o=n.g,r=()=>C(n,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,n,t)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return q(this).T}};l.A=e[0],r.includes(s)||i.get(s)||(t.push(s),i.define(s,R(a,l,1)))})))),$.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>m=setTimeout(T,30)))},W=new WeakMap,q=e=>W.get(e),F=(e,n)=>W.set(n.S=e,n),H=(e,n)=>{const t={t:0,j:e,v:n,O:new Map};return t.T=new Promise((e=>t.k=e)),e["s-p"]=[],e["s-rc"]=[],W.set(e,t)},N=(e,n)=>n in e,V=(e,n)=>(0,console.error)(e,n),_=new Map,z=e=>{const n=e.o.replace(/-/g,"_"),t=e.A,l=_.get(t);return l?l[n]:import(`./${t}.entry.js`).then((e=>(_.set(t,e),e[n])),V)},B=new Map,D=[],G=[],I=(e,n)=>l=>{e.push(l),t||(t=!0,n&&4&o.t?Q(K):o.raf(K))},J=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(e){V(e)}e.length=0},K=()=>{J(D),J(G),(t=D.length>0)&&o.raf(K)},Q=e=>r().then(e),X=I(G,!0);export{U as b,$ as h,r as p,F as r}