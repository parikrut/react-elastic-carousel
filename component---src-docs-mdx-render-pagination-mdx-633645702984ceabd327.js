(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{F2Od:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return u})),n.d(t,"default",(function(){return O}));var a=n("Fcif"),r=n("+I+c"),i=(n("mXGw"),n("/FXl")),o=n("TjRS"),c=n("ZFoC"),m=n("KMBU"),b=n("k7sx"),p=n("J7cu"),l=n("xGbp"),u=(n("aD51"),{});void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/mdx/renderPagination.mdx"}});var d={_frontmatter:u},s=o.a;function O(e){var t,n=e.components,O=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},d,O,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"renderpagination"},"renderPagination"),Object(i.b)("h3",{id:"you-can-provide-custom-pagination-buttons"},"You can provide custom pagination buttons."),Object(i.b)("h2",{id:"signature"},"Signature"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can pass a function that returns a react element,",Object(i.b)("br",{parentName:"li"}),"This function is a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://reactjs.org/docs/render-props.html"}),"render prop")," and its signature is:  ")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"({ pages, activePage, onClick }) =>  {/* return your element here */}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pages")," Array of page index."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activePage")," The current active page id."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onClick")," Is the hook to the inner ",Object(i.b)("inlineCode",{parentName:"li"},"onClick")," of the ",Object(i.b)("inlineCode",{parentName:"li"},"Carousel"),". You can attach it wherever you want within the returned component.")),Object(i.b)("h2",{id:"demo"},"Demo"),Object(i.b)(c.c,{__position:0,__code:'<Carousel\n  itemsToShow={3}\n  renderPagination={({ pages, activePage, onClick }) => {\n    return (\n      <Flex direction="row">\n        {pages.map(page => {\n          const isActivePage = activePage === page\n          return (\n            <Square\n              key={page}\n              onClick={() => onClick(page)}\n              active={isActivePage}\n            />\n          )\n        })}\n      </Flex>\n    )\n  }}\n>\n  <Item>1</Item>\n  <Item>2</Item>\n  <Item>3</Item>\n  <Item>4</Item>\n  <Item>5</Item>\n  <Item>6</Item>\n  <Item>7</Item>\n  <Item>8</Item>\n  <Item>9</Item>\n  <Item>10</Item>\n</Carousel>',__scope:(t={props:O,DefaultLayout:o.a,Playground:c.c,Props:c.d,Carousel:m.b,consts:m.a,Square:b.a,Flex:p.a,Item:l.a},t.DefaultLayout=o.a,t._frontmatter=u,t),mdxType:"Playground"},Object(i.b)(m.b,{itemsToShow:3,renderPagination:function(e){var t=e.pages,n=e.activePage,a=e.onClick;return Object(i.b)(p.a,{direction:"row",mdxType:"Flex"},t.map((function(e){var t=n===e;return Object(i.b)(b.a,{key:e,onClick:function(){return a(e)},active:t,mdxType:"Square"})})))},mdxType:"Carousel"},Object(i.b)(l.a,{mdxType:"Item"},"1"),Object(i.b)(l.a,{mdxType:"Item"},"2"),Object(i.b)(l.a,{mdxType:"Item"},"3"),Object(i.b)(l.a,{mdxType:"Item"},"4"),Object(i.b)(l.a,{mdxType:"Item"},"5"),Object(i.b)(l.a,{mdxType:"Item"},"6"),Object(i.b)(l.a,{mdxType:"Item"},"7"),Object(i.b)(l.a,{mdxType:"Item"},"8"),Object(i.b)(l.a,{mdxType:"Item"},"9"),Object(i.b)(l.a,{mdxType:"Item"},"10"))))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/mdx/renderPagination.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-mdx-render-pagination-mdx-633645702984ceabd327.js.map