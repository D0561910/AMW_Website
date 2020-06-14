import React from 'react';

function Content() {
    return (
        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-wrapper-before"></div>
                <div class="content-header row"></div>
                <div class="content-body">
                    <section class="flexbox-container">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="col-lg-4 col-md-6 col-10 box-shadow-2 p-0">
                                <div class="card border-grey border-lighten-3 px-1 py-1 m-0">
                                    <div class="card-header border-0">
                                        <div class="font-large-1  text-center" style={{ fontFamily: "Microsoft JhengHei, Sans-Serif;" }}>
                                            會員註冊
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body">
                                            <form class="form-horizontal" action="#" novalidate="">
                                                <fieldset class="form-group position-relative has-icon-left">
                                                    <input type="text" class="form-control round" id="user-name"
                                                        placeholder="用戶名稱" required />
                                                    <div class="form-control-position">
                                                        <i class="ft-user"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset class="form-group position-relative has-icon-left">
                                                    <input type="email" class="form-control round" id="user-email"
                                                        placeholder="電郵地址" required />
                                                    <div class="form-control-position">
                                                        <i class="ft-mail"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset class="form-group position-relative has-icon-left">
                                                    <input type="password" class="form-control round" id="user-password"
                                                        placeholder="密碼" required />
                                                    <div class="form-control-position">
                                                        <i class="ft-lock"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset class="form-group position-relative has-icon-left">
                                                    <input type="password" class="form-control round" id="retype-password"
                                                        placeholder="確認密碼" required />
                                                    <div class="form-control-position">
                                                        <i class="ft-lock"></i>
                                                    </div>
                                                </fieldset>
                                                <div class="form-group text-center">
                                                    <button type="button" id="btn_signup"
                                                        class="btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1" style={{ fontFamily: "Microsoft JhengHei, Sans-Serif;" }}>
                                                        註冊
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <p class="card-subtitle text-muted text-right font-small-3 mx-2 my-1">
                                            <span style={{ fontFamily: "Microsoft JhengHei, Sans-Serif;" }}>已是註冊 ?
                                            <a href="/" class="card-link" style={{ fontFamily: "Microsoft JhengHei, Sans-Serif;" }}>登入介面</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Content;
