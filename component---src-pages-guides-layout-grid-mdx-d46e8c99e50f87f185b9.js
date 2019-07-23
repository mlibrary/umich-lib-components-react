(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return j}),n.d(t,"_frontmatter",function(){return M});n(17);var a=n(79),o=n.n(a),i=n(24),c=n.n(i),s=n(3),r=n(0),m=n.n(r),l=n(2),p=n(347),b=n(1),g=n(137),u=n.n(g),d=n(138),h=n.n(d),O={},j=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=p.a,n}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return Object(s.b)(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},O,n),components:t},Object(s.b)(b.Text,{lede:!0},"Grid systems are used for creating page layouts through a series of rows and columns that hold content. U-M Library’s Design System uses a responsive, fluid grid system that scales up to 12 columns as the device or viewport size increases."),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Basic structure"),Object(s.b)("img",{src:u.a,alt:""}),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Margins"),Object(s.b)(l.MDXTag,{name:"p",components:t},"The 12 column grid has a maximum width of 1280px. Margins vary depending on screen width."),Object(s.b)(l.MDXTag,{name:"ul",components:t},Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width ≥ 768px = 2XL")),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width < 768px = M"))),Object(s.b)(l.MDXTag,{name:"p",components:t},"See code for using the ",Object(s.b)(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/guides/layout/code/#margins"}},"Margins component"),"."),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Gutters"),Object(s.b)(l.MDXTag,{name:"p",components:t},"The space between columns is called gutters. Gutters vary depending on screen width."),Object(s.b)(l.MDXTag,{name:"ul",components:t},Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width ≥ 768px = 24px gutter")," (size L spacing)"),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},Object(s.b)(l.MDXTag,{name:"strong",components:t,parentName:"li"},"Screen width < 768px = 12px gutter")," (size SM spacing)")),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Columns"),Object(s.b)(l.MDXTag,{name:"p",components:t},"Designs should be limited to a maximum of 12 columns. Mobile will have 4 columns."),Object(s.b)(l.MDXTag,{name:"h2",components:t},"Example"),Object(s.b)(l.MDXTag,{name:"p",components:t},"Let’s walk through an example where the screen width is 1280px."),Object(s.b)(l.MDXTag,{name:"ul",components:t},Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Our margins are 5% of the screen width on each side. This results in 64px on the left and 64px on the right."),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Our gutters (11 in total) are fixed, and at this screen width, are 24px each."),Object(s.b)(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Our columns (12 in total) are responsive and will automatically size to 74px each (remaining 888px divided by 12).")),Object(s.b)("img",{src:h.a,alt:""}))},t}(m.a.Component);j.isMDXComponent=!0;var M={}},347:function(e,t,n){"use strict";var a=n(16),o=(n(60),n(80),n(105)),i=n(3),c=(n(0),n(348)),s=n(1),r=n(350),m=n(349),l=Object(o.a)("div",{target:"ezoplek0"})({"> div > *":{marginBottom:s.SPACING.M},"h2:not(:last-child)":{marginTop:s.SPACING["2XL"]},"h3:not(:last-child)":{marginTop:s.SPACING.XL},"h4:not(:last-child)":{marginTop:s.SPACING.XL},"h5:not(:last-child)":{marginTop:s.SPACING.XL}}),p=Object(o.a)("div",{target:"e63abck0"})({name:"1kmcw8",styles:"max-width:1024px;"}),b=Object(o.a)("div",{target:"e63abck1"})({name:"b1u16s",styles:"display:flex;justify-content:flex-end;flex-direction:column;height:auto;"}),g={borderBottom:"solid 4px "+s.COLORS.teal[400],fontWeight:"800"},u=function(e){var t=e.isPartiallyCurrent,n=e.href,a=e.location;return t&&a.pathname.match(n+"/?$")?{style:g}:{}},d=Object(o.a)(c.a,{target:"e63abck2"})({color:s.COLORS.neutral[400],display:"inline-block",padding:s.SPACING.XS+" 0",textDecoration:"none",fontWeight:"600"});t.a=function(e){var t,n=e.pageContext.frontmatter,o=n.title,c=n.navigation,g=e.location;return g.pathname&&(t="https://github.com/mlibrary/umich-lib-ui/tree/master/packages/docs/src/pages"+g.pathname.replace(/\/$/,"")+".mdx"),Object(i.b)(r.a,null,Object(i.b)("article",null,Object(i.b)(m.a,{title:o}),Object(i.b)(b,null,Object(i.b)(s.Margins,null,Object(i.b)(p,null,Object(i.b)(s.Heading,{level:1,size:"3XL",style:{paddingBottom:s.SPACING.M,marginTop:s.SPACING["2XL"]}},o),c&&Object(i.b)("ol",{css:Object(a.a)({borderBottom:"solid 1px "+s.COLORS.neutral[100]})},c.map(function(e){var t=e.text,n=e.to;return Object(i.b)("li",{key:t+n,style:{display:"inline-block",marginRight:s.SPACING.L}},Object(i.b)(d,{to:n,getProps:u},t))}))))),Object(i.b)(s.Margins,null,Object(i.b)(p,{style:{marginTop:s.SPACING.XL,marginBottom:s.SPACING["2XL"]}},Object(i.b)(l,null,e.children),t&&Object(i.b)("div",{style:{display:"block",marginTop:s.SPACING.XL}},Object(i.b)(s.Link,{href:t},"Edit this page on Github"))))))}}}]);
//# sourceMappingURL=component---src-pages-guides-layout-grid-mdx-d46e8c99e50f87f185b9.js.map