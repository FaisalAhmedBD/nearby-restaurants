(this.webpackJsonpnearby_restaurants=this.webpackJsonpnearby_restaurants||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},63:function(e,t){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(31),c=a.n(r),i=(a(36),a(37),a(38),a(0)),o=function(){return Object(i.jsx)("header",{className:"header d-flex align-center",children:Object(i.jsx)("h4",{className:"header-item company-name",children:"Food-aholic"})})},l=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("div",{className:"footer-container d-flex justify-center align-center",children:[Object(i.jsx)("h5",{className:"footer-item company-name",children:"Food-aholic"}),Object(i.jsx)("p",{className:"footer-item copyright",children:"Copyright 2021 \xa9 Food-aholic"})]})})},u=a(9),d=a.n(u),j=a(10),m=a.n(j),g=a.p+"static/media/currentLocation.4853a16e.svg",b=a.p+"static/media/restaurantMarker.ae79e8e9.svg",h=window.google;function p(e){var t=e.userLocation,a=e.restaurantLocation,s=e.getCurrentLocation,r=e.setLocation,c=e.restaurants,o=e.getDirection,l=Object(n.useRef)(null),u=Object(n.useRef)(null),j=new h.maps.LatLng(t.latitude,t.longitude),m=new window.google.maps.DirectionsRenderer;Object(n.useEffect)((function(){p()}));var p=function(){var e=new h.maps.Map(l.current,{zoom:15,center:j});if(new h.maps.Marker({position:j,title:"User Location",map:e}),c){var t={url:b,size:new h.maps.Size(100,100),origin:new h.maps.Point(0,0),anchor:new h.maps.Point(17,34),scaledSize:new h.maps.Size(35,45)};c.forEach((function(a){var n=a.name,s=a.location;new h.maps.Marker({position:new h.maps.LatLng(s.lat,s.lng),title:n,animation:h.maps.Animation.DROP,icon:t,map:e})}))}if(o){var n=new window.google.maps.LatLng(a.lat,a.lng);m.setMap(e),O();var s=new window.google.maps.LatLngBounds;s.extend(n),s.extend(j),e.fitBounds(s)}else x()},O=function(){(new window.google.maps.DirectionsService).route({origin:j,destination:new window.google.maps.LatLng(a.lat,a.lng),travelMode:"DRIVING"},(function(e,t){"OK"===t?m.setDirections(e):console.log("couldn't find route")}))},x=function(){var e=u.current,t=new h.maps.places.Autocomplete(e);t.setFields(["place_id","geometry","formatted_address"]),t.addListener("place_changed",(function(){var a=t.getPlace();if(a.geometry){var n={latitude:a.geometry.location.lat(),longitude:a.geometry.location.lng()};r(n),e.value=a.formatted_address}}))};return Object(i.jsxs)(n.Fragment,{children:[!o&&Object(i.jsxs)("div",{className:"location-searchbox",children:[Object(i.jsx)("input",{className:"searchbox",ref:u,type:"text",placeholder:"Search location"}),Object(i.jsxs)("div",{className:"current-location",onClick:function(){return s()},children:[Object(i.jsx)("span",{children:"  Use current location"}),Object(i.jsx)("img",{src:g,className:"current-location-icon",alt:"get-location"})]})]}),Object(i.jsx)("div",{className:d()("map-container",{"direction-map":o}),ref:l})]})}function O(e,t){return m()(e.restaurants,t.restaurants)}var x=s.a.memo(p,O);function f(e){var t=e.toogleModal,a=e.restaurant,n=e.restaurantLocation,s=e.userLocation,r=a.name,c=a.vicinity;return Object(i.jsx)("div",{className:"modal",tabIndex:"-1",role:"dialog",style:{display:"block",cursor:"auto"},children:Object(i.jsx)("div",{className:"modal-dialog modal-lg",role:"document",children:Object(i.jsxs)("div",{className:"modal-content",children:[Object(i.jsxs)("div",{className:"modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",children:r}),Object(i.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return t()},children:Object(i.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(i.jsxs)("div",{className:"modal-body",children:[Object(i.jsx)(x,{userLocation:s,restaurantLocation:n,getDirection:!0}),Object(i.jsxs)("p",{className:"modal-location",children:[" Location : ",c]})]})]})})})}var v=a(3),N=a.p+"static/media/filledStar.db21ac16.svg",w=a.p+"static/media/emptyStar.c737b0ad.svg";function y(e){var t,a=e.type,n=e.rating;return n&&(t=Math.round(n/5*100)),Object(i.jsx)("div",{className:"rating-".concat(a),style:n&&{width:"".concat(t,"%")},children:new Array(5).fill(0).map((function(e,t){return Object(i.jsx)("img",{src:"empty"===a?w:N,alt:a},t)}))})}var L=function(e){var t=e.userLocation,a=e.restaurant,s=e.selectedRestaurant,r=e.changeRestaurant,c=Object(n.useState)(!1),o=Object(v.a)(c,2),l=o[0],u=o[1],j=a.id,m=a.name,g=a.rating,b=a.user_ratings_total,h=a.vicinity,p=a.photos,O=a.location,x=a.price_level,N=function(e){(null!==e&&e!==s||"undefined"===typeof e)&&(u(!l),r(s?null:e))},w=d()("restaurant","col-xl-4 col-lg-6 col-sm-12",{"modal-parent":l&&s===j});return Object(i.jsxs)("div",{className:w,children:[l&&s===j&&Object(i.jsx)(f,{restaurant:a,restaurantLocation:O,userLocation:t,toogleModal:N}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("span",{className:"name",children:m}),Object(i.jsx)("span",{className:"direction",onClick:function(){return N(j)},children:" Get Direction"})]}),g&&Object(i.jsxs)("div",{className:"ratings",children:[Object(i.jsx)("span",{className:"number",children:g}),Object(i.jsxs)("div",{className:"rating-wrap",children:[Object(i.jsx)(y,{type:"empty"}),Object(i.jsx)(y,{type:"fill",rating:g})]}),Object(i.jsxs)("span",{className:"total-ratings",children:["(",b,")"]}),x&&Object(i.jsx)("span",{className:"price",children:new Array(x).fill(0).map((function(){return"$"}))})]}),p&&Object(i.jsx)("img",{src:p,width:350,height:200,alt:"img"}),Object(i.jsx)("div",{className:"address",children:h})]})};function S(){return Object(i.jsx)("div",{className:"no-restaurants d-flex align-center justify-center",children:Object(i.jsx)("h2",{className:"message",children:"No Restaurants Found"})})}function _(e){var t=e.restaurants,a=e.userLocation,s=Object(n.useState)(null),r=Object(v.a)(s,2),c=r[0],o=r[1];return Object(i.jsxs)("div",{className:"container-fluid all-restaurants",children:[Object(i.jsx)("div",{id:"map"}),0===t.length?Object(i.jsx)(S,{}):t.map((function(e){return Object(i.jsx)(L,{restaurant:e,userLocation:a,selectedRestaurant:c,changeRestaurant:o},e.id)}))]})}function k(e,t){return m()(e.restaurants,t.restaurants)}var R=s.a.memo(_,k),C=a(11),M=a(16);var P=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(null),c=Object(v.a)(r,2),o=c[0],l=c[1],u=Object(n.useState)({restaurant:"",radius:3e3}),d=Object(v.a)(u,2),j=d[0],m=d[1],g=Object(n.useState)({latitude:23.7815222,longitude:90.4004866}),b=Object(v.a)(g,2),h=b[0],p=b[1],O=Object(n.useCallback)((function(){navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){p(e.coords)}))}),[]);Object(n.useEffect)((function(){O()}),[O]),Object(n.useEffect)((function(){var e=new window.google.maps.places.PlacesService(document.getElementById("map")),t={location:{lat:h.latitude,lng:h.longitude},radius:j.radius,type:["restaurant"],name:j.restaurant};e.nearbySearch(t,(function(e,t,a){var n=[];t===window.google.maps.places.PlacesServiceStatus.OK&&(n=e.map((function(e){var t=e.place_id,a=e.icon,n=e.name,s=e.photos,r=e.price_level,c=e.rating,i=e.user_ratings_total,o=e.vicinity,l=e.geometry,u=e.opening_hours,d=e.reference;return{id:t,icon:a,name:n,photos:s?s[0].getUrl():null,price_level:r,rating:c,user_ratings_total:i,vicinity:o,reference:d,location:{lat:l.location.lat(),lng:l.location.lng()},isOpen:u?u.isOpen?u.isOpen():u.open_now:void 0}}))),s(n),l(a.hasNextPage?a:null)}))}),[h,j.radius,j.restaurant]);var f=function(e){var t=e.target,a=t.name,n=t.value;m((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(C.a)({},a,n))}))};return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)(x,{userLocation:h,restaurants:a,getCurrentLocation:O,setLocation:p,radius:j.radius}),Object(i.jsxs)("div",{className:"search-restaurants",children:[Object(i.jsx)("input",{type:"text",id:"restaurant",name:"restaurant",value:j.restaurant,placeholder:"Search Restaurants...",className:"restaurants-search-input",onChange:f}),Object(i.jsxs)("div",{className:"radius-field",children:[Object(i.jsx)("label",{htmlFor:"radius",className:"label",children:"Distance"}),Object(i.jsx)("input",{min:10,step:100,max:2e4,id:"radius",name:"radius",type:"range",value:j.radius,className:"radius-change",onChange:f}),Object(i.jsxs)("span",{className:"distance",children:[(j.radius/1e3).toFixed(2)," km"]})]})]}),Object(i.jsxs)("div",{className:"header",children:[a&&Object(i.jsx)("span",{className:"restaurants",children:"Available Restaurants"}),o&&o.hasNextPage&&Object(i.jsx)("span",{className:"next-button",onClick:function(){return o.nextPage()},children:"More Restaurants"})]}),null===a?Object(i.jsx)("div",{children:" loading..  "}):Object(i.jsx)(R,{restaurants:a,userLocation:h})]})};var D=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(P,{}),Object(i.jsx)(l,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(i.jsx)(D,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[68,1,2]]]);
//# sourceMappingURL=main.b9b8b766.chunk.js.map