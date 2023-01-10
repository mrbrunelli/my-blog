"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80],{1991:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(7294),l=a(1217),i=a(8665),o=a(6048),r=a(7462),s=a(5999),c=a(1750);var m=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},g=a(5773),v=a(3366),d=a(6010),u=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var t=e.toc,a=e.className,l=e.linkClassName,i=e.isChild;return t.length?n.createElement("ul",{className:i?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(p,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function b(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,o=void 0===i?"table-of-contents__link":i,s=e.linkActiveClassName,c=void 0===s?void 0:s,m=e.minHeadingLevel,d=e.maxHeadingLevel,b=(0,v.Z)(e,u),f=(0,g.LU)(),_=null!=m?m:f.tableOfContents.minHeadingLevel,N=null!=d?d:f.tableOfContents.maxHeadingLevel,h=(0,g.DA)({toc:t,minHeadingLevel:_,maxHeadingLevel:N}),E=(0,n.useMemo)((function(){if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:_,maxHeadingLevel:N}}),[o,c,_,N]);return(0,g.Si)(E),n.createElement(p,(0,r.Z)({toc:h,className:l,linkClassName:o},b))}var f="tableOfContents_cNA8",_=["className"];var N=function(e){var t=e.className,a=(0,v.Z)(e,_);return n.createElement("div",{className:(0,d.Z)(f,"thin-scrollbar",t)},n.createElement(b,(0,r.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))};var h=function(e){var t,a=e.content,r=e.sidebar,s=a.assets,c=a.metadata,v=c.title,d=c.description,u=c.nextItem,p=c.prevItem,b=c.date,f=c.tags,_=c.authors,h=c.frontMatter,E=h.hide_table_of_contents,k=h.keywords,C=h.toc_min_heading_level,L=h.toc_max_heading_level,Z=null!=(t=s.image)?t:h.image;return n.createElement(i.Z,{wrapperClassName:g.kM.wrapper.blogPages,pageClassName:g.kM.page.blogPostPage,sidebar:r,toc:!E&&a.toc&&a.toc.length>0?n.createElement(N,{toc:a.toc,minHeadingLevel:C,maxHeadingLevel:L}):void 0},n.createElement(l.Z,{title:v,description:d,keywords:k,image:Z},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),_.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),f.length>0&&n.createElement("meta",{property:"article:tag",content:f.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:h,assets:s,metadata:c,isBlogPostPage:!0},n.createElement(a,null)),(u||p)&&n.createElement(m,{nextItem:u,prevItem:p}))}},1750:function(e,t,a){var n=a(7294),l=a(9960);t.Z=function(e){var t=e.permalink,a=e.title,i=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);