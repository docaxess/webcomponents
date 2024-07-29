import {
  Component,
  h,
  State,
  Element,
  Prop,
  getAssetPath,
  Watch,
} from '@stencil/core';

interface TabPanelInterface {
  title?: string;
  imgPath?: string;
  imgPathActive?: string;
  alt?: string;
}

@Component({
  tag: 'ip-tab-panel',
  styleUrl: './tab-panel.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class IpTabPanel {
  @Element() el: HTMLElement;

  @State() currentTabIndex: number;
  @State() isSlotPresent = false;
  @State() tabHeaders;

  private _tabPanelHeaders: TabPanelInterface[];
  @Prop() tabPanelHeaders: TabPanelInterface[] | string;

  @Prop() tabPanelTitle: string;
  @Prop() titleTag: string;
  @Prop({ mutable: true }) selectedTab: string;

  @Watch('tabPanelHeaders')
  arrayDataWatcher(newValue: TabPanelInterface[] | string) {
    if (typeof newValue === 'string') {
      this._tabPanelHeaders = JSON.parse(newValue);
    } else {
      this._tabPanelHeaders = newValue;
    }
  }

  @Watch('selectedTab')
  watchPropHandler(newValue: string, oldValue: string) {
    if (newValue != oldValue) {
      this.onSelectTab(newValue);
    }
  }

  componentWillLoad() {
    setTimeout(() => {
      const currentItem = this.selectedTab.substring(
        this.selectedTab.length - 1,
      );

      this.currentTabIndex = parseInt(currentItem);
    }, 0);

    this.arrayDataWatcher(this.tabPanelHeaders);
    this.watchPropHandler(this.selectedTab, this.selectedTab);

    this.tabHeaders = this.el.shadowRoot.querySelectorAll(
      '#tab-buttons button',
    );
  }

  connectedCallback() {
    if (this.el.querySelector('[slot]')) {
      this.isSlotPresent = true;
    } else {
      this.isSlotPresent = false;
    }
  }

  onSelectTab(tab: string) {
    const lastItem = tab.substring(tab.length - 1);
    this.currentTabIndex = parseInt(lastItem);
    this.selectedTab = tab;
    const slotElement = this.el.shadowRoot
      .querySelector('#tab-list-content')
      .querySelector('slot');
    slotElement.name = tab;
  }

  onKeyboard(event: KeyboardEvent) {
    const tabHeaderPanels = this.el.shadowRoot.querySelectorAll(
      '#tab-buttons button',
    );
    const firstItem = 'tab-content-1';
    const lastItem = 'tab-content-' + tabHeaderPanels.length;

    switch (event.key) {
      case 'ArrowLeft':
        if (this.currentTabIndex === 1) {
          this.currentTabIndex = tabHeaderPanels.length;
        } else {
          this.currentTabIndex--;
        }
        this.setSelectedPanel(this.currentTabIndex, event);
        break;

      case 'ArrowRight':
        if (this.currentTabIndex === tabHeaderPanels.length) {
          this.currentTabIndex = 1;
        } else {
          this.currentTabIndex++;
        }
        this.setSelectedPanel(this.currentTabIndex, event);
        break;

      case 'Home':
        (tabHeaderPanels[0] as HTMLElement).focus();
        this.selectedTab = firstItem;
        this.onSelectTab(this.selectedTab);
        event.preventDefault();
        break;

      case 'End':
        (tabHeaderPanels[tabHeaderPanels.length - 1] as HTMLElement).focus();
        this.selectedTab = lastItem;
        this.onSelectTab(this.selectedTab);
        event.preventDefault();
        break;

      default:
        break;
    }
  }

  setSelectedPanel(currentIndex: any, event: KeyboardEvent) {
    const tabHeaderPanels = this.el.shadowRoot.querySelectorAll(
      '#tab-buttons button',
    );
    (tabHeaderPanels[currentIndex - 1] as HTMLElement).focus();
    this.selectedTab = `tab-content-${currentIndex}`;
    this.onSelectTab(this.selectedTab);
    event.preventDefault();
  }

  render() {
    let dataContent;

    if (this.isSlotPresent) {
      dataContent = <slot name={this.selectedTab}></slot>;
    } else {
      dataContent = (
        <div class="ip-content">
          <img src={getAssetPath(`./assets/tab-img-1.png`)} alt="" />
          <div class="ip-content-desc">
            <h2 class="ip-content-title">Accessibilité</h2>
            <h3 class="ip-content-subtitle">
              6&nbsp;Bonnes Pratiques pour être en Conformité
            </h3>
            <p class="ip-content-text">
              Aujourd&apos;hui, encore beaucoup de sites Web et
              d&apos;applications mobiles sont conçus sans penser à la
              navigation des personnes en situation de handicap. Pourtant, pour
              ces personnes, l&apos;outil digital représente un véritable levier
              d&apos;intégration, et leur apporte bien souvent un surcroît
              d&apos;indépendance. Selon les différents types de handicaps, les
              manquements les plus couramment relevés sur le Web ne sont pas les
              mêmes.
            </p>
            <button class="ip-content-btn">
              En savoir plus
              <img src={getAssetPath(`./assets/arrow-right.svg`)} alt="" />
            </button>
          </div>
        </div>
      );
    }

    const divHeaders = (
      <div
        role="tablist"
        part="tab-btn-list"
        aria-labelledby={this.tabPanelTitle ? 'tablist-1' : null}
        class="ip-tab-buttons"
        id="tab-buttons"
      >
        {this._tabPanelHeaders ? (
          this._tabPanelHeaders.map((tabHeader, index) => (
            <button
              class={
                this.selectedTab === 'tab-content-' + (index + 1)
                  ? 'tab-content-active'
                  : null
              }
              onClick={this.onSelectTab.bind(
                this,
                'tab-content-' + (index + 1),
              )}
              onKeyDown={this.onKeyboard.bind(this)}
              id={'tab-' + (index + 1)}
              type="button"
              role="tab"
              part={
                this.selectedTab === 'tab-content-' + (index + 1)
                  ? `tab-btn tab-btn-${index + 1} tab-btn-active`
                  : `tab-btn tab-btn-${index + 1}`
              }
              aria-selected={
                this.selectedTab === 'tab-content-' + (index + 1)
                  ? 'true'
                  : 'false' + ''
              }
              aria-controls={'tab-content-' + (index + 1)}
              tabindex={
                this.selectedTab === 'tab-content-' + (index + 1) ? 0 : -1
              }
              aria-label={tabHeader.title ? tabHeader.title : tabHeader.alt}
            >
              {tabHeader.imgPath ? (
                <img
                  part={
                    this.selectedTab === 'tab-content-' + (index + 1)
                      ? `tab-icon tab-icon-${index + 1} tab-icon-active`
                      : `tab-icon tab-icon-${index + 1}`
                  }
                  class="tab-panel-icon"
                  src={
                    this.selectedTab === 'tab-content-' + (index + 1)
                      ? tabHeader.imgPathActive
                      : tabHeader.imgPath
                  }
                  alt={
                    tabHeader.title
                      ? ''
                      : tabHeader.alt
                        ? tabHeader.alt
                        : `icon-tab-${index + 1}`
                  }
                />
              ) : (
                ''
              )}

              {tabHeader.title ? (
                <span part="tab-text" class="tab-panel-text">
                  {tabHeader.title}
                </span>
              ) : tabHeader.imgPath ? null : (
                <span part="tab-text" class="tab-panel-text">
                  {`Tab-Header-${index + 1}`}
                </span>
              )}
            </button>
          ))
        ) : (
          <button
            class="tab-content-active"
            part="tab-btn tab-btn-active"
            id="tab-1"
            type="button"
            role="tab"
            aria-selected
            aria-controls="tab-content-1"
            tabindex="0"
            title="Tab-Header-1"
          >
            <img
              part="tab-icon tab-icon-active"
              class="tab-panel-icon"
              src={getAssetPath(`./assets/acc-1-active.svg`)}
              alt=""
            />
            <span part="tab-text" class="tab-panel-text">
              Tab-Header-1
            </span>
          </button>
        )}
      </div>
    );

    return [
      <div class="ip-tab">
        {this.tabPanelTitle ? (
          <div part="tab-container" class="ip-tab-header">
            {this.titleTag ? (
              <this.titleTag
                part="tab-panel-title"
                id="tablist-1"
                class="ip-tab-header-title"
              >
                {this.tabPanelTitle}
              </this.titleTag>
            ) : null}

            {divHeaders}
          </div>
        ) : (
          <div part="tab-container" class="ip-tab-header">
            {divHeaders}
          </div>
        )}

        <div id="tab-list-content">
          <div
            id={'tab-content-' + this.currentTabIndex}
            role="tabpanel"
            aria-labelledby={'tab-' + this.currentTabIndex}
          >
            {dataContent}
          </div>
        </div>
      </div>,
    ];
  }
}
