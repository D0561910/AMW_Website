import React from 'react';
import logo from './logo.svg';
import './App.css';

function Content() {
  return (
    <div class="card-body">
      <form class="form-horizontal" action="#" novalidate="">
        <fieldset class="form-group position-relative has-icon-left">
          <input type="text" class="form-control round" id="user-name"
            placeholder="用戶名稱" required="" />
          <div class="form-control-position">
            <i class="ft-user"></i>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Content;
