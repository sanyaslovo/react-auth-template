(this["webpackJsonpreact-auth-app"]=this["webpackJsonpreact-auth-app"]||[]).push([[0],{79:function(A,e,n){},88:function(A,e,n){"use strict";n.r(e);var c=n(4),t=n(0),i=n.n(t),o=n(9),r=n.n(o),g=(n(79),n(26)),a=n(21),Q=n(11),E=n(35),C=n(63),O=Object(t.createContext)();function l(){return Object(t.useContext)(O)}var s=function(A){var e=A.component,n=Object(C.a)(A,["component"]),t=l().authTokens;return Object(c.jsx)(Q.b,Object(E.a)(Object(E.a)({},n),{},{render:function(A){return t?Object(c.jsx)(e,Object(E.a)({},A)):Object(c.jsx)(Q.a,{to:{pathname:"/login",state:{referer:A.location}}})}}))},B=n(122);var I=function(A){var e=Object(B.a)({background:{background:"url(https://source.unsplash.com/random/1920x1080)",backgroundRepeat:"no-repeat",backgroundSize:"cover",border:0,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",minHeight:"100vh",padding:"0 30px"},title:{fontSize:"44px",textAlign:"center",marginTop:0,paddingTop:"30px",color:"#fff"}})();return Object(c.jsx)("div",{className:e.background,children:Object(c.jsx)("h1",{className:e.title,children:"Home Page"})})},D=n(125),h=Object(B.a)((function(A){return{wrapper:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minHeight:"500px"}}}));var U=function(A){var e=h(),n=l().setAuthTokens;return Object(c.jsxs)("div",{className:e.wrapper,children:[Object(c.jsx)("h3",{children:"Admin Page"}),Object(c.jsx)(D.a,{size:"large",color:"primary",variant:"contained",onClick:function(){return n()},children:"Log out"})]})},d=n(62),u=n.n(d),w=n(28),K=n(29);function m(){var A=Object(w.a)(["\n  background-color: red;\n"]);return m=function(){return A},A}function x(){var A=Object(w.a)(["\n  width: 50%;\n  margin-bottom: 1rem;\n"]);return x=function(){return A},A}function j(){var A=Object(w.a)(["\n  background: linear-gradient(to bottom, #6371c7, #5563c1);\n  border-color: #3f4eae;\n  border-radius: 3px;\n  padding: 1rem;\n  color: white;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return j=function(){return A},A}function b(){var A=Object(w.a)(["\n  padding: 1rem;\n  border: 1px solid #999;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return b=function(){return A},A}function M(){var A=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return M=function(){return A},A}function y(){var A=Object(w.a)(["\n  box-sizing: border-box;\n  max-width: 410px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return y=function(){return A},A}var p=K.a.div(y()),F=K.a.div(M()),H=K.a.input(b()),f=K.a.button(j()),R=K.a.img(x()),k=(K.a.div(m()),n(130)),T=n(129),v=n(132),J=Object(B.a)((function(A){return{root:{"& > *":{margin:A.spacing(1),width:"25ch"}},link:{margin:A.spacing(2),color:"#3f51b5",textDecoration:"unset"},form:{width:"100%",display:"flex",flexDirection:"column"},input:{marginBottom:A.spacing(2)},icon:{margin:A.spacing(5),fontSize:"120px"}}}));function Y(A){return Object(c.jsx)(k.a,Object(E.a)({elevation:6,variant:"filled"},A))}var z=function(A){var e=J(),n=Object(t.useState)(!1),o=Object(g.a)(n,2),r=o[0],E=o[1],C=Object(t.useState)(!1),O=Object(g.a)(C,2),s=O[0],B=O[1],I=Object(t.useState)(""),h=Object(g.a)(I,2),U=h[0],d=h[1],w=Object(t.useState)(""),K=Object(g.a)(w,2),m=K[0],x=K[1],j=i.a.useState(!1),b=Object(g.a)(j,2),M=b[0],y=b[1],F=l().setAuthTokens,H=A.location.state.referer||"/",f=function(A,e){"clickaway"!==e&&y(!1)};return r?Object(c.jsx)(Q.a,{to:H}):Object(c.jsxs)(p,{children:[Object(c.jsx)(u.a,{className:e.icon,fontSize:"large",color:"primary"}),Object(c.jsxs)("form",{className:e.form,children:[Object(c.jsx)(T.a,{label:"Email",variant:"outlined",type:"username",value:U,onChange:function(A){d(A.target.value)},className:e.input}),Object(c.jsx)(T.a,{label:"Password",variant:"outlined",type:"password",value:m,onChange:function(A){x(A.target.value)},className:e.input}),Object(c.jsx)(D.a,{size:"large",color:"primary",variant:"contained",onClick:function(){"root"===U&&"1"===m?(F("bdojwfbre3hur3348rh3984rh3048rh439"),E(!0)):(B(!0),y(!0))},children:"Sign In"})]}),Object(c.jsx)(a.b,{className:e.link,to:"/signup",children:"Don't have an account?"}),s&&Object(c.jsx)(v.a,{open:M,autoHideDuration:1e3,onClose:f,children:Object(c.jsx)(Y,{severity:"error",variant:"filled",onClose:f,children:"The username or password provided were incorrect!"})})]})};var V=function(){return Object(c.jsxs)(p,{children:[Object(c.jsx)(R,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuUAAALlCAYAAABjOpj+AAAZyElEQVR42u3dT3Lc9pnH4VcprzvIBWh6gS2LwQEU+QIMdYEUdYKEF5iqnMDlE1DOBUjzAuL4ALDCLRameQHDvEDPQmiP/lAU/3Q3gPf3PJvJzKRsAWiVPkB/CT1bLpcBAACM509OAQAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AAAgygEAQJQDAACiHAAARDkAACDKAQBAlAMAAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AAAgygEAQJQDAACiHAAARDkAACDKAQBAlAMAAKIcAACS+copAJi/vqn3I6Ia/tfdiPjmjv/6m/f+89uq7XpnEGBcz5bLpbMAMK/43o+Ivw7/cz8iFmv4R19GRB8RFxHxc0RciHUAUQ7AuwivIuIwIl5GxIs1Bfh9XUfEWUS8qdruzNUAEOUApcX40RDiBxP5Jd0Mgf5d1XZvXSEAUQ6QNcSriDiOiH/Fdp+IP9RPEXFStd1rVw1AlAOI8XFdRsQ/q7a7cBUBRDnAnIP8KCK+n1mMf+x8iPMrVxRAlAPMKcZ3I+KHiHie5JBuhjB/7eoCiHKAOQT54RDki4SH958hzr1OEUCUA0w2yP8dEf+T/DAvI+JvwhxAlANMMch/iIh/FHK4N0OYe30iwD38ySkAEOQbsIiI/x3+BlIARDmAIBfmAKIcQJCXaxERPwzvYgdAlANsPcj/VXiQr+xFxI9OA4AoB9h2kB9GxHfOxB+e9039vdMAcDtvXwFYf5DvRsR/I+d7yJ/q26rtLpwGgA95Ug6wfln/YqB1+NG+HECUA2zUsCN/7kx81mK4aQHgPeYrAOsL8t0wW7kvMxaA93hSDrA+ZisPO1cAiHKA9RnetmK2cn87w9QHgDBfAVhXlP8aETvOxIPcRMTXVdv1TgVQOk/KAZ4e5EeC/FEWEXHsNAB4Ug7w1CCvIuLXsCV/LE/LAcKTcoCnOhbkT+JpOUB4Ug7wJH1T/y7Kn8zTcqB4npQDPD7IjwT5Wiwi4tBpAEQ5AI/xb6fAuQQQ5QAjGd5L7o0r67PTN/ULpwEQ5QA8hB9OdE4B1sYPegI8UN/UuxHxizOxEd9UbXflNACl8aQc4OHsnzfHD3wCohyAuw1/WZBw3BwTFkCUA/BFh+E1iJu00zf1vtMAiHIA7vLKKdg4T8sBUQ7A7YYf8HzuTGyceRAgygH4LE/Jt2MxvAceQJQD8Ikjp2BrXjoFgCgH4APDDx/6Gzy3x5NyQJQD8Ak/fLhdJiyAKAfgEwJx+2z4AVEOwDvDE1vvJt++g+EvawIQ5QD4ocMR+YYCEOUACEM3RACiHGBUfVMfhenKmExYAFEOgCe1E+CbCkCUA5RqeEJ74Ey4MQIQ5QDj8YR2GkxYAFEOUDDvyXaDBCDKAcbSN/VuRDx3JibDhAUQ5QAF8mR2WkxYAFEOUCDTFTdKAKIcYCzDdGXPmZgcExZAlAMU5NgpmCQTFkCUAxTETMK1ARDlAGPpm3o/InacickyYQFEOUAB/IDntJmwAKIcoADmEa4RgCgHGEvf1IdhujIHJiyAKAcQe4zMhAUQ5QCJZZpFnEfEt64VgCgHmI1hurJIdEgnVdtdRMRl0kvmWw1AlAMklOmtKzdV252t4jzp9TJhAUQ5QCZD3B0kOqSzz/znbExYAFEOIO4m63T1H6q2uwoTFgBRDiDutur96cqKCQuAKAeYrr6pdyPvdGXlIvElNGEBRDmAqJuc04//D1XbvY2I66TXz4QFEOUACWR968rHsv7ApwkLIMoB5myYruwlOqS7wvsk8aU0YQFEOYCYm4zTz/0/TFgARDnAVB0nOpa7pisrJiwAohxgOvqm3o+InUSHdJ/gfpP4kpqwAKIcYIZeJTue0y/9F4Yn6TdJr6cJCyDKAWYo05PV+0xXVkxYAEQ5wPj6pn4R5U1XVk4TX1oTFkCUA8xIcdOVFRMWAFEOMBWlTldWLpJeVxMWQJQDzEHf1IcRsUh0SI/ZiJuwAIhygFFlmzg8JrDPXF+AaXm2XC6dBaAIw7Tht0SHdFO13Z8feS5+jIiDpJf6L1Xb9T7xwJx4Ug6UJNu04SlPvE1YAEQ5wChMV9YT9K4zwJqZrwBFMF259Zz8NyL2kl7yb6q2u/LJB+bCk3KgFNkmDa/X8M84cb0BRDnANh0nO551BHXmCcsrH3lgTsxXgPT6pt6NiF8SHdJ11XZfr+ncmLAATIAn5UAJvHVlO/8s1x1AlAN8VrYpwzq34KeuO8D4zFeA1Pqm3o+InxMd0tqmK++do18jYifpR8CEBZgFT8qB7LI9LT2byT9zKkxYAFEOIMrW7mQm/0w3ZQAPYL4CpGW68qBzZcICMCJPyoHMsr2bfJMzk4vEnwMTFkCUA4ixtdnkzMRbWABGZL4CpNQ39WGy0NzYdOW9c/Z7RCySfiRMWIBJ86QcyOplsuM5S/LvGIsJCyDKAUTYk23jDSkmLAAjMV8B0umb+ihyveZv49OV985d5j8UTFiAyfKkHMjIdOXxzhN/LkxYAFEOsA19U1cRcZDssLb51N+EBUCUAzxZtqeh11Xbvd3ivy/zD3vu9U2967cIIMoBNi/b09CtRnLVdn2YsACIcoDHGp6CPk92WGP8wKoJC4AoB3g005X1uEj8GTFhAUQ5wIaZrqzB8NrASzdvAKIc4EGGp597yQ7rpNB/t5s3QJQDzNRxsuMZa7qy4i0sAKIc4MGyTRJGjWITFgBRDvAgfVPvR8ROssOawnwk89NyExZAlAMIrDuNPV1ZyfxqRBMWQJQDrFm2KcJ3U/hFDDcG1z43AKIc4E59Ux9GvunKmV/LVpiwAKIcYE1eJjuey+GHLKci86sRTVgAUQ6wJtkmCJOK4GHCcuPzAyDKAW41TFcWyQ7rzK9pq0xYAFEOIKg+MLXpyoq3sACIcoBP9U1dRcRBssOa5H67aruzMGEBEOUAhYTUmV/bKExYAFEO8EjeurJdJiwAohzg/w0BZbqyXRfJP1YmLIAoBxBQ056HVG3XR8R54s+UCQsgygEKD6ipT1dWTFgARDnAH9OVvWSHNZe/NfMs+cfLhAUQ5QAFh9MsYteEBUCUA6wcJzueuUxXVt4k/myZsACiHOBL+qbej4idZId1MrNfrwkLgCgHCpdxXjCryB2e6l8m/owd+20GiHKAu2V7ijm36crKSeLP2M7wjQyAKAf4WN/UL8J0ZSqyT1j8wCcgygEKCqVZxm0BExa7ckCUAxQSSnOdrqxcJP6smbAAohzgY31TH0bEItlhnfj1T5oJCyDKAT7yMuExzXqXXbXd24i4TvyZM2EBRDnASt/UVUT8I9lhzX26kuLG4gtMWABRDvCejE8sTxzHLJiwAKIcYGC6MlHDhOXGDSGAKAcSG6YrB8kO66ck05VUNxifYcICiHKAMF2Zg9Pkn0ETFkCUA8U7TnhMqZ4sV213FiYsAKIcyKlv6t2I2Et2WOdV2/VuNGbFhAUQ5UDRMj6hzDr1eJP8s2jCAohyoFgZQyjrE+Wz5J9FExZAlAPlGeYCpiszMRzXeeKPpAkLIMqBImV8Sp79LSXewgIgyoFkMs4Fsk88TFgARDmQxTAT2El2WGmnKyvD8f2U+BBNWABRDhQl47vJTwu5diYsAKIcSMJ0xXH6bAKiHGAsfVMfRsQi2WGln66sVG13FRGXiQ/RhAUQ5UARXiY8ptPCruFJ8uMzYQFEOZCe6Yrj9RkFRDnAWPqmPgrTldkbJizXiQ/RhAUQ5UBqpit5ZH9absICiHIgn76pq4g4EKdpZN+Vm7AAohwQOTNR3HRlpWq7t2HCAiDKgdnJOAc4LfyamrAAiHJgLvqm3o2I56LUTcnMmLAAohwQNxNX7HRlpWq7i4i4SXyIJiyAKAdSMV3Jy4QFQJQDUzdMV/bEaFomLACiHJiB44THVPx0ZaVqu7MwYQEQ5cDkZXzSaLryIRMWAFEOTNXwhHFHhKb3xo0lgCgHpivjE8b/mK4Ud5NiwgKIcmDWTFcKMNyknLvBBBDlwMT0TX0Y+aYrN8MPNlLezYoJCyDKgVl6mfCYBHm558aEBRDlwCyZrhRkmLBcJj9MExZAlAPzMUxXFskOy3Tly07caAJ83rPlcuksANuM8h8j4sCZIKG/Vm331mkAHsOTcmCbQV4JchI7dgoAUQ7Mga/48fkGEOXAyF46BSS2GH5mAkCUA9PUN/VumK7gxhNAlAOj8gQRn3MAUQ6MzHucKYEJCyDKgWkapit7zgSFMGEBRDkwSZ4c4vMOIMqBkXl/MyUxYQFEOTAtfVPvR8SOM0FhTFgAUQ5Mih/wpESelAOiHBAnMDITFkCUA9PQN/WLMF2hXCYsgCgHJsF0hZJ5Ug6IckCUwMhMWABRDoxriJGFM0HhTFgAUQ6IERiZJ+XAvTxbLpfOArBWfVNXEfGbMwHvblCrtjtzGoC7eFIObIKng/BelDsFgCgHRAi4SQVEOVCSYbpy4EzAH7yFBRDlwNaJD/iUb48AUQ5s1bFTAG5WAVEOjKRv6t2I2HMm4BMmLIAoB7ZGdMDnmbAAohzYildOAbhpBUQ5MJK+qffDdAXuYsICiHJg4zwlhy8zYQFEObBRngCC3yeAKAfGMkxXdpwJ+CITFkCUAxvj3eRwfyYsgCgHNsKTP/D7BRDlwFiGr+IXzgTcmwkLIMqBtfNVPPh9A4hyYGSe+IHfN4AoB8bSN/VRmK7AY5iwAKIcWBtfwYPfP8AaPFsul84C8GB9U1cR8ZszAY92U7Xdn50GIMKTcuDxfPUOT2PCAohy4MleOQXwZCYsgCgHHqdv6t2IeO5MwJN5Ug6IckBIwMhMWABRDjya6QqsjwkL4O0rwMMM05VfnAlYm5uI+Lpqu96pgHJ5Ug481LFTAGu1CJMwEOVOAfBA4gHWz4QFCme+Atxb39T7EfFzwkP7qWq7v7nCk/7s/R7vnihn9hcTFiiXJ+XAQ2T9Ac8Tl3byzgo4Rt9CgSgHKDoazlzayTst4BhNWKBg5ivAvQzvUs4YRudV2/3dFZ7FZ9CEBUjLk3LgvrI+xTt1aWfDhAUQ5UDxTFdwA+XmFxDlwFiG6UrG2cC5qcCsXBRwjAd9U1cuNYhygNtkfeuK6cqMDDdQ5wUcqgkLiHKADw1P7Q6SHp7pihupKTJhAVEO8ImsT+1MV9xITZUJC4hygE946wqTMdxI/eRmGBDlQDEST1duqrZ77Qq7oXIzDIhyYA6Okh6XLbnrN3UmLCDKAf7grStMTtV2VxFxWcChmrCAKAdK1zf1bkTsJTy0m6rtPCmfv5MCjtGEBUQ5gL/Bk0m7KOAYTVhAlAPEcdLjMl1JoGq7txFx7eYYEOVAWn1T70fETsJDM13JpYRracICohwoWNYf8BTkuZSwKzdhAVEOFCzrV+amK4mYsACiHEirb+oXkXO6cm26kpIJCyDKgZRMV5iTNwUcowkLiHKgQFm/Kj9xafMZvv248fsSEOVAGn1TH0bEIuGhXQ/7Y3IyYQFEOeAPftHGyEr4AV4TFhDlQAmGP/BNV5idgn6A14QFRDlQyB/4pivM1XkBx2jCAqIc8Af+bJmulMGEBRDlwLwNf9AfJD0805UymLAAohzwB/1Ema4Uomq7PkxYAFEOzNxx0uN67dIWxV8kBIhyYJ76pt6NiL2kh2e6UhYTFkCUA/6An5jLqu2uXN5yDNf7soBDNWEBUQ4k9CrpcXlKXqYSrrsJC4hyIJO+qfcj73TFqxDLZMICiHJgdrI+JTddKZQJCyDKgTnK+rTNdKVsFwUcowkLiHIgg2G6spP08ExXylbKTZkJC4hyIAHTFVIa/sKo6wIO1YQFRDmQwFHS4zJdIaKMb0tMWECUA3PWN/VhRCzEGImdFnKcJiwgyoEZy/q197npChERVdtdRMRNAYf6ytUGUQ7MV9ana6cuLe8p4VuT531T77rUIMqBmemb+ihMVyiDCQsgyoHJyjxd6V1eVqq2OwsTFkCUA1MzvKnhIOnhma5wmxK+PdkzYQFRDsxL5q+5TVe4zRu/twFRDkyN6QqlKeVmzYQFRDkwB8PX26YrFGW4WTsv4FBNWECUAzNhukKpvIUFEOXAZGT9ett0BTdtuX+PgygHchi+1t5LengnrjB3GW7aLgs4VBMWEOXAxGV9gnYzvIsa3Ly9Y8ICohyYsKOkxyXI8Vkp4wYcRDkwb31T70fETtLD89YV7qVqu6swYQEm7CunANK7iohvk4bWhcvLA/w9IkoIVj/4DDP0bLlcOgsAADAi8xUAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAARLlTAAAAohwAAEQ5AAAgygEAQJQDAACiHAAARDkAACDKAQBAlAMAAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AACweV85BZBH39TfR8S+MwHc4qRqu9dOA4hyYPP2I+K50wDc4sIpgOkyXwEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQCAz/jKKYBU/hkRldMA3OLKKYDperZcLp0FAAAYkfkKAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAIhyAAAQ5QAAgCgHAABRDgAAiHIAABDlAACAKAcAAFEOAACIcgAAEOUAAIAoBwAAUQ4AAKLcKQAAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQAAUQ4AAKIcAAAQ5QAAIMoBAABRDgAAohwAABDlAAAgygEAAFEOAACiHAAAEOUAACDKAQBAlAMAAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AAAgygEAQJQDAACiHAAARDkAACDKAQBAlAMAAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AAAgygEAQJQDAACiHAAARDkAACDKAQBAlAMAAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AAAgygEAQJQDAACiHAAARDkAACDKAQBAlAMAAKIcAABEOQAAIMoBAECUAwAAohwAAEQ5AAAgygEAYC7+DzJfjF4qLNk4AAAAAElFTkSuQmCC"}),Object(c.jsxs)(F,{children:[Object(c.jsx)(H,{type:"email",placeholder:"email"}),Object(c.jsx)(H,{type:"password",placeholder:"password"}),Object(c.jsx)(H,{type:"password",placeholder:"password again"}),Object(c.jsx)(f,{children:"Sign Up"})]}),Object(c.jsx)(a.b,{to:"/login",children:"Already have an account?"})]})},L=n(127),N=n(128),X=Object(B.a)((function(A){return{root:{flexGrow:1},menuButton:{marginRight:A.spacing(2)},title:{flexGrow:1},link:{color:"#fff",textDecoration:"none"}}}));var P=function(A){var e=X(),n=Object(t.useState)(),i=Object(g.a)(n,2),o=i[0],r=i[1];return Object(c.jsx)(O.Provider,{value:{authTokens:o,setAuthTokens:function(A){localStorage.setItem("tokens",JSON.stringify(A)),r(A)}},children:Object(c.jsx)(a.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(L.a,{position:"static",children:Object(c.jsxs)(N.a,{children:[Object(c.jsx)(D.a,{color:"inherit",children:Object(c.jsx)(a.b,{className:e.link,to:"/",children:"Home Page"})}),!o&&Object(c.jsx)(D.a,{color:"inherit",children:Object(c.jsx)(a.b,{className:e.link,to:"/admin",children:"Login"})}),o&&Object(c.jsx)(D.a,{color:"inherit",onClick:function(){r()},children:"Log Out"})]})}),Object(c.jsx)(Q.b,{exact:!0,path:"/",component:I}),Object(c.jsx)(Q.b,{path:"/login",component:z}),Object(c.jsx)(Q.b,{path:"/signup",component:V}),Object(c.jsx)(s,{path:"/admin",component:U})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(P,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))}},[[88,1,2]]]);
//# sourceMappingURL=main.b97dacb5.chunk.js.map