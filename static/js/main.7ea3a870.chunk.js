(this.webpackJsonplittleapple=this.webpackJsonplittleapple||[]).push([[0],{24:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),n=s(16),l=s.n(n),c=(s(24),s(13)),r=s(1),o=function(){return Object(r.jsx)("div",{className:"bg-indigo-700",children:Object(r.jsx)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:Object(r.jsx)("div",{className:"flex items-center justify-between flex-wrap",children:Object(r.jsx)("div",{className:"w-0 flex-1 flex items-center",children:Object(r.jsxs)("p",{className:"ml-3 font-medium text-white truncate",children:[Object(r.jsx)("span",{className:"md:hidden",children:"#opentowork Contact me today!"}),Object(r.jsx)("span",{className:"hidden md:inline",children:"Now seeking opportunities in web & mobile application development! Interested?  Contact me today!"})]})})})})})},d=s(4),m=function(){var e=[{name:"LinkedIn",href:"https://www.linkedin.com/in/andreamlegleiter",icon:function(e){return Object(r.jsx)("svg",Object(d.a)(Object(d.a)({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",clipRule:"evenodd"})}))}},{name:"GitHub",href:"https://github.com/littleapple27",icon:function(e){return Object(r.jsx)("svg",Object(d.a)(Object(d.a)({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}))}}];return Object(r.jsx)("div",{className:"bg-indigo-200 bg-opacity-25",children:Object(r.jsxs)("div",{className:"max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:[Object(r.jsxs)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:[Object(r.jsx)("span",{className:"block",children:"Ready to Explore More?"}),Object(r.jsx)("span",{className:"block text-indigo-600",children:"Connect with me today!"})]}),Object(r.jsx)("div",{className:"mt-8 flex justify-center",children:e.map((function(e){return Object(r.jsxs)("a",{href:e.href,className:"text-indigo-600 hover:text-indigo-500",target:"_blank",children:[Object(r.jsx)("span",{className:"sr-only",children:e.name}),Object(r.jsx)(e.icon,{className:"h-24 w-24","aria-hidden":"true"})]},e.name)}))})]})})},x=s.p+"static/media/heroImage.41d84077.jpg",b=function(e){var t=e.htmlType,s=e.leadingText,i=e.followingText,n=e.typedText,l=void 0===n?[]:n,c=e.dataPeriod,o=void 0===c?2e3:c,d=t;console.log(e);return Object(a.useEffect)((function(){!function(){var e=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,a=200-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,a=500):(a=this.period,this.isDeleting=!0),setTimeout((function(){s.tick()}),a)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),s=0;s<t.length;s++){var a=t[s].getAttribute("data-type"),i=t[s].getAttribute("data-period");a&&new e(t[s],JSON.parse(a),i)}var n=document.createElement("style");n.type="text/css",n.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(n)}}()})),Object(r.jsxs)(d,{className:"block text-2xl sm:text-4xl text-indigo-200",children:[s,Object(r.jsx)("span",{className:"typewrite","data-period":o,"data-type":l}),Object(r.jsx)("span",{className:"wrap"}),i]})},p=s(34),j=s(35),h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADkCAYAAACIV4iNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEXBJREFUeNrsnWuTVMUZgHvWFbKAcUCWiMQwWIlWNBa7mjKpaBUDH/zq+gMolu9UAb8A+AVAFd93KX6Ay9d8gCWlVdFKYNdEU5qUDCoX3QUG5SKXpHLepY+My9xOT/c53X2ep2pqvLDsme5+5n37rhQAAAAAAAAAAARHhSIAU/ac2FFN3sba/b9jO0/NUkIICfalq2np5LU1eYmE9Yx/TTN5bU8knaNEuzNMEUCbqDeRvLZp8WoW/tqqfgFCQp9RUCTc1SkFtUCNkkZI6B4JJx1LiJAICX1EwwM6IpJGIiQUGBEP66gInjJEEZRCxn3J2/mCZdxKTRAhSU+VmlLZpykAIcGyjCLhex71E+epFVLWssooqelpxaANQoIXMk5REggJxcs4gYwICX7IOOa5jKxjRchSMeV5n7FJFSFkWaLjQZXP8jcipGPYfhW+jDX1cNLfZ5rHdp5aS20RIcuSqvoO0REhSxEd6yqMVTgIiZClYG8gz3mGqkLIMvQdJwJ5XCIkQhIdfZHx2M5TDaoLIWNnMpDnnKWqEDL2dDWk3f4nqTGEjJ13AnnOJuezImQZqAfynDNUFULGnq7WVDgnuJGuIiTR0aN0lQiJkNGzLZDnnKaqELIMjAXynEepKoRESE+iI4sBEDJ69KkAIXCI2kLIMhDCYgCiI0KWhrrnzyfHdOynmhASPElVk+jI2TkIWRp8vh9jJpHxCFWEkPQhi0f2O+6mehAS/Og37iZVRUjwQ8btiYycCICQpcSneUiRcBwZEZI+ZPEc0ZGxQZXYhfshIQsN3V+cpSgQEortKx5NRDxIUSAk/DRC1fIWUVJURlEREooTUjYWn0wknKbIERKKQSSUE8ZnGKxBSCgm2i5JyFEbCAlmSASrG/zcrO4Pzut/nqNP6CfcDxkwesNyp7nJBqknAAAAAAAAAABADpR6lLXLKCUjlO7LvqbarzpqlnlLV6VE4tXVwzNpairbXF6j5XVBPdwH2GAfYM8yr+svuzFd7lVd9rUMf82sLvel+dMylHkl4gYhl5q+o+WrOfo1c/olDWaurNuStHypeGPK3UZqWcyQrrOdQcgw0qC96uF130Vt5hUpz2hRZ2NbEZOUcVV/yW3T4tULepRUzkMxdS8qkTQSaRQHlJ8HCaeCzoSacumUP804xjwt40MxZCiVwEWUxnFYhXNnYkM3Hu9TrpaUf0KFcYVBFGJWAhWxqiPivoC/T7zrDwUqYTumk9f+ELsLlQBllMYyFXiD6STn8by/3SOSsF2Z7g5t8KcSmIyHA4+K/aa1x5XDW6RaBr9Ewlrk5XlEBXTnSCUQEeWb+7QK5/ZgW6RRc8ZSOU4mb7sC6nPbQgbT3g1hNLYSgIxjWsaqKi/SkI7qqNnMWH5VnVXsKkE07JXCen/KegUZg2tUfZ0Cp9PSAxH2DaOWsuKxjJJeTdGGOjKt2kyKt4g4SRF1ZLevJ+pVPJVRIuM52k3/EVP/+2FE7Bsv7yWpeCojaWp2MRVlFn76WvFMxpqOjDQsyEvKcZ9GX4c8klEkfA8ZIUeW2pxuewi5DOn/jNFGIGfS9dAI2RIdJxWDEVAck7oN0oek3wj0J/2KkFPICJ70Jwuf9y5UyCQ6ypKuOm0BPKGu22T5UlY9snWe6Agepq5bitodUmSEPIyM4GnqWtioayERUp+Bc5q6B48pZGldURHyAPUNnlNIlMxdSB0d69Q3eE5dt9XoIyTREULhQNRCEh2BKOlXhCQ6AlGyC7mNsrLpGAJmS15L6vKMkHupVyBKehAh9aqc69QrBEpuq3fyipCT1CkEjASUiZhS1l3UKQROLl0u5ykrgzkQEc4Hd/KIkERHIEp6JOQE9QiRMBG0kDpdrVGPEAk13aaDjZBER4iNeshCvkP9QWQ4HRNxNsrKYgCImLWuFgm4jJCkq0Da6pGQ26g3iBRnXbHhUDu/0J1XRn+vnn3qeXXz3g21cOuKWrh9WX1/lx6E723bSR9Sn0Z+nnorhg1rNqlXN7zx2H9/8L/7ajGR89rdBbVw83Ly7/coLM/6ka4iJJfmFMjoyMb2lT305FLUlJdar5ai55WbX6lvb11Sd+7fouCyR8mZUPqQ9B8LZP3qZ/v6c2tWPK1+ve536k/Pv63WrRql4DwIOkMhPSz05qmVa5ciYVaqKxHSh6DjSsg69VVQurpqo9HP3bx/g8KLMULqAR0oSsg+09XlXLu9QOFlTCpctHUXEZJ0tSCGh1Ys9Quz0vzhKiOunrR1hIwpOq4xS1cXb1+m8CIWcjP1VAzrDAdmrt1ZpPA8aesuhKQPWRDrDfqPdx7cZgWPR22dlDWW6Lhq1Gi648adqxRe5Ckrl7AWER1HnjP6uYU79B99autWhXR9vAF0Zu3IM0Y/9+3NixSeR23edoQkOhbAyJOrjaY7Fm8RHX1r8wgZQ4sYWW/0c8279B99a/O2d3uQsi5j4883q+fWbFYP/ntPfbJw1skE/IYRs/lH2eXRC1kb+0L1JTX8xAp16eYFdfm7C1Tq421+xlchoYXN1d8s7aZIef3Jt9TfL71vXUqTCCnTHb22XMnKn5dHx39Mh6s/e0atSP7bhea/qVxHDFEEbpAd+60yCtKwX3/uraWGbi06rtlkNN0hG5V7ySjPurxvKp9JPhuEIeRWivTR8RntSKW0Fh1XmvYfFzPLmCKfDSndtHkGdXKUsVVKWw3aZHWOHOXRbbqjm4xI6bbN04e0VZBJVHll9LVEkP4GWFJpP1n4m/HvlOmOkeFV2aNjl7WrIlm/UyjyGYaHhp0NVpGygrGMElX6ldFWlNmw2mx1zrcdVuf0E90fj9AbrfeLERIGltFkYj6V8sVnzLoh1ZVmq3PaRUh5hqwyLu8XIyVCBi1jyvNPv2DYf8w+/ygnzbWb7jB9BqRESC+QCfM3frl9YBkFGWTJnK6u2WT0u6532N1h8gztpJQykbIBhMxVxtc2vmk0oNKOz6/9I/PPjBquzlm8c6njM9iQUspEygYpETJXGU0m49tFpXNX3jdajva0we4O+X2dDrOSZzh7+QMrUkrZICVCBiejCGBy2ps8h0l07rU6R04OkGeSZXVIiZBeI4vE39hUtyKjDKx88OWfjY/OWGe4u0Pu9OiFPNNHX59eekYbUkqZSdlBMUI2YpXx5fWvWfm75MjFQReYrzc8DFku2Okvet9bekZb+yWl7CKWsuGzkBeQsTNXvv8qaeh/GUhGmVaQXRcmUTnL75U/O//NX5eeGSnza/OkrDnJ+NWNLwZaJvdjump4Kc5Cj/5jJ+SZ/3Ptn0iZE6xl7YDJMrJOfLp41trGXtPpjoUBDkOW/Y/3kohp48tJ/g45P9bGlxNC9mYOGVvTvvvqX4vnrB4kZbq7Y9CzV+UL5e6D2+rVDX8YeGDLxsJ6j7Da5m2nrE1kfCSBTCHYlNH0qrlFw3R1OTJFY2uuMqLtW02E9FxGGUD56OJp6yeCm141Z/PsVflMMmVjY1okEin9FfLYzlPBpqwy2GBLRpkycHFFuC9XzaXTIjKFY0PKkAd6bLf5Id+/MfJihaVdCj/cv+3k+Xy8ak42J5cc623dhZBBRsmL312wkoa52rDr01VztradpV8YAR8tOReCkI0QSzZNw2xI6WIbki9XzclnevNXb1uRMV0oETCNEIQM9utOpPzw61NWVqfY3obkw1VzsijB1uJ6KeMIpj0uhCBk8HOR0lBsSGlrcbXpVXO2pjsE+Qzjz76FjI7buoteeSOGkk4bjI2R13SFi2lfyfSquW5nr2bhhbUvqy1rX7Lyd52//pn64vqnKhL8T1lDnvpoJ6WsQbWBSGk651bkVXPyzLZklCWEEcnopK27Wlw+G0uhf351fqkh2SCdCM8yAlvUVXPyjFt/8Ucv1/N6gpM27krIRkwlLw3JppRZpkWKuGrO9JzZEsnorI27EnI+ttK3KWV6ZGI/I7Aur5prh+3T9EzPDAqA+ZCEnIuxBlIpbR2Z2M+0iKur5jrJaOs0vUHODAqEuWCETDq7s7HWgovT2Tqdserqqrl22DwzKJXR9uJ6n3DVxodC+wbxgfR0NltS/nb9ePvoaHjVXKezV7vx4rpXrZRNGWR02bYR0hMp22G6GdkkTbR1mp6LbWcI6XGn10cpB13/2m6u08VVc1mfIauMrradeciZEIWcLUPNiJSDLEqXZWQy1/lY/9HyVXO9kGcwXS6YyliiOyLDi5B6FUOzDLVjulOk25pOm1fN9YvJGt4Syth0uRrN9TGQs2WppaxSyp/77OrHHf+/zavmskrZ7yofkVd2x5Ts9mSnbdq1kGfKVFOplL2iTK+oYvuquexSnu35xRLRjg2v2jQR0oGU3VK/flI807NXL9/8MpdoX2IZw46QZepH9tMf67e/ZXrVnM3phk5S2jqBPVAarncz5XGVwExZa08aruz/k6Vs0i/7+JsPe8ro6qq5QaSUZ5fPIMsG240IEx3tkcexYZJzT5a1BmX/X5Y9gC6vmjOVUi7dgXzGRIiQnuH6qjnwuy07FzLJuaUPOUdd9pGu5HTVHJilq7otBx8hhePUZx/pas5XzUEmTubxS/ISkrS1D4q4ag78asO5CJmE+gZpax/9Rw/OXoW2zOk2HE2EJG3tgelVczcsrc4BP9punkKStnZLVz24ag6Kb7u5CUna2kNIT66ag8dlzCtdzTtCCkep38fx8ao5+JGTef6yvIWU0N+kjpdFR4+umoOffufl3dXKVUg9sUpfchkjT6w2S1ctXzUHbdPVZrRCkrZ2+Bo2WIfKdEecbTV3IfX2FQZ3WiPd7QX10cXZpa1N/Z44sMjqHNfMFnFxVFGXxMs3zxR1/giJdmnEkxPn5MRyuUZA3tvNT9q6ag46Usi8eaWoT7vnxA5pfVXqvTeyxlXuiJRr6WQ0VkZXA78K3HdkI/KWIn7xcIEfWqLkAeq+v5SW+cb4o2MhfcgWjiimQMA/mrptlktIPZw8Tf2DZxzNe6rDlwiZpq0AREcfhNRrBImSQHT0JEIKh+hLAtHREyF1lCR1hdJHR18ipFKMuALR0R8h9TfTIdoFFMR+H6KjUPGpVPac2HE+eavRPiBH5LyccV8eZsizwtlN+4C8o6NPD+OVkMk31axivyTkx4xucwjZI0oywAOuafqYkXknJAM8kBOHfBnIaaXia2ntObHjdPJWp92AA2Tz8XYfH2zI40IjdYXSpKreC6lX8Oyn/YBl9ud5zmo0KWtL6vpe8jZBOwILyKjquz4/4FAAhSjpRYO2BAPSUAHMc1dCKMkkSo4lb+doUzAA40WcIhdjhEyPjmQVDxhnWSHIGIyQWsppxWZmyM60bjtBUAmtdJP0VVLXMdoZ9IFXC8ejipAtyIQuJ59DTxl1WwmKSoglrQd5ZCUPBy1DO2Tyf3so/cbghURKiFHGoIVESohNxuCFREqIScYohERKiEXGaIRESmSMQcaohNRSVrWUzFOWgzktYzTb9IZiqh1dMTL3NE1bjZ6Z2GSMLkIui5b7krfDtNsokT2NR2L8YJWYa033K2U/ZY02HAWN5PVuLP3F6FPWNimsVJysZTxCWw4eqcPxmGWMPkIui5b15G0qomgpfadOjVMyg1hGmyUq7vbt/FSEtCfmweRtb4ANVhqmDGScUQ9PTWv2+Jzy+eRLaJt6eARKaF9E8vnkRqqDZWqfpROypbHuC0TM6eR1fNAIoTOEXclrMgQRJUWNbQQVIcMWU6Kh9RPSks8skfKw8u/gsFKLiJCPizmhxSx6UYFEwkOu+0w6Yh5QxR9GPadFnCmziAjZPYLs1Q01TzmtpKaBpLJpf/ioz2ekIqSfckrk3KYFtZ3WSnQ4rh6e+9Is+LNWtZS7HHwRNXXkP6MjIRIipDVBx/Rrqxa0nlHAOfVopLTh8ees6y+isYyCzmoB59PPi4AIWVSE6dRwG6E3Si1prdMXDf0/AAAAAAAAAAAoLf8XYABDZEKvQzbn9wAAAABJRU5ErkJggg==",g=function(){var e=[{name:"Technical Profile",href:"#techProfile"},{name:"Resume",href:"#"},{name:"Research",href:"#research"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];return Object(r.jsxs)("div",{className:"relative mx-auto pb-4 bg-white sm:pb-6 lg:max-w-2xl lg:w-full lg:pb-8 xl:pb-10",children:["                 ",Object(r.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:Object(r.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),Object(r.jsxs)(p.a,{children:[Object(r.jsx)("div",{className:"relative pt-4 px-4 sm:px-6 lg:px-8",children:Object(r.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[Object(r.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:Object(r.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[Object(r.jsxs)("a",{href:"#",children:[Object(r.jsx)("span",{className:"sr-only",children:"Workflow"}),Object(r.jsx)("img",{className:"h-8 w-auto sm:h-10",src:h,alt:"Little Apple Logo"})]}),Object(r.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:Object(r.jsxs)(p.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500",children:[Object(r.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(r.jsx)(c.a,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),Object(r.jsx)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:e.map((function(e){return Object(r.jsx)("a",{href:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)}))})]})}),Object(r.jsx)(j.a,{as:a.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(r.jsx)(p.a.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:Object(r.jsxs)("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",children:[Object(r.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"h-8 w-auto",src:h,alt:"Little Apple Logo"})}),Object(r.jsx)("div",{className:"-mr-2",children:Object(r.jsxs)(p.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500",children:[Object(r.jsx)("span",{className:"sr-only",children:"Close main menu"}),Object(r.jsx)(c.b,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),Object(r.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return Object(r.jsx)("a",{href:e.href,className:"removeHash block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))})]})})})]})]})},u=function(){return Object(r.jsxs)("div",{className:"bg-white",children:[Object(r.jsx)("header",{children:Object(r.jsx)(g,{})}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"relative",children:[Object(r.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"}),Object(r.jsx)("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:Object(r.jsxs)("div",{className:"relative shadow-xl sm:rounded-2xl sm:overflow-hidden",children:[Object(r.jsxs)("div",{className:"absolute inset-0",children:[Object(r.jsx)("img",{className:"h-full w-full object-cover",src:x,alt:"Woman working on a laptop"}),Object(r.jsx)("div",{className:"absolute inset-0 bg-indigo-500 mix-blend-multiply"})]}),Object(r.jsxs)("div",{className:"relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",children:[Object(r.jsxs)("h1",{className:"text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:[Object(r.jsx)("span",{className:"block text-white",children:"Hello, I'm Andrea."}),Object(r.jsx)(b,{htmlType:"span",leadingText:"I am ",typedText:'[ "a { React Developer }.", "a < Front-End Engineer />.", "[ always evolving ]." ]'})]}),Object(r.jsxs)("p",{className:"mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl",children:["M.P.S. Web & Mobile Application Development ",Object(r.jsx)("br",{})," Full Stack Developer Certification"]})]})]})})]})})})]})},f=s(12),v=s.n(f),O=function(e){var t,s,a=e.icon,i=e.size,n=(e.color,e.brand),l=e.classNames,c=e.linkTo,o=e.target,d=e.dataRel;console.log(e),t=!0===n?"fab":"fas";var m=Object(r.jsx)("i",{className:v()("".concat(t," fa-").concat(a," fa-").concat(i),l)});return s=c?Object(r.jsx)("a",{className:"pointer mr-3",href:c,target:o,"data-rel":d,children:m}):"function"===typeof a?a:m,Object(r.jsx)("div",{className:"col-span-1 flex justify-center mr-3",children:s})},y=(s.p,s.p+"static/media/iconMatchBlog.de284512.png"),w=[{title:"Flat-Design Icon Sets: a Case for Universal Meaning",subtitle:"2020 International Conference on Applied Human Factors and Ergonomics | Advances in Usability and User Experience",href:"https://www.researchgate.net/publication/339004734_Flat-Design_Icon_Sets_a_Case_for_Universal_Meanings",category:{name:"Usability & User Experience",href:"https://www.researchgate.net/publication/339004734_Flat-Design_Icon_Sets_a_Case_for_Universal_Meanings"},description:"In this paper, we focus on open-source typographic icon sets for the web (e.g., Font Awesome). Specifically, we investigate to what extent flat-design icons have acquired a universal meaning and we analyze human factors and design aspects that play a key role in icon recognition.",date:"Jul 18, 2020",datetime:"2020-03-16",imageUrl:s.p+"static/media/springer.5799e7b3.png",readingTime:"6 min",author:{name:"Andrea M. Legleiter & Nicholas Caporusso",href:"#"},icons:[{icon:"researchgate",brand:!0,linkTo:"https://www.researchgate.net/publication/339004734_Flat-Design_Icon_Sets_a_Case_for_Universal_Meanings",target:"_blank"},{icon:"github",brand:!0,linkTo:"https://github.com/littleapple27/case-for-universal-meanings",target:"_blank"}]},{title:"How well do you know your Font Awesome Icons?",subtitle:"Acknowledged & Promoted by Dave Gandy, Founder of Font Awesome",href:"https://littleapple27.dev/icon-match-game/index.php",category:{name:"Usability & User Experience",href:"#"},description:"In our prelimiary study, we found significant differences between the symbols in the same set in terms of ambiguity, which we are currently exploring more extensively in a follow-up study. Participate by playing a fun, interactive game!",imageUrl:y,date:"Mar 18, 2020",datetime:"2020-03-16",readingTime:"4 min",author:{name:"Play Now",href:"https://littleapple27.dev/icon-match-game/index.php"},icons:[{icon:"gamepad",linkTo:"https://littleapple27.dev/icon-match-game/index.php",target:"_blank"},{icon:"twitter",brand:!0,linkTo:"https://twitter.com/fontawesome/status/1255516741255467016?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1255516741255467016%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Ffontawesome2Fstatus2F1255516741255467016widget%3DTweet",target:"_blank"}]},{title:"2020 International Conference on Applied Human Factors and Ergonomics",href:"https://www.youtube.com/embed/sjWAdWMPcPM?rel=0&autoplay=1",category:{name:"Conference Presentation",href:"https://www.youtube.com/embed/sjWAdWMPcPM?rel=0&autoplay=1"},description:"Presented at the Virtual meeting of the 2020 International Conference on Applied Human Factors and Ergonomics.",date:"July 2020",datetime:"2020-07-18",readingTime:"10 min",youtubeUrl:Object(r.jsx)("iframe",{className:"pt-3",src:"https://www.youtube.com/embed/sjWAdWMPcPM?rel=0&autoplay=1"}),icons:[{icon:"youtube",brand:!0,linkTo:"https://www.youtube.com/embed/sjWAdWMPcPM?rel=0&autoplay=1",dataRel:"lightcase"}]}],N=function(){return Object(r.jsxs)("div",{className:"relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",id:"research",children:[Object(r.jsx)("div",{className:"absolute inset-0",children:Object(r.jsx)("div",{className:"bg-white h-1/3 sm:h-2/3"})}),Object(r.jsxs)("div",{className:"relative max-w-7xl mx-auto",children:[Object(r.jsxs)("div",{className:"text-left",children:[Object(r.jsx)("h2",{className:"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",children:"UI/UX Research"}),Object(r.jsx)("p",{className:"mt-3 max-w-3xl text-xl text-gray-500 sm:mt-4",children:"I have interests in usability and exploring the cross-generational effects of the web."})]}),Object(r.jsx)("div",{className:"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",children:w.map((function(e){var t,s,a;return Object(r.jsxs)("div",{className:"flex flex-col rounded-lg shadow-lg overflow-hidden",children:[Object(r.jsx)("div",{className:v()("flex-shrink-0",(null===e||void 0===e?void 0:e.youtubeUrl)&&"flex justify-center h-1/3 w-full"),children:(null===e||void 0===e?void 0:e.imageUrl)?Object(r.jsx)("img",{className:"h-48 w-full object-cover",src:e.imageUrl,alt:""}):null===e||void 0===e?void 0:e.youtubeUrl}),Object(r.jsxs)("div",{className:"flex-1 bg-white p-6 flex flex-col justify-between",children:[Object(r.jsxs)("div",{className:"flex-1",children:[Object(r.jsx)("p",{className:"text-sm font-medium text-indigo-600",children:Object(r.jsx)("a",{href:e.category.href,className:"hover:underline uppercase",children:e.category.name})}),Object(r.jsxs)("a",{href:e.href,className:"block mt-2",children:[Object(r.jsx)("p",{className:"text-xl font-semibold text-gray-900 mb-3",children:e.title}),Object(r.jsx)("p",{className:"text-sm font-light text-gray-500",children:e.subtitle}),Object(r.jsx)("p",{className:"mt-3 text-base text-gray-500",children:e.description})]})]}),Object(r.jsxs)("div",{className:"mt-6 flex items-center",children:[Object(r.jsx)("div",{className:"flex",children:null===e||void 0===e||null===(t=e.icons)||void 0===t?void 0:t.map((function(e){return Object(r.jsx)(O,Object(d.a)(Object(d.a)({size:"lg"},e),{},{classNames:"text-indigo-500 hover:text-indigo-700"}),null===e||void 0===e?void 0:e.icon)}))}),Object(r.jsxs)("div",{className:"ml-3",children:[Object(r.jsx)("p",{className:"text-sm font-medium text-gray-900",children:Object(r.jsx)("a",{href:null===e||void 0===e||null===(s=e.author)||void 0===s?void 0:s.href,className:"hover:underline",children:null===e||void 0===e||null===(a=e.author)||void 0===a?void 0:a.name})}),Object(r.jsxs)("div",{className:"flex space-x-1 text-sm text-gray-500",children:[Object(r.jsx)("time",{dateTime:null===e||void 0===e?void 0:e.datetime,children:null===e||void 0===e?void 0:e.date}),Object(r.jsx)("span",{"aria-hidden":"true",children:"\xb7"}),Object(r.jsxs)("span",{children:[null===e||void 0===e?void 0:e.readingTime," read"]})]})]})]})]})]},e.title)}))})]})]})},k=s.p+"static/media/aloftBlog.a7e1cf34.png",A=s.p+"static/media/cq.c236f671.png",C=s.p+"static/media/psc.2b46dab7.png",I=s.p+"static/media/pscblog.d4eb9e79.png",R=s.p+"static/media/meancms.9b852a91.png",W=s.p+"static/media/zipTask.558dfba4.png",E=[{name:"Progressive Web Application",role:"goAloft: A Resource for Sailors",desc:"Developed PWA responsively using modern web development capabilities to deliver an app-like user experience, based on Google's PWA training resources.",imageUrl:k,linkTo:"https://littleapple27.github.io/aloft/",target:"_blank",altText:"Image of PWA responsively using modern web development.",icons:[{icon:"html5",brand:!0},{icon:"css3",brand:!0},{icon:"sass",brand:!0},{icon:"bootstrap",brand:!0},{icon:"js-square",brand:!0}]},{name:"MEAN / Angular / MongoDB",role:"WYSIWYG Blog",desc:"I am working to update my portfolio.  I need to compile my angular code and upload to my server.  In the meantime, feel free to view my pdf presentation.",imageUrl:R,linkTo:s.p+"static/media/meanBlogPresentation.a68fd746.pdf",target:"_blank",altText:"Image of MEAN blog presentation.",icons:[{icon:"html5",brand:!0},{icon:"css3",brand:!0},{icon:"sass",brand:!0},{icon:"bootstrap",brand:!0},{icon:"js-square",brand:!0},{icon:"angular",brand:!0},{icon:"node-js",brand:!0}]},{name:"Small Business Website",role:"CQ Electrical",desc:"I was given the opportunity to build this website from the ground up, to include design, image selection, and content writing.  Completed midway through graduate program.",imageUrl:A,linkTo:"http://www.cqelectrical.com",target:"_blank",altText:"Image of CQ Electrical website development project using PHP",icons:[{icon:"html5",brand:!0},{icon:"css3",brand:!0},{icon:"sass",brand:!0},{icon:"bootstrap",brand:!0},{icon:"js-square",brand:!0},{icon:"php",brand:!0},,{icon:"database"}]},{name:"Android / Java",role:"zipTask",desc:"This project created the foundation for my success working with component based development.  Project was completed using Android Studio with Java, mySQLite, and XML.  Presentation video uploaded for review and code available at GitHub.",imageUrl:W,linkTo:"https://www.youtube.com/embed/X3YLjjDZJrg?rel=0&autoplay=1",dataRel:"lightcase",target:"_blank",alt:"Image of ZipTask, Android mobile application project.",icons:[{icon:"android",brand:!0},{icon:"java",brand:!0},{icon:"database"}]},{name:"Responsive Web Development",role:"Portland Schooner Company",desc:"Assignment was to select an existing website and develop it responsively.",imageUrl:C,linkTo:"https://littleapple27.github.io/psc/",target:"_blank",altText:"Image of PSC responsive web development project",icons:[{icon:"html5",brand:!0},{icon:"css3",brand:!0},{icon:"sass",brand:!0},{icon:"bootstrap",brand:!0},{icon:"js-square",brand:!0}]},{name:"LAMP / CRUD / PHP / mySQL",role:"Content Management System",desc:"Create, read, update, delete functionality with admin/user login screen and search capabilities.  Able to create user profiles and set admin flag.",imageUrl:I,linkTo:"https://littleapple27.dev/pscblog/adminlogin.php",target:"_blank",altText:"Image of content management system created with LAMP stack technologies.",icons:[{icon:"html5",brand:!0},{icon:"css3",brand:!0},{icon:"sass",brand:!0},{icon:"bootstrap",brand:!0},{icon:"js-square",brand:!0},{icon:"php",brand:!0},{icon:"database"}]}],U=function(){return Object(r.jsx)("div",{className:"bg-white",id:"projects",children:Object(r.jsx)("div",{className:"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24",children:Object(r.jsxs)("div",{className:"space-y-12",children:[Object(r.jsxs)("div",{className:"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none",children:[Object(r.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight sm:text-4xl",children:"Other projects"}),Object(r.jsx)("p",{className:"text-xl text-gray-500",children:"A sampling of my work from over the years..."})]}),Object(r.jsx)("ul",{role:"list",className:"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8",children:E.map((function(e){var t;return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:"space-y-4",children:[Object(r.jsx)("div",{className:"aspect-w-3 aspect-h-2 h-75 w-75",children:Object(r.jsx)("a",{href:null===e||void 0===e?void 0:e.linkTo,target:null===e||void 0===e?void 0:e.target,"data-rel":null===e||void 0===e?void 0:e.dataRel,children:Object(r.jsx)("img",{className:"object-cover shadow-lg rounded-lg",src:null===e||void 0===e?void 0:e.imageUrl,alt:null===e||void 0===e?void 0:e.altText})})}),Object(r.jsxs)("div",{className:"space-y-4",children:[Object(r.jsxs)("div",{className:"leading-6 font-medium space-y-1",children:[Object(r.jsx)("h3",{className:"uppercase text-sm text-indigo-700",children:null===e||void 0===e?void 0:e.name}),Object(r.jsx)("p",{className:"text-xl font-semibold text-gray-900 mb-3",children:null===e||void 0===e?void 0:e.role})]}),Object(r.jsx)("div",{className:"text-md font-light space-y-3",children:Object(r.jsx)("p",{className:"text-gray-600",children:null===e||void 0===e?void 0:e.desc})}),Object(r.jsxs)("div",{className:"flex mt-15 justify-between items-center",children:[Object(r.jsx)("div",{className:"flex",children:null===e||void 0===e||null===(t=e.icons)||void 0===t?void 0:t.map((function(e){return Object(r.jsx)(O,Object(d.a)(Object(d.a)({size:"lg"},e),{},{classNames:"text-indigo-500"}),null===e||void 0===e?void 0:e.icon)}))}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(O,{size:"lg",icon:"github",brand:!0,classNames:"text-indigo-500"}),Object(r.jsx)(O,{size:"lg",icon:"external-link-alt",classNames:"text-indigo-500"})]})]})]})]})},null===e||void 0===e?void 0:e.name)}))})]})})})},V=function(){return Object(r.jsx)("div",{className:"bg-gray-100",id:"techProfile",children:Object(r.jsxs)("div",{className:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8",children:[Object(r.jsx)("p",{className:"text-center text-sm font-semibold uppercase text-gray-500 tracking-wide pb-8",children:"Technical Profile"}),Object(r.jsx)("div",{className:"grid grid-cols-3 gap-6 sm:grid-cols-6",children:[{icon:"html5",brand:!0},{icon:"css3",brand:!0},{icon:"bootstrap",brand:!0},{icon:"sass",brand:!0},{icon:"js-square",brand:!0},{icon:"react",brand:!0},{icon:"angular",brand:!0},{icon:"node-js",brand:!0},{icon:"npm",brand:!0},{icon:"php",brand:!0},{icon:"git-alt",brand:!0},{icon:"github",brand:!0}].map((function(e){return Object(r.jsx)(O,{size:"4x",color:"indigo-500",brand:e.brand,icon:e.icon},e.icon)}))})]})})},P=s(19),S=s.p+"static/media/littleappleavatar.89c80d7c.png",M=s(14),T=function(){var e=Object(a.useRef)();return Object(r.jsxs)("div",{className:"relative bg-white",id:"contact",children:[Object(r.jsx)("div",{className:"lg:absolute lg:inset-0",children:Object(r.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:Object(r.jsx)("img",{className:"h-56 w-full object-cover lg:absolute lg:h-full",src:x,alt:""})})}),Object(r.jsx)("div",{className:"relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2",children:Object(r.jsx)("div",{className:"lg:pr-8",children:Object(r.jsxs)("div",{className:"max-w-md mx-auto sm:max-w-lg lg:mx-0",children:[Object(r.jsxs)("div",{className:"flex items-center justify-between",children:[Object(r.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight sm:text-4xl",children:"Let's work together"}),Object(r.jsx)("img",{className:"h-16 w-16",src:S,alt:"People working on laptops"})]}),Object(r.jsx)("p",{className:"mt-4 text-lg text-gray-500 sm:mt-3",children:"I\u2019d love to hear from you! Send me a message here..."}),Object(r.jsxs)("form",{ref:e,onSubmit:function(t){t.preventDefault(),P.a.sendForm("service_m4o0a9e","template_ybxsypl",e.current,"user_P4vdBlmyChnGSjqz9leyV").then((function(e){Object(M.b)("Your email has been successfully sent!",{icon:"\ud83d\udc4f",ariaProps:{role:"status","aria-live":"polite"}}),console.log(e.text),t.target.reset()}),(function(e){console.log(e.text)}))},className:"mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"firstName",className:"block text-sm font-medium text-gray-700",children:"First name"}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{type:"text",name:"firstName",id:"firstName",autoComplete:"given-name",className:"block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"lastName",className:"block text-sm font-medium text-gray-700",children:"Last name"}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{type:"text",name:"lastName",id:"lastName",autoComplete:"family-name",className:"block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})})]}),Object(r.jsxs)("div",{className:"sm:col-span-2",children:[Object(r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{id:"email",name:"email",type:"email",autoComplete:"email",className:"block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})})]}),Object(r.jsxs)("div",{className:"sm:col-span-2",children:[Object(r.jsxs)("div",{className:"flex justify-between",children:[Object(r.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700",children:"Company"}),Object(r.jsx)("span",{id:"phone-description",className:"text-xs text-gray-500",children:"Optional"})]}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{type:"text",name:"company",id:"company",autoComplete:"organization",className:"block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})})]}),Object(r.jsxs)("div",{className:"sm:col-span-2",children:[Object(r.jsxs)("div",{className:"flex justify-between",children:[Object(r.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),Object(r.jsx)("span",{id:"phone-description",className:"text-xs text-gray-500",children:"Optional"})]}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("input",{type:"text",name:"phone",id:"phone",autoComplete:"tel","aria-describedby":"phone-description",className:"block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"})})]}),Object(r.jsxs)("div",{className:"sm:col-span-2",children:[Object(r.jsxs)("div",{className:"flex justify-between",children:[Object(r.jsx)("label",{htmlFor:"how-can-we-help",className:"block text-sm font-medium text-gray-700",children:"Leave me a message."}),Object(r.jsx)("span",{id:"how-can-we-help-description",className:"text-sm text-gray-500",children:"Max. 500 characters"})]}),Object(r.jsx)("div",{className:"mt-1",children:Object(r.jsx)("textarea",{id:"how-can-we-help",name:"how-can-we-help","aria-describedby":"how-can-we-help-description",rows:4,className:"block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md",defaultValue:""})})]}),Object(r.jsx)("div",{className:"text-right sm:col-span-2",children:Object(r.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Submit"})})]})]})})})]})},F=[{name:"LinkedIn",href:"https://www.linkedin.com/in/andreamlegleiter",icon:function(e){return Object(r.jsx)("svg",Object(d.a)(Object(d.a)({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z",clipRule:"evenodd"})}))}},{name:"GitHub",href:"https://github.com/littleapple27",icon:function(e){return Object(r.jsx)("svg",Object(d.a)(Object(d.a)({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}))}}],X=function(){var e=(new Date).getFullYear();return Object(r.jsx)("footer",{className:"bg-indigo-900",children:Object(r.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",children:[Object(r.jsx)("div",{className:"flex justify-center space-x-6 md:order-2",children:F.map((function(e){return Object(r.jsxs)("a",{href:e.href,className:"text-indigo-300 hover:text-indigo-200",target:"_blank",children:[Object(r.jsx)("span",{className:"sr-only",children:e.name}),Object(r.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name)}))}),Object(r.jsx)("div",{className:"mt-8 md:mt-0 md:order-1",children:Object(r.jsxs)("p",{className:"text-center text-base text-indigo-300",children:["\xa9 2017 - ",e," Andrea M. Legleiter - All rights reserved."]})})]})})},Z=s(17),q=s.n(Z),L=s(18),H=s.p+"static/media/pointing.8c157239.png",J=function(){return Object(r.jsx)("div",{className:"relative bg-indigo-600",children:Object(r.jsx)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:Object(r.jsx)("div",{className:"pr-16 sm:text-center sm:px-16",children:Object(r.jsx)("p",{className:"font-medium text-white",children:Object(r.jsxs)("div",{className:"flex justify-center items-center",children:[Object(r.jsx)("div",{className:"mr-3",children:Object(r.jsx)("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{fill:"currentColor",d:"M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z"})})}),Object(r.jsx)("div",{className:"md:hidden",children:"Now proficient with Tailwind CSS!"}),Object(r.jsx)("div",{className:"hidden md:inline ml-5",children:"Big news! Now proficient with Tailwind CSS."})]})})})})})},G=function(){return Object(L.load)("6LcVxacZAAAAAI5pwmfIaGHs-akx2rjVrsl-LcHY").then((function(e){e.execute("submit").then((function(e){console.log(e)}))})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(u,{}),Object(r.jsx)(V,{}),Object(r.jsx)(J,{}),Object(r.jsx)(N,{}),Object(r.jsx)(U,{}),Object(r.jsx)(m,{}),Object(r.jsx)(T,{}),Object(r.jsx)(X,{}),Object(r.jsx)(M.a,{position:"bottom-center",reverseOrder:!1}),Object(r.jsx)(q.a,{showUnder:160,style:{bottom:150},children:Object(r.jsx)("div",{className:"h-16 w-16 rounded-full shadow-lg bg-indigo-50",children:Object(r.jsx)("img",{src:H,alt:"little apple avatar pointing up"})})})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),a(e),i(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),D()}},[[31,1,2]]]);
//# sourceMappingURL=main.7ea3a870.chunk.js.map