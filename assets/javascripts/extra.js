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

  if (version === "v11.x") {
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
    var css_input = "kommt noch...";
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
