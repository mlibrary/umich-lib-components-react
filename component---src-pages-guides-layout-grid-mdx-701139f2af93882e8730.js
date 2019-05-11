(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return j}),n.d(t,"_frontmatter",function(){return M});n(18);var a=n(77),o=n.n(a),i=n(22),c=n.n(i),s=n(4),r=n(0),m=n.n(r),l=n(2),b=n(303),p=n(1),u=n(128),g=n.n(u),h=n(129),d=n.n(h),O={},j=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=b.a,n}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return Object(s.b)(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},O,n),components:t},Object(s.b)(p.Text,{lede:!0},"Grid systems are used for creating page layouts through a series of rows and columns that hold content. U-M Library’s Design System uses a responsive, fluid grid system that scales up to 12 columns as the device or viewport size increases."),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Basic structure"),Object(s.b)("img",{src:g.a,alt:""}),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Margins"),Object(s.b)(l.MDXTag,{name:"p",components:t},"The 12 column grid has a maximum width of 1280px. Margins vary depending on screen width."),Object(s.b)(l.MDXTag,{name:"ul",components:t},Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width ≥ 768px = 2XL")),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width < 768px = M"))),Object(s.b)(l.MDXTag,{name:"p",components:t},"See code for using the ",Object(s.b)(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/guides/layout/code/#margins"}},"Margins component"),"."),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Gutters"),Object(s.b)(l.MDXTag,{name:"p",components:t},"The space between columns is called gutters. Gutters vary depending on screen width."),Object(s.b)(l.MDXTag,{name:"ul",components:t},Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width ≥ 768px = 24px gutter")," (size L spacing)"),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width < 768px = 12px gutter")," (size SM spacing)")),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Columns"),Object(s.b)(l.MDXTag,{name:"p",components:t},"Designs should be limited to a maximum of 12 columns. Mobile will have 4 columns."),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Example"),Object(s.b)(l.MDXTag,{name:"p",components:t},"Let’s walk through an example where the screen width is 1280px."),Object(s.b)(l.MDXTag,{name:"ul",components:t},Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Our margins are 5% of the screen width on each side. This results in 64px on the left and 64px on the right."),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Our gutters (11 in total) are fixed, and at this screen width, are 24px each."),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Our columns (12 in total) are responsive and will automatically size to 74px each (remaining 888px divided by 12).")),Object(s.b)("img",{src:d.a,alt:""}))},t}(m.a.Component);j.isMDXComponent=!0;var M={}},303:function(e,t,n){"use strict";var a=n(58),o=n(19),i=n.n(o),c=(n(95),n(57)),s=n(4),r=(n(0),n(304)),m=n(1),l=n(306),b=n(305),p=Object(c.a)("div",{target:"e63abck0"})({name:"1kmcw8",styles:"max-width:1024px;"}),u=Object(c.a)("div",{target:"e63abck1"})({"> div > *:not(:last-child)":{marginBottom:m.SPACING.M},"span, p, li, h1, h2, h3, h4, h5, h6":{wordBreak:"break-word"},img:{maxWidth:"100%"},pre:{whiteSpace:"normal"}}),g=Object(c.a)("div",{target:"e63abck2"})({name:"b1u16s",styles:"display:flex;justify-content:flex-end;flex-direction:column;height:auto;"}),h={borderBottom:"solid 4px "+m.COLORS.teal[400],fontWeight:"800"},d=function(e){var t=e.isPartiallyCurrent,n=e.href,a=e.location;return t&&a.pathname.match(n+"/?$")?{style:h}:{}},O=Object(c.a)(r.a,{target:"e63abck3"})(i()({color:m.COLORS.neutral[400],display:"inline-block",padding:m.SPACING.XS+" 0",textDecoration:"none"},m.TYPOGRAPHY["3XS"],{fontWeight:"600"}));t.a=function(e){var t,n=e.pageContext.frontmatter,o=n.title,i=n.navigation,c=e.location;return c.pathname&&(t="https://github.com/mlibrary/umich-lib-ui/tree/next/packages/docs/src/pages"+c.pathname.slice(0,-1)+".mdx"),Object(s.b)(l.a,null,Object(s.b)("article",null,Object(s.b)(b.a,{title:o}),Object(s.b)(g,null,Object(s.b)(m.Margins,null,Object(s.b)(p,null,Object(s.b)(m.Heading,{level:1,size:"3XL",style:{paddingBottom:m.SPACING.M,marginTop:m.SPACING["2XL"]}},o),i&&Object(s.b)("ol",{css:Object(a.a)({borderBottom:"solid 1px "+m.COLORS.neutral[100]})},i.map(function(e){var t=e.text,n=e.to;return Object(s.b)("li",{key:t+n,style:{display:"inline-block",marginRight:m.SPACING.L}},Object(s.b)(O,{to:n,getProps:d},t))}))))),Object(s.b)(m.Margins,null,Object(s.b)(p,{style:{marginTop:m.SPACING.XL,marginBottom:m.SPACING["2XL"]}},Object(s.b)(u,null,e.children),t&&Object(s.b)("div",{style:{display:"block",marginTop:m.SPACING.XL}},Object(s.b)(m.Link,{href:t},"Edit this page on Github"))))))}}}]);
//# sourceMappingURL=component---src-pages-guides-layout-grid-mdx-701139f2af93882e8730.js.map