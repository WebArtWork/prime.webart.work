import{$ as SD,$t as me,A as Jo,At as d0,Cn as vp,Dt as ce,E as ID,It as fu,Kt as ki,Lt as h$1,M as Kn,Q as SA,Qt as mD,Rt as hp,S as HW,Sn as us,Tt as ag,U as Qe,Ut as jW,W as Qp,X as R_,Xt as ls,Z as Rw,a as Aa,fn as re,gt as Xw,h as E,hn as rr,k as Jc,kn as ze,mt as Xc,n as $t,o as Ac,r as A,vt as Zc,wt as ae,zt as hu}from"./main-EL34C5YQ.js";import{c as y,i as ee,o as gn}from"./chunk-C56SNvBY.js";import{t as Dt$1}from"./chunk-CoyYsZ-p.js";var Z=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var K=[`input`];var W=`
    ${Z}

    /* Native radio directive: preserve browser grouping and accessibility while using the active theme color. */
    input.p-radiobutton.p-component {
        accent-color: dt('radiobutton.checked.background');
        cursor: pointer;
    }

    input.p-radiobutton.p-component.p-disabled {
        cursor: default;
    }

    /* For ngx-prime */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`;var X={root:({instance:o})=>[`p-radiobutton p-component`,{"p-radiobutton-checked":o.checked,"p-disabled":o.$disabled(),"p-invalid":o.invalid(),"p-variant-filled":o.$variant()===`filled`,"p-radiobutton-sm p-inputfield-sm":o.size()===`small`,"p-radiobutton-lg p-inputfield-lg":o.size()===`large`}],box:`p-radiobutton-box`,input:`p-radiobutton-input`,icon:`p-radiobutton-icon`};var h=(()=>{class o extends rr{name=`radiobutton`;style=W;classes=X;static ɵfac=(()=>{let n;return function(t){return(n||(n=Jo(o)))(t||o)}})();static ɵprov=A({token:o,factory:o.ɵfac})}return o})();var Dt=(()=>{class o extends gn{componentName=`RadioButton`;element=h$1(me);_componentStyle=h$1(h);bindDirectiveInstance=h$1(hu,{self:!0});styleClass=re();ptRadioButton=re();pRadioButtonPT=re();pRadioButtonUnstyled=re();value=re();binary=re(!1,{transform:$t});ariaLabel=re();ariaLabelledBy=re();tabindex=re(void 0,{transform:Qp});inputId=re();autofocus=re(!1,{transform:$t});variant=re();size=re();$variant=ze(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onClick=d0();onFocus=d0();onBlur=d0();touch=d0();onInputChange(n){if(n.target.checked&&!this.$disabled()){let t=this.binary()?!0:this.value();this.writeModelValue(t),this.onModelChange(t),this.onClick.emit({originalEvent:n,value:t})}}onInputFocus(n){this.onFocus.emit(n)}onInputBlur(n){this.onModelTouched(),this.touch.emit(),this.onBlur.emit(n)}get checked(){return this.binary()?!!this.modelValue():Rw(this.modelValue(),this.value())}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}constructor(){super(),Qe(()=>{let n=this.ptRadioButton()||this.pRadioButtonPT();n&&this.directivePT.set(n)}),Qe(()=>{this.pRadioButtonUnstyled()&&this.directiveUnstyled.set(!0)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}focus(n){this.element.nativeElement.focus(n)}writeControlValue(n,e){e(n)}static ɵfac=function(e){return new(e||o)};static ɵdir=ce({type:o,selectors:[[`input`,`type`,`radio`,`pRadioButton`,``]],hostVars:18,hostBindings:function(e,t){e&1&&Jc(`change`,function(d){return t.onInputChange(d)})(`focus`,function(d){return t.onInputFocus(d)})(`blur`,function(d){return t.onInputBlur(d)}),e&2&&(SD(`autofocus`,t.autofocus())(`disabled`,t.$disabled())(`required`,t.required())(`value`,t.value()??``)(`checked`,t.checked),ki(`data-pc-name`,`radiobutton`)(`data-pc-section`,`input`)(`data-p`,t.dataP)(`data-p-invalid`,t.invalid()||null)(`aria-label`,t.ariaLabel()||null)(`aria-labelledby`,t.ariaLabelledBy()||null)(`aria-required`,t.required()||null)(`tabindex`,t.tabindex()??null)(`id`,t.inputId()||null)(`name`,t.name()||null)(`aria-checked`,t.checked),ls(t.cn(t.cx(`root`),t.styleClass())))},inputs:{styleClass:[1,`styleClass`],ptRadioButton:[1,`ptRadioButton`],pRadioButtonPT:[1,`pRadioButtonPT`],pRadioButtonUnstyled:[1,`pRadioButtonUnstyled`],value:[1,`value`],binary:[1,`binary`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],autofocus:[1,`autofocus`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`,touch:`touch`},features:[us([h,{provide:ee,useExisting:Aa(()=>o),multi:!0}]),hp([hu]),Zc]})}return o})();var J=new E(`RADIOBUTTON_INSTANCE`);var Y={provide:ee,useExisting:Aa(()=>nt),multi:!0};var tt=(()=>{class o{accessors=[];add(n,e){this.accessors.push([n,e])}remove(n){this.accessors=this.accessors.filter(e=>e[1]!==n)}select(n){this.accessors.forEach(e=>{this.isSameGroup(e,n)&&e[1]!==n&&e[1].writeValue(n.value())})}isSameGroup(n,e){return n[0].control?n[0].control.root===e.control.control.root&&n[1].name()===e.name():!1}static ɵfac=function(e){return new(e||o)};static ɵprov=A({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var nt=(()=>{class o extends gn{componentName=`RadioButton`;$pcRadioButton=h$1(J,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h$1(hu,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}constructor(){super(),HW()&&console.warn('`<p-radioButton>` is deprecated and will be removed in a future major version. Use a native `<input type="radio" pRadioButton>` instead.')}value=re();tabindex=re(void 0,{transform:Qp});inputId=re();ariaLabelledBy=re();ariaLabel=re();styleClass=re();autofocus=re(void 0,{transform:$t});binary=re(void 0,{transform:$t});variant=re();size=re();onClick=d0();onFocus=d0();onBlur=d0();inputViewChild=jW.required(`input`);$variant=ze(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=h$1(h);injector=h$1(ae);registry=h$1(tt);onInit(){this.control=this.injector.get(y),this.registry.add(this.control,this)}onChange(n){this.$disabled()||this.select(n)}select(n){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value()),this.registry.select(this),this.onClick.emit({originalEvent:n,value:this.value()}))}onInputFocus(n){this.focused=!0,this.onFocus.emit(n)}onInputBlur(n){this.focused=!1,this.onModelTouched(),this.onBlur.emit(n)}focus(){this.inputViewChild().nativeElement.focus()}writeControlValue(n,e){this.checked=this.binary()?!!n:n==this.value(),e(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(e){return new(e||o)};static ɵcmp=Kn({type:o,selectors:[[`p-radioButton`],[`p-radiobutton`],[`p-radio-button`]],viewQuery:function(e,t){e&1&&ID(t.inputViewChild,K,5),e&2&&SA()},hostVars:5,hostBindings:function(e,t){e&2&&(ki(`data-p-disabled`,t.$disabled())(`data-p-checked`,t.checked)(`data-p`,t.dataP),ls(t.cx(`root`)))},inputs:{value:[1,`value`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],autofocus:[1,`autofocus`],binary:[1,`binary`],variant:[1,`variant`],size:[1,`size`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[us([Y,h,{provide:J,useExisting:o},{provide:ag,useExisting:o}]),hp([hu]),Zc],decls:4,vars:20,consts:[[`input`,``],[`type`,`radio`,3,`focus`,`blur`,`change`,`checked`,`pAutoFocus`,`pBind`],[3,`pBind`]],template:function(e,t){e&1&&(Ac(0,`input`,1,0),Jc(`focus`,function(d){return t.onInputFocus(d)})(`blur`,function(d){return t.onInputBlur(d)})(`change`,function(d){return t.onChange(d)}),vp(),Ac(2,`div`,2),Xc(3,`div`,2),vp()),e&2&&(ls(t.cx(`input`)),mD(`checked`,t.checked)(`pAutoFocus`,t.autofocus())(`pBind`,t.ptm(`input`)),ki(`id`,t.inputId())(`name`,t.name())(`required`,t.required()?``:void 0)(`disabled`,t.$disabled()?``:void 0)(`value`,t.modelValue())(`aria-labelledby`,t.ariaLabelledBy())(`aria-label`,t.ariaLabel())(`aria-checked`,t.checked)(`tabindex`,t.tabindex()),R_(2),ls(t.cx(`box`)),mD(`pBind`,t.ptm(`box`)),R_(),ls(t.cx(`icon`)),mD(`pBind`,t.ptm(`icon`)))},dependencies:[Dt$1,fu,Xw,hu],encapsulation:2})}return o})();export{Dt as t};