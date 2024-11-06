import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-doc-menu2',
  standalone: true,
  imports: [CommonModule, Highlight],
  templateUrl: './doc-menu2.component.html',
  styleUrl: './doc-menu2.component.scss',
})
export class DocMenu2Component {
  import = `
import '../node_modules/ip-menu/dist/ip-menu/ip-menu.esm';
  `;
  installationScript = `install ip-menu`;
  example=`      <ip-navigation-bar
        menu-data='[
      {"label": "Home", "href": "/"},
      {"label": "About", "href": "/about"},
      {"label": "Pages",   "href": "/news",
        "submenus": [
        {"label": "Page-1", "href": "/pages/page1"},
        {"label": "Page-2", "href": "/pages/page2"},
        {"label": "Page-3", "href": "/pages/page3"},
        {"label": "Page-4", "href": "/pages/page4"}
      ]},
      {"label": "Contact", "href": "/contact"},{"label": "News", "href": "/news", 
      "submenus": [
      {"label": "News-1", "href": "/news/news1"},
      {"label": "News-2", "href": "/news/news2"},
      {"label": "News-3", "href": "/news/news3"},
      {"label": "News-4", "href": "/news/news4"}
    ]}
    ]'
      >
        <div class="logo" slot="left-head">
          <img class="menu-2-logo" src="./assets/images/Logo.png" alt="" />
        </div>
        <div slot="right-head">
          <button class="menu-2-btn">GET A QUOTE</button>
        </div>
      </ip-navigation-bar>`;

css=`ip-navigation-bar::part(nav-bar) {
  background-color: #333;
}

ip-navigation-bar {
  --primary-color: #226f54;
  --secondary-color: #fff;
}`
}
