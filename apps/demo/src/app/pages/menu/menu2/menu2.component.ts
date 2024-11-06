import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { DocMenu2Component } from '../doc-menu2/doc-menu2.component';
import { AccordionComponent } from '../../../features/accordion/accordion.component';
import { defineCustomElements as menuElements } from '@ipedis/menu/loader';

@Component({
  selector: 'app-menu2',
  standalone: true,
  imports: [CommonModule,CodeSnippetComponent,
    DocMenu2Component,
    AccordionComponent,],
  templateUrl: './menu2.component.html',
  styleUrl: './menu2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Menu2Component {
  codeSnippet = `<ip-navigation-bar
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
          <img class="menu-2-logo" src="./assets/images/burger-menu/Logo.png" alt="" />
        </div>
        <div slot="right-head">
          <button class="menu-2-btn">GET A QUOTE</button>
        </div>
</ip-navigation-bar>`;
  css = `
ip-navigation-bar::part(submenu-container) {
     top: 50px;
  }

    
.logo {
    display: flex;
    width: 188.894px;
    height: 46px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  .menu-2-btn {
    background-color: #fff;
    display: flex;
    padding: 10px 21px;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border: 1px solid #b00057;
    color: #b00057;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
  .menu-2-btn:focus,
  .menu-2-btn:hover {
    background-color: #b00057;
    color: #fff;
    outline: 3px solid #b00057;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    .menu-2-btn {
      color: #fff;
      border: 1px solid #fff;
      background-color: #03396c;
    }
    .menu-2-btn:focus,
    .menu-2-btn:hover {
      background-color: #fff;
      color: #03396c;
      outline: 3px solid #fff;
      outline-offset: 2px;
    }
  }
`;
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && menuElements) {
      menuElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
