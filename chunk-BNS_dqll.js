import{$ as SD,A as Jo,At as d0,Cn as vp,Ct as aD,D as Ip,Dn as yD,En as yA,G as Qw,Ht as j0,It as fu,Kt as ki,Lt as h,M as Kn,P as Mm,Pt as el,Q as SA,Qt as mD,Rt as hp,Sn as us,St as aA,Tt as ag,X as R_,Xt as ls,_ as EA,_n as sA,bn as tl,bt as _m,d as Bm,en as ml,fn as re,h as E,hn as rr,in as nl,k as Jc,kn as ze,l as B0,m as Dp,mn as ro,mt as Xc,n as $t,nt as Tp,o as Ac,p as Cp,pn as rl,q as R5,r as A,rn as ng,tt as TD,u as BW,vt as Zc,wn as x5,xt as _p,y as Ep,yt as Zv,zt as hu}from"./main-EL34C5YQ.js";var Ce=[`*`];var fe=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;var le=(()=>{class i extends rr{name=`baseicon`;css=fe;static ɵfac=(()=>{let e;return function(t){return(e||(e=Jo(i)))(t||i)}})();static ɵprov=A({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();var pe=(()=>{class i extends Qw{spin=re(!1,{transform:$t});_componentStyle=h(le);getClassNames(){return ro(`p-icon`,{"p-icon-spin":this.spin()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=Jo(i)))(t||i)}})();static ɵcmp=Kn({type:i,selectors:[[`ng-component`]],hostAttrs:[`width`,`14`,`height`,`14`,`viewBox`,`0 0 14 14`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],hostVars:2,hostBindings:function(n,t){n&2&&ls(t.getClassNames())},inputs:{spin:[1,`spin`]},features:[us([le]),Zc],ngContentSelectors:Ce,decls:1,vars:0,template:function(n,t){n&1&&(el(),tl(0))},encapsulation:2})}return i})();var me=(()=>{class i extends pe{pathId;onInit(){this.pathId=`url(#`+ng()+`)`}static ɵfac=(()=>{let e;return function(t){return(e||(e=Jo(i)))(t||i)}})();static ɵcmp=Kn({type:i,selectors:[[``,`data-p-icon`,`times-circle`]],features:[Zc],decls:5,vars:2,consts:[[`fill-rule`,`evenodd`,`clip-rule`,`evenodd`,`d`,`M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z`,`fill`,`currentColor`],[3,`id`],[`width`,`14`,`height`,`14`,`fill`,`white`]],template:function(n,t){n&1&&(Bm(),Ep(0,`g`),yD(1,`path`,0),Dp(),Ep(2,`defs`)(3,`clipPath`,1),yD(4,`rect`,2),Dp()()),n&2&&(ki(`clip-path`,t.pathId),R_(3),SD(`id`,t.pathId))},encapsulation:2})}return i})();var ue=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var he=[`removeicon`];var _e=[`*`];function be(i,c){if(i&1){let e=yA();Ac(0,`img`,2),Jc(`error`,function(t){_m(e);return Mm(EA().imageError(t))}),vp()}if(i&2){let e=EA();ls(e.cx(`image`)),mD(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),Zv)(`alt`,e.resolvedAlt())}}function ye(i,c){if(i&1&&Xc(0,`span`,4),i&2){let e=EA(2);ls(e.resolvedIcon()),mD(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function xe(i,c){if(i&1&&sA(0,ye,1,4,`span`,3),i&2)aA(EA().resolvedIcon()?0:-1)}function Ie(i,c){if(i&1&&(Ac(0,`div`,5),_p(1),vp()),i&2){let e=EA();ls(e.cx(`label`)),mD(`pBind`,e.ptm(`label`)),R_(),rl(e.resolvedLabel())}}function we(i,c){if(i&1){let e=yA();Ac(0,`span`,9),Jc(`click`,function(t){_m(e);return Mm(EA(3).close(t))})(`keydown`,function(t){_m(e);return Mm(EA(3).onKeydown(t))}),vp()}if(i&2){let e=EA(3);ls(e.resolvedRemoveIcon()),mD(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),ki(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Me(i,c){if(i&1){let e=yA();Bm(),Ac(0,`svg`,10),Jc(`click`,function(t){_m(e);return Mm(EA(3).close(t))})(`keydown`,function(t){_m(e);return Mm(EA(3).onKeydown(t))}),vp()}if(i&2){let e=EA(3);ls(e.cx(`removeIcon`)),mD(`pBind`,e.ptm(`removeIcon`)),ki(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Te(i,c){if(i&1&&(sA(0,we,1,6,`span`,7),sA(1,Me,1,5,`:svg:svg`,8)),i&2){let e=EA(2);aA(e.resolvedRemoveIcon()?0:-1),R_(),aA(e.resolvedRemoveIcon()?-1:1)}}function ke(i,c){}function De(i,c){i&1&&aD(0,ke,0,0,`ng-template`)}function Be(i,c){if(i&1){let e=yA();Ac(0,`span`,11),Jc(`click`,function(t){_m(e);return Mm(EA(2).close(t))})(`keydown`,function(t){_m(e);return Mm(EA(2).onKeydown(t))}),aD(1,De,1,0,null,12),vp()}if(i&2){let e=EA(2);ls(e.cx(`removeIcon`)),mD(`pBind`,e.ptm(`removeIcon`)),ki(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),R_(),mD(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function Ne(i,c){if(i&1&&(sA(0,Te,2,2),sA(1,Be,2,6,`span`,6)),i&2){let e=EA();aA(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),R_(),aA(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var Ee={root:({instance:i})=>({display:!i.visible&&`none`})};var Se={root:({instance:i})=>[`p-chip p-component`,{"p-disabled":i.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var ve=(()=>{class i extends rr{name=`chip`;style=ue;classes=Se;inlineStyles=Ee;static ɵfac=(()=>{let e;return function(t){return(e||(e=Jo(i)))(t||i)}})();static ɵprov=A({token:i,factory:i.ɵfac})}return i})();var ge=new E(`CHIP_INSTANCE`);var di=(()=>{class i extends Qw{componentName=`Chip`;$pcChip=h(ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=re();icon=re();image=re();alt=re();styleClass=re();disabled=re(!1,{transform:$t});removable=re(!1,{transform:$t});removeIcon=re();onRemove=d0();onImageError=d0();visible=!0;get removeAriaLabel(){return this.config.getTranslation(x5.ARIA).removeLabel}chipProps=re();resolvedLabel=ze(()=>this.chipProps()?.label??this.label());resolvedIcon=ze(()=>this.chipProps()?.icon??this.icon());resolvedImage=ze(()=>this.chipProps()?.image??this.image());resolvedAlt=ze(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=ze(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=ze(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=ze(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=h(ve);removeIconTemplate;templates=BW(R5);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(t){return(e||(e=Jo(i)))(t||i)}})();static ɵcmp=Kn({type:i,selectors:[[`p-chip`]],contentQueries:function(n,t,a){if(n&1&&(TD(a,t.templates,R5,4),nl(a,he,4)),n&2){SA();let z;Cp(z=Tp())&&(t.removeIconTemplate=z.first)}},hostVars:6,hostBindings:function(n,t){n&2&&(ki(`aria-label`,t.resolvedLabel())(`data-p`,t.dataP),Ip(t.sx(`root`)),ls(t.cn(t.cx(`root`),t.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[us([ve,{provide:ge,useExisting:i},{provide:ag,useExisting:i}]),hp([hu]),Zc],ngContentSelectors:_e,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,t){n&1&&(el(),tl(0),sA(1,be,1,5,`img`,0)(2,xe,1,1),sA(3,Ie,2,4,`div`,1),sA(4,Ne,2,2)),n&2&&(R_(),aA(t.resolvedImage()?1:2),R_(2),aA(t.resolvedLabel()?3:-1),R_(),aA(t.resolvedRemovable()?4:-1))},dependencies:[ml,j0,B0,me,fu,hu],encapsulation:2})}return i})();export{di as t};