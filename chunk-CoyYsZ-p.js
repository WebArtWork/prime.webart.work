import{$t as me,A as Jo,Bt as i5,C as Hr,Dt as ce,G as Qw,H as QL,J as RD,Kt as ki,Lt as h,M as Kn,Mt as e5,N as Lk,Ot as ck,Pt as el,Q as SA,Rt as hp,Sn as us,Tt as ag,U as Qe,Xt as ls,an as o5,at as U,bn as tl,dn as r5,fn as re,gn as s5,h as E,hn as rr,jt as d5,kn as ze,lt as Ve,n as $t,ot as UW,pt as XL,qt as kr,r as A,tn as n5,tt as TD,vt as Zc,z as Oe,zt as hu}from"./main-EL34C5YQ.js";var Dt=(()=>{class t extends Qw{autofocus=re(!1,{alias:`pAutoFocus`});focused=!1;platformId=h(Ve);document=h(U);host=h(me);onAfterContentChecked(){this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){kr(this.platformId)&&this.autofocus()&&setTimeout(()=>{let n=Lk.getFocusableElements(this.host?.nativeElement);n.length===0&&this.host.nativeElement.focus(),n.length>0&&n[0].focus(),this.focused=!0})}static ɵfac=(()=>{let n;return function(e){return(n||(n=Jo(t)))(e||t)}})();static ɵdir=ce({type:t,selectors:[[``,`pAutoFocus`,``]],hostVars:1,hostBindings:function(o,e){o&2&&ki(`autofocus`,e.autofocus()?`true`:null)},inputs:{autofocus:[1,`pAutoFocus`,`autofocus`]},features:[Zc]})}return t})();var pt=[`*`];var gt={root:`p-fluid`};var tt=(()=>{class t extends rr{name=`fluid`;classes=gt;static ɵfac=(()=>{let n;return function(e){return(n||(n=Jo(t)))(e||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var nt=new E(`FLUID_INSTANCE`);var ot=(()=>{class t extends Qw{componentName=`Fluid`;$pcFluid=h(nt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}_componentStyle=h(tt);static ɵfac=(()=>{let n;return function(e){return(n||(n=Jo(t)))(e||t)}})();static ɵcmp=Kn({type:t,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(o,e){o&2&&ls(e.cx(`root`))},features:[us([tt,{provide:nt,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc],ngContentSelectors:pt,decls:1,vars:0,template:function(o,e){o&1&&(el(),tl(0))},encapsulation:2})}return t})();var ht=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For ngx-prime */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var ft={root:`p-ink`};var it=(()=>{class t extends rr{name=`ripple`;style=ht;classes=ft;static ɵfac=(()=>{let n;return function(e){return(n||(n=Jo(t)))(e||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var Wt=(()=>{class t extends Qw{componentName=`Ripple`;zone=h(Oe);_componentStyle=h(it);animationListener;mouseDownListener;timeout;constructor(){super(),Qe(()=>{kr(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(n){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display===`none`)return;if(!this.$unstyled()&&XL(o,`p-ink-active`),o.setAttribute(`data-p-ink-active`,`false`),!r5(o)&&!s5(o)){let f=Math.max(e5(this.el.nativeElement),o5(this.el.nativeElement));o.style.height=f+`px`,o.style.width=f+`px`}let e=i5(this.el.nativeElement),s=n.pageX-e.left+this.document.body.scrollTop-s5(o)/2,ct=n.pageY-e.top+this.document.body.scrollLeft-r5(o)/2;this.renderer.setStyle(o,`top`,ct+`px`),this.renderer.setStyle(o,`left`,s+`px`),!this.$unstyled()&&QL(o,`p-ink-active`),o.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let f=this.getInk();f&&(!this.$unstyled()&&XL(f,`p-ink-active`),f.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let n=this.el.nativeElement.children;for(let o=0;o<n.length;o++)if(typeof n[o].className==`string`&&n[o].className.indexOf(`p-ink`)!==-1)return n[o];return null}resetInk(){let n=this.getInk();n&&(!this.$unstyled()&&XL(n,`p-ink-active`),n.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(n){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&XL(n.currentTarget,`p-ink-active`),n.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let n=this.renderer.createElement(`span`);this.renderer.addClass(n,`p-ink`),this.renderer.appendChild(this.el.nativeElement,n),this.renderer.setAttribute(n,`data-p-ink`,`true`),this.renderer.setAttribute(n,`data-p-ink-active`,`false`),this.renderer.setAttribute(n,`aria-hidden`,`true`),this.renderer.setAttribute(n,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(n,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let n=this.getInk();n&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,d5(n))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(o){return new(o||t)};static ɵdir=ce({type:t,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[us([it]),Zc]})}return t})();var rt=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var mt={root:({instance:t})=>[`p-button p-component`,{"p-button-icon-only":t.hasIcon&&!t.label()&&!t.buttonProps()?.label&&!t.badge(),"p-button-vertical":(t.iconPos()===`top`||t.iconPos()===`bottom`)&&t.label(),"p-button-loading":t.loading()||t.buttonProps()?.loading,"p-button-link":t.link()||t.buttonProps()?.link,[`p-button-${t.severity()||t.buttonProps()?.severity}`]:t.severity()||t.buttonProps()?.severity,"p-button-raised":t.raised()||t.buttonProps()?.raised,"p-button-rounded":t.rounded()||t.buttonProps()?.rounded,"p-button-text":t.text()||t.variant()===`text`||t.buttonProps()?.text||t.buttonProps()?.variant===`text`,"p-button-outlined":t.outlined()||t.variant()===`outlined`||t.buttonProps()?.outlined||t.buttonProps()?.variant===`outlined`,"p-button-sm":t.size()===`small`||t.buttonProps()?.size===`small`,"p-button-lg":t.size()===`large`||t.buttonProps()?.size===`large`,"p-button-plain":t.plain()||t.buttonProps()?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:`p-button-loading-icon`,icon:({instance:t})=>[`p-button-icon`,{[`p-button-icon-${t.iconPos()||t.buttonProps()?.iconPos}`]:t.label()||t.buttonProps()?.label,"p-button-icon-left":(t.iconPos()===`left`||t.buttonProps()?.iconPos===`left`)&&t.label()||t.buttonProps()?.label,"p-button-icon-right":(t.iconPos()===`right`||t.buttonProps()?.iconPos===`right`)&&t.label()||t.buttonProps()?.label,"p-button-icon-top":(t.iconPos()===`top`||t.buttonProps()?.iconPos===`top`)&&t.label()||t.buttonProps()?.label,"p-button-icon-bottom":(t.iconPos()===`bottom`||t.buttonProps()?.iconPos===`bottom`)&&t.label()||t.buttonProps()?.label},t.icon(),t.buttonProps()?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx(`icon`)).filter(([,N])=>!!N).reduce((N,[n])=>N+` ${n}`,`p-button-loading-icon`),label:`p-button-label`};var T=(()=>{class t extends rr{name=`button`;style=rt;classes=mt;static ɵfac=(()=>{let n;return function(e){return(n||(n=Jo(t)))(e||t)}})();static ɵprov=A({token:t,factory:t.ɵfac})}return t})();var dt=new E(`BUTTON_DIRECTIVE_INSTANCE`);var at=new E(`BUTTON_LABEL_INSTANCE`);var lt=new E(`BUTTON_ICON_INSTANCE`);var g={button:`p-button`,component:`p-component`,iconOnly:`p-button-icon-only`,disabled:`p-disabled`,loading:`p-button-loading`,labelOnly:`p-button-loading-label-only`};var ut=(()=>{class t extends Qw{componentName=`ButtonLabel`;ptButtonLabel=re();pButtonLabelPT=re();pButtonLabelUnstyled=re();$pcButtonLabel=h(at,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});constructor(){super(),Qe(()=>{let n=this.ptButtonLabel()||this.pButtonLabelPT();n&&this.directivePT.set(n)}),Qe(()=>{this.pButtonLabelUnstyled()&&this.directiveUnstyled.set(this.pButtonLabelUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(o){return new(o||t)};static ɵdir=ce({type:t,selectors:[[``,`pButtonLabel`,``]],hostVars:2,hostBindings:function(o,e){o&2&&RD(`p-button-label`,!e.$unstyled()&&!0)},inputs:{ptButtonLabel:[1,`ptButtonLabel`],pButtonLabelPT:[1,`pButtonLabelPT`],pButtonLabelUnstyled:[1,`pButtonLabelUnstyled`]},features:[us([T,{provide:at,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc]})}return t})();var st=(()=>{class t extends Qw{componentName=`ButtonIcon`;ptButtonIcon=re();pButtonIconPT=re();pButtonUnstyled=re();$pcButtonIcon=h(lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});constructor(){super(),Qe(()=>{let n=this.ptButtonIcon()||this.pButtonIconPT();n&&this.directivePT.set(n)}),Qe(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=function(o){return new(o||t)};static ɵdir=ce({type:t,selectors:[[``,`pButtonIcon`,``]],hostVars:2,hostBindings:function(o,e){o&2&&RD(`p-button-icon`,!e.$unstyled()&&!0)},inputs:{ptButtonIcon:[1,`ptButtonIcon`],pButtonIconPT:[1,`pButtonIconPT`],pButtonUnstyled:[1,`pButtonUnstyled`]},features:[us([T,{provide:lt,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc]})}return t})();var Mn=(()=>{class t extends Qw{componentName=`Button`;$pcButtonDirective=h(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});_componentStyle=h(T);ptButtonDirective=re();pButtonPT=re();pButtonUnstyled=re();hostName=re(``);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}constructor(){super(),Qe(()=>{let n=this.ptButtonDirective()||this.pButtonPT();n&&this.directivePT.set(n)}),Qe(()=>{this.pButtonUnstyled()&&this.directiveUnstyled.set(this.pButtonUnstyled())}),Qe(()=>{let n=this.$unstyled();this.initialized&&n&&this.setStyleClass()}),Qe(()=>{this._label=this.label(),this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}),Qe(()=>{this._icon=this.icon(),this.initialized&&(this.updateIcon(),this.setStyleClass())}),Qe(()=>{this._loading=this.loading(),this.initialized&&(this.updateIcon(),this.setStyleClass())}),Qe(()=>{this._severity=this.severity(),this.initialized&&this.setStyleClass()}),Qe(()=>{let n=this.buttonProps();this._buttonProps=n,n&&typeof n==`object`&&Object.entries(n).forEach(([o,e])=>this[`_${o}`]!==e&&(this[`_${o}`]=e))})}text=re(!1,{transform:$t});plain=re(!1,{transform:$t});raised=re(!1,{transform:$t});size=re();outlined=re(!1,{transform:$t});rounded=re(!1,{transform:$t});iconPos=re(`left`);loadingIcon=re();fluid=re(void 0,{transform:$t});iconSignal=UW(st);labelSignal=UW(ut);isIconOnly=ze(()=>!!(!this.labelSignal()&&this.iconSignal()));_label;_icon;_loading=!1;_severity;_buttonProps;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(g);pcFluid=h(ot,{optional:!0,host:!0,skipSelf:!0});isTextButton=ze(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text()));label=re();icon=re();loading=re(!1);buttonProps=re();severity=re();spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;onAfterViewInit(){!this.$unstyled()&&QL(this.htmlElement,this.getStyleClass().join(` `)),kr(this.platformId)&&(this.createIcon(),this.createLabel(),this.initialized=!0)}getStyleClass(){let n=[g.button,g.component];this._icon&&!this._label&&Hr(this.htmlElement.textContent)&&n.push(g.iconOnly),this._loading&&(n.push(g.disabled,g.loading),!this._icon&&this._label&&n.push(g.labelOnly),this._icon&&!this._label&&!Hr(this.htmlElement.textContent)&&n.push(g.iconOnly)),this.text()&&n.push(`p-button-text`),this._severity&&n.push(`p-button-${this._severity}`),this.plain()&&n.push(`p-button-plain`),this.raised()&&n.push(`p-button-raised`);let o=this.size();return o&&n.push(`p-button-${o}`),this.outlined()&&n.push(`p-button-outlined`),this.rounded()&&n.push(`p-button-rounded`),o===`small`&&n.push(`p-button-sm`),o===`large`&&n.push(`p-button-lg`),this.hasFluid&&n.push(`p-button-fluid`),this.$unstyled()?[]:n}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let n=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...n)}removeExistingSeverityClass(){let n=[`success`,`info`,`warn`,`danger`,`help`,`primary`,`secondary`,`contrast`],o=this.htmlElement.classList.value.split(` `).find(e=>n.some(s=>e===`p-button-${s}`));o&&this.htmlElement.classList.remove(o)}createLabel(){if(!n5(this.htmlElement,`[data-pc-section="buttonlabel"]`)&&this._label){let o=ck(`span`,{class:this.cx(`label`),"p-bind":this.ptm(`buttonlabel`),"aria-hidden":this._icon&&!this._label?`true`:null});o.appendChild(this.document.createTextNode(this._label)),this.htmlElement.appendChild(o)}}createIcon(){if(!n5(this.htmlElement,`[data-pc-section="buttonicon"]`)&&(this._icon||this._loading)){let o=this._label&&!this.$unstyled()?`p-button-icon-`+this.iconPos():null,e=!this.$unstyled()&&this.getIconClass(),s=ck(`span`,{class:this.cn(this.cx(`icon`),o,e),"aria-hidden":`true`,"p-bind":this.ptm(`buttonicon`)});!this.loadingIcon()&&this._loading&&(s.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(s,this.htmlElement.firstChild)}}updateLabel(){let n=n5(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(!this._label){n&&this.htmlElement.removeChild(n);return}n?n.textContent=this._label:this.createLabel()}updateIcon(){let n=n5(this.htmlElement,`[data-pc-section="buttonicon"]`),o=n5(this.htmlElement,`[data-pc-section="buttonlabel"]`);if(this._loading&&!this.loadingIcon()&&n?n.innerHTML=this.spinnerIcon:n?.innerHTML&&(n.innerHTML=``),n&&!this.$unstyled()){let e=this.iconPos();e?n.className=`p-button-icon `+(o?`p-button-icon-`+e:``)+` `+this.getIconClass():n.className=`p-button-icon `+this.getIconClass()}else this.createIcon()}getIconClass(){let n=this.loadingIcon();return this._loading?`p-button-loading-icon `+(n||`p-icon`):this._icon||`p-hidden`}onDestroy(){this.initialized=!1}static ɵfac=function(o){return new(o||t)};static ɵdir=ce({type:t,selectors:[[``,`pButton`,``]],contentQueries:function(o,e,s){o&1&&TD(s,e.iconSignal,st,5)(s,e.labelSignal,ut,5),o&2&&SA(2)},hostVars:4,hostBindings:function(o,e){o&2&&RD(`p-button-icon-only`,!e.$unstyled()&&e.isIconOnly())(`p-button-text`,!e.$unstyled()&&e.isTextButton())},inputs:{ptButtonDirective:[1,`ptButtonDirective`],pButtonPT:[1,`pButtonPT`],pButtonUnstyled:[1,`pButtonUnstyled`],hostName:[1,`hostName`],text:[1,`text`],plain:[1,`plain`],raised:[1,`raised`],size:[1,`size`],outlined:[1,`outlined`],rounded:[1,`rounded`],iconPos:[1,`iconPos`],loadingIcon:[1,`loadingIcon`],fluid:[1,`fluid`],label:[1,`label`],icon:[1,`icon`],loading:[1,`loading`],buttonProps:[1,`buttonProps`],severity:[1,`severity`]},features:[us([T,{provide:dt,useExisting:t},{provide:ag,useExisting:t}]),hp([hu]),Zc]})}return t})();export{Mn as n,Wt as r,Dt as t};