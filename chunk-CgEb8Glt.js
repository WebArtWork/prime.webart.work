import{$ as SD,$t as me,A as Jo,At as d0,Cn as vp,Ct as aD,D as Ip,Dt as ce,En as yA,Et as cA,F as Mp,G as Qw,Ht as j0,I as N5,It as fu,J as RD,Jt as lA,Kt as ki,L as NM,Lt as h,M as Kn,Nt as eR,On as zD,P as Mm,Pt as el,Q as SA,Qt as mD,Rt as hp,S as HW,Sn as us,St as aA,T as I,Tt as ag,U as Qe,W as Qp,X as R_,Xt as ls,Y as RM,Z as Rw,_ as EA,_n as sA,a as Aa,b as FW,bn as tl,bt as _m,c as Aw,cn as ou,en as ml,fn as re,gt as Xw,h as E,hn as rr,i as A5,in as nl,k as Jc,kn as ze,l as B0,ln as qA,mt as Xc,n as $t$1,nn as nR,nt as Tp,o as Ac,on as oR,ot as UW,p as Cp,pn as rl,q as R5,r as A,t as u,tt as TD,u as BW,un as qL,ut as WD,v as ED,vt as Zc,x as G4,xn as uA,xt as _p,yn as tR,yt as Zv,zt as hu}from"./main-EL34C5YQ.js";import{t as di}from"./chunk-BNS_dqll.js";import{a as en$1,i as ee,n as Nt$1,o as gn$1,s as nn$1}from"./chunk-C56SNvBY.js";import{n as Mn$1,r as Wt$1}from"./chunk-CoyYsZ-p.js";var tt=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var _t=[`content`];var Ct=[`header`];var Dt=[`title`];var xt=[`subtitle`];var Tt=[`footer`];var kt=[`*`,[[`p-header`]],[[`p-footer`]]];var Bt=[`*`,`p-header`,`p-footer`];function Mt(t,l){t&1&&ED(0)}function Nt(t,l){if(t&1&&(Ac(0,`div`,1),tl(1,1),aD(2,Mt,1,0,`ng-container`,2),vp()),t&2){let e=EA();ls(e.cx(`header`)),mD(`pBind`,e.ptm(`header`)),R_(2),mD(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function St(t,l){if(t&1&&_p(0),t&2)Mp(` `,EA(2).header(),` `)}function wt(t,l){t&1&&ED(0)}function Et(t,l){if(t&1&&(Ac(0,`div`,1),sA(1,St,1,1),aD(2,wt,1,0,`ng-container`,2),vp()),t&2){let e=EA();ls(e.cx(`title`)),mD(`pBind`,e.ptm(`title`)),R_(),aA(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),R_(),mD(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function Ft(t,l){if(t&1&&_p(0),t&2)Mp(` `,EA(2).subheader(),` `)}function Lt(t,l){t&1&&ED(0)}function It(t,l){if(t&1&&(Ac(0,`div`,1),sA(1,Ft,1,1),aD(2,Lt,1,0,`ng-container`,2),vp()),t&2){let e=EA();ls(e.cx(`subtitle`)),mD(`pBind`,e.ptm(`subtitle`)),R_(),aA(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),R_(),mD(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Ot(t,l){t&1&&ED(0)}function At(t,l){t&1&&ED(0)}function Vt(t,l){if(t&1&&(Ac(0,`div`,1),tl(1,2),aD(2,At,1,0,`ng-container`,2),vp()),t&2){let e=EA();ls(e.cx(`footer`)),mD(`pBind`,e.ptm(`footer`)),R_(2),mD(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var zt=`
    ${tt}

    .p-card {
        display: block;
    }
`;var Pt={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var nt=(()=>{class t extends rr{name=`card`;style=zt;classes=Pt;static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var it=new E(`CARD_INSTANCE`);var ot=(()=>{class t extends Qw{componentName=`Card`;$pcCard=h(it,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});_componentStyle=h(nt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=re();subheader=re();style=re();styleClass=re();headerFacet=UW(N5);footerFacet=UW(A5);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=UW(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=I(null);constructor(){super(),Qe(()=>{let e=this.style();Rw(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=BW(R5);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Kn({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,a){if(i&1&&(TD(a,n.headerFacet,N5,5)(a,n.footerFacet,A5,5)(a,n.contentTemplate,_t,4)(a,n.templates,R5,4),nl(a,Ct,4)(a,Dt,4)(a,xt,4)(a,Tt,4)),i&2){SA(4);let r;Cp(r=Tp())&&(n.headerTemplate=r.first),Cp(r=Tp())&&(n.titleTemplate=r.first),Cp(r=Tp())&&(n.subtitleTemplate=r.first),Cp(r=Tp())&&(n.footerTemplate=r.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(Ip(n._style()),ls(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[us([nt,{provide:it,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc],ngContentSelectors:Bt,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(el(kt),sA(0,Nt,3,4,`div`,0),Ac(1,`div`,1),sA(2,Et,3,5,`div`,0),sA(3,It,3,5,`div`,0),Ac(4,`div`,1),tl(5),aD(6,Ot,1,0,`ng-container`,2),vp(),sA(7,Vt,3,4,`div`,0),vp()),i&2&&(aA(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),R_(),ls(n.cx(`body`)),mD(`pBind`,n.ptm(`body`)),R_(),aA(n.header()||n.titleTemplate||n._titleTemplate?2:-1),R_(),aA(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),R_(),ls(n.cx(`content`)),mD(`pBind`,n.ptm(`content`)),R_(2),mD(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),R_(),aA(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[ml,B0,fu,Xw,hu],encapsulation:2})}return t})();var at=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var jt=[`*`];var $t={root:({instance:t})=>({justifyContent:t.layout()===`horizontal`?t.align()===`center`||t.align()==null?`center`:t.align()===`left`?`flex-start`:t.align()===`right`?`flex-end`:null:null,alignItems:t.layout()===`vertical`?t.align()===`center`||t.align()==null?`center`:t.align()===`top`?`flex-start`:t.align()===`bottom`?`flex-end`:null:null})};var Ht={root:({instance:t})=>[`p-divider p-component`,`p-divider-`+t.layout(),`p-divider-`+t.type(),{"p-divider-left":t.layout()===`horizontal`&&(!t.align()||t.align()===`left`)},{"p-divider-center":t.layout()===`horizontal`&&t.align()===`center`},{"p-divider-right":t.layout()===`horizontal`&&t.align()===`right`},{"p-divider-top":t.layout()===`vertical`&&t.align()===`top`},{"p-divider-center":t.layout()===`vertical`&&(!t.align()||t.align()===`center`)},{"p-divider-bottom":t.layout()===`vertical`&&t.align()===`bottom`}],content:`p-divider-content`};var rt=(()=>{class t extends rr{name=`divider`;style=at;classes=Ht;inlineStyles=$t;static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var lt=new E(`DIVIDER_INSTANCE`);var dt=(()=>{class t extends Qw{componentName=`Divider`;$pcDivider=h(lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=re();layout=re(`horizontal`);type=re(`solid`);align=re();_componentStyle=h(rt);get dataP(){return this.cn({[this.align()]:this.align(),[this.layout()]:this.layout(),[this.type()]:this.type()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵcmp=Kn({type:t,selectors:[[`p-divider`]],hostAttrs:[`role`,`separator`],hostVars:6,hostBindings:function(i,n){i&2&&(ki(`aria-orientation`,n.layout())(`data-p`,n.dataP),Ip(n.sx(`root`)),ls(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],layout:[1,`layout`],type:[1,`type`],align:[1,`align`]},features:[us([rt,{provide:lt,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc],ngContentSelectors:jt,decls:2,vars:3,consts:[[3,`pBind`]],template:function(i,n){i&1&&(el(),Ac(0,`div`,0),tl(1),vp()),i&2&&(ls(n.cx(`content`)),mD(`pBind`,n.ptm(`content`)))},dependencies:[fu,Xw,hu],encapsulation:2})}return t})();var st=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Rt=[`icon`];var Qt=[`content`];var ct=t=>({$implicit:t});function Kt(t,l){t&1&&ED(0)}function qt(t,l){if(t&1&&Xc(0,`span`,0),t&2){let e=EA(3);ls(e.cn(e.cx(`icon`),e.checked?e.onIcon():e.offIcon(),e.iconPos()===`left`?e.cx(`iconLeft`):e.cx(`iconRight`))),mD(`pBind`,e.ptm(`icon`))}}function Ut(t,l){if(t&1&&sA(0,qt,1,3,`span`,2),t&2){let e=EA(2);aA(e.onIcon()||e.offIcon()?0:-1)}}function Gt(t,l){t&1&&ED(0)}function Wt(t,l){if(t&1&&aD(0,Gt,1,0,`ng-container`,1),t&2){let e=EA(2);mD(`ngTemplateOutlet`,e.iconTemplate()||e._iconTemplate)(`ngTemplateOutletContext`,tR(2,ct,e.checked))}}function Yt(t,l){if(t&1&&(sA(0,Ut,1,1)(1,Wt,1,4,`ng-container`),Ac(2,`span`,0),_p(3),vp()),t&2){let e=EA();aA(e.iconTemplate()?1:0),R_(2),ls(e.cx(`label`)),mD(`pBind`,e.ptm(`label`)),R_(),rl(e.checked?e.hasOnLabel?e.onLabel():e.nbsp:e.hasOffLabel?e.offLabel():e.nbsp)}}var Jt=`
    ${st}

    /* For ngx-prime (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`;var Xt=t=>typeof t.checked==`function`?t.checked():t.checked;var Zt={root:({instance:t})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":Xt(t),"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size()===`small`,"p-togglebutton-lg p-inputfield-lg":t.size()===`large`,"p-togglebutton-fluid":t.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var De=(()=>{class t extends rr{name=`togglebutton`;style=Jt;classes=Zt;static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var ut=new E(`TOGGLEBUTTON_INSTANCE`);var en={provide:ee,useExisting:Aa(()=>we),multi:!0};var we=(()=>{class t extends gn$1{componentName=`ToggleButton`;nbsp=`\xA0`;$pcToggleButton=h(ut,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),HW()&&console.warn("`<p-togglebutton>` is deprecated and will be removed in a future major version. Use a native `<button pToggleButton>` instead.")}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel=re(`Yes`);offLabel=re(`No`);onIcon=re();offIcon=re();ariaLabel=re();ariaLabelledBy=re();styleClass=re();inputId=re();tabindex=re(0,{transform:Qp});iconPos=re(`left`);autofocus=re(void 0,{transform:$t$1});size=re();allowEmpty=re();fluid=re(void 0,{transform:$t$1});onChange=d0();iconTemplate=UW(`icon`,{descendants:!1});contentTemplate=UW(`content`,{descendants:!1});templates=BW(R5);checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=h(De);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel()&&this.onLabel().length>0}get hasOffLabel(){return this.offLabel()&&this.offLabel().length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`icon`:this._iconTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,i){this.checked=e,i(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size()]:this.size()})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Kn({type:t,selectors:[[`p-toggleButton`],[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(i,n,a){i&1&&TD(a,n.iconTemplate,Rt,4)(a,n.contentTemplate,Qt,4)(a,n.templates,R5,4),i&2&&SA(3)},hostVars:11,hostBindings:function(i,n){i&1&&Jc(`keydown`,function(r){return n.onKeyDown(r)})(`click`,function(r){return n.toggle(r)}),i&2&&(ki(`aria-labelledby`,n.ariaLabelledBy())(`aria-label`,n.ariaLabel())(`aria-pressed`,n.checked?`true`:`false`)(`role`,`button`)(`tabindex`,n.tabindex()!==void 0?n.tabindex():n.$disabled()?-1:0)(`data-pc-name`,`togglebutton`)(`data-p-checked`,n.active)(`data-p-disabled`,n.$disabled())(`data-p`,n.dataP),ls(n.cn(n.cx(`root`),n.styleClass())))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],styleClass:[1,`styleClass`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[us([en,De,{provide:ut,useExisting:t},{provide:ag,useExisting:t}]),hp([Wt$1,hu]),Zc],decls:3,vars:9,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(i,n){i&1&&(Ac(0,`span`,0),aD(1,Kt,1,0,`ng-container`,1),sA(2,Yt,4,5),vp()),i&2&&(ls(n.cx(`content`)),mD(`pBind`,n.ptm(`content`)),ki(`data-p`,n.dataP),R_(),mD(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate)(`ngTemplateOutletContext`,tR(7,ct,n.checked)),R_(),aA(n.contentTemplate()?-1:2))},dependencies:[ml,B0,fu,Xw,hu],encapsulation:2})}return t})();var pt=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var tn=[`item`];var nn=(t,l)=>({$implicit:t,index:l});function on(t,l){return this.getOptionLabel(l)}function an(t,l){t&1&&ED(0)}function rn(t,l){if(t&1&&aD(0,an,1,0,`ng-container`,3),t&2){let e=EA(2),i=e.$implicit,n=e.$index,a=EA();mD(`ngTemplateOutlet`,a.itemTemplate||a._itemTemplate)(`ngTemplateOutletContext`,nR(2,nn,i,n))}}function ln(t,l){t&1&&aD(0,rn,1,5,`ng-template`,null,0,oR)}function dn(t,l){if(t&1){let e=yA();Ac(0,`p-togglebutton`,2),Jc(`onChange`,function(n){let a=_m(e),r=a.$implicit,C=a.$index;return Mm(EA().onOptionSelect(n,r,C))}),sA(1,ln,2,0),vp(),NM()}if(t&2){let e=l.$implicit,i=EA();mD(`autofocus`,i.autofocus())(`styleClass`,i.styleClass())(`ngModel`,i.isSelected(e))(`onLabel`,i.getOptionLabel(e))(`offLabel`,i.getOptionLabel(e))(`disabled`,i.$disabled()||i.isOptionDisabled(e))(`allowEmpty`,i.getAllowEmpty())(`size`,i.size())(`fluid`,i.fluid())(`pt`,i.ptm(`pcToggleButton`))(`unstyled`,i.unstyled()),RM(),R_(),aA(i.itemTemplate||i._itemTemplate?1:-1)}}var sn=`
    ${pt}

    /* For ngx-prime */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`;var un={root:({instance:t})=>[`p-selectbutton p-component`,{"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-selectbutton-fluid":t.fluid()}]};var xe=(()=>{class t extends rr{name=`selectbutton`;style=sn;classes=un;static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var Ee=(()=>{class t extends gn$1{componentName=`SelectButton`;_componentStyle=h(xe);element=h(me);bindDirectiveInstance=h(hu,{self:!0});multiple=re(!1,{transform:$t$1});allowEmpty=re(!0,{transform:$t$1});unselectable=re(!1,{transform:$t$1});dataKey=re();ariaLabel=re();ariaLabelledBy=re();ariaDescribedBy=re();fluid=re(!1,{transform:$t$1});onOptionClick=d0();onChange=d0();onFocus=d0();onBlur=d0();value=FW(null);touch=d0();optionDirectives=BW(Te,{descendants:!0});role=ze(()=>this.multiple()?`group`:`radiogroup`);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`group`,`root`]))}isSelected(e){let i=this.value();return this.multiple()?Array.isArray(i)&&i.some(n=>Rw(n,e,this.dataKey()||void 0)):Rw(i,e,this.dataKey()||void 0)}select(e,i,n){if(this.$disabled())return;let a=this.isSelected(i),r;if(this.multiple()){let C=this.value()??[];if(a){if(this.unselectable()||!this.allowEmpty()&&C.length===1)return;r=C.filter(z=>!Rw(z,i,this.dataKey()||void 0))}else r=[...C,i]}else{if(a&&(this.unselectable()||!this.allowEmpty()))return;r=a?null:i}this.value.set(r),this.writeModelValue(r),this.onModelChange(r),this.onChange.emit({originalEvent:e,value:r}),this.onOptionClick.emit({originalEvent:e,option:i,index:n})}getOptionIndex(e){return this.optionDirectives().indexOf(e)}isFirstEnabledOption(e){return this.optionDirectives().find(i=>!i.isDisabled())===e}onKeyDown(e){let i=this.optionDirectives().find(z=>z.element.nativeElement===e.target);if(!i||this.$disabled())return;let n=this.optionDirectives().filter(z=>!z.isDisabled()),a=n.indexOf(i),r;switch(e.key){case`ArrowLeft`:case`ArrowUp`:r=(a-1+n.length)%n.length;break;case`ArrowRight`:case`ArrowDown`:r=(a+1)%n.length;break;case`Home`:r=0;break;case`End`:r=n.length-1;break;default:return}e.preventDefault();let C=n[r];C.focus(),this.multiple()||this.select(e,C.value(),C.resolvedIndex())}onFocusOut(e){this.element.nativeElement.contains(e.relatedTarget)||(this.onModelTouched(),this.touch.emit(),this.onBlur.emit(e))}writeControlValue(e,i){i(e),this.value.set(e)}focus(e){this.optionDirectives().find(i=>!i.isDisabled()&&(i.selected()||this.isFirstEnabledOption(i)))?.focus(e)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵdir=ce({type:t,selectors:[[``,`pSelectButton`,``]],contentQueries:function(i,n,a){i&1&&TD(a,n.optionDirectives,Te,5),i&2&&SA()},hostVars:11,hostBindings:function(i,n){i&1&&Jc(`keydown`,function(r){return n.onKeyDown(r)})(`focusin`,function(r){return n.onFocus.emit(r)})(`focusout`,function(r){return n.onFocusOut(r)}),i&2&&(ki(`role`,n.role())(`data-pc-name`,`selectbutton`)(`data-pc-section`,`root`)(`data-p-invalid`,n.invalid()||null)(`data-p-disabled`,n.$disabled()||null)(`aria-label`,n.ariaLabel()||null)(`aria-labelledby`,n.ariaLabelledBy()||null)(`aria-describedby`,n.ariaDescribedBy()||null)(`aria-disabled`,n.$disabled()||null),ls(n.cx(`root`)))},inputs:{multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],unselectable:[1,`unselectable`],dataKey:[1,`dataKey`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`],fluid:[1,`fluid`],value:[1,`value`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`,value:`valueChange`,touch:`touch`},features:[us([xe,De,{provide:ee,useExisting:Aa(()=>t),multi:!0}]),hp([hu]),Zc]})}return t})();var Te=(()=>{class t{group=h(Ee,{host:!0});element=h(me);bindDirectiveInstance=h(hu,{self:!0});value=re();disabled=re(!1,{transform:$t$1});type=re(`button`);index=re();ariaLabel=re();ariaLabelledBy=re();ariaDescribedBy=re();selected=()=>this.group.isSelected(this.value());resolvedIndex=ze(()=>this.index()??this.group.getOptionIndex(this));tabindex=ze(()=>this.isDisabled()?-1:this.group.multiple()||this.selected()||!this.group.optionDirectives().some(e=>e.selected())&&this.group.isFirstEnabledOption(this)?0:-1);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.group.ptm(`option`,{instance:this}))}isDisabled(){return this.disabled()||this.group.$disabled()}select(e){this.isDisabled()||this.group.select(e,this.value(),this.resolvedIndex())}focus(e){this.element.nativeElement.focus(e)}static ɵfac=function(i){return new(i||t)};static ɵdir=ce({type:t,selectors:[[`button`,`pSelectButtonOption`,``]],hostAttrs:[1,`p-togglebutton`,`p-component`],hostVars:15,hostBindings:function(i,n){i&1&&Jc(`click`,function(r){return n.select(r)}),i&2&&(SD(`disabled`,n.isDisabled())(`value`,n.value()??``),ki(`type`,n.type())(`role`,n.group.multiple()?null:`radio`)(`aria-checked`,n.group.multiple()?null:n.selected())(`aria-pressed`,n.group.multiple()?n.selected():null)(`aria-label`,n.ariaLabel()||null)(`aria-labelledby`,n.ariaLabelledBy()||null)(`aria-describedby`,n.ariaDescribedBy()||null)(`aria-disabled`,n.isDisabled()||null)(`tabindex`,n.tabindex()),RD(`p-togglebutton-checked`,n.selected())(`p-disabled`,n.isDisabled()))},inputs:{value:[1,`value`],disabled:[1,`disabled`],type:[1,`type`],index:[1,`index`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaDescribedBy:[1,`ariaDescribedBy`]},features:[hp([hu])]})}return t})();var gt=new E(`SELECTBUTTON_INSTANCE`);var cn={provide:ee,useExisting:Aa(()=>pn),multi:!0};var pn=(()=>{class t extends gn$1{componentName=`SelectButton`;constructor(){super(),HW()&&console.warn("`<p-selectbutton>` is deprecated and will be removed in a future major version. Use the native `pSelectButton`/`pSelectButtonOption` directives instead.")}options=re();optionLabel=re();optionValue=re();optionDisabled=re();unselectable=re(!1,{transform:$t$1});tabindex=re(0,{transform:Qp});multiple=re(void 0,{transform:$t$1});allowEmpty=re(!0,{transform:$t$1});styleClass=re();ariaLabelledBy=re();dataKey=re();autofocus=re(void 0,{transform:$t$1});size=re();fluid=re(void 0,{transform:$t$1});onOptionClick=d0();onChange=d0();itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue()?null:this.dataKey()}value;focusedIndex=0;_componentStyle=h(xe);$pcSelectButton=h(gt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.unselectable()?!1:this.multiple()?this.allowEmpty()||this.value?.length!==1:this.allowEmpty()}getOptionLabel(e){let i=this.optionLabel();return i?Aw(e,i):e.label!=null?e.label:e}getOptionValue(e){let i=this.optionValue();return i?Aw(e,i):this.optionLabel()||e.value===void 0?e:e.value}isOptionDisabled(e){let i=this.optionDisabled();return i?Aw(e,i):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,i,n){if(this.$disabled()||this.isOptionDisabled(i))return;let a=this.isSelected(i);if(a&&this.unselectable())return;let r=this.getOptionValue(i),C;if(this.multiple())a?C=this.value.filter(z=>!Rw(z,r,this.equalityKey||void 0)):C=this.value?[...this.value,r]:[r];else{if(a&&!this.allowEmpty())return;C=a?null:r}this.focusedIndex=n,this.value=C,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:i,index:n})}changeTabIndexes(e,i){let n,a;for(let r=0;r<=this.el.nativeElement.children.length-1;r++)this.el.nativeElement.children[r].getAttribute(`tabindex`)===`0`&&(n={elem:this.el.nativeElement.children[r],index:r});i===`prev`?n.index===0?a=this.el.nativeElement.children.length-1:a=n.index-1:n.index===this.el.nativeElement.children.length-1?a=0:a=n.index+1,this.focusedIndex=a,this.el.nativeElement.children[a].focus()}onFocus(e,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(i=>!Rw(i,this.getOptionValue(e),this.dataKey()))}isSelected(e){let i=!1,n=this.getOptionValue(e);if(this.multiple()){if(this.value&&Array.isArray(this.value)){for(let a of this.value)if(Rw(a,n,this.dataKey())){i=!0;break}}}else i=Rw(this.getOptionValue(e),this.value,this.equalityKey||void 0);return i}templates=BW(R5);onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`item`&&(this._itemTemplate=e.template)})}writeControlValue(e,i){this.value=e,i(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Kn({type:t,selectors:[[`p-selectButton`],[`p-selectbutton`],[`p-select-button`]],contentQueries:function(i,n,a){if(i&1&&(TD(a,n.templates,R5,4),nl(a,tn,4)),i&2){SA();let r;Cp(r=Tp())&&(n.itemTemplate=r.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(ki(`role`,`group`)(`aria-labelledby`,n.ariaLabelledBy())(`data-p`,n.dataP),ls(n.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[us([cn,xe,{provide:gt,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`styleClass`,`ngModel`,`onLabel`,`offLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(i,n){i&1&&lA(0,dn,2,12,`p-togglebutton`,1,on,!0),i&2&&uA(n.options())},dependencies:[we,nn$1,en$1,Nt$1,ml,B0,fu,Xw],encapsulation:2})}return t})();var mt=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var gn=[`icon`];var mn=[`*`];function fn(t,l){if(t&1&&Xc(0,`span`,3),t&2){let e=EA(2);ls(e.cx(`icon`)),mD(`ngClass`,e.icon())(`pBind`,e.ptm(`icon`))}}function bn(t,l){if(t&1&&sA(0,fn,1,4,`span`,2),t&2)aA(EA().icon()?0:-1)}function hn(t,l){}function vn(t,l){t&1&&aD(0,hn,0,0,`ng-template`)}function yn(t,l){if(t&1&&(Ac(0,`span`,1),aD(1,vn,1,0,null,4),vp()),t&2){let e=EA();ls(e.cx(`icon`)),mD(`pBind`,e.ptm(`icon`)),R_(),mD(`ngTemplateOutlet`,e.iconTemplate||e._iconTemplate)}}var _n={root:({instance:t})=>[`p-tag p-component`,{"p-tag-info":t.severity===`info`,"p-tag-success":t.severity===`success`,"p-tag-warn":t.severity===`warn`,"p-tag-danger":t.severity===`danger`,"p-tag-secondary":t.severity===`secondary`,"p-tag-contrast":t.severity===`contrast`,"p-tag-rounded":t.rounded}],icon:`p-tag-icon`,label:`p-tag-label`};var ft=(()=>{class t extends rr{name=`tag`;style=mt;classes=_n;static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var bt=new E(`TAG_INSTANCE`);var ht=(()=>{class t extends Qw{componentName=`Tag`;$pcTag=h(bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}styleClass=re();severity=re();value=re();icon=re();rounded=re(!1,{transform:$t$1});iconTemplate;templates=BW(R5);_iconTemplate;_componentStyle=h(ft);onAfterContentInit(){this.templates()?.forEach(e=>{e.getType()===`icon`&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded(),[this.severity()]:this.severity()})}static ɵfac=(()=>{let e;return function(n){return(e||(e=Jo(t)))(n||t)}})();static ɵcmp=Kn({type:t,selectors:[[`p-tag`]],contentQueries:function(i,n,a){if(i&1&&(TD(a,n.templates,R5,4),nl(a,gn,4)),i&2){SA();let r;Cp(r=Tp())&&(n.iconTemplate=r.first)}},hostVars:3,hostBindings:function(i,n){i&2&&(ki(`data-p`,n.dataP),ls(n.cn(n.cx(`root`),n.styleClass())))},inputs:{styleClass:[1,`styleClass`],severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[us([ft,{provide:bt,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc],ngContentSelectors:mn,decls:5,vars:6,consts:[[3,`class`,`pBind`],[3,`pBind`],[3,`class`,`ngClass`,`pBind`],[3,`ngClass`,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(el(),tl(0),sA(1,bn,1,1),sA(2,yn,2,4,`span`,0),Ac(3,`span`,1),_p(4),vp()),i&2&&(R_(),aA(!n.iconTemplate&&!n._iconTemplate?1:-1),R_(),aA(n.iconTemplate||n._iconTemplate?2:-1),R_(),ls(n.cx(`label`)),mD(`pBind`,n.ptm(`label`)),R_(),rl(n.value()))},dependencies:[ml,j0,B0,fu,hu],encapsulation:2})}return t})();var vt=t=>[`/templates`,t];var Cn=t=>[`/templates`,t,`guide`];var Dn=()=>[`/cart`];var xn=(t,l)=>l.value;var Tn=(t,l)=>l.slug;function kn(t,l){if(t&1&&(Ac(0,`button`,15),_p(1),vp()),t&2){let e=l.$implicit;mD(`value`,e.value),R_(),Mp(` `,e.label,` `)}}function Bn(t,l){t&1&&(Ac(0,`p-tag`,21),_p(1,` Безкоштовно `),vp()),t&2&&mD(`rounded`,!0)}function Mn(t,l){if(t&1&&(Ac(0,`p-tag`,22),_p(1),vp()),t&2){let e=EA().$implicit;mD(`rounded`,!0),R_(),Mp(` from $`,e.price,` `)}}function Nn(t,l){if(t&1&&Xc(0,`p-chip`,25),t&2){let e=l.$implicit;mD(`label`,e)}}function Sn(t,l){if(t&1&&(Ac(0,`a`,31),_p(1,` View on GitHub `),vp()),t&2){let e=EA(2).$implicit;mD(`href`,e.repoUrl,Zv)}}function wn(t,l){if(t&1&&(sA(0,Sn,2,1,`a`,31),Ac(1,`a`,29),_p(2,` Getting started `),vp()),t&2){let e=EA().$implicit;aA(e.repoUrl?0:-1),R_(),mD(`routerLink`,tR(2,Cn,e.slug))}}function En(t,l){t&1&&(Ac(0,`a`,29),_p(1,`У кошику`),vp()),t&2&&mD(`routerLink`,eR(1,Dn))}function Fn(t,l){if(t&1){let e=yA();Ac(0,`button`,32),Jc(`click`,function(){_m(e);let n=EA().$implicit;return Mm(EA().cartService.add(n.slug,n.licenses[0].type))}),_p(1,` Додати в кошик `),vp()}}function Ln(t,l){if(t&1&&(Ac(0,`p-card`,17)(1,`div`,18)(2,`div`)(3,`div`,19)(4,`h2`,20),_p(5),vp(),sA(6,Bn,2,1,`p-tag`,21)(7,Mn,2,2,`p-tag`,22),vp(),Ac(8,`p`,23),_p(9),vp(),Ac(10,`div`,24),lA(11,Nn,1,1,`p-chip`,25,cA),vp()(),Xc(13,`p-divider`,26),Ac(14,`div`,27),Jc(`click`,function(i){return i.stopPropagation()}),Ac(15,`a`,28),_p(16,` Переглянути деталі `),vp(),sA(17,wn,3,4)(18,En,2,2,`a`,29)(19,Fn,2,0,`button`,30),vp()()()),t&2){let e=l.$implicit,i=EA();mD(`routerLink`,tR(6,vt,e.slug)),R_(5),Mp(` `,e.name,` `),R_(),aA(e.license===`free`?6:7),R_(3),Mp(` `,e.tagline,` `),R_(2),uA(e.stack),R_(4),mD(`routerLink`,tR(8,vt,e.slug)),R_(2),aA(e.license===`free`?17:i.cartService.has(e.slug)?18:19)}}var yt=class t{cartService=h(u);templates=qL;frameworkOptions=[{value:`all`,label:`Усі`},{value:`ngx`,label:`Ngx`},{value:`react`,label:`React`},{value:`vue`,label:`Vue`}];frameworkFilter=I(`all`);filteredTemplates=ze(()=>{let l=this.frameworkFilter();return l===`all`?this.templates:this.templates.filter(e=>e.framework===l)});static ɵfac=function(e){return new(e||t)};static ɵcmp=Kn({type:t,selectors:[[`ng-component`]],decls:24,vars:1,consts:[[1,`relative`,`overflow-hidden`],[`aria-hidden`,`true`,1,`landing-mesh`],[`aria-hidden`,`true`,1,`landing-orb`,`landing-orb--primary`],[`aria-hidden`,`true`,1,`landing-orb`,`landing-orb--secondary`],[1,`relative`,`mx-auto`,`max-w-[var(--container)]`,`px-4`,`py-8`,`sm:px-6`,`sm:py-12`],[1,`overflow-hidden`,`rounded-[calc(var(--radius-card)*2.4)]`,`border`,`border-[color:color-mix(in_srgb,var(--c-border)_72%,transparent)]`,`bg-[color:color-mix(in_srgb,var(--c-bg-secondary)_84%,transparent)]`,`p-6`,`shadow-[var(--shadow-md)]`,`backdrop-blur-xl`,`sm:p-8`,`lg:p-10`],[1,`inline-flex`,`items-center`,`gap-2`,`rounded-full`,`border`,`border-[color:color-mix(in_srgb,var(--c-border)_72%,transparent)]`,`bg-[color:color-mix(in_srgb,var(--c-bg-primary)_76%,transparent)]`,`px-3`,`py-1`,`text-[0.72rem]`,`font-semibold`,`uppercase`,`tracking-[0.24em]`,`text-[var(--c-text-muted)]`],[`aria-hidden`,`true`,1,`h-2`,`w-2`,`rounded-full`,`bg-[var(--c-primary)]`,`shadow-[0_0_0_6px_color-mix(in_srgb,var(--c-primary)_14%,transparent)]`],[`translate`,``],[`translate`,``,1,`mt-6`,`max-w-3xl`,`text-4xl`,`font-semibold`,`tracking-[-0.04em]`,`text-[var(--c-text-strong)]`,`sm:text-5xl`,`lg:text-6xl`],[`translate`,``,1,`mt-5`,`max-w-2xl`,`text-base`,`leading-8`,`text-[var(--c-text)]`,`sm:text-lg`],[1,`framework-filter`,`mt-8`,`flex`,`flex-wrap`,`items-center`,`gap-4`,`rounded-[calc(var(--radius-card)*1.6)]`,`border`,`border-[color:color-mix(in_srgb,var(--c-border)_72%,transparent)]`,`bg-[color:color-mix(in_srgb,var(--c-bg-secondary)_72%,transparent)]`,`px-4`,`py-3`,`shadow-[var(--shadow-sm)]`,`backdrop-blur-xl`],[`translate`,``,1,`text-sm`,`font-semibold`,`uppercase`,`tracking-[0.16em]`,`text-[var(--c-text-muted)]`],[`layout`,`vertical`,1,`hidden`,`!h-6`,`sm:block`],[`pSelectButton`,``,`ariaLabel`,`Фреймворк`,3,`valueChange`,`value`],[`pSelectButtonOption`,``,`type`,`button`,3,`value`],[1,`mt-6`,`grid`,`gap-6`,`sm:grid-cols-2`],[1,`template-card`,`h-full`,`cursor-pointer`,3,`routerLink`],[1,`flex`,`h-full`,`flex-col`,`justify-between`],[1,`flex`,`items-start`,`justify-between`,`gap-3`],[1,`text-xl`,`font-semibold`,`text-[var(--c-text-strong)]`],[`severity`,`success`,`translate`,``,1,`shrink-0`,3,`rounded`],[`severity`,`secondary`,1,`shrink-0`,3,`rounded`],[1,`mt-3`,`text-sm`,`leading-6`,`text-[var(--c-text)]`],[1,`mt-4`,`flex`,`flex-wrap`,`gap-2`],[3,`label`],[1,`!my-5`],[1,`flex`,`flex-wrap`,`items-center`,`gap-3`,3,`click`],[`pButton`,``,`severity`,`primary`,`translate`,``,3,`routerLink`],[`pButton`,``,`severity`,`secondary`,`translate`,``,3,`routerLink`],[`pButton`,``,`severity`,`secondary`,`translate`,``],[`pButton`,``,`severity`,`secondary`,`target`,`_blank`,`rel`,`noopener`,3,`href`],[`pButton`,``,`severity`,`secondary`,`translate`,``,3,`click`]],template:function(e,i){e&1&&(Ac(0,`section`,0),Xc(1,`div`,1)(2,`div`,2)(3,`div`,3),Ac(4,`div`,4)(5,`section`,5)(6,`p`,6),Xc(7,`span`,7),Ac(8,`span`,8),_p(9,`Каталог шаблонів`),vp()(),Ac(10,`h1`,9),_p(11,` Angular-шаблони, готові до запуску `),vp(),Ac(12,`p`,10),_p(13,` Обирайте серед Angular 22 шаблонів Web Art Work. Обидва шаблони зараз безкоштовні — переглядайте деталі та додавайте в кошик для завантаження. `),vp()(),Ac(14,`div`,11)(15,`span`,12),_p(16,` Фреймворк `),vp(),Xc(17,`p-divider`,13),Ac(18,`div`,14),WD(`valueChange`,function(a){return qA(i.frameworkFilter,a)||(i.frameworkFilter=a),a}),lA(19,kn,2,2,`button`,15,xn),vp()(),Ac(21,`div`,16),lA(22,Ln,20,10,`p-card`,17,Tn),vp()()()),e&2&&(R_(18),zD(`value`,i.frameworkFilter),R_(),uA(i.frameworkOptions),R_(3),uA(i.filteredTemplates()))},dependencies:[ou,G4,Mn$1,ot,dt,ht,di,Ee,Te],styles:[`[_nghost-%COMP%]{display:block;min-height:100%;background:radial-gradient(circle at top left,color-mix(in srgb,var(--%NS%c-primary) 12%,transparent),transparent 28%),linear-gradient(180deg,var(--%NS%c-bg-primary) 0%,color-mix(in srgb,var(--%NS%c-bg-primary) 86%,var(--%NS%c-bg-secondary)) 100%);color:var(--%NS%c-text)}.landing-mesh[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(color-mix(in srgb,var(--%NS%c-border) 58%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--%NS%c-border) 58%,transparent) 1px,transparent 1px);background-position:center;background-size:56px 56px;-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,.75),transparent 88%);mask-image:linear-gradient(180deg,rgba(0,0,0,.75),transparent 88%);pointer-events:none}.landing-orb[_ngcontent-%COMP%]{position:absolute;border-radius:999px;filter:blur(40px);opacity:.7;pointer-events:none}.landing-orb--primary[_ngcontent-%COMP%]{top:3rem;right:min(12vw,8rem);height:16rem;width:16rem;background:color-mix(in srgb,var(--%NS%c-primary) 24%,transparent)}.landing-orb--secondary[_ngcontent-%COMP%]{left:-5rem;top:32rem;height:18rem;width:18rem;background:color-mix(in srgb,var(--%NS%c-text-strong) 10%,transparent)}[pSelectButton][_ngcontent-%COMP%]{display:inline-flex;overflow:hidden;border-radius:var(--%NS%radius-btn);border:1px solid var(--%NS%c-border);background:var(--%NS%c-bg-primary);box-shadow:var(--%NS%shadow-sm)}button[pSelectButtonOption][_ngcontent-%COMP%]{appearance:none;cursor:pointer;border:none;border-inline-start:1px solid var(--%NS%c-border);background:transparent;color:var(--%NS%c-text);font:inherit;font-size:.85rem;font-weight:600;line-height:1;padding:var(--%NS%sp-2) var(--%NS%sp-4);outline-color:transparent;transition:background var(--%NS%motion) var(--%NS%easing),color var(--%NS%motion) var(--%NS%easing),border-color var(--%NS%motion) var(--%NS%easing)}button[pSelectButtonOption][_ngcontent-%COMP%]:first-child{border-inline-start:none}button[pSelectButtonOption][_ngcontent-%COMP%]:not(:disabled):not(.p-togglebutton-checked):hover{background:color-mix(in srgb,var(--%NS%c-primary) 14%,transparent);color:var(--%NS%c-text-strong)}button[pSelectButtonOption].p-togglebutton-checked[_ngcontent-%COMP%]{background:var(--%NS%c-primary);color:var(--%NS%c-text-strong);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--%NS%c-primary-hover) 60%,transparent)}button[pSelectButtonOption][_ngcontent-%COMP%]:focus-visible{position:relative;z-index:1;box-shadow:var(--%NS%focus-ring)}button[pSelectButtonOption][_ngcontent-%COMP%]:disabled{cursor:default;opacity:.5}.template-card[_ngcontent-%COMP%]     .p-card-body{flex:1 1 auto}@media(max-width:640px){.landing-mesh[_ngcontent-%COMP%]{background-size:42px 42px}.landing-orb--primary[_ngcontent-%COMP%]{right:-4rem;top:5rem;height:11rem;width:11rem}.landing-orb--secondary[_ngcontent-%COMP%]{left:-6rem;top:40rem;height:12rem;width:12rem}}`]})};export{yt as LandingComponent};