var f=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var n=(t,e,o)=>(f(t,e,"read from private field"),o?o.call(t):e.get(t)),m=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},u=(t,e,o,d)=>(f(t,e,"write to private field"),d?d.call(t,o):e.set(t,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const g={username:"Mango",balance:24e3,discount:.1,orders:["Burger","Pizza","Salad"],getBalance(){return this.balance},getDiscount(){return this.discount},setDiscount(t){this.discount=t},getOrders(){return this.orders},addOrder(t,e){this.balance-=t-t*this.discount,this.orders.push(e)}};g.setDiscount(.15);console.log(g.getDiscount());g.addOrder(5e3,"Steak");console.log(g.getBalance());console.log(g.getOrders());var i;class p{constructor(e){m(this,i,void 0);u(this,i,e)}getItems(){return n(this,i)}addItem(e){n(this,i).push(e)}removeItem(e){for(let o=0;o<n(this,i).length;o++)if(n(this,i)[o]===e){n(this,i).splice(o,1);break}}}i=new WeakMap;const c=new p(["Nanitoids","Prolonger","Antigravitator"]);console.log(c.getItems());c.addItem("Droid");console.log(c.getItems());c.removeItem("Prolonger");console.log(c.getItems());c.removeItem("Scaner");console.log(c.getItems());var l;class y{constructor(e){m(this,l,void 0);u(this,l,e)}getValue(){return n(this,l)}padEnd(e){u(this,l,n(this,l)+e)}padStart(e){u(this,l,e+n(this,l))}padBoth(e){this.padStart(e),this.padEnd(e)}}l=new WeakMap;const a=new y(".");console.log(a.getValue());a.padStart("^");console.log(a.getValue());a.padEnd("^");console.log(a.getValue());a.padBoth("=");console.log(a.getValue());
//# sourceMappingURL=commonHelpers.js.map
