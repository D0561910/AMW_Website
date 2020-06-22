import React, { useState } from "react";
import { Link } from "react-router-dom";

function Content() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    console.log(email);
    console.log(password);
  }

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
                    <div class="font-large-1 text-center">
                      Academic Mates Workshop 登入
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="card-body">
                      <form
                        class="form-horizontal"
                        action="#"
                        novalidate=""
                        onSubmit={handleSubmit}
                      >
                        <fieldset class="form-group position-relative has-icon-left">
                          <input
                            type="email"
                            class="form-control round"
                            id="user-names"
                            placeholder="電郵地址"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div class="form-control-position">
                            <i class="ft-user"></i>
                          </div>
                        </fieldset>
                        <fieldset class="form-group position-relative has-icon-left">
                          <input
                            type="password"
                            class="form-control round"
                            id="user-passwords"
                            placeholder="密碼"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div class="form-control-position">
                            <i class="ft-lock"></i>
                          </div>
                        </fieldset>
                        <div class="form-group text-center">
                          <button
                            type="submit"
                            class="btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1"
                          >
                            登入
                          </button>
                        </div>
                      </form>
                    </div>

                    <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-2 ">
                      <span>使用其他登入方式</span>
                    </p>

                    <div class="text-center">
                      <div id="customBtn" class="customGPlusSignIn mb-1 mr-1">
                        <a>
                          <span class="icon"></span>
                          <span class="buttonText"> Sign in with Google </span>
                        </a>
                      </div>
                    </div>

                    <div class="text-center">
                      <div
                        id="FBcustomBtn"
                        class="btn-block customFBSignIn mb-1 mr-1"
                      >
                        <a>
                          <span class="FB-icon"></span>
                          <span class="fbbuttonText">
                            Sign in with Facebook
                          </span>
                        </a>
                      </div>
                    </div>

                    <p class="card-subtitle text-muted text-right font-small-3 mx-2 my-1">
                      <span>
                        沒有帳戶 ?<Link to="/Signup">註冊新帳號</Link>
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
