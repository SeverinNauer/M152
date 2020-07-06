(this.webpackJsonpm152=this.webpackJsonpm152||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),o=(a(89),a(33)),c=a(19),s=a(153),m=a(131),u=a(128),d=a(152),p=a(14),g=a(136),h=a(146),f=a(143),b=a(151),E=a(48),v=a(148),y=a(73),x=a.n(y),S=a(74),w=a.n(S),C=a(72),N=a.n(C),j=a(11),O=a(36),k=a(27),I=a(144),T=a(154),M=a(145),B=a(132),A=Object(u.a)((function(e){return Object(d.a)({root:{}})})),P=function(){var e=A();return r.a.createElement("div",{className:e.root},"Welcome")},R=a(133),F=a(47),G=a.n(F),L=a(149),H=a(69),D=a.n(H),z=Object(u.a)((function(e){return Object(d.a)({codeIcon:{marginLeft:"auto"},code:{display:"flex",flexDirection:"column"}})})),U=function(e){var t=z(),a=Object(n.useState)(!1),i=Object(o.a)(a,2),l=i[0],c=i[1];return Object(n.useEffect)((function(){console.log(G.a.languages),G.a.highlightAll()}),[]),r.a.createElement("div",{className:t.code},r.a.createElement(L.a,{title:"Quellcode anzeigen","aria-label":"show source",placement:"top"},r.a.createElement(m.a,{className:t.codeIcon,onClick:function(){return c(!l)}},r.a.createElement(D.a,null))),r.a.createElement(B.a,{in:l},r.a.createElement(R.a,null,r.a.createElement("pre",null,r.a.createElement("code",{className:"language-tsx"},e.children)))))},q=Object(u.a)((function(e){var t;return Object(d.a)({root:(t={margin:"20px auto"},Object(c.a)(t,e.breakpoints.up("xs"),{width:"95%"}),Object(c.a)(t,e.breakpoints.up("sm"),{width:"90%"}),Object(c.a)(t,e.breakpoints.up("md"),{width:"80%"}),Object(c.a)(t,e.breakpoints.up("lg"),{width:"75%"}),Object(c.a)(t,e.breakpoints.up("xl"),{width:"70%"}),t)})})),Q=function(e){var t=q();return r.a.createElement("div",{className:t.root},e.children)},W=Object(u.a)((function(e){return Object(d.a)({"@keyframes spinning":{"0%":{marginLeft:"0"},"50%":{marginLeft:"100%",transform:"rotate(1080deg)"},"100%":{marginLeft:"0"}},card:{padding:40,marginTop:20},box:{backgroundColor:e.palette.primary.main,height:20,width:20,animation:"$spinning 5s linear infinite"},codeIcon:{marginLeft:"auto"},code:{display:"flex",flexDirection:"column"}})})),V=function(){var e=W();return Object(n.useEffect)((function(){G.a.highlightAll()}),[]),r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"CSS Animation"),r.a.createElement(E.a,{variant:"h5"},"Untenstehend sind Beispiele f\xfcr CSS Animationen zu finden"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Einfache CSS Animation"),r.a.createElement(R.a,{className:e.card,variant:"outlined"},r.a.createElement("div",{className:e.box})),r.a.createElement(U,null,'import React from "react";\nimport { Card, createStyles, makeStyles } from "@material-ui/core";\n\nconst useStyles = makeStyles((theme) =>\n  createStyles({\n    "@keyframes spinning": {\n      "0%": { marginLeft: "0" },\n      "50%": { marginLeft: "100%", transform: "rotate(1080deg)" },\n      "100%": { marginLeft: "0" },\n    },\n    card: {\n      padding: 40,\n      marginTop: 20,\n    },\n    box: {\n      backgroundColor: theme.palette.primary.main,\n      height: 20,\n      width: 20,\n      animation: "$spinning 5s linear infinite",\n    },\n  })\n);\n        \nconst CssAnimations = () => {\n  const classes = useStyles();\n\n  return (\n    <Card className={classes.card} variant="outlined">\n      <div className={classes.box}/>\n    </Card>\n  )\n};'))},$=Object(u.a)((function(e){return Object(d.a)({card:{padding:40,marginTop:20},svgContent:{height:30,width:"100%"},rectangle:{fill:e.palette.primary.main,transformOrigin:"center",transformBox:"fill-box"}})})),K=function(){var e=$();return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"SVG Animation"),r.a.createElement(E.a,{variant:"h5"},"Untenstehend sind Beispiele f\xfcr SVG Animationen zu finden"),r.a.createElement(E.a,{variant:"h6"},"Einfache SVG Animation"),r.a.createElement(R.a,{className:e.card,variant:"outlined"},r.a.createElement("svg",{className:e.svgContent},r.a.createElement("rect",{y:5,className:e.rectangle,width:20,height:20,origin:"center",viewBox:"fill-content",rotate:"20"},r.a.createElement("animate",{attributeName:"x",from:"0",to:"0",dur:"5s",values:"0;100%;0",keyTimes:"0;0.5;1",repeatCount:"indefinite"}),r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0",to:"0",dur:"5s",values:"0;1080;0",keyTimes:"0;0.5;1",repeatCount:"indefinite"})))),r.a.createElement(U,null,'import React from "react";\nimport { Card, createStyles, makeStyles } from "@material-ui/core";\n\nconst useStyles = makeStyles((theme) =>\n  createStyles({\n    card: {\n      padding: 40,\n      marginTop: 20,\n    },\n    svgContent: {\n      height: 30,\n      width: "100%",\n    },\n    rectangle: {\n      fill: theme.palette.primary.main,\n      transformOrigin: "center",\n      transformBox: "fill-box",\n    },\n  })\n);\n        \nconst SvgAnimations = () => {\n  const classes = useStyles();\n  return (\n    <Card className={classes.card} variant="outlined">\n      <svg className={classes.svgContent}>\n        <rect\n          y={5}\n          className={classes.rectangle}\n          width={20}\n          height={20}\n          origin="center"\n          viewBox="fill-content"\n          rotate="20"\n        >\n          <animate\n            attributeName="x"\n            from="0"\n            to="0"\n            dur="5s"\n            values="0;100%;0"\n            keyTimes="0;0.5;1"\n            repeatCount="indefinite"\n          />\n          <animateTransform\n            attributeName="transform"\n            attributeType="XML"\n            type="rotate"\n            from="0"\n            to="0"\n            dur="5s"\n            values="0;1080;0"\n            keyTimes="0;0.5;1"\n            repeatCount="indefinite"\n          />\n        </rect>\n      </svg>\n    </Card>\n  );\n};'))},J=a(134),X=a(135),_=Object(u.a)((function(e){return Object(d.a)({card:{padding:40,marginTop:20,height:500,overflowY:"auto"},box:{backgroundColor:e.palette.primary.main,height:20,width:20},boxContent:{height:800,width:"100%",textAlign:"center"},hello:{marginTop:300}})})),Y=function(){var e=_(),t=Object(n.useState)(void 0),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(J.a)({target:i,threshold:0});return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"Scroll activated Animationen"),r.a.createElement(E.a,{variant:"h5"},"Untenstehend sind Beispiele f\xfcr Scroll activated Animationen"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Einfache scroll activated Animation"),r.a.createElement(R.a,{className:e.card,variant:"outlined",ref:function(e){return e&&l(e)}},r.a.createElement("div",{className:e.boxContent},r.a.createElement(X.a,{direction:"left",in:!c},r.a.createElement(E.a,null,"Scroll Down")),r.a.createElement(X.a,{direction:"right",in:c},r.a.createElement(E.a,{className:e.hello},"Hello fellow scroll enthusiast")))),r.a.createElement(U,null,'import {\n  Card,\n  createStyles,\n  makeStyles,\n  Slide,\n  Typography,\n  useScrollTrigger,\n} from "@material-ui/core";\nimport React, { useState } from "react";\n\n\nconst useStyles = makeStyles((theme) =>\n  createStyles({\n    card: {\n      padding: 40,\n      marginTop: 20,\n      height: 500,\n      overflowY: "auto",\n    },\n    box: {\n      backgroundColor: theme.palette.primary.main,\n      height: 20,\n      width: 20,\n    },\n    boxContent: {\n      height: 800,\n      width: "100%",\n      textAlign: "center",\n    },\n    hello: {\n      marginTop: 300,\n    },\n  })\n);\n\nconst ScrollActivated = () => {\n  const classes = useStyles();\n  const [target, setTarget] = useState(undefined);\n  const trigger = useScrollTrigger({ target: target, threshold: 0 });\n  return (\n    <Card\n        className={classes.card}\n        variant="outlined"\n        ref={(t) => t && setTarget(t)}>\n        <div className={classes.boxContent}>\n          <Slide direction={"left"} in={!trigger}>\n            <Typography>Scroll Down</Typography>\n          </Slide>\n          <Slide direction={"right"} in={trigger}>\n            <Typography className={classes.hello}>\n              Hello fellow scroll enthusiast\n            </Typography>\n          </Slide>\n        </div>\n    </Card>\n  );\n};'))},Z=function(){return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"Impressum"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"Kontaktadresse"),r.a.createElement(E.a,{variant:"body2"},"Severin Nauer"),r.a.createElement(E.a,{variant:"body2"},"Bodmern 2"),r.a.createElement(E.a,{variant:"body2"},"8847 Egg"),r.a.createElement(E.a,{variant:"body2"},"Schweiz"),r.a.createElement(E.a,{variant:"body2"},"severin.nauer@gmail.com"))},ee=a(13),te=Object(u.a)((function(e){return Object(d.a)({card:{padding:40,marginTop:20,display:"flex",overflowX:"auto"},canvas:{margin:"0 auto"}})})),ae=function(){var e=te(),t=Object(n.useRef)(null),a=Object(ee.a)(),i=Object(g.a)((function(e){return e.breakpoints.down("sm")}))?300:400;return Object(n.useEffect)((function(){var e,n=function(e,t){e.beginPath(),e.arc(0,0,t,0,2*Math.PI),e.fillStyle="white",e.fill(),e.lineWidth=.05*t,e.stroke(),e.beginPath(),e.fillStyle="#333",e.fill()},r=function(e,t){var a,n;for(e.font=.15*t+"px arial",e.textBaseline="middle",e.textAlign="center",n=1;n<13;n++)a=n*Math.PI/6,e.rotate(a),e.translate(0,.85*-t),e.rotate(-a),e.fillText(n.toString(),0,0),e.rotate(a),e.translate(0,.85*t),e.rotate(-a)},l=function(e,t){var a=new Date,n=a.getHours(),r=a.getMinutes(),i=a.getSeconds();n=(n%=12)*Math.PI/6+r*Math.PI/360+i*Math.PI/21600,o(e,n,.5*t,.07*t),r=r*Math.PI/30+i*Math.PI/1800,o(e,r,.8*t,.07*t),i=i*Math.PI/30,o(e,i,.9*t,.02*t)},o=function(e,t,a,n){e.beginPath(),e.lineWidth=n,e.lineCap="round",e.moveTo(0,0),e.rotate(t),e.lineTo(0,-a),e.stroke(),e.rotate(-t)},c=null===(e=t.current)||void 0===e?void 0:e.getContext("2d");if(c){var s=i/2;c.translate(s,s);var m=.9*s,u=setInterval((function(){return function(e,t){e.shadowBlur=3,e.shadowColor=a.palette.grey[800],e.lineCap="round",n(e,t),r(e,t),l(e,t)}(c,m)}),1e3);return function(){return clearInterval(u)}}}),[t,a.palette.grey,i]),r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"HTML Canvas Animation"),r.a.createElement(E.a,{variant:"h5"},"Untenstehend sind Beispiele f\xfcr HTML Canvas Animation zu finden"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"HTML Canvas Analog Uhr"),r.a.createElement(R.a,{className:e.card,variant:"outlined"},r.a.createElement("canvas",{height:i,width:i,className:e.canvas,ref:t})),r.a.createElement(U,null,'import {\n  Card,\n  createStyles,\n  makeStyles,\n  useTheme,\n  useMediaQuery,\n  Theme,\n} from "@material-ui/core";\nimport React, { useEffect, useRef } from "react";\n\nconst useStyles = makeStyles((theme) =>\n  createStyles({\n    card: {\n      padding: 40,\n      marginTop: 20,\n      display: "flex",\n      overflowX: "auto",\n    },\n    canvas: {\n      margin: "0 auto",\n    },\n  })\n);\n\nconst HtmlCanvas = () => {\n  const classes = useStyles();\n  const canvas = useRef<HTMLCanvasElement>(null);\n  const theme = useTheme();\n\n  const isMobile = useMediaQuery((theme: Theme) =>\n    theme.breakpoints.down("sm")\n  );\n\n  const canvasSize = isMobile ? 300 : 400;\n\n  useEffect(() => {\n    const drawClock = (ctx: CanvasRenderingContext2D, radius: number) => {\n      ctx.shadowBlur = 3;\n      ctx.shadowColor = theme.palette.grey[800];\n      ctx.lineCap = "round";\n      drawFace(ctx, radius);\n      drawNumbers(ctx, radius);\n      drawTime(ctx, radius);\n    };\n\n    const drawFace = (ctx: CanvasRenderingContext2D, radius: number) => {\n      ctx.beginPath();\n      ctx.arc(0, 0, radius, 0, 2 * Math.PI);\n      ctx.fillStyle = "white";\n      ctx.fill();\n      ctx.lineWidth = radius * 0.05;\n      ctx.stroke();\n      ctx.beginPath();\n      ctx.fillStyle = "#333";\n      ctx.fill();\n    };\n\n    const drawNumbers = (ctx: CanvasRenderingContext2D, radius: number) => {\n      var ang;\n      var num;\n      ctx.font = radius * 0.15 + "px arial";\n      ctx.textBaseline = "middle";\n      ctx.textAlign = "center";\n      for (num = 1; num < 13; num++) {\n        ang = (num * Math.PI) / 6;\n        ctx.rotate(ang);\n        ctx.translate(0, -radius * 0.85);\n        ctx.rotate(-ang);\n        ctx.fillText(num.toString(), 0, 0);\n        ctx.rotate(ang);\n        ctx.translate(0, radius * 0.85);\n        ctx.rotate(-ang);\n      }\n    };\n\n    const drawTime = (ctx: CanvasRenderingContext2D, radius: number) => {\n      var now = new Date();\n      var hour = now.getHours();\n      var minute = now.getMinutes();\n      var second = now.getSeconds();\n      //hour\n      hour = hour % 12;\n      hour =\n        (hour * Math.PI) / 6 +\n        (minute * Math.PI) / (6 * 60) +\n        (second * Math.PI) / (360 * 60);\n      drawHand(ctx, hour, radius * 0.5, radius * 0.07);\n      //minute\n      minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);\n      drawHand(ctx, minute, radius * 0.8, radius * 0.07);\n      // second\n      second = (second * Math.PI) / 30;\n      drawHand(ctx, second, radius * 0.9, radius * 0.02);\n    };\n\n    const drawHand = (\n      ctx: CanvasRenderingContext2D,\n      pos: number,\n      length: number,\n      width: number\n    ) => {\n      ctx.beginPath();\n      ctx.lineWidth = width;\n      ctx.lineCap = "round";\n      ctx.moveTo(0, 0);\n      ctx.rotate(pos);\n      ctx.lineTo(0, -length);\n      ctx.stroke();\n      ctx.rotate(-pos);\n    };\n    const ctx = canvas.current?.getContext("2d");\n    if (ctx) {\n      const halfHeight = canvasSize / 2;\n      ctx.translate(halfHeight, halfHeight);\n      const radius = halfHeight * 0.9;\n      const interval = setInterval(() => drawClock(ctx, radius), 1000);\n      return () => clearInterval(interval);\n    }\n  }, [canvas, theme.palette.grey, canvasSize]);\n  \n  return (\n    <Card className={classes.card} variant="outlined">\n      <canvas\n        height={canvasSize}\n        width={canvasSize}\n        className={classes.canvas}\n        ref={canvas} />\n    </Card>\n    );\n  };'))},ne=a(137),re=a(138),ie=a(139),le=a(140),oe=a(141),ce=Object(s.a)(R.a)({marginTop:20,marginBottom:20,overflowX:"auto"}),se=Object(u.a)((function(e){return Object(d.a)({card:{padding:40,marginTop:20,display:"flex"},audio:{margin:"auto"}})})),me=[{Type:"MP3",Compression:"compressed",Support:"Sehr gut",Quality:"H\xe4ngt von Compression ab",Size:"Klein"},{Type:"OGG",Compression:"compressed",Support:"Nicht so gut",Quality:"H\xe4ngt von Compression ab",Size:"am kleinsten"},{Type:"WAV",Compression:"uncompressed",Support:"Gut",Quality:"am Besten",Size:"Gross"}],ue=function(){var e=se();return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"Soundformate"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Verf\xfcgbare Formate"),r.a.createElement(E.a,{variant:"body2"},"Im Browser sind drei Sound Formate vef\xfcgbar. OGG, MP3 und WAV"),r.a.createElement(ce,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(ie.a,null,r.a.createElement(le.a,null,"Typ"),r.a.createElement(le.a,null,"Compression"),r.a.createElement(le.a,null,"Browser Support"),r.a.createElement(le.a,null,"Qualit\xe4t"),r.a.createElement(le.a,null,"Gr\xf6sse"))),r.a.createElement(oe.a,null,me.map((function(e){return r.a.createElement(ie.a,{key:e.Type},r.a.createElement(le.a,null,e.Type),r.a.createElement(le.a,null,e.Compression),r.a.createElement(le.a,null,e.Support),r.a.createElement(le.a,null,e.Quality),r.a.createElement(le.a,null,e.Size))}))))),r.a.createElement(E.a,{variant:"body2"},"Empfehlung 2020: ",r.a.createElement("b",null,"MP3")," (ausser die Soundqualit\xe4t muss extrem gut sein)"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Beispiel f\xfcr Einbindung einer MP3 datei"),r.a.createElement(R.a,{className:e.card},r.a.createElement("audio",{controls:!0,className:e.audio},r.a.createElement("source",{src:"".concat("","/assets/fileformats/sound/mp3-demo.mp3"),type:"audio/mpeg"}))),r.a.createElement(U,null,'<audio controls>\n  <source\n    src={`${process.env.PUBLIC_URL}/assets/fileformats/sound/mp3-demo.mp3`}\n    type="audio/mpeg"\n  />\n</audio>'))},de=a(142),pe=Object(u.a)((function(e){return Object(d.a)({card:{padding:40,marginTop:20},mainColor:{backgroundColor:e.palette.primary.main,height:100,width:100,display:"flex"},text:{margin:"auto",color:e.palette.primary.contrastText}})})),ge=function(){var e=pe(),t=Object(ee.a)();return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"Style Guide"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"Material UI"),r.a.createElement(E.a,{variant:"body1"},"Diese Seite benutzt"," ",r.a.createElement(de.a,{href:"https://material.io/develop/web"},"Material UI")," als Grundlage."),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h6"},"Komponenten"),r.a.createElement(E.a,{variant:"body1"},"Als ",r.a.createElement(de.a,{href:"https://material-ui.com/"},"Komponenten Bibliothek")," ","wurde die React ausf\xfchrung f\xfcr Material UI verwendet. Sie beinhaltet die grundlegenden Komponenten und Styles die vom Material UI Style Guide definiert sind."),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"Schrift"),r.a.createElement(E.a,{variant:"body1"},"Als Schriftart wurde die"," ",r.a.createElement(de.a,{href:"https://material-ui.com/components/typography/#roboto-font-cdn"}," ","Roboto Schrift")," ","von Google verwendet. Als Gr\xf6ssen wurden die"," ",r.a.createElement(de.a,{href:"https://material-ui.com/components/typography/#component"}," ","Standardmasse"," ")," ","von dem Material UI theme Verwendet"),r.a.createElement(R.a,{className:e.card},r.a.createElement(E.a,{variant:"h1",component:"h2",gutterBottom:!0},"h1. Heading"),r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"h2. Heading"),r.a.createElement(E.a,{variant:"h3",gutterBottom:!0},"h3. Heading"),r.a.createElement(E.a,{variant:"h4",gutterBottom:!0},"h4. Heading"),r.a.createElement(E.a,{variant:"h5",gutterBottom:!0},"h5. Heading"),r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"h6. Heading"),r.a.createElement(E.a,{variant:"subtitle1",gutterBottom:!0},"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"),r.a.createElement(E.a,{variant:"subtitle2",gutterBottom:!0},"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"),r.a.createElement(E.a,{variant:"body1",gutterBottom:!0},"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."),r.a.createElement(E.a,{variant:"body2",gutterBottom:!0},"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."),r.a.createElement(E.a,{variant:"button",display:"block",gutterBottom:!0},"button text"),r.a.createElement(E.a,{variant:"caption",display:"block",gutterBottom:!0},"caption text"),r.a.createElement(E.a,{variant:"overline",display:"block",gutterBottom:!0},"overline text")),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"Farbpalette"),r.a.createElement(E.a,{variant:"h6"},"Prim\xe4rfarbe"),r.a.createElement(R.a,{className:e.card},r.a.createElement(E.a,{variant:"subtitle1"},"Main"),r.a.createElement("br",null),r.a.createElement("div",{className:e.mainColor},r.a.createElement(E.a,{variant:"body1",className:e.text},t.palette.primary.main))))},he=[{Abbreviation:"GIF",Format:"Graphics Interchange Format",Extension:".gif"},{Abbreviation:"ICO",Format:"Microsoft Icon",Extension:".ico, .cur"},{Abbreviation:"JPEG",Format:"Joint Photographic Expert Group image",Extension:".jpg, .jpeg, .jfif, .pjpeg, .pjp"},{Abbreviation:"PNG",Format:"Portable Network Graphics",Extension:".png"},{Abbreviation:"SVG",Format:"Scalable Vector Graphics",Extension:".svg"}],fe=Object(u.a)((function(e){return Object(d.a)({image:{width:"100%",marginBottom:-10},gif:Object(c.a)({width:"100%",marginBottom:-10},e.breakpoints.up("md"),{maxWidth:"60%",margin:"20px auto"}),gifCard:{display:"flex"}})})),be=function(){var e=fe();return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"Bildformate"),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"Gebr\xe4uchliche Formate"),r.a.createElement(ce,null,r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(ie.a,null,r.a.createElement(le.a,null,"Abk\xfcrzung"),r.a.createElement(le.a,null,"Datei Format"),r.a.createElement(le.a,null,"Endungen"))),r.a.createElement(oe.a,null,he.map((function(e){return r.a.createElement(ie.a,{key:e.Abbreviation},r.a.createElement(le.a,null,e.Abbreviation),r.a.createElement(le.a,null,e.Format),r.a.createElement(le.a,null,e.Extension))}))))),r.a.createElement(E.a,{variant:"h5"},"JPEG einbinden"),r.a.createElement(R.a,null,r.a.createElement("img",{className:e.image,src:"".concat("","/assets/fileformats/images/image.jpg"),alt:"Meine Aussicht"})),r.a.createElement(U,null,'<Card>\n  <img\n    className={classes.image}\n    src={`${process.env.PUBLIC_URL}/assets/fileformats/images/image.jpg`}\n    alt="Meine Aussicht"\n  />\n</Card>'),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"PNG einbinden"),r.a.createElement(R.a,null,r.a.createElement("img",{className:e.image,src:"".concat("","/assets/fileformats/images/image.png"),alt:"Meine Aussicht"})),r.a.createElement(U,null,'<Card>\n  <img\n    className={classes.image}\n    src={`${process.env.PUBLIC_URL}/assets/fileformats/images/image.png`}\n    alt="Meine Aussicht"\n  />\n</Card>'),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5"},"GIF einbinden"),r.a.createElement(R.a,{className:e.gifCard},r.a.createElement("img",{className:e.gif,src:"".concat("","/assets/fileformats/images/trump.gif"),alt:"Funny Gif"})),r.a.createElement(U,null,'<Card>\n  <img\n    className={classes.image}\n    src={`${process.env.PUBLIC_URL}/assets/fileformats/images/trump.gif`}\n    alt="Funny Gif"\n  />\n</Card>'))},Ee=a(76),ve=a(56),ye=a(77),xe=a(70),Se=function(){return r.a.createElement(Q,null,r.a.createElement(E.a,{variant:"h4"},"Zeitplan"),r.a.createElement("br",null),r.a.createElement(Ee.a,{plugins:[ve.b,ye.a,xe.a],initialView:"timeGridWeek",headerToolbar:{left:"prev,next",center:"title",right:"timeGridWeek,dayGridMonth"},titleFormat:"DD.MM.yyyy",allDaySlot:!1,slotLabelFormat:"HH:00",slotMinTime:"06:00:00",dayHeaderFormat:"dd DD.MM",firstDay:1}))},we=Object(s.a)("div")((function(e){var t=e.theme;return Object(c.a)({width:"calc(100% - ".concat(Ge,"px)"),marginLeft:"auto"},t.breakpoints.down("sm"),{width:"100%"})})),Ce=[{Name:"Konzept",Selected:!1,Route:"concept",SubItems:[{Name:"Mockup",Selected:!1,Route:"mock"},{Name:"Style Guide",Selected:!1,Route:"style-guide",Component:ge},{Name:"Zeitplan",Selected:!1,Route:"timeline",Component:Se}]},{Name:"Urheberrecht",Selected:!1,Route:"copyright",SubItems:[{Name:"Impressum",Selected:!1,Route:"impressum",Component:Z}]},{Name:"Dateiformate",Selected:!1,Route:"fileformat",SubItems:[{Name:"Bildformate",Selected:!1,Route:"image",Component:be},{Name:"Soundformate",Selected:!1,Route:"sound",Component:ue}]},{Name:"Animationen",Selected:!1,Route:"animations",SubItems:[{Name:"CSS Animation",Selected:!1,Route:"css",Component:V},{Name:"SVG Animation",Selected:!1,Route:"svg",Component:K},{Name:"Scroll Activated",Selected:!1,Route:"scroll-activated",Component:Y},{Name:"HTML Canvas",Selected:!1,Route:"canvas",Component:ae}]},{Name:"Automatisierung",Selected:!1},{Name:"Testen",Selected:!1},{Name:"Eigene Entwicklung",Selected:!1},{Name:"Allgemeines",Selected:!1}],Ne=function(){return r.a.createElement(we,null,r.a.createElement(f.a,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(P,null)),Ce.map((function(e){var t;return null===(t=e.SubItems)||void 0===t?void 0:t.map((function(t){return r.a.createElement(j.a,{exact:!0,path:"/".concat(e.Route,"/").concat(t.Route),component:t.Component})}))}))))},je=Object(u.a)((function(e){return Object(d.a)({drawerContainer:{overflow:"auto"},nested:{paddingLeft:e.spacing(4)}})}));function Oe(e){var t=e.primary,a=e.to,n=e.selected,i=e.className,l=e.onClick,o=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(O.b,Object.assign({to:a,ref:t},e))}))}),[a]);return r.a.createElement(T.a,{button:!0,selected:n,className:i,component:o,onClick:l},r.a.createElement(M.a,{primary:t,primaryTypographyProps:{variant:"body2"}}))}var ke=function(){var e=je(),t=Object(n.useState)(Ce),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(j.f)(),s=Object(n.useCallback)((function(e){return i.map((function(t){var a;return Object(k.a)(Object(k.a)({},t),{},{Selected:e.pathname.includes(t.Name),SubItems:null===(a=t.SubItems)||void 0===a?void 0:a.map((function(a){return Object(k.a)(Object(k.a)({},a),{},{Selected:e.pathname.includes("".concat(t.Name,"/").concat(a.Name))})}))})}))}),[i]);Object(n.useEffect)((function(){var e=c.listen((function(e){l(s(e))}));return function(){return e&&e()}}),[c,s]),Object(n.useEffect)((function(){var e=s(c.location);l(null===e||void 0===e?void 0:e.map((function(e){var t;return(null===(t=e.SubItems)||void 0===t?void 0:t.find((function(t){return c.location.pathname.includes("".concat(e.Name,"/").concat(t.Name))})))?Object(k.a)(Object(k.a)({},e),{},{Expanded:!0}):Object(k.a)({},e)})))}),[]);return r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(I.a,null,i.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(T.a,{button:!0,onClick:function(){return function(e){return function(t){l(i.map((function(a){return a.Name===e.Name?Object(k.a)(Object(k.a)({},a),{},{Expanded:t}):a})))}}(t)(!t.Expanded)}},r.a.createElement(M.a,{primary:t.Name,primaryTypographyProps:{variant:"subtitle2"}})),t.SubItems&&r.a.createElement(B.a,{in:t.Expanded,unmountOnExit:!0},r.a.createElement(I.a,{component:"div",disablePadding:!0},t.SubItems.map((function(a,n){return r.a.createElement(Oe,{selected:a.Selected,key:n,primary:a.Name,className:e.nested,to:"/".concat(t.Route,"/").concat(a.Route)})})))))}))))},Ie=a(150),Te=a(71),Me=a.n(Te),Be=Object(u.a)((function(e){return Object(d.a)({search:{display:"flex",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.25),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.35)},margin:e.spacing("auto",2),width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute"},inputInput:{color:e.palette.primary.contrastText,paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}})})),Ae=function(){var e=Be();return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(Me.a,null)),r.a.createElement(Ie.a,{placeholder:"Search\u2026",classes:{input:e.inputInput},inputProps:{"aria-label":"search"}}))},Pe=(a(99),a(100),a(101),a(102),Object(s.a)("div")({height:"100%",width:"100%"})),Re=Object(s.a)(m.a)((function(e){return{margin:e.theme.spacing(0,1)}})),Fe=Object(s.a)("div")({display:"flex"}),Ge=240,Le=Object(u.a)((function(e){return Object(d.a)({search:{display:"flex",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.25),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.35)},margin:e.spacing("auto",2),width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute"},toolbar:{display:"flex",justifyContent:"space-between"},inputInput:{color:e.palette.primary.contrastText,paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")},title:{margin:"auto 0"},menuButton:{marginLeft:0},drawer:{width:Ge,flexShrink:0},drawerPaper:{width:Ge,boxShadow:"5px 5px 5px ".concat(e.palette.divider),border:"none"},appbar:Object(c.a)({zIndex:e.zIndex.drawer+1},e.breakpoints.down("sm"),{zIndex:e.zIndex.modal+1}),link:{textDecoration:"none",color:e.palette.primary.contrastText,display:"inherit"}})})),He=function(){var e=Le(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(j.f)();Object(n.useEffect)((function(){var e=localStorage.getItem("path");e&&(localStorage.removeItem("path"),c.push(e))}),[c]);var s=Object(g.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(Pe,null,r.a.createElement(h.a,{className:e.appbar,position:"fixed",color:"primary"},r.a.createElement(f.a,{className:e.toolbar},r.a.createElement(Fe,null,r.a.createElement(b.a,{mdUp:!0},r.a.createElement(Re,{className:e.menuButton,"aria-label":"Menu",color:"inherit",onClick:function(){return l(!i)}},r.a.createElement(N.a,null))),r.a.createElement(O.b,{to:"/",className:e.link},r.a.createElement(E.a,{className:e.title,variant:"h6"},"Modul 152 Showcase"))),r.a.createElement(Fe,null,r.a.createElement(b.a,{smDown:!0},r.a.createElement(Ae,null)),r.a.createElement(b.a,{smDown:!0},r.a.createElement(Re,{"aria-label":"Set Dark Mode",color:"inherit"},r.a.createElement(x.a,null))),r.a.createElement(b.a,{smDown:!0},r.a.createElement("a",{className:e.link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SeverinNauer/M152"},r.a.createElement(Re,{"aria-label":"Github Page",color:"inherit"},r.a.createElement(w.a,null))))))),r.a.createElement(v.a,{className:e.drawer,variant:s?"temporary":"persistent",classes:{paper:e.drawerPaper},open:i||!s,onBackdropClick:function(){return l(!1)}},r.a.createElement(f.a,null),r.a.createElement(ke,null)),r.a.createElement(Ne,null))},De=a(75),ze=a(147);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=Object(De.a)({palette:{primary:{main:"#FF6600",contrastText:"#FFFFFF"},background:{default:"#FFFFFF"}}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O.a,null,r.a.createElement(ze.a,{theme:Ue},r.a.createElement(He,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){e.exports=a(103)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.5160ade0.chunk.js.map