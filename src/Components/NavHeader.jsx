import React from "react";

function NavHeader () {
    return(
         <>
                      <nav id="navbar-main" className="navbar is-fixed-top">
  <div className="navbar-brand">
    <a className="navbar-item mobile-aside-button">
      <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
    </a>
    {/* <!-- <div class="navbar-item">
      <div class="control"><input placeholder="Search everywhere..." class="input" /></div>
    </div> --> */}
    <img style={{maxWidth: '180px', maxHeight: '50px'}} src="https://assetgate.azurewebsites.net/Settings/ShowImage/20" alt="/Contents/logo/logigates_line.png" />
  </div>
  <div className="navbar-brand is-right">
    <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
      <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
    </a>
  </div>
  <div className="navbar-menu" id="navbar-menu">
    <div className="navbar-end">
       {/* Language  */}
      <div className="navbar-item dropdown has-divider has-user-avatar">
        <a className="navbar-link">
          <div className="user-avatar">
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-50" style={{marginTop: '0.2rem',
          display: 'flex',
          flexDirection: 'row',
          marginRight: '0.1rem'}}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
          <div className="is-user-name"><span style={{color: '#6e6b7b'}}>Language</span></div>
        </a>
        <div className="navbar-dropdown">
          <a href="#" onclick="changeLanguage('/Settings/Language/20?value=en')" className="dropdown-item" value="en" style={{display: 'flex', alignItems: 'center', gap: '1.4rem', textDecoration: 'none', color: '#6e6b7b', backgroundColor: 'white', padding: '0.5rem'}}>
            <img style={{maxWidth: '40px', maxHeight: '40px'}} src="usa.png" alt="English Flag" className="mr-2" />English
        </a>
        <a href="#" onclick="changeLanguage('/Settings/Language/20?value=ar')" id="company" className="dropdown-item" value="ar" style={{display: 'flex', alignItems: 'center', gap: '1.4rem', textDecoration: 'none', color: '#6e6b7b', backgroundColor: 'white', padding: '0.5rem'}}>
          <img style={{maxWidth: '40px', maxHeight: '40px'}} src="saa.png" className="mr-2" />العربية
      </a>
          {/* <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-logout"></i></span>
            <span>Log Out</span>
          </a> -->
          <!-- <a href="profile.html" class="navbar-item">
            <span class="icon"><i class="mdi mdi-account"></i></span>
            <span>Profile</span>
          </a> -->
          <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-settings"></i></span>
            <span>Settings</span>
          </a> -->
          <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-email"></i></span>
            <span>Messages</span>
          </a> --> */}
          <hr className="navbar-divider" />
        </div>
      </div>
            {/* ID  */}
      <div className="navbar-item dropdown has-divider has-user-avatar">
        <a className="navbar-link">
          <div className="user-avatar">
          </div>
          <div className="is-user-name"><span style={{color: '#6e6b7b'}}><strong style={{fontWeight: '500'}}>Demo RFID</strong></span></div>
        </a>
        <div className="navbar-dropdown">
          <a className="navbar-item">
            <span className="icon" style={{color: '#625F6E'}}><i className="mdi mdi-logout"></i></span>
            <span style={{color: '#6e6b7b'}}>Log Out</span>
          </a>
          <a href="profile.html" className="navbar-item">
            <span className="icon" style={{color: '#625F6E'}}><i className="mdi mdi-account"></i></span>
            <span style={{color: '#6e6b7b'}}>Profile</span>
          </a>
          {/* <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-settings"></i></span>
            <span>Settings</span>
          </a> -->
          <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-email"></i></span>
            <span>Messages</span>
          </a> --> */}
          <hr className="navbar-divider" />
        </div>
      </div>
       {/* Logo ID */}
      <div className="navbar-item dropdown has-divider has-user-avatar">
        <a className="navbar-link">
          <div className="user-avatar">
            <img src="/1.jpg" alt="Demo RFID" className="rounded-full" />
          </div>
          <div className="is-user-name" style={{visibility: 'hidden'}}><span>Demo RFID</span></div>
          {/* <!-- <span class="icon"><i class="mdi mdi-chevron-down"></i></span> --> */}
        </a>
        <div className="navbar-dropdown">
          {/* <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-settings"></i></span>
            <span>Settings</span>
          </a> -->
          <!-- <a class="navbar-item">
            <span class="icon"><i class="mdi mdi-email"></i></span>
            <span>Messages</span>
          </a> --> */}
          <hr className="navbar-divider" />
          <a className="navbar-item">
            <span className="icon" style={{color: '#625F6E'}}><i className="mdi mdi-logout"></i></span>
            <span style={{color: '#625F6E'}}>Log Out</span>
          </a>
          <a href="profile.html" className="navbar-item">
            <span className="icon" style={{color: '#625F6E'}}><i className="mdi mdi-account"></i></span>
            <span style={{color: '#625F6E'}}>Profile</span>
          </a>
        </div>
      </div>
      {/* <!-- <a href="https://justboil.me/tailwind-admin-templates" class="navbar-item has-divider desktop-icon-only">
        <span class="icon"><i class="mdi mdi-help-circle-outline"></i></span>
        <span>About</span>
      </a> -->
      <!-- <a href="https://github.com/justboil/admin-one-tailwind" class="navbar-item has-divider desktop-icon-only">
        <span class="icon"><i class="mdi mdi-github-circle"></i></span>
        <span>GitHub</span>
      </a> -->
      <!-- <a title="Log out" class="navbar-item desktop-icon-only">
        <span class="icon"><i class="mdi mdi-logout"></i></span>
        <span>Log out</span>
      </a> --> */}
    </div>
  </div>
<script src="/main.js"></script>
<script src="/main1.js"></script>
</nav>
         </>
    );
}
export default NavHeader;