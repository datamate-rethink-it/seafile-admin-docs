function hexToRgba(hex) {
  hex = hex.replace(/^#/, "");
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return `${r},${g},${b}`;
}

function update_custom_color(version) {
  var color = document.getElementById("cc_" + version).value;
  var rgba_color = hexToRgba(color);

  console.log(
    "Let me update the color in the css code to " +
      color +
      ", rgba(" +
      rgba_color +
      ") for version " +
      version
  );
  var divElement = document.getElementById("cc_output_" + version);
  var codeElement = divElement.querySelector("code");

  if (version === "v13.x") {
    var css_input = `#share-link-panel .link-authenticated-op:hover{background:transparent;color:##maincolor##;text-decoration:underline}
#thumbnailView .thumbnail.selected .thumbnailImage{border:2px solid ##maincolor##}
#upload-link-drop-zone{background:rgba(##mainrgba##,.1);border:2px dashed ##maincolor##;border-radius:4px;padding:28px 0}
.accordion{--bs-accordion-color:#212529;--bs-accordion-bg:#fff;--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:1px;--bs-accordion-border-radius:3px;--bs-accordion-inner-border-radius:2px;--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:#212529;--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23E58800' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3E%3C/svg%3E");--bs-accordion-btn-focus-border-color:#1991eb;--bs-accordion-btn-focus-box-shadow:0 0 0 2px rgba(##mainrgba##,.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:#e68900;--bs-accordion-active-bg:#fff5e6}
.article .html-element.active{border:1px solid ##maincolor##}
.article hr.active{border-top:1px solid ##maincolor##}
.big-new-file-button:focus,.big-new-file-button:hover{border-color:##maincolor##;color:#ed7109}
.btn-check:checked+.btn,.btn.active,.btn.btn-primary:active,.btn.btn-primary:hover,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{background-color:##maincolor##;border-color:#cc7a00;color:#fff}
.btn-close:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,.25);opacity:1;outline:0}
.btn-outline-primary:active,.btn-outline-primary:hover{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.btn-outline-primary{--bs-btn-color:##maincolor##;--bs-btn-border-color:##maincolor##;--bs-btn-hover-color:#000;--bs-btn-hover-bg:##maincolor##;--bs-btn-hover-border-color:##maincolor##;--bs-btn-focus-shadow-rgb:255,152,0;--bs-btn-active-color:#000;--bs-btn-active-bg:##maincolor##;--bs-btn-active-border-color:##maincolor##;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:##maincolor##;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:##maincolor##;--bs-gradient:none}
.btn-primary:hover{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary:not(:disabled):not(.disabled):active{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary{--bs-btn-color:#000;--bs-btn-bg:##maincolor##;--bs-btn-border-color:##maincolor##;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffa726;--bs-btn-hover-border-color:#ffa21a;--bs-btn-focus-shadow-rgb:217,129,0;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffad33;--bs-btn-active-border-color:#ffa21a;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:##maincolor##;--bs-btn-disabled-border-color:##maincolor##}
.chat-message:after{border-bottom:6px solid transparent;border-left:6px solid ##maincolor##;border-top:6px solid transparent;content:"";position:absolute;right:-5px;top:7px}
.chat-message{background-color:##maincolor##;border-radius:3px;color:#fff;display:inline-block;font-size:.875rem;line-height:1.4;margin:0 .5rem 0 2.5rem;padding:.375rem .5rem;position:relative;text-align:left;white-space:normal}
.colorinput-input:focus~.colorinput-color{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,.25)}
.content .dropdown .btn-outline-primary:active{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.content .dropdown .btn-outline-primary:hover{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.content .dropdown .btn-outline-primary{background-color:transparent;background-image:none;border-color:##maincolor##;color:##maincolor##}
.cur-view-path .sf-heading a {color: ##maincolor## !important;}
.custom-modal .repo-list-item.active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.custom-range::-moz-range-progress{background:##maincolor##;border:0;height:2px;margin-top:0}
.custom-range::-ms-fill-lower{background:##maincolor##;border-radius:0}
.custom-range::-webkit-slider-runnable-track{background:##maincolor##;content:"";height:2px;pointer-events:none}
.custom-range:focus::-moz-range-thumb{background-color:##maincolor##;border-color:##maincolor##}
.custom-range:focus::-ms-thumb{background-color:##maincolor##;border-color:##maincolor##}
.custom-range:focus::-webkit-slider-thumb{background-color:##maincolor##;border-color:##maincolor##}
.custom-switch-input:checked~.custom-switch-indicator{background:##maincolor##}
.custom-switch-input:focus~.custom-switch-indicator{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,.25)}
.department-dialog-content .department-dialog-group .group-item.tr-highlight:before{background-color:##maincolor##;border-radius:2px;bottom:4px;content:"";display:block;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.departments-tree-panel .tree-node.active:before{background-color:##maincolor##;border-radius:2px;bottom:2px;content:"";display:block;left:-8px;position:absolute;top:2px;width:4px;z-index:0}
.dropdown-item:hover, .dropdown-item:focus {color: #333; background-color: rgba(##mainrgba##,.20);}
.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:rgba(0,40,100,.12);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:rgba(0,40,100,.12);--bs-dropdown-link-hover-bg:hsla(0,0%,100%,.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:##maincolor##;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}
.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:0.875rem;--bs-dropdown-color:#212529;--bs-dropdown-bg:#fff;--bs-dropdown-border-color:rgba(0,40,100,.12);--bs-dropdown-border-radius:3px;--bs-dropdown-border-width:1px;--bs-dropdown-inner-border-radius:2px;--bs-dropdown-divider-bg:rgba(0,40,100,.12);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:0 1px 2px 0 rgba(0,0,0,.05);--bs-dropdown-link-color:#212529;--bs-dropdown-link-hover-color:#1e2125;--bs-dropdown-link-hover-bg:#e9ecef;--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:##maincolor##;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#868e96;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;background-clip:padding-box;background-color:var(--bs-dropdown-bg);border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius);color:var(--bs-dropdown-color);display:none;font-size:var(--bs-dropdown-font-size);list-style:none;margin:0;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);position:absolute;text-align:left;z-index:var(--bs-dropdown-zindex)}
.file-chooser-item .item-active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:2px;width:4px;z-index:10}
.form-check-input:checked{background-color:##maincolor##;border-color:##maincolor##}
.form-check-input:focus{border-color:#1991eb;box-shadow:0 0 0 2px rgba(##mainrgba##,.25);outline:0}
.form-check-input[type=checkbox]:indeterminate{background-color:##maincolor##;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E");border-color:##maincolor##}
.form-help:hover,.form-help[aria-describedby]{background:##maincolor##;color:#fff}
.form-range::-moz-range-thumb{appearance:none;background-color:##maincolor##;border:0;border-radius:1rem;height:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}
.form-range::-webkit-slider-thumb{appearance:none;background-color:##maincolor##;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}
.form-select:focus{border-color:#1991eb;box-shadow:0 0 0 2px rgba(##mainrgba##,.25);outline:0}
.go-back:hover { color: ##maincolor##; text-decoration: none;}
.go-back:hover{color:##maincolor##;cursor:pointer}
.history-header .title .go-back:hover{color:##maincolor##;text-decoration:none}
.imagecheck-figure:before{background:##maincolor## url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E") no-repeat 50%/50% 50%;border-radius:3px;color:#fff;content:"";display:block;height:1rem;left:.25rem;opacity:0;pointer-events:none;position:absolute;top:.25rem;transition:opacity .3s;user-select:none;width:1rem;z-index:1}
.imagecheck-input:focus~.imagecheck-figure{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,.25)}
.invite-link-icon-in-popup{color:##maincolor##;cursor:pointer;font-size:.875rem;font-style:normal;line-height:1;margin-left:.5rem;vertical-align:middle}
.invite-link-item .delete-link-btn:hover{background-color:##maincolor##;border-color:##maincolor##;box-shadow:none;color:#fff}
.invite-link-item .delete-link-btn{border-color:##maincolor##;color:##maincolor##;font-size:16px;padding:0}
.item-content .item-name a{color:##maincolor##!important}
.lds-ripple div{animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;border:4px solid ##maincolor##;border-radius:50%;opacity:1;position:absolute}
.lds-ripple div{border:4px solid ##maincolor##}
.lib-setting-nav .nav-pills .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.link-primary{color:##maincolor##!important}
.list-group-transparent .list-group-item.active{background:rgba(##mainrgba##,.06);font-weight:600}
.list-group{--bs-list-group-color:#212529;--bs-list-group-bg:#fff;--bs-list-group-border-color:rgba(0,40,100,.12);--bs-list-group-border-width:1px;--bs-list-group-border-radius:3px;--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:#495057;--bs-list-group-action-hover-color:#495057;--bs-list-group-action-hover-bg:#f8f9fa;--bs-list-group-action-active-color:#212529;--bs-list-group-action-active-bg:#e9ecef;--bs-list-group-disabled-color:#868e96;--bs-list-group-disabled-bg:#fff;--bs-list-group-active-color:##maincolor##;--bs-list-group-active-bg:#fffbf5;--bs-list-group-active-border-color:rgba(0,40,100,.12);border-radius:var(--bs-list-group-border-radius);display:flex;flex-direction:column;margin-bottom:0;padding-left:0}
.login-panel .submit:focus { border-color: ##maincolor##;}
.menu-group .menu-group-item[data-active=true]{color:##maincolor##}
.metadata-gallery-image-item-selected{border:2px solid ##maincolor##}
.nav-pills .nav-item .nav-link.active { background-color: ##maincolor##; color: var(--bs-highlight-color); border-bottom: 0.125rem solid transparent;}
.nav-pills .nav-item .nav-link.active{background-color: ##maincolor##; color:#fff !important;}
.nav-pills .nav-item .nav-link:hover {background-color: ##maincolor##30;}
.nav-pills{--bs-nav-pills-border-radius:3px;--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:##maincolor##}
.nav-tabs .nav-submenu .nav-item.active{color:##maincolor##}
.nav{flex-wrap:inherit !important;}
.new-narrow-panel .hd { color: #fff; font-size: 16px; padding: 5px 20px; background: ##maincolor##; border-bottom: 1px solid #d5d5d5;}
.notification-list-content .notification-modal-body .notice-dialog-side .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:26px;left:-5px;position:absolute;top:2px;width:3px;z-index:2}
.old-history-main .go-back:hover{color:##maincolor##;text-decoration:none}
.op-icon.sf2-x,.op-icon.sf2-x:hover { color: ##maincolor##;}
.op-icon:focus, .op-icon:hover{color: rgba(##mainrgba##,.70) !important;}
.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:0.875rem;--bs-pagination-color:#212529;--bs-pagination-bg:#fff;--bs-pagination-border-width:1px;--bs-pagination-border-color:#dee2e6;--bs-pagination-border-radius:3px;--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:#e9ecef;--bs-pagination-hover-border-color:#dee2e6;--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:#e9ecef;--bs-pagination-focus-box-shadow:0 0 0 2px rgba(##mainrgba##,.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:##maincolor##;--bs-pagination-active-border-color:##maincolor##;--bs-pagination-disabled-color:#ced4da;--bs-pagination-disabled-bg:#fff;--bs-pagination-disabled-border-color:#dee2e6;display:flex;list-style:none;padding-left:0}
.progress{--bs-progress-height:1rem;--bs-progress-font-size:0.65625rem;--bs-progress-bg:#e9ecef;--bs-progress-border-radius:3px;--bs-progress-box-shadow:inset 0 1px 2px rgba(0,0,0,.075);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:##maincolor##;--bs-progress-bar-transition:width 0.6s ease;background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius);font-size:var(--bs-progress-font-size);height:var(--bs-progress-height)}
.sdoc-ai-content .sdoc-ai-search .sdoc-send-arrow{color:##maincolor##;cursor:pointer;pointer-events:auto;position:absolute;right:16px}
.sdoc-editor__article .virtual-link{color:##maincolor##}
.sdoc-file-link-render .sdoc-file-link-icon{color:##maincolor##;padding-right:5px}
.sdoc-file-render .sdoc-file-link-icon{color:##maincolor##;padding-right:5px}
.sdoc-file-render .sdoc-file-text-link.sdoc-no-file-link-icon a{color:##maincolor##;font-weight:700;text-decoration:underline;text-decoration-thickness:2px}
.sdoc-file-select-dialog .highlight-bg-color{background-color:##maincolor##;border-color:##maincolor##}
.sdoc-operator-folder .sdoc-dropdown-menu .sdoc-dropdown-menu-item .sdoc-full-width-mode-wrapper .custom-switch .custom-switch-input:checked~.custom-switch-indicator{background:##maincolor##}
.sdoc-operator-folder .sdoc-dropdown-menu .sdoc-dropdown-menu-item .sdoc-full-width-mode-wrapper .custom-switch .custom-switch-input:focus~.custom-switch-indicator{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(255,128,0,.25)}
.sdoc-outline-item.active{color:##maincolor##}
.sdoc-tip-dialog .highlight-bg-color{background-color:##maincolor##;border-color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h2.active,.sdoc-wiki-viewer-outline .outline-h3.active{color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h2:hover{color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h3:hover{color:##maincolor##}
.selectgroup-input:checked+.selectgroup-button{background:#fff5e6;border-color:##maincolor##;color:##maincolor##;z-index:1}
.selectgroup-input:focus+.selectgroup-button{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,.25);color:##maincolor##;z-index:2}
.sf-editor-outline-item.active{color:##maincolor##}
.sf-file-exit-tag.selected,.sf-file-new-tag.selected{border-color:##maincolor##}
.sf-menu-group .sf-menu-group-item[data-active=true]{color:##maincolor##}
.sf-metadata-filed-display-setting .sf-metadata-filed-display-setting-banner .show-all-button{color:##maincolor##;cursor:pointer;font-size:12px}
.sf-metadata-kanban-card.selected{border-color:##maincolor##}
.sf-metadata-tags-editor-container .sf-metadata-ui-tags-container .sf-metadata-ui-tag.sf-metadata-ui-tag-selected{border-color:##maincolor##}
.sf-virtual-link{color:##maincolor##}
.share-dialog-side .nav-pills .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;bottom:4px;content:"";display:block;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.show>.btn-secondary.dropdown-toggle.dropdown-item{color: #333; background-color: rgba(##mainrgba##,.20);}
.side-nav-link { display: flex; margin: 24px 12px; color: #FFFFFF; border-radius: 0.25rem; background-color: ##maincolor##;}
.side-nav-link:hover { background-color: ##maincolor##; cursor: pointer;}
.side-panel .nav .nav-link.active:hover{background-color: ##maincolor##;}
.side-panel .side-nav .side-nav-con .nav-item.active::before { content: ''; position: absolute; display: block; width: 4px; height: 30px; left: -8px; top: 4px; background-color: ##maincolor##; border-radius: 2px; z-index: 2;}
.side-tabnav h3.hd,.side-tabnav .hd h3 { color: ##maincolor##;}
.side-tabnav-tabs .tab a:hover { background-color: ##maincolor##; text-decoration: none;}
.side-tabnav-tabs .tab a:hover {background-color: ##maincolor##30;text-decoration: none}
.side-tabnav-tabs .tab-cur a,.side-tabnav-tabs .tab-cur a:hover { background-color: ##maincolor##;}
.table-calendar-link:before{background:##maincolor##;border-radius:50px;content:"";height:4px;left:.25rem;position:absolute;top:.25rem;width:4px}
.table-calendar-link:hover{background:##maincolor##;color:#fff;text-decoration:none;transition:background .3s}
.tag-primary{background-color:##maincolor##;color:#fff}
.transfer-dialog-side .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;bottom:4px;content:"";display:block;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.tree-node-hight-light:before{background-color:##maincolor##;border-radius:2px;bottom:2px;content:"";display:block;left:-8px;position:absolute;top:2px;width:4px;z-index:0}
.tree-node-hight-light:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:2px;width:4px;z-index:0}
.tree-node-hight-light{background-color:##maincolor##!important;border-radius:4px;color:#fff}
.tree-node-inner-hover{background-color:##maincolor##30;border-radius:.25rem}
.txt-line-wrap-menu .custom-switch .custom-switch-input:checked~.custom-switch-indicator{background:##maincolor##}
.txt-line-wrap-menu .custom-switch .custom-switch-input:focus~.custom-switch-indicator{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(255,128,0,.25)}
.wiki-card-item .wiki-card-item-top .sf3-font-wiki.sf3-font{color:##maincolor##;font-size:24px;height:24px;line-height:24px}
:root,[data-bs-theme=light]{--bs-blue:#467fcf;--bs-azure:#45aaf2;--bs-indigo:#6574cd;--bs-purple:#a55eea;--bs-pink:#f66d9b;--bs-red:#cd201f;--bs-orange:#ed7109;--bs-yellow:#f1c40f;--bs-lime:#7bd235;--bs-green:#5eba00;--bs-teal:#2bcbba;--bs-cyan:#17a2b8;--bs-white:#fff;--bs-gray:#868e96;--bs-gray-dark:#343a40;--bs-primary:##maincolor##;--bs-secondary:#666;--bs-success:#5eba00;--bs-info:#45aaf2;--bs-warning:#f1c40f;--bs-danger:#cd201f;--bs-light:#f8f9fa;--bs-dark:#343a40;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-body-secondary-bg:#f7f7f5;--bs-body-tertiary-bg:#f5f5f5;--bs-body-quartus-bg:#f4f4f4;--bs-emphasis-color:#303133;--bs-border-color:rgba(0,40,100,.12);--bs-border-secondary-color:#eee;--bs-secondary-color:#444;--bs-tertiary-color:#fff;--bs-tertiary-color-rgb:255,255,255;--bs-header-bg:#f8fafd;--bs-header-secondary-bg:#f6f6f6;--bs-header-tertiary-bg:#f2f2f2;--bs-header-quartus-bg:#f0f0f0;--bs-toolbar-bg:#fff;--bs-toolbar-secondary-bg:#fcfcfc;--bs-nav-hover-bg:#f0f0f0;--bs-nav-active-bg:#f5f5f5;--bs-wiki-nav-hover-bg:#efefef;--bs-wiki-nav-active-bg:#ededea;--bs-th-bg:#f9f9f9;--bs-th-secondary-bg:#fafafa;--bs-th-tertiary-bg:#f7f7f7;--bs-th-quartus-bg:#ededed;--bs-th-fifth-bg:#e3e3e3;--bs-tr-active-bg:#f2f4f6;--bs-tr-active-secondary-bg:#dbecfa;--bs-tr-hover-bg:#f5f5f5;--bs-icon-rgb:0,0,0;--bs-icon-hover-rgb:0,0,0;--bs-icon-color:#444;--bs-icon-secondary-color:#666;--bs-icon-tertiary-color:#999;--bs-icon-hover-color:#333;--bs-hover-bg:#efefef;--bs-hover-secondary-bg:#e5e5e5;--bs-hover-tertiary-bg:#dbdbdb;--bs-bg-color:#f5f5f5;--bs-bg-secondary-color:#f0f0f0;--bs-dropdown-link-bg:#20a0ff;--bs-dropdown-secondary-bg:#f2f2f2;--bs-dropdown-tertiary-bg:#f5f5f5}
@charset "UTF-8";:root{--bs-blue:#467fcf;--bs-azure:#45aaf2;--bs-indigo:#6574cd;--bs-purple:#a55eea;--bs-pink:#f66d9b;--bs-red:#cd201f;--bs-orange:#ed7109;--bs-yellow:#f1c40f;--bs-lime:#7bd235;--bs-green:#5eba00;--bs-teal:#2bcbba;--bs-cyan:#17a2b8;--bs-white:#fff;--bs-gray:#868e96;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#868e96;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:##maincolor##;--bs-secondary:#666;--bs-success:#5eba00;--bs-info:#45aaf2;--bs-warning:#f1c40f;--bs-danger:#cd201f;--bs-light:#f8f9fa;--bs-dark:#343a40;--bs-primary-rgb:255,152,0;--bs-secondary-rgb:102,102,102;--bs-success-rgb:94,186,0;--bs-info-rgb:69,170,242;--bs-warning-rgb:241,196,15;--bs-danger-rgb:205,32,31;--bs-light-rgb:248,249,250;--bs-dark-rgb:52,58,64;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));--bs-body-font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;--bs-body-font-size:0.875rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:rgba(0,40,100,.12);--bs-border-color-translucent:rgba(0,0,0,.175);--bs-border-radius:3px;--bs-border-radius-sm:3px;--bs-border-radius-lg:3px;--bs-border-radius-xl:1rem;--bs-border-radius-2xl:2rem;--bs-border-radius-pill:50rem;--bs-link-color:##maincolor##;--bs-link-hover-color:#cc7a00;--bs-code-color:inherit;--bs-highlight-bg:#fcf3cf}
button {word-break: normal;}
`;
  } else if (version === "v12.x") {
    var css_input = `#login-bottom .bottom-item { border-right: 1px solid ##maincolor##;}
#notice-popover li.unread{border-left:2px solid ##maincolor##;padding-left:10px;padding-right:10px}
#share-link-panel .link-authenticated-op:hover{background:transparent;color:##maincolor##;text-decoration:underline}
#thumbnailView .thumbnail.selected .thumbnailImage{border:2px solid ##maincolor##}
#upload-link-drop-zone{background:rgba(##mainrgba##,.1);border:2px dashed ##maincolor##;border-radius:4px;padding:28px 0}
#wiki-file-content .seafile-markdown-outline .outline-h2.active,#wiki-file-content .seafile-markdown-outline .outline-h3.active { color: ##maincolor##;}
.article .html-element.active{border:1px solid ##maincolor##}
.article hr.active{border-top:1px solid ##maincolor##}
.badge-primary{color:#fff;background-color:##maincolor##}
.bg-primary{background-color:##maincolor## !important}
.big-new-file-button:focus,.big-new-file-button:hover{border-color:##maincolor##;color:##maincolor##}
.border-primary{border-color:##maincolor## !important}
.btn-active[data-active=true]#saveButton{color:##maincolor##}
.btn-link{font-weight:400;color:##maincolor##;text-decoration:none}
.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:##maincolor##;background-color:transparent}
.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-outline-primary:hover{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-outline-primary{color:##maincolor##;border-color:##maincolor##}
.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:##maincolor##;border-color:#cc7a00;box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-primary:hover{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-primary:not(:disabled):not(.disabled):active{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.chat-message:after{content:"";position:absolute;right:-5px;top:7px;border-bottom:6px solid transparent;border-left:6px solid ##maincolor##;border-top:6px solid transparent}
.chat-message{position:relative;display:inline-block;background-color:##maincolor##;color:#fff;font-size:.875rem;padding:.375rem .5rem;border-radius:3px;white-space:normal;text-align:left;margin:0 .5rem 0 2.5rem;line-height:1.4}
.colorinput-input:focus ~ .colorinput-color{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.content .dropdown .btn-outline-primary:active{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.content .dropdown .btn-outline-primary:hover{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.content .dropdown .btn-outline-primary{background-color:transparent;background-image:none;border-color:##maincolor##;color:##maincolor##}
.cur-view-path .sf-heading a {color: ##maincolor## !important;}
.cur-view-path .sf-heading a{color:##maincolor##}
.cur-view-path .tab-tabs-nav .ui-state-active .a,.cur-view-path .tab-tabs-nav .a:hover { color: ##maincolor##; text-decoration: none; border-bottom-color: ##maincolor##;}
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:##maincolor##;background-color:##maincolor##}
.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:##maincolor##;background-color:##maincolor##}
.custom-modal .repo-list-item.active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-range::-moz-range-progress{height:2px;background:##maincolor##;border:0;margin-top:0}
.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range::-ms-fill-lower{background:##maincolor##;border-radius:0}
.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:2px;margin-left:2px;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range::-webkit-slider-runnable-track{background:##maincolor##;content:'';height:2px;pointer-events:none}
.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range:focus::-moz-range-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-range:focus::-ms-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-range:focus::-webkit-slider-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-select:focus{border-color:#1991eb;outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-switch-input:checked ~ .custom-switch-indicator{background:##maincolor##}
.custom-switch-input:focus ~ .custom-switch-indicator{box-shadow:0 0 0 2px rgba(##mainrgba##,0.25);border-color:##maincolor##}
.department-dialog-content .department-dialog-group .group-item.tr-highlight:before{background-color:##maincolor##;border-radius:2px;bottom:4px;content:"";display:block;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.department-single-select-formatter .department-avatar-container,.selected-departments .department-avatar-container,.selected-option-show .department-avatar-container{background:##maincolor##;border-radius:50%;height:18px;padding:2px 2px 3px;width:18px}
.department-single-select-formatter .department-avatar-container{background:##maincolor##;border-radius:50%;height:18px;padding:2px 2px 3px;width:18px}
.departments-tree-panel .tree-node.active:before{background-color:##maincolor##;border-radius:2px;bottom:2px;content:"";display:block;left:-8px;position:absolute;top:2px;width:4px;z-index:0}
.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:##maincolor##}
.dropdown-item:hover, .dropdown-item:focus {color: #333; background-color: rgba(##mainrgba##,.20);}
.file-chooser-item .item-active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:2px;width:4px;z-index:10}
.file-chooser-list-view-header .name{color:##maincolor##}
.file-view-header .file-toolbar-btn#save-file{color:##maincolor##}
.form-help:hover,.form-help[aria-describedby]{background:##maincolor##;color:#fff}
.go-back:hover { color: ##maincolor##; text-decoration: none;}
.go-back:hover{color:##maincolor##;cursor:pointer}
.history-header .title .go-back:hover{color:##maincolor##;text-decoration:none}
.image-view i{animation:rotate 1.5s ease infinite;color:##maincolor##;font-size:30px;height:100%;line-height:150px;text-align:center;width:100%}
.imagecheck-figure:before{content:'';position:absolute;top:.25rem;left:.25rem;display:block;width:1rem;height:1rem;pointer-events:none;user-select:none;background:##maincolor## url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/></svg>") no-repeat center center/50% 50%;color:#fff;z-index:1;border-radius:3px;opacity:0;transition:.3s opacity}
.imagecheck-input:focus ~ .imagecheck-figure{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.invite-link-icon-in-popup{color:##maincolor##;cursor:pointer;font-size:.875rem;font-style:normal;line-height:1;margin-left:.5rem;vertical-align:middle}
.item-content .item-name a{color:##maincolor##!important}
.lds-ripple div{animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;border:4px solid ##maincolor##;border-radius:50%;opacity:1;position:absolute}
.lib-setting-nav .nav-pills .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.list-group-item.active{z-index:2;color:##maincolor##;background-color:#fffbf5;border-color:rgba(0,40,100,0.12)}
.list-group-transparent .list-group-item.active{background:rgba(##mainrgba##,0.06);font-weight:600}
.list-show-more { padding: 0.25rem 0.75rem; line-height: 2rem; text-align: center; color: ##maincolor##; cursor: pointer;}
.list-tag-popover .tag-list-footer .item-text{color:##maincolor##;cursor:pointer}
.login-panel .submit:focus { border-color: ##maincolor##;}
.menu-group .menu-group-item[data-active=true]{color:##maincolor##}
.metadata-gallery-image-item-selected{border:2px solid ##maincolor##}
.nav .nav-item .nav-link.active { color: ##maincolor##; text-decoration: none; border-bottom-color: ##maincolor##; z-index: 1;}
.nav-pills .nav-item .nav-link.active { background-color: ##maincolor##; color: #fff; border: none;}
.nav-pills .nav-item .nav-link.active{background-color: ##maincolor##; color:#fff !important;}
.nav-pills .nav-item .nav-link:hover {background-color: ##maincolor##30;}
.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:##maincolor##}
.nav-tabs .nav-submenu .nav-item.active{color:##maincolor##}
.nav{flex-wrap:inherit !important;}
.new-narrow-panel .hd { color: #fff; font-size: 16px; padding: 5px 20px; background: ##maincolor##; border-bottom: 1px solid #d5d5d5;}
.old-history-main .commit-list .username{color:##maincolor##;font-weight:700;text-decoration:none;vertical-align:middle}
.old-history-main .file-name{word-wrap:break-word;color:##maincolor##}
.old-history-main .go-back:hover{color:##maincolor##;text-decoration:none}
.op-icon.sf2-x,.op-icon.sf2-x:hover { color: ##maincolor##;}
.op-icon:focus, .op-icon:hover{color: rgba(##mainrgba##,.70) !important;}
.op-target { color: ##maincolor##; word-wrap: break-word;}
.option-editor-footer .item-text{color:##maincolor##;cursor:pointer}
.outline-h2:hover{color:##maincolor##}
.outline-h3:hover{color:##maincolor##}
.page-item.active .page-link{z-index:3;color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.path-link { color: ##maincolor## !important; text-decoration: none;}
.path-toolbar .toolbar-item a:hover{color:##maincolor##;text-decoration:none}
.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:##maincolor##;transition:width 0.6s ease}
.review-side-panel-nav .nav-item .nav-link.active{border-color:##maincolor##;color:##maincolor##}
.sdoc-ai-content .sdoc-ai-search .sdoc-send-arrow{color:##maincolor##;cursor:pointer;pointer-events:auto;position:absolute;right:16px}
.sdoc-editor__article .virtual-link{color:##maincolor##}
.sdoc-file-history-versions .history-list-item.item-active .history-info .name{color:##maincolor##}
.sdoc-file-history-versions .history-list-item.item-active .history-info .time{color:##maincolor##}
.sdoc-file-link-render .sdoc-file-link-icon{color:##maincolor##;padding-right:5px}
.sdoc-file-render .sdoc-file-link-icon{color:##maincolor##;padding-right:5px}
.sdoc-file-render .sdoc-file-text-link.sdoc-no-file-link-icon a{color:##maincolor##;font-weight:700;text-decoration:underline;text-decoration-thickness:2px}
.sdoc-file-select-dialog .highlight-bg-color{background-color:##maincolor##;border-color:##maincolor##}
.sdoc-operator-folder .sdoc-dropdown-menu .sdoc-dropdown-menu-item .sdoc-full-width-mode-wrapper .custom-switch .custom-switch-input:checked~.custom-switch-indicator{background:##maincolor##}
.sdoc-operator-folder .sdoc-dropdown-menu .sdoc-dropdown-menu-item .sdoc-full-width-mode-wrapper .custom-switch .custom-switch-input:focus~.custom-switch-indicator{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(255,128,0,.25)}
.sdoc-outline-item.active{color:##maincolor##}
.sdoc-tip-dialog .highlight-bg-color{background-color:##maincolor##;border-color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h2.active,.sdoc-wiki-viewer-outline .outline-h3.active{color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h2:hover{color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h3:hover{color:##maincolor##}
.seafile-markdown-outline .active { color: ##maincolor##; border-left: 1px solid ##maincolor##;}
.seafile-md-viewer-outline-heading2:hover,.seafile-md-viewer-outline-heading3:hover { color: ##maincolor##;}
.seafile-toggle-diff .custom-switch-input:checked~.custom-switch-indicator{background-color:##maincolor##}
.selectgroup-input:checked+.selectgroup-button{border-color:##maincolor##;z-index:1;color:##maincolor##;background:#fff5e6}
.selectgroup-input:focus+.selectgroup-button{border-color:##maincolor##;z-index:2;color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.sf-editor-outline-item.active{color:##maincolor##}
.sf-link { color: ##maincolor## !important; cursor: pointer;}
.sf-link-btn { color: ##maincolor##; border: none; padding: 0; background: none;}
.sf-link-btn:focus,.sf-link-btn:hover { color: ##maincolor##; background: none; text-decoration: underline;}
.sf-menu-group .sf-menu-group-item[data-active=true]{color:##maincolor##}
.sf-metadata-auto-image-tags .auto-image-tag.selected{border-color:##maincolor##}
.sf-metadata-filed-display-setting .sf-metadata-filed-display-setting-banner .show-all-button{color:##maincolor##;cursor:pointer;font-size:12px}
.sf-metadata-kanban-card.selected{border-color:##maincolor##}
.sf-virtual-link{color:##maincolor##}
.share-dialog-side .nav-pills .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;bottom:4px;content:"";display:block;left:-8px;position:absolute;top:4px;width:4px;z-index:0}
.show>.btn-secondary.dropdown-toggle.dropdown-item{color: #333; background-color: rgba(##mainrgba##,.20);}
.side-nav-link { display: flex; margin: 24px 12px; color: #FFFFFF; border-radius: 0.25rem; background-color: ##maincolor##;}
.side-nav-link:hover { background-color: ##maincolor##; cursor: pointer;}
.side-panel .nav .nav-link.active:hover{background-color: ##maincolor##;}
.side-panel .nav-link.active{color:##maincolor##}
.side-panel .side-nav .side-nav-con .nav-item.active::before { content: ''; position: absolute; display: block; width: 4px; height: 30px; left: -8px; top: 4px; background-color: ##maincolor##; border-radius: 2px; z-index: 2;}
.side-tabnav h3.hd,.side-tabnav .hd h3 { color: ##maincolor##;}
.side-tabnav-tabs .tab a:hover { background-color: ##maincolor##; text-decoration: none;}
.side-tabnav-tabs .tab a:hover {background-color: ##maincolor##30;text-decoration: none}
.side-tabnav-tabs .tab-cur a,.side-tabnav-tabs .tab-cur a:hover { background-color: ##maincolor##;}
.table-calendar-link:before{content:'';width:4px;height:4px;position:absolute;left:.25rem;top:.25rem;border-radius:50px;background:##maincolor##}
.table-calendar-link:hover{color:#fff;text-decoration:none;background:##maincolor##;transition:.3s background}
.tabnav-tab-cur a,.tabnav-tab a:hover,.wiki-nav .cur-item .link,.wiki-nav .link:hover,#right-panel .hd .ui-state-active .a,#right-panel .hd .a:hover { color: ##maincolor##; text-decoration: none; border-bottom-color: ##maincolor##;}
.tag-primary{background-color:##maincolor##;color:#fff}
.text-primary{color:##maincolor## !important}
.transfer-dialog-side .nav-item .nav-link.active:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:28px;left:-4px;position:absolute;top:3px;width:3px}
.tree-node-hight-light:before{background-color:##maincolor##;border-radius:2px;bottom:2px;content:"";display:block;left:-8px;position:absolute;top:2px;width:4px;z-index:0}
.tree-node-hight-light:before{background-color:##maincolor##;border-radius:2px;content:"";display:block;height:24px;left:-8px;position:absolute;top:2px;width:4px;z-index:0}
.tree-node-hight-light{background-color:##maincolor##!important;border-radius:4px;color:#fff}
.tree-node-inner-hover{background-color:##maincolor##30;border-radius:.25rem}
.wiki-card-item .wiki-card-item-top .sf3-font-wiki.sf3-font{color:##maincolor##;font-size:24px;height:24px;line-height:24px}
.wiki-nav-content a:hover,.wiki-nav-content-highlight a{color:##maincolor##;text-decoration:none}
.wiki-page-container .article .ml-2:hover{color:##maincolor##;text-decoration:underline}
.wiki-page-container .outline-h2.active,.wiki-page-container .outline-h3.active{color:##maincolor##}
:root{--blue: #467fcf;--indigo: #6574cd;--purple: #a55eea;--pink: #f66d9b;--red: #cd201f;--orange: #fd9644;--yellow: #f1c40f;--green: #5eba00;--teal: #2bcbba;--cyan: #17a2b8;--white: #fff;--gray: #868e96;--gray-dark: #343a40;--azure: #45aaf2;--lime: #7bd235;--primary: ##maincolor##;--secondary: #868e96;--success: #5eba00;--info: #45aaf2;--warning: #f1c40f;--danger: #cd201f;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1280px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-family-monospace: Monaco, Consolas, "Liberation Mono", "Courier New", monospace}
a { color: ##maincolor##; text-decoration: none; font-weight: bold;}
a, a:hover { color: ##maincolor##; }
a,a:hover{color:##maincolor##}
a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
a:focus,a:hover { color: ##maincolor##;}
a:hover{color:##maincolor##}
a{color:##maincolor##;text-decoration:none;background-color:transparent}
a{text-decoration-skip:ink;color:##maincolor##}
button {word-break: normal;}
`;
  } else if (version === "v11.x") {
    var css_input = `#login-bottom .bottom-item { border-right: 1px solid ##maincolor##;}
#notice-popover li.unread{border-left:2px solid ##maincolor##;padding-left:10px;padding-right:10px}
#thumbnailView .thumbnail.selected .thumbnailImage{border:2px solid ##maincolor##}
#upload-link-drop-zone{background:rgba(##mainrgba##,.1);border:2px dashed ##maincolor##;border-radius:4px;padding:28px 0}
#wiki-file-content .seafile-markdown-outline .outline-h2.active,#wiki-file-content .seafile-markdown-outline .outline-h3.active { color: ##maincolor##;}
.account-dialog .nav .nav-item .nav-link.active{border-bottom:.125rem solid ##maincolor##;color:##maincolor##;text-decoration:none}
.account-dialog .nav-pills .nav-item .nav-link.active{background-color:##maincolor##;border:none;color:#fff}
.add-account .add-account-btn,.edit-account .edit-account-btn{border-color:##maincolor##;color:##maincolor##;font-weight:400;margin:0;padding-bottom:0;padding-top:0}
.ai-search-ask .ai-search-ask-footer .ai-search-ask-footer-btn .seafile-multicolor-icon-send{color:##maincolor##}
.article .html-element.active{border:1px solid ##maincolor##}
.article hr.active{border-top:1px solid ##maincolor##}
.badge-primary{color:#fff;background-color:##maincolor##}
.bg-primary{background-color:##maincolor## !important}
.big-new-file-button:focus,.big-new-file-button:hover{border-color:##maincolor##;color:##maincolor##}
.border-primary{border-color:##maincolor## !important}
.btn-active[data-active=true]{color:##maincolor##}
.btn-link{font-weight:400;color:##maincolor##;text-decoration:none}
.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:##maincolor##;background-color:transparent}
.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-outline-primary:hover{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-outline-primary{color:##maincolor##;border-color:##maincolor##}
.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:##maincolor##;border-color:#cc7a00;box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-primary:hover{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-primary:not(:disabled):not(.disabled):active{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.chat-message:after{content:"";position:absolute;right:-5px;top:7px;border-bottom:6px solid transparent;border-left:6px solid ##maincolor##;border-top:6px solid transparent}
.chat-message{position:relative;display:inline-block;background-color:##maincolor##;color:#fff;font-size:.875rem;padding:.375rem .5rem;border-radius:3px;white-space:normal;text-align:left;margin:0 .5rem 0 2.5rem;line-height:1.4}
.colorinput-input:focus ~ .colorinput-color{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.content .dropdown .btn-outline-primary:active{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.content .dropdown .btn-outline-primary:hover{background-color:##maincolor##;border-color:##maincolor##;color:#fff}
.content .dropdown .btn-outline-primary{background-color:transparent;background-image:none;border-color:##maincolor##;color:##maincolor##}
.cur-view-path .sf-heading a {color: ##maincolor## !important;}
.cur-view-path .sf-heading a{color:##maincolor##}
.cur-view-path .tab-tabs-nav .ui-state-active .a,.cur-view-path .tab-tabs-nav .a:hover { color:##maincolor##; text-decoration:none; border-bottom-color:##maincolor##;}
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:##maincolor##;background-color:##maincolor##}
.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:##maincolor##;background-color:##maincolor##}
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-range::-moz-range-progress{height:2px;background:##maincolor##;border:0;margin-top:0}
.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range::-ms-fill-lower{background:##maincolor##;border-radius:0}
.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:2px;margin-left:2px;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range::-webkit-slider-runnable-track{background:##maincolor##;content:'';height:2px;pointer-events:none}
.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range:focus::-moz-range-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-range:focus::-ms-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-range:focus::-webkit-slider-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-select:focus{border-color:#1991eb;outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-switch-input:checked ~ .custom-switch-indicator{background:##maincolor##}
.custom-switch-input:focus ~ .custom-switch-indicator{box-shadow:0 0 0 2px rgba(##mainrgba##,0.25);border-color:##maincolor##}
.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:##maincolor##}
.dropdown-item:hover, .dropdown-item:focus {color: #333; background-color: rgba(##mainrgba##,.20);}
.file-chooser-item .item-active{background:##maincolor##!important;border-radius:2px;box-shadow:inset 0 0 1px #999;color:#fff}
.form-help:hover,.form-help[aria-describedby]{background:##maincolor##;color:#fff}
.go-back:hover { color:##maincolor##; text-decoration: none;}
.go-back:hover{color:##maincolor##;cursor:pointer}
.grid-item:hover a{color:##maincolor##}
.grid-link-selected-active{color:##maincolor##}
.history-header .title .go-back:hover{color:##maincolor##;text-decoration:none}
.image-view i{-webkit-animation:rotate 1.5s ease infinite;animation:rotate 1.5s ease infinite;color:##maincolor##;font-size:30px;height:100%;line-height:150px;text-align:center;width:100%}
.imagecheck-figure:before{content:'';position:absolute;top:.25rem;left:.25rem;display:block;width:1rem;height:1rem;pointer-events:none;user-select:none;background:##maincolor## url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/></svg>") no-repeat center center/50% 50%;color:#fff;z-index:1;border-radius:3px;opacity:0;transition:.3s opacity}
.imagecheck-input:focus ~ .imagecheck-figure{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.invite-link-icon-in-popup{color:##maincolor##;cursor:pointer;font-size:.875rem;font-style:normal;line-height:1;margin-left:.5rem;vertical-align:middle}
.item-content .item-name a{color:##maincolor##!important}
.lds-ripple div{-webkit-animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;border:4px solid ##maincolor##;border-radius:50%;opacity:1;position:absolute}
.list-group-item.active{z-index:2;color:##maincolor##;background-color:#fffbf5;border-color:rgba(0,40,100,0.12)}
.list-group-transparent .list-group-item.active{background:rgba(##mainrgba##,0.06);font-weight:600}
.list-show-more { padding: 0.25rem 0.75rem; line-height: 2rem; text-align: center; color: ##maincolor##; cursor: pointer;}
.list-tag-popover .tag-list-footer .item-text{color:##maincolor##;cursor:pointer}
.list-view-header .name{color:##maincolor##}
.login-panel .submit:focus { border-color: ##maincolor##;}
.menu-group .menu-group-item[data-active=true]{color:##maincolor##}
.nav .nav-item .nav-link.active { color: ##maincolor##; text-decoration: none; border-bottom: 0.125rem solid ##maincolor##; z-index: 1;}
.nav-pills .nav-item .nav-link.active { background-color: ##maincolor##; color: #fff; border: none;}
.nav-pills .nav-item .nav-link.active{background-color: ##maincolor##; color:#fff !important;}
.nav-pills .nav-item .nav-link:hover {background-color: ##maincolor##30;}
.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:##maincolor##}
.nav-tabs .nav-submenu .nav-item.active{color:##maincolor##}
.nav{flex-wrap:inherit !important;}
.new-narrow-panel .hd { color:#fff; font-size:16px; padding:5px 20px; background:##maincolor##; border-bottom:1px solid #d5d5d5;}
.old-history-main .commit-list .username{color:##maincolor##;font-weight:700;text-decoration:none;vertical-align:middle}
.old-history-main .file-name{word-wrap:break-word;color:##maincolor##}
.old-history-main .go-back:hover{color:##maincolor##;text-decoration:none}
.op-icon { color: ##maincolor##;}
.op-icon.sf2-x,.op-icon.sf2-x:hover { color:##maincolor##;}
.op-icon:focus, .op-icon:hover{color: rgba(##mainrgba##,.70) !important;}
.op-icon:focus,.op-icon:hover { color: ##maincolor##; text-decoration: none;}
.op-target { color: ##maincolor##; word-wrap: break-word;}
.op-target { color:##maincolor##; word-wrap:break-word; }
.outline-h2:hover{color:##maincolor##}
.outline-h3:hover{color:##maincolor##}
.page-item.active .page-link{z-index:3;color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.path-link { color: ##maincolor## !important; text-decoration: none;}
.path-toolbar .toolbar-item a:hover{color:##maincolor##;text-decoration:none}
.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:##maincolor##;transition:width 0.6s ease}
.review-side-panel-nav .nav-item .nav-link.active{border-color:##maincolor##;color:##maincolor##}
.sdoc-comment-drawer .add-comments-participants .sdocfont{border-radius:50%;color:##maincolor##;font-size:16px}
.sdoc-editor-container .article .virtual-link{color:##maincolor##}
.sdoc-file-history-versions .history-list-item.item-active .history-info .name{color:##maincolor##}
.sdoc-file-history-versions .history-list-item.item-active .history-info .time{color:##maincolor##}
.sdoc-file-link-render .sdoc-file-link-icon{color:##maincolor##;padding-right:5px}
.sdoc-file-render .sdoc-file-link-icon{color:##maincolor##;padding-right:5px}
.sdoc-file-select-dialog .highlight-bg-color{background-color:##maincolor##;border-color:##maincolor##}
.sdoc-outline-item.active{color:##maincolor##}
.sdoc-tip-dialog .highlight-bg-color{background-color:##maincolor##;border-color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h2.active,.sdoc-wiki-viewer-outline .outline-h3.active{color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h2:hover{color:##maincolor##}
.sdoc-wiki-viewer-outline .outline-h3:hover{color:##maincolor##}
.seafile-markdown-outline .active { color: ##maincolor##; border-left: 1px solid ##maincolor##;}
.seafile-md-viewer-outline-heading2:hover,.seafile-md-viewer-outline-heading3:hover { color: ##maincolor##;}
.seafile-toggle-diff .custom-switch-input:checked~.custom-switch-indicator{background-color:##maincolor##}
.searched-active{background:##maincolor##!important;border-radius:2px;box-shadow:inset 0 0 1px #999}
.selectgroup-input:checked+.selectgroup-button{border-color:##maincolor##;z-index:1;color:##maincolor##;background:#fff5e6}
.selectgroup-input:focus+.selectgroup-button{border-color:##maincolor##;z-index:2;color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.sf-article-info-container .nav .nav-link.active{border-bottom:0;color:##maincolor##}
.sf-editor-outline .outline-h2.active,.sf-editor-outline .outline-h3.active{color:##maincolor##}
.sf-editor-outline .outline-h2:hover{color:##maincolor##}
.sf-editor-outline .outline-h3:hover{color:##maincolor##}
.sf-link { color: ##maincolor## !important; cursor: pointer;}
.sf-link-btn { color:##maincolor##; border:none; padding:0; background:none;}
.sf-link-btn:focus,.sf-link-btn:hover { color:##maincolor##; background:none; text-decoration:underline;}
.sf-menu-group .sf-menu-group-item[data-active=true]{color:##maincolor##}
.sf-virtual-link{color:##maincolor##}
.show>.btn-secondary.dropdown-toggle.dropdown-item{color: #333; background-color: rgba(##mainrgba##,.20);}
.side-nav-link { display: flex; margin: 24px 12px; color: #FFFFFF; border-radius: 0.25rem; background-color: ##maincolor##;}
.side-nav-link:hover { background-color: ##maincolor##; cursor: pointer;}
.side-panel .nav .nav-link.active:hover{background-color: ##maincolor##;}
.side-panel .nav-link.active{color:##maincolor##}
.side-tabnav h3.hd,.side-tabnav .hd h3 { color:##maincolor##;}
.side-tabnav-tabs .tab a:hover { background-color:##maincolor##; text-decoration:none;}
.side-tabnav-tabs .tab a:hover {background-color: ##maincolor##30;text-decoration: none}
.side-tabnav-tabs .tab-cur a,.side-tabnav-tabs .tab-cur a:hover { background-color:##maincolor##;}
.table-calendar-link:before{content:'';width:4px;height:4px;position:absolute;left:.25rem;top:.25rem;border-radius:50px;background:##maincolor##}
.table-calendar-link:hover{color:#fff;text-decoration:none;background:##maincolor##;transition:.3s background}
.tabnav-tab-cur a,.tabnav-tab a:hover,.wiki-nav .cur-item .link,.wiki-nav .link:hover,#right-panel .hd .ui-state-active .a,#right-panel .hd .a:hover { color:##maincolor##; text-decoration:none; border-bottom-color: ##maincolor##;}
.tag-primary{background-color:##maincolor##;color:#fff}
.text-primary{color:##maincolor## !important}
.tree-node-hight-light{background-color:##maincolor##!important;border-radius:4px;color:#fff}
.tree-node-inner-hover{background-color:##maincolor##30;border-radius:.25rem}
.user-setting-nav .nav-item .nav-link:hover{color:##maincolor##}
.user-setting-nav .nav-item.active .nav-link{border-color:##maincolor##;color:##maincolor##}
.wiki-nav-content a:hover,.wiki-nav-content-highlight a{color:##maincolor##;text-decoration:none}
.wiki-page-container .article .ml-2:hover{color:##maincolor##;text-decoration:underline}
.wiki-page-container .outline-h2.active,.wiki-page-container .outline-h3.active{color:##maincolor##}
:root{--blue: #467fcf;--indigo: #6574cd;--purple: #a55eea;--pink: #f66d9b;--red: #cd201f;--orange: #fd9644;--yellow: #f1c40f;--green: #5eba00;--teal: #2bcbba;--cyan: #17a2b8;--white: #fff;--gray: #868e96;--gray-dark: #343a40;--azure: #45aaf2;--lime: #7bd235;--primary: ##maincolor##;--secondary: #868e96;--success: #5eba00;--info: #45aaf2;--warning: #f1c40f;--danger: #cd201f;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1280px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-family-monospace: Monaco, Consolas, "Liberation Mono", "Courier New", monospace}
a { color:##maincolor##; text-decoration:none; font-weight:bold;}
a, a:hover { color: ##maincolor##; }
a,a:hover{color:##maincolor##}
a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
a:focus, a:hover { color: ##maincolor##;}
a:hover{color:##maincolor##}
a{color:##maincolor##;text-decoration:none;background-color:transparent}
a{text-decoration-skip:ink;color:##maincolor##}
button {word-break: normal;}
`;
  } else if (version === "v10.x") {
    var css_input = `#notice-popover li.unread { background:#f5f5f7; padding-right:10px; padding-left:8px; border-left:2px solid ##maincolor##; margin:0 -10px;}
#upload-link-drop-zone{background:rgba(##mainrgba##,.1);border:2px dashed ##maincolor##;border-radius:4px;padding:28px 0}
#wiki-file-content .seafile-markdown-outline .outline-h2.active,#wiki-file-content .seafile-markdown-outline .outline-h3.active { color: ##maincolor##;}
.article .html-element.active{border:1px solid ##maincolor##}
.article .virtual-link{color:##maincolor##}
.article hr.active{border-top:1px solid ##maincolor##}
.badge-primary{color:#fff;background-color:##maincolor##}
.bg-primary{background-color:##maincolor## !important}
.big-new-file-button:focus,.big-new-file-button:hover{border-color:##maincolor##;color:##maincolor##}
.border-primary{border-color:##maincolor## !important}
.btn-active[data-active=true]{color:##maincolor##}
.btn-link{font-weight:400;color:##maincolor##;text-decoration:none}
.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:##maincolor##;background-color:transparent}
.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-outline-primary:hover{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-outline-primary{color:##maincolor##;border-color:##maincolor##}
.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:##maincolor##;border-color:#cc7a00;box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-primary:hover{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
.btn-primary:not(:disabled):not(.disabled):active{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary{color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.chat-message:after{content:"";position:absolute;right:-5px;top:7px;border-bottom:6px solid transparent;border-left:6px solid ##maincolor##;border-top:6px solid transparent}
.chat-message{position:relative;display:inline-block;background-color:##maincolor##;color:#fff;font-size:.875rem;padding:.375rem .5rem;border-radius:3px;white-space:normal;text-align:left;margin:0 .5rem 0 2.5rem;line-height:1.4}
.colorinput-input:focus ~ .colorinput-color{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.comments-number{font-size:12px;width:16px;height:16px;border-radius:8px;text-align:center;line-height:16px;font-weight:600;background-color:##maincolor##;position:absolute;top:10%;right:30%;color:#fff}
.cur-view-content .wiki-page-container .outline-h2.active,.cur-view-content .wiki-page-container .outline-h3.active{color:##maincolor##}
.cur-view-path .sf-heading a {color: ##maincolor## !important;}
.cur-view-path .sf-heading a{color:##maincolor##}
.cur-view-path .tab-tabs-nav .ui-state-active .a,.cur-view-path .tab-tabs-nav .a:hover { color:##maincolor##; text-decoration:none; border-bottom-color:##maincolor##;}
.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:##maincolor##;background-color:##maincolor##}
.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:##maincolor##;background-color:##maincolor##}
.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-range::-moz-range-progress{height:2px;background:##maincolor##;border:0;margin-top:0}
.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range::-ms-fill-lower{background:##maincolor##;border-radius:0}
.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:2px;margin-left:2px;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range::-webkit-slider-runnable-track{background:##maincolor##;content:'';height:2px;pointer-events:none}
.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:##maincolor##;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}
.custom-range:focus::-moz-range-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-range:focus::-ms-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-range:focus::-webkit-slider-thumb{border-color:##maincolor##;background-color:##maincolor##}
.custom-select:focus{border-color:#1991eb;outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(##mainrgba##,0.5)}
.custom-switch-input:checked ~ .custom-switch-indicator{background:##maincolor##}
.custom-switch-input:focus ~ .custom-switch-indicator{box-shadow:0 0 0 2px rgba(##mainrgba##,0.25);border-color:##maincolor##}
.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:##maincolor##}
.dropdown-item:hover, .dropdown-item:focus {color: #333; background-color: rgba(##mainrgba##,.20);}
.file-chooser-item .item-active{background:##maincolor##!important;border-radius:2px;box-shadow:inset 0 0 1px #999;color:#fff}
.form-help:hover,.form-help[aria-describedby]{background:##maincolor##;color:#fff}
.go-back:hover { color:##maincolor##; text-decoration: none;}
.grid-item:hover a{color:##maincolor##}
.grid-link-selected-active{color:##maincolor##}
.history-header .title .go-back:hover{color:##maincolor##;text-decoration:none}
.image-view i{width:100%;height:100%;text-align:center;line-height:150px;font-size:30px;color:##maincolor##;-webkit-animation:rotate 1.5s ease infinite;animation:rotate 1.5s ease infinite}
.imagecheck-figure:before{content:'';position:absolute;top:.25rem;left:.25rem;display:block;width:1rem;height:1rem;pointer-events:none;user-select:none;background:##maincolor## url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/></svg>") no-repeat center center/50% 50%;color:#fff;z-index:1;border-radius:3px;opacity:0;transition:.3s opacity}
.imagecheck-input:focus ~ .imagecheck-figure{border-color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.invite-link-icon-in-popup{color:##maincolor##;margin-left:.5rem;font-size:.875rem;font-style:normal;line-height:1;cursor:pointer;vertical-align:middle}
.item-content .item-name a{color:##maincolor##!important}
.lds-ripple div{position:absolute;border:4px solid ##maincolor##;opacity:1;border-radius:50%;-webkit-animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;animation:lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite}
.list-group-item.active{z-index:2;color:##maincolor##;background-color:#fffbf5;border-color:rgba(0,40,100,0.12)}
.list-group-transparent .list-group-item.active{background:rgba(##mainrgba##,0.06);font-weight:600}
.list-show-more { padding: 0.25rem 0.75rem; line-height: 2rem; text-align: center; color: ##maincolor##; cursor: pointer;}
.list-view-header .name{color:##maincolor##}
.login-panel .submit:focus { border-color: ##maincolor##;}
.nav .nav-item .nav-link.active { color: ##maincolor##; text-decoration: none; border-bottom: 0.125rem solid ##maincolor##;}
.nav-pills .nav-item .nav-link.active { background-color: ##maincolor##; color: #fff; border: none;}
.nav-pills .nav-item .nav-link.active{background-color: ##maincolor##; color:#fff !important;}
.nav-pills .nav-item .nav-link:hover {background-color: ##maincolor##30;}
.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:##maincolor##}
.nav-tabs .nav-submenu .nav-item.active{color:##maincolor##}
.nav{flex-wrap:inherit !important;}
.new-narrow-panel .hd { color:#fff; font-size:16px; padding:5px 20px; background:##maincolor##; border-bottom:1px solid #d5d5d5;}
.old-history-main .commit-list .username{vertical-align:middle;color:##maincolor##;text-decoration:none;font-weight:700}
.old-history-main .file-name{color:##maincolor##;word-wrap:break-word}
.old-history-main .go-back:hover{color:##maincolor##;text-decoration:none}
.op-icon { color: ##maincolor##;}
.op-icon.sf2-x,.op-icon.sf2-x:hover { color:##maincolor##;}
.op-icon:focus, .op-icon:hover{color: rgba(##mainrgba##,.70) !important;}
.op-icon:focus,.op-icon:hover { color: ##maincolor##; text-decoration: none;}
.op-target { color: ##maincolor##; word-wrap: break-word;}
.op-target { color:##maincolor##; word-wrap:break-word; }
.outline-h2:hover{color:##maincolor##}
.outline-h3:hover{color:##maincolor##}
.page-item.active .page-link{z-index:3;color:#fff;background-color:##maincolor##;border-color:##maincolor##}
.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.participants .add-participants i{font-size:16px;color:##maincolor##;border:2px solid #fff;border-radius:50%}
.path-link { color: ##maincolor## !important; text-decoration: none;}
.path-toolbar .toolbar-item a:hover{color:##maincolor##;text-decoration:none}
.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:##maincolor##;transition:width 0.6s ease}
.review-side-panel-nav .nav-item .nav-link.active{border-color:##maincolor##;color:##maincolor##}
.rich-icon-btn[data-active=true]{color:##maincolor##}
.seafile-comment-title-toggle .custom-switch-input:checked~.custom-switch-indicator,.seafile-toggle-diff .custom-switch-input:checked~.custom-switch-indicator{background-color:##maincolor##}
.seafile-editor-outline .outline-h2:hover{color:##maincolor##}
.seafile-editor-outline .outline-h3:hover{color:##maincolor##}
.seafile-markdown-editor .side-panel .nav .nav-link.active{color:##maincolor##;border-bottom:0}
.seafile-markdown-outline .active { color: ##maincolor##; border-left: 1px solid ##maincolor##;}
.seafile-markdown-outline .active{color:##maincolor##;border-left:1px solid ##maincolor##}
.seafile-md-viewer .seafile-editor-outline .active{color:##maincolor##;border-left:1px solid ##maincolor##}
.seafile-md-viewer-outline-heading2:hover,.seafile-md-viewer-outline-heading3:hover { color: ##maincolor##;}
.seafile-md-viewer-outline-heading2:hover,.seafile-md-viewer-outline-heading3:hover{color:##maincolor##}
.search-result-container .search-result-item:hover{border-left:2px solid ##maincolor##;background-color:#eee}
.search-result-list .item-content .item-name{color:##maincolor##!important}
.searched-active{background:##maincolor##!important;border-radius:2px;box-shadow:inset 0 0 1px #999}
.selectgroup-input:checked+.selectgroup-button{border-color:##maincolor##;z-index:1;color:##maincolor##;background:#fff5e6}
.selectgroup-input:focus+.selectgroup-button{border-color:##maincolor##;z-index:2;color:##maincolor##;box-shadow:0 0 0 2px rgba(##mainrgba##,0.25)}
.sf-link { color: ##maincolor## !important; cursor: pointer;}
.sf-link-btn { color:##maincolor##; border:none; padding:0; background:none;}
.sf-link-btn:focus,.sf-link-btn:hover { color:##maincolor##; background:none; text-decoration:underline;}
.show>.btn-secondary.dropdown-toggle.dropdown-item{color: #333; background-color: rgba(##mainrgba##,.20);}
.side-nav-link { display: flex; margin: 24px 12px; color: #FFFFFF; border-radius: 0.25rem; background-color: ##maincolor##;}
.side-nav-link:hover { background-color: ##maincolor##; cursor: pointer;}
.side-panel .nav .nav-link.active:hover{background-color: ##maincolor##;}
.side-panel .nav-link.active{color:##maincolor##}
.side-tabnav h3.hd,.side-tabnav .hd h3 { color:##maincolor##;}
.side-tabnav-tabs .tab a:hover { background-color:##maincolor##; text-decoration:none;}
.side-tabnav-tabs .tab a:hover {background-color: ##maincolor##30;text-decoration: none}
.side-tabnav-tabs .tab-cur a,.side-tabnav-tabs .tab-cur a:hover { background-color:##maincolor##;}
.table-calendar-link:before{content:'';width:4px;height:4px;position:absolute;left:.25rem;top:.25rem;border-radius:50px;background:##maincolor##}
.table-calendar-link:hover{color:#fff;text-decoration:none;background:##maincolor##;transition:.3s background}
.tabnav-tab-cur a,.tabnav-tab a:hover,.wiki-nav .cur-item .link,.wiki-nav .link:hover,#right-panel .hd .ui-state-active .a,#right-panel .hd .a:hover { color:##maincolor##; text-decoration:none; border-bottom-color: ##maincolor##;}
.tag a:hover{color:##maincolor##!important}
.tag-primary{background-color:##maincolor##;color:#fff}
.text-primary{color:##maincolor## !important}
.tree-node-hight-light{color:#fff;border-radius:4px;background-color:##maincolor##!important}
.tree-node-inner-hover{background-color:##maincolor##30;border-radius:.25rem}
.upload-operation .saving{color:##maincolor##;word-wrap:break-word}
.user-setting-nav .nav-item .nav-link:hover{color:##maincolor##}
.user-setting-nav .nav-item.active .nav-link{color:##maincolor##;border-color:##maincolor##}
.wiki-main-panel .wiki-page-content .ml-2:hover{text-decoration:underline;color:##maincolor##}
.wiki-nav-content-highlight a,.wiki-nav-content a:hover{text-decoration:none;color:##maincolor##}
.wiki-outline-item a:hover{color:##maincolor##;text-decoration:underline}
.wiki-outline-item-active a{color:##maincolor##!important}
.wiki-outline-item-active{border-left:1px solid ##maincolor##}
.wiki-page-content .ml-2:hover{text-decoration:underline;color:##maincolor##}
:root{--blue: #467fcf;--indigo: #6574cd;--purple: #a55eea;--pink: #f66d9b;--red: #cd201f;--orange: #fd9644;--yellow: #f1c40f;--green: #5eba00;--teal: #2bcbba;--cyan: #17a2b8;--white: #fff;--gray: #868e96;--gray-dark: #343a40;--azure: #45aaf2;--lime: #7bd235;--primary: ##maincolor##;--secondary: #868e96;--success: #5eba00;--info: #45aaf2;--warning: #f1c40f;--danger: #cd201f;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1280px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-family-monospace: Monaco, Consolas, "Liberation Mono", "Courier New", monospace}
a { color:##maincolor##; text-decoration:none; font-weight:bold;}
a, a:hover { color: ##maincolor##; }
a,a:hover{color:##maincolor##}
a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 2px rgba(##mainrgba##,0.5)}
a:focus, a:hover { color: ##maincolor##;}
a:hover{color:##maincolor##}
a{color:##maincolor##;text-decoration:none;background-color:transparent}
a{text-decoration-skip:ink;color:##maincolor##}
button {word-break: normal;}
`;
  } else {
    var css_input = "Seafile Version unknown.";
  }

  // Change the content of the code element
  codeElement.textContent = css_input
    .replaceAll("##maincolor##", color)
    .replaceAll("##mainrgba##", rgba_color);
}

/* wie erzeuge ich diese listen:
  ./generate-css.sh <docker-version-tag>
  Diesen CSS Code, dann hier einbauen...
  */
