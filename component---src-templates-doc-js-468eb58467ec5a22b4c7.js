(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(i,r,t){"use strict";t.r(r);var e=t(166),n=t(9),s=t(0),a=t.n(s),o=t(180),c=t(47),p=t.n(c),j=t(90),_=t.n(j),S=t(273),l=t.n(S),y=t(164),u=t.n(y),d=t(7),b=t.n(d),g=(t(58),t(723)),h=t(173),m=t(292),x=Object.assign({},h,{Component:m.a}),E=Object(e.a)("div",{target:"ex262az0"})({name:"1dsb4wi",styles:"margin:0 calc(-1rem + -1px);"}),O=Object(e.a)("div",{target:"ex262az1"})({border:"solid 1px "+h.COLORS.grey[400],marginBottom:"-1px"}),C=function(i){function r(){for(var r,t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(r=i.call.apply(i,[this].concat(e))||this).state={showEditor:!1},r}return b()(r,i),r.prototype.render=function(){var i=this.props.live.error;return Object(n.b)(E,null,Object(n.b)(O,null,Object(n.b)(g.c,{style:{padding:"1rem"}})),Object(n.b)("div",{className:"code__editor"},Object(n.b)(g.a,{ignoreTabKey:!0})),i&&Object(n.b)(h.Alert,{intent:"error"},Object(n.b)(g.b,null)))},r}(a.a.Component),P=Object(g.e)(C),f=function(i){function r(){return i.apply(this,arguments)||this}return b()(r,i),r.prototype.render=function(){var i=this.props.code;return Object(n.b)(g.d,{code:i,scope:Object.assign({},x),mountStylesheet:!1},Object(n.b)(P,null))},r}(a.a.Component),B=t(157),k=(t(80),t(59),t(36),t(161),function(i){var r=i.palette;return Object(n.b)("section",null,Object(n.b)(u.a,{level:3,size:"medium"},r),Object(n.b)("ol",null,Object.keys(B.COLORS[r]).map(function(i,t){return Object(n.b)("li",{key:t,style:{background:B.COLORS[r][i],padding:"0.5rem 1rem",fontWeight:"600",color:i>400||"blue"===i?"white":"",display:"flex",justifyContent:"space-between",margin:"0 -1rem"}},Object(n.b)("span",null,i),Object(n.b)("span",null,B.COLORS[r][i]))})))}),v=t(177),G=t.n(v),L=t(201),M=t.n(L),T=t(168),w=t.n(T),A=t(167),N=Object(e.a)("pre",{target:"e12odihs0"})({display:"block",background:B.COLORS.grey[100],border:"solid 1px "+B.COLORS.grey[400],padding:"1rem",margin:"0 -1rem",code:{background:"none",padding:"0"}}),H=Object(e.a)("code",{target:"e12odihs1"})({display:"inline-block",background:B.COLORS.grey[200],borderRadius:"3px",padding:"0 0.25rem",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"80%"}),I=new l.a({components:{h2:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)(u.a,p()({level:2,size:"large"},t),r)},h3:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)(u.a,p()({level:3,size:"medium"},t),r)},h4:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)(u.a,p()({level:4,size:"small"},t),r)},h5:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)(u.a,p()({level:5,size:"xsmall"},t),r)},h6:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)(u.a,p()({level:6,size:"xsmall"},t),r)},a:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)("a",t,r)},p:function(i){var r=i.children;return Object(n.b)(G.a,null,r)},strong:function(i){var r=i.children;return Object(n.b)("strong",{style:{fontWeight:"600"}},r)},"live-code":f,code:function(i){var r=i.children;return Object(n.b)(H,null,r)},ul:function(i){var r=i.children;return Object(n.b)(M.a,{type:"bulleted"},r)},ol:function(i){var r=i.children;return Object(n.b)(M.a,{type:"numbered"},r)},pre:N,"color-palette":function(){return Object(n.b)("article",null,Object.keys(B.COLORS).map(function(i,r){return Object(n.b)(k,{palette:i,key:r})}))},"research-insight":function(i){var r=i.children;return Object(n.b)("p",{style:{borderLeft:"solid 4px",borderLeftColor:B.COLORS.blue[600],padding:"0.5rem 1rem",margin:"1rem -1rem",background:B.COLORS.blue[300]}},Object(n.b)("b",{style:{fontWeight:"700"}},Object(n.b)("span",{role:"img","aria-label":""},"💡")," Research insight:")," ",r)},"accessibility-insight":function(i){var r=i.children;return Object(n.b)("p",{style:{borderLeft:"solid 4px",borderLeftColor:B.COLORS.green[600],padding:"0.5rem 1rem",margin:"1rem -1rem",background:B.COLORS.green[400]}},Object(n.b)("b",{style:{fontWeight:"700"}},Object(n.b)("span",{role:"img","aria-label":""},"⌨️")," Accessibility:")," ",r)},text:G.a,iconography:function(){return Object(n.b)("ul",{style:{display:"flex",flexFlow:"row wrap",width:"100%"}},Object.keys(T.icons).map(function(i,r){return Object(n.b)("li",{key:r,style:{flex:"1 1 10rem",maxWidth:"10rem",height:"6rem",marginRight:"1rem"}},Object(n.b)("div",{style:{display:"flex",padding:"0.75rem",background:B.COLORS.grey[200],alignItems:"center",justifyContent:"center"}},Object(n.b)(w.a,{icon:i,size:24})),Object(n.b)("span",{style:{fontWeight:"600"}},i))}))},"gatsby-link":function(i){var r=i.to,t=i.children;return Object(n.b)(A.a,{to:r},t)},"color-intent":function(){return Object(n.b)("article",null,Object(n.b)("ol",null,Object.keys(B.INTENT_COLORS).map(function(i,r){return Object(n.b)("li",{key:r,style:{background:B.INTENT_COLORS[i],padding:"0.5rem 1rem",fontWeight:"600",color:"white",display:"flex",justifyContent:"space-between",margin:"0 -1rem"}},Object(n.b)("span",null,i),Object(n.b)("span",null,B.INTENT_COLORS[i]))})))},lede:function(i){var r=i.children,t=_()(i,["children"]);return Object(n.b)(G.a,p()({lede:!0},t),r)}},createElement:function(i,r,t){return void 0===r&&(r={}),void 0===t&&(t=[]),"div"===i?Object(n.b)(a.a.Fragment,r,t):a.a.createElement(i,r,t)}}).Compiler,R=function(i){var r=i.htmlAst;return Object(n.b)(a.a.Fragment,null,I(r))},D=new(t(720)),W=Object(e.a)("ol",{target:"e2gyum50"})({name:"acwcvw",styles:"margin-bottom:1rem;"}),K=function(i){var r=i.headings;return D.reset(),"undefined"==typeof window?null:Object(n.b)(W,null,r.map(function(i,r){if(2===i.depth){var t=document.location.pathname+"#"+D.slug(i.value);return Object(n.b)("li",{key:i.value+r},Object(n.b)(A.a,{to:t},i.value))}return null}))};t.d(r,"query",function(){return U});var z=Object(e.a)("footer",{target:"eyajrzh0"})({name:"xqqg40",styles:"margin:2rem 0;"}),U="2216387278";r.default=function(i){var r=i.data,t=r.markdownRemark,e=t.htmlAst,s=t.headings,a=r.markdownRemark.frontmatter.title,c=r.markdownRemark.fields.slug;return Object(n.b)(o.a,null,Object(n.b)("article",{role:"main",className:"content"},Object(n.b)("header",null,Object(n.b)(u.a,{level:1,size:"xlarge",style:{marginTop:"0"}},a)),Object(n.b)(K,{headings:s}),Object(n.b)("div",{className:"y-spacing"},Object(n.b)(R,{htmlAst:e})),Object(n.b)(z,null,Object(n.b)("a",{href:"https://github.com/mlibrary/umich-lib-components-react/edit/master/www/docs/"+c+".md"},"Edit this page on Github"))))}},312:function(i,r,t){var e={"./Binary_Property/ASCII.js":313,"./Binary_Property/ASCII_Hex_Digit.js":314,"./Binary_Property/Alphabetic.js":315,"./Binary_Property/Any.js":316,"./Binary_Property/Assigned.js":317,"./Binary_Property/Bidi_Control.js":318,"./Binary_Property/Bidi_Mirrored.js":319,"./Binary_Property/Case_Ignorable.js":320,"./Binary_Property/Cased.js":321,"./Binary_Property/Changes_When_Casefolded.js":322,"./Binary_Property/Changes_When_Casemapped.js":323,"./Binary_Property/Changes_When_Lowercased.js":324,"./Binary_Property/Changes_When_NFKC_Casefolded.js":325,"./Binary_Property/Changes_When_Titlecased.js":326,"./Binary_Property/Changes_When_Uppercased.js":327,"./Binary_Property/Dash.js":328,"./Binary_Property/Default_Ignorable_Code_Point.js":329,"./Binary_Property/Deprecated.js":330,"./Binary_Property/Diacritic.js":331,"./Binary_Property/Emoji.js":332,"./Binary_Property/Emoji_Component.js":333,"./Binary_Property/Emoji_Modifier.js":334,"./Binary_Property/Emoji_Modifier_Base.js":335,"./Binary_Property/Emoji_Presentation.js":336,"./Binary_Property/Extended_Pictographic.js":337,"./Binary_Property/Extender.js":338,"./Binary_Property/Grapheme_Base.js":339,"./Binary_Property/Grapheme_Extend.js":340,"./Binary_Property/Hex_Digit.js":341,"./Binary_Property/IDS_Binary_Operator.js":342,"./Binary_Property/IDS_Trinary_Operator.js":343,"./Binary_Property/ID_Continue.js":344,"./Binary_Property/ID_Start.js":345,"./Binary_Property/Ideographic.js":346,"./Binary_Property/Join_Control.js":347,"./Binary_Property/Logical_Order_Exception.js":348,"./Binary_Property/Lowercase.js":349,"./Binary_Property/Math.js":350,"./Binary_Property/Noncharacter_Code_Point.js":351,"./Binary_Property/Pattern_Syntax.js":352,"./Binary_Property/Pattern_White_Space.js":353,"./Binary_Property/Quotation_Mark.js":354,"./Binary_Property/Radical.js":355,"./Binary_Property/Regional_Indicator.js":356,"./Binary_Property/Sentence_Terminal.js":357,"./Binary_Property/Soft_Dotted.js":358,"./Binary_Property/Terminal_Punctuation.js":359,"./Binary_Property/Unified_Ideograph.js":360,"./Binary_Property/Uppercase.js":361,"./Binary_Property/Variation_Selector.js":362,"./Binary_Property/White_Space.js":363,"./Binary_Property/XID_Continue.js":364,"./Binary_Property/XID_Start.js":365,"./General_Category/Cased_Letter.js":366,"./General_Category/Close_Punctuation.js":367,"./General_Category/Connector_Punctuation.js":368,"./General_Category/Control.js":369,"./General_Category/Currency_Symbol.js":370,"./General_Category/Dash_Punctuation.js":371,"./General_Category/Decimal_Number.js":372,"./General_Category/Enclosing_Mark.js":373,"./General_Category/Final_Punctuation.js":374,"./General_Category/Format.js":375,"./General_Category/Initial_Punctuation.js":376,"./General_Category/Letter.js":377,"./General_Category/Letter_Number.js":378,"./General_Category/Line_Separator.js":379,"./General_Category/Lowercase_Letter.js":380,"./General_Category/Mark.js":381,"./General_Category/Math_Symbol.js":382,"./General_Category/Modifier_Letter.js":383,"./General_Category/Modifier_Symbol.js":384,"./General_Category/Nonspacing_Mark.js":385,"./General_Category/Number.js":386,"./General_Category/Open_Punctuation.js":387,"./General_Category/Other.js":388,"./General_Category/Other_Letter.js":389,"./General_Category/Other_Number.js":390,"./General_Category/Other_Punctuation.js":391,"./General_Category/Other_Symbol.js":392,"./General_Category/Paragraph_Separator.js":393,"./General_Category/Private_Use.js":394,"./General_Category/Punctuation.js":395,"./General_Category/Separator.js":396,"./General_Category/Space_Separator.js":397,"./General_Category/Spacing_Mark.js":398,"./General_Category/Surrogate.js":399,"./General_Category/Symbol.js":400,"./General_Category/Titlecase_Letter.js":401,"./General_Category/Unassigned.js":402,"./General_Category/Uppercase_Letter.js":403,"./Script/Adlam.js":404,"./Script/Ahom.js":405,"./Script/Anatolian_Hieroglyphs.js":406,"./Script/Arabic.js":407,"./Script/Armenian.js":408,"./Script/Avestan.js":409,"./Script/Balinese.js":410,"./Script/Bamum.js":411,"./Script/Bassa_Vah.js":412,"./Script/Batak.js":413,"./Script/Bengali.js":414,"./Script/Bhaiksuki.js":415,"./Script/Bopomofo.js":416,"./Script/Brahmi.js":417,"./Script/Braille.js":418,"./Script/Buginese.js":419,"./Script/Buhid.js":420,"./Script/Canadian_Aboriginal.js":421,"./Script/Carian.js":422,"./Script/Caucasian_Albanian.js":423,"./Script/Chakma.js":424,"./Script/Cham.js":425,"./Script/Cherokee.js":426,"./Script/Common.js":427,"./Script/Coptic.js":428,"./Script/Cuneiform.js":429,"./Script/Cypriot.js":430,"./Script/Cyrillic.js":431,"./Script/Deseret.js":432,"./Script/Devanagari.js":433,"./Script/Dogra.js":434,"./Script/Duployan.js":435,"./Script/Egyptian_Hieroglyphs.js":436,"./Script/Elbasan.js":437,"./Script/Elymaic.js":438,"./Script/Ethiopic.js":439,"./Script/Georgian.js":440,"./Script/Glagolitic.js":441,"./Script/Gothic.js":442,"./Script/Grantha.js":443,"./Script/Greek.js":444,"./Script/Gujarati.js":445,"./Script/Gunjala_Gondi.js":446,"./Script/Gurmukhi.js":447,"./Script/Han.js":448,"./Script/Hangul.js":449,"./Script/Hanifi_Rohingya.js":450,"./Script/Hanunoo.js":451,"./Script/Hatran.js":452,"./Script/Hebrew.js":453,"./Script/Hiragana.js":454,"./Script/Imperial_Aramaic.js":455,"./Script/Inherited.js":456,"./Script/Inscriptional_Pahlavi.js":457,"./Script/Inscriptional_Parthian.js":458,"./Script/Javanese.js":459,"./Script/Kaithi.js":460,"./Script/Kannada.js":461,"./Script/Katakana.js":462,"./Script/Kayah_Li.js":463,"./Script/Kharoshthi.js":464,"./Script/Khmer.js":465,"./Script/Khojki.js":466,"./Script/Khudawadi.js":467,"./Script/Lao.js":468,"./Script/Latin.js":469,"./Script/Lepcha.js":470,"./Script/Limbu.js":471,"./Script/Linear_A.js":472,"./Script/Linear_B.js":473,"./Script/Lisu.js":474,"./Script/Lycian.js":475,"./Script/Lydian.js":476,"./Script/Mahajani.js":477,"./Script/Makasar.js":478,"./Script/Malayalam.js":479,"./Script/Mandaic.js":480,"./Script/Manichaean.js":481,"./Script/Marchen.js":482,"./Script/Masaram_Gondi.js":483,"./Script/Medefaidrin.js":484,"./Script/Meetei_Mayek.js":485,"./Script/Mende_Kikakui.js":486,"./Script/Meroitic_Cursive.js":487,"./Script/Meroitic_Hieroglyphs.js":488,"./Script/Miao.js":489,"./Script/Modi.js":490,"./Script/Mongolian.js":491,"./Script/Mro.js":492,"./Script/Multani.js":493,"./Script/Myanmar.js":494,"./Script/Nabataean.js":495,"./Script/Nandinagari.js":496,"./Script/New_Tai_Lue.js":497,"./Script/Newa.js":498,"./Script/Nko.js":499,"./Script/Nushu.js":500,"./Script/Nyiakeng_Puachue_Hmong.js":501,"./Script/Ogham.js":502,"./Script/Ol_Chiki.js":503,"./Script/Old_Hungarian.js":504,"./Script/Old_Italic.js":505,"./Script/Old_North_Arabian.js":506,"./Script/Old_Permic.js":507,"./Script/Old_Persian.js":508,"./Script/Old_Sogdian.js":509,"./Script/Old_South_Arabian.js":510,"./Script/Old_Turkic.js":511,"./Script/Oriya.js":512,"./Script/Osage.js":513,"./Script/Osmanya.js":514,"./Script/Pahawh_Hmong.js":515,"./Script/Palmyrene.js":516,"./Script/Pau_Cin_Hau.js":517,"./Script/Phags_Pa.js":518,"./Script/Phoenician.js":519,"./Script/Psalter_Pahlavi.js":520,"./Script/Rejang.js":521,"./Script/Runic.js":522,"./Script/Samaritan.js":523,"./Script/Saurashtra.js":524,"./Script/Sharada.js":525,"./Script/Shavian.js":526,"./Script/Siddham.js":527,"./Script/SignWriting.js":528,"./Script/Sinhala.js":529,"./Script/Sogdian.js":530,"./Script/Sora_Sompeng.js":531,"./Script/Soyombo.js":532,"./Script/Sundanese.js":533,"./Script/Syloti_Nagri.js":534,"./Script/Syriac.js":535,"./Script/Tagalog.js":536,"./Script/Tagbanwa.js":537,"./Script/Tai_Le.js":538,"./Script/Tai_Tham.js":539,"./Script/Tai_Viet.js":540,"./Script/Takri.js":541,"./Script/Tamil.js":542,"./Script/Tangut.js":543,"./Script/Telugu.js":544,"./Script/Thaana.js":545,"./Script/Thai.js":546,"./Script/Tibetan.js":547,"./Script/Tifinagh.js":548,"./Script/Tirhuta.js":549,"./Script/Ugaritic.js":550,"./Script/Vai.js":551,"./Script/Wancho.js":552,"./Script/Warang_Citi.js":553,"./Script/Yi.js":554,"./Script/Zanabazar_Square.js":555,"./Script_Extensions/Adlam.js":556,"./Script_Extensions/Ahom.js":557,"./Script_Extensions/Anatolian_Hieroglyphs.js":558,"./Script_Extensions/Arabic.js":559,"./Script_Extensions/Armenian.js":560,"./Script_Extensions/Avestan.js":561,"./Script_Extensions/Balinese.js":562,"./Script_Extensions/Bamum.js":563,"./Script_Extensions/Bassa_Vah.js":564,"./Script_Extensions/Batak.js":565,"./Script_Extensions/Bengali.js":566,"./Script_Extensions/Bhaiksuki.js":567,"./Script_Extensions/Bopomofo.js":568,"./Script_Extensions/Brahmi.js":569,"./Script_Extensions/Braille.js":570,"./Script_Extensions/Buginese.js":571,"./Script_Extensions/Buhid.js":572,"./Script_Extensions/Canadian_Aboriginal.js":573,"./Script_Extensions/Carian.js":574,"./Script_Extensions/Caucasian_Albanian.js":575,"./Script_Extensions/Chakma.js":576,"./Script_Extensions/Cham.js":577,"./Script_Extensions/Cherokee.js":578,"./Script_Extensions/Common.js":579,"./Script_Extensions/Coptic.js":580,"./Script_Extensions/Cuneiform.js":581,"./Script_Extensions/Cypriot.js":582,"./Script_Extensions/Cyrillic.js":583,"./Script_Extensions/Deseret.js":584,"./Script_Extensions/Devanagari.js":585,"./Script_Extensions/Dogra.js":586,"./Script_Extensions/Duployan.js":587,"./Script_Extensions/Egyptian_Hieroglyphs.js":588,"./Script_Extensions/Elbasan.js":589,"./Script_Extensions/Elymaic.js":590,"./Script_Extensions/Ethiopic.js":591,"./Script_Extensions/Georgian.js":592,"./Script_Extensions/Glagolitic.js":593,"./Script_Extensions/Gothic.js":594,"./Script_Extensions/Grantha.js":595,"./Script_Extensions/Greek.js":596,"./Script_Extensions/Gujarati.js":597,"./Script_Extensions/Gunjala_Gondi.js":598,"./Script_Extensions/Gurmukhi.js":599,"./Script_Extensions/Han.js":600,"./Script_Extensions/Hangul.js":601,"./Script_Extensions/Hanifi_Rohingya.js":602,"./Script_Extensions/Hanunoo.js":603,"./Script_Extensions/Hatran.js":604,"./Script_Extensions/Hebrew.js":605,"./Script_Extensions/Hiragana.js":606,"./Script_Extensions/Imperial_Aramaic.js":607,"./Script_Extensions/Inherited.js":608,"./Script_Extensions/Inscriptional_Pahlavi.js":609,"./Script_Extensions/Inscriptional_Parthian.js":610,"./Script_Extensions/Javanese.js":611,"./Script_Extensions/Kaithi.js":612,"./Script_Extensions/Kannada.js":613,"./Script_Extensions/Katakana.js":614,"./Script_Extensions/Kayah_Li.js":615,"./Script_Extensions/Kharoshthi.js":616,"./Script_Extensions/Khmer.js":617,"./Script_Extensions/Khojki.js":618,"./Script_Extensions/Khudawadi.js":619,"./Script_Extensions/Lao.js":620,"./Script_Extensions/Latin.js":621,"./Script_Extensions/Lepcha.js":622,"./Script_Extensions/Limbu.js":623,"./Script_Extensions/Linear_A.js":624,"./Script_Extensions/Linear_B.js":625,"./Script_Extensions/Lisu.js":626,"./Script_Extensions/Lycian.js":627,"./Script_Extensions/Lydian.js":628,"./Script_Extensions/Mahajani.js":629,"./Script_Extensions/Makasar.js":630,"./Script_Extensions/Malayalam.js":631,"./Script_Extensions/Mandaic.js":632,"./Script_Extensions/Manichaean.js":633,"./Script_Extensions/Marchen.js":634,"./Script_Extensions/Masaram_Gondi.js":635,"./Script_Extensions/Medefaidrin.js":636,"./Script_Extensions/Meetei_Mayek.js":637,"./Script_Extensions/Mende_Kikakui.js":638,"./Script_Extensions/Meroitic_Cursive.js":639,"./Script_Extensions/Meroitic_Hieroglyphs.js":640,"./Script_Extensions/Miao.js":641,"./Script_Extensions/Modi.js":642,"./Script_Extensions/Mongolian.js":643,"./Script_Extensions/Mro.js":644,"./Script_Extensions/Multani.js":645,"./Script_Extensions/Myanmar.js":646,"./Script_Extensions/Nabataean.js":647,"./Script_Extensions/Nandinagari.js":648,"./Script_Extensions/New_Tai_Lue.js":649,"./Script_Extensions/Newa.js":650,"./Script_Extensions/Nko.js":651,"./Script_Extensions/Nushu.js":652,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":653,"./Script_Extensions/Ogham.js":654,"./Script_Extensions/Ol_Chiki.js":655,"./Script_Extensions/Old_Hungarian.js":656,"./Script_Extensions/Old_Italic.js":657,"./Script_Extensions/Old_North_Arabian.js":658,"./Script_Extensions/Old_Permic.js":659,"./Script_Extensions/Old_Persian.js":660,"./Script_Extensions/Old_Sogdian.js":661,"./Script_Extensions/Old_South_Arabian.js":662,"./Script_Extensions/Old_Turkic.js":663,"./Script_Extensions/Oriya.js":664,"./Script_Extensions/Osage.js":665,"./Script_Extensions/Osmanya.js":666,"./Script_Extensions/Pahawh_Hmong.js":667,"./Script_Extensions/Palmyrene.js":668,"./Script_Extensions/Pau_Cin_Hau.js":669,"./Script_Extensions/Phags_Pa.js":670,"./Script_Extensions/Phoenician.js":671,"./Script_Extensions/Psalter_Pahlavi.js":672,"./Script_Extensions/Rejang.js":673,"./Script_Extensions/Runic.js":674,"./Script_Extensions/Samaritan.js":675,"./Script_Extensions/Saurashtra.js":676,"./Script_Extensions/Sharada.js":677,"./Script_Extensions/Shavian.js":678,"./Script_Extensions/Siddham.js":679,"./Script_Extensions/SignWriting.js":680,"./Script_Extensions/Sinhala.js":681,"./Script_Extensions/Sogdian.js":682,"./Script_Extensions/Sora_Sompeng.js":683,"./Script_Extensions/Soyombo.js":684,"./Script_Extensions/Sundanese.js":685,"./Script_Extensions/Syloti_Nagri.js":686,"./Script_Extensions/Syriac.js":687,"./Script_Extensions/Tagalog.js":688,"./Script_Extensions/Tagbanwa.js":689,"./Script_Extensions/Tai_Le.js":690,"./Script_Extensions/Tai_Tham.js":691,"./Script_Extensions/Tai_Viet.js":692,"./Script_Extensions/Takri.js":693,"./Script_Extensions/Tamil.js":694,"./Script_Extensions/Tangut.js":695,"./Script_Extensions/Telugu.js":696,"./Script_Extensions/Thaana.js":697,"./Script_Extensions/Thai.js":698,"./Script_Extensions/Tibetan.js":699,"./Script_Extensions/Tifinagh.js":700,"./Script_Extensions/Tirhuta.js":701,"./Script_Extensions/Ugaritic.js":702,"./Script_Extensions/Vai.js":703,"./Script_Extensions/Wancho.js":704,"./Script_Extensions/Warang_Citi.js":705,"./Script_Extensions/Yi.js":706,"./Script_Extensions/Zanabazar_Square.js":707,"./index.js":708,"./unicode-version.js":709};function n(i){var r=s(i);return t(r)}function s(i){var r=e[i];if(!(r+1)){var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}return r}n.keys=function(){return Object.keys(e)},n.resolve=s,i.exports=n,n.id=312}}]);
//# sourceMappingURL=component---src-templates-doc-js-468eb58467ec5a22b4c7.js.map