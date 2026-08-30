import{$t as me,A as Jo,Dt as ce,G as Qw,Gt as kf,Kt as ki,Lt as h,Rt as hp,Sn as us,Tt as ag,U as Qe,Xt as ls,fn as re,h as E,hn as rr,ht as Xe,k as Jc,kn as ze,r as A,vt as Zc,zt as hu}from"./main-EL34C5YQ.js";var C=`
    .p-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        background: transparent;
        border: 0;
        padding: 0;
        color: dt('button.link.color');
        text-decoration: none;
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition: color dt('button.transition.duration');
    }

    .p-link:not(.p-disabled):hover {
        color: dt('button.link.hover.color');
        text-decoration: underline;
    }

    .p-link:not(.p-disabled):active {
        color: dt('button.link.active.color');
    }

    .p-link:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-link.p-disabled {
        opacity: dt('disabled.opacity');
        cursor: default;
        pointer-events: none;
    }

    .p-link-icon-right {
        order: 1;
    }

    .p-link-icon-right:dir(rtl) {
        order: -1;
    }
`;var P={root:({instance:n})=>[`p-link p-component`,{"p-disabled":n.disabled()}],icon:({instance:n})=>[`p-link-icon`,{"p-link-icon-right":n.iconPos()===`right`}]};var M=(()=>{class n extends rr{name=`link`;style=C;classes=P;static ɵfac=(()=>{let t;return function(i){return(t||(t=Jo(n)))(i||n)}})();static ɵprov=A({token:n,factory:n.ɵfac})}return n})();var I=new E(`LINK_INSTANCE`);var z=(()=>{class n extends Qw{componentName=`Link`;$pcLink=h(I,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(hu,{self:!0});_componentStyle=h(M);_renderer=h(Xe);styleClass=re();value=re(``);type=re(`url`);href=re(null);target=re(`_self`);rel=re(null);icon=re();iconPos=re(`left`);disabled=re(!1);linkHref=ze(()=>{let t=this.href()?.trim();if(t)return t;let e=this.value().trim();if(!e)return null;switch(this.type()){case`email`:return`mailto:${e}`;case`tel`:return`tel:${e.replace(/[^+\d]/g,``)}`;case`sms`:return`sms:${e.replace(/[^+\d]/g,``)}`;case`whatsapp`:return`https://wa.me/${e.replace(/\D/g,``)}`;case`url`:return/^[a-z][a-z\d+.-]*:/i.test(e)?e:`https://${e}`;case`custom`:return null;default:return null}});linkRel=ze(()=>{return this.rel()?.trim()||(this.target()===`_blank`?`noopener noreferrer`:null)});isClickable=ze(()=>!!this.linkHref()&&!this.disabled());get hostHref(){return this.isClickable()?this.linkHref():null}get hostRel(){return this.linkRel()}get hostAriaDisabled(){return this.disabled()||!this.linkHref()?`true`:null}get dataP(){return this.cn({disabled:this.disabled()})}_elementRef=h(me);_iconEl;constructor(){super(),this._iconEl=this._renderer.createElement(`span`),this._renderer.setAttribute(this._iconEl,`aria-hidden`,`true`),Qe(()=>this._syncIcon())}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onClick(t){if(!this.isClickable()){t.preventDefault();return}}_syncIcon(){let t=this.icon(),e=this._elementRef.nativeElement;if(this._iconEl.className=this.cn(this.cx(`icon`),t)??``,!t){this._iconEl.parentElement&&this._renderer.removeChild(e,this._iconEl);return}this._iconEl.parentElement||(this.iconPos()===`right`?this._renderer.appendChild(e,this._iconEl):this._renderer.insertBefore(e,this._iconEl,e.firstChild))}static ɵfac=function(e){return new(e||n)};static ɵdir=ce({type:n,selectors:[[`a`,`pLink`,``]],hostVars:7,hostBindings:function(e,i){e&1&&Jc(`click`,function(H){return i.onClick(H)}),e&2&&(ki(`href`,i.hostHref,kf)(`target`,i.target())(`rel`,i.hostRel)(`aria-disabled`,i.hostAriaDisabled)(`data-p`,i.dataP),ls(i.cn(i.cx(`root`),i.styleClass())))},inputs:{styleClass:[1,`styleClass`],value:[1,`value`],type:[1,`type`],href:[1,`href`],target:[1,`target`],rel:[1,`rel`],icon:[1,`icon`],iconPos:[1,`iconPos`],disabled:[1,`disabled`]},features:[us([M,{provide:I,useExisting:n},{provide:ag,useExisting:n}]),hp([hu]),Zc]})}return n})();var K={slug:``,name:``,framework:`ngx`,tagline:``,description:``,features:[],stack:[],price:0,license:`free`,licenses:[],repoUrl:``,demoUrl:``,previewImage:``};export{z as n,K as t};