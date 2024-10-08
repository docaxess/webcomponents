import {
  Component,
  h,
  Element,
  Prop,
  Watch,
  State,
  getAssetPath,
} from '@stencil/core';

interface accordionHeadersInterface {
  title?: string;
  iconPath?: string;
  iconActivePath?: string;
  subtitle?: string;
  btnAlt?: string;
  btnAltClose?: string;
  id?: string;
  ariaText?: string;
}

@Component({
  tag: 'ip-accordion',
  styleUrl: './accordion.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class Ipaccordion {
  @Element() el: HTMLElement;

  private _accordionHeaders: accordionHeadersInterface[];
  @Prop() accordionHeaders: accordionHeadersInterface[] | string;

  @Watch('accordionHeaders')
  arrayDataWatcher(newValue: accordionHeadersInterface[] | string) {
    if (typeof newValue === 'string') {
      this._accordionHeaders = JSON.parse(newValue);
    } else {
      this._accordionHeaders = newValue;
    }
  }

  @State() accHeaderButtons;
  @State() accPanels;

  @State() currentPanel;

  @Prop() isFirstPanelOpen: boolean;
  @Prop() isSingleOpen: boolean;

  @Prop() titleTag = 'h2';

  componentWillLoad() {
    this.arrayDataWatcher(this.accordionHeaders);
    requestAnimationFrame(() => {
      this.accHeaderButtons = this.el.shadowRoot
        .querySelector('#ip-accordion')
        .querySelectorAll('button');

      this.accPanels = this.el.shadowRoot
        .querySelector('#ip-accordion')
        .querySelectorAll('.js-panel');

      this.setSlotId();

      this.hidePanels();

      this.openFirstPanel();
    });
  }

  openFirstPanel() {
    if (this.isFirstPanelOpen) {
      const firstPanel = this.accPanels[0];
      const firstButton = this.accHeaderButtons[0];
      firstPanel.classList.remove('hidden');
      firstPanel.classList.add('visible');
      firstButton.setAttribute('aria-expanded', 'true');
      this.currentPanel = 'panel-1';
    }
  }
  // For accessibility - set an id on the slotted elements
  setSlotId() {
    const slottedElems = this.el.querySelectorAll('ip-accordion > [slot]');

    slottedElems.forEach((slotElem: HTMLElement, index: number) => {
      slotElem.setAttribute('id', this._accordionHeaders[index]?.ariaText);
    });
  }

  onSelectPanel(index: number, panel: string) {
    const selectedButton = this.accHeaderButtons[index];
    const selectedPanel = this.accPanels[index];

    if (selectedButton.getAttributeNode('aria-expanded').value === 'false') {
      this.currentPanel = panel;
    } else {
      this.currentPanel = '';
    }

    this.setAriaExpanded(selectedButton);

    if (this.isSingleOpen) {
      this.closeOtherPanels(index);
    }

    this.setHeight(selectedPanel);
  }
  closeOtherPanels(selectedIndex: number) {
    this.accPanels.forEach((panel, index) => {
      if (index !== selectedIndex) {
        panel.classList.remove('visible');
        panel.classList.add('hidden');
        this.accHeaderButtons[index].setAttribute('aria-expanded', 'false');
      }
    });
  }
  isOpen(selectedButton: HTMLElement) {
    if (this.isSingleOpen) {
      this.accPanels.forEach((panel) => {
        panel.style.height = 'auto';
      });

      this.accHeaderButtons.forEach((accButton) => {
        if (
          selectedButton === accButton &&
          selectedButton.getAttributeNode('aria-expanded').value === 'true'
        ) {
          selectedButton.setAttribute('aria-expanded', 'true');
        } else {
          accButton.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  setHeight(selectedPanel: HTMLElement) {
    if (selectedPanel.classList.contains('hidden')) {
      selectedPanel.classList.remove('hidden');
      selectedPanel.classList.add('visible');
    } else {
      selectedPanel.classList.remove('visible');
      selectedPanel.classList.add('hidden');
    }
  }

  // set aria-expanded to true for selected button
  setAriaExpanded(selectedButton: HTMLElement) {
    if (selectedButton.getAttributeNode('aria-expanded').value === 'true') {
      selectedButton.setAttribute('aria-expanded', 'false');
    } else {
      selectedButton.setAttribute('aria-expanded', 'true');
    }
  }

  // For accessibility - so as not to make elements inside tabulable

  hidePanels() {
    this.accPanels.forEach((panel) => {
      panel.classList.add('hidden');
    });
  }

  render() {
    return [
      <div part="ip-accordion" class="ip-accordion" id="ip-accordion">
        {this._accordionHeaders ? (
          this._accordionHeaders.map((tabHeader, index) => (
            <div part={`acc-panel acc-panel-${index + 1}`} class="ip-acc-panel">
              {tabHeader.title ? (
                tabHeader.iconPath ? (
                  <this.titleTag part="acc-header" class="js-acc-button">
                    <button
                      part={
                        this.currentPanel === 'panel-' + (index + 1)
                          ? 'acc-btn acc-btn-active'
                          : 'acc-btn'
                      }
                      onClick={this.onSelectPanel.bind(
                        this,
                        index,
                        'panel-' + (index + 1),
                      )}
                      aria-label={
                        this.currentPanel === 'panel-' + (index + 1)
                          ? tabHeader.btnAltClose
                            ? tabHeader.btnAltClose
                            : null
                          : tabHeader.btnAlt
                            ? tabHeader.btnAlt
                            : null
                      }
                      type="button"
                      aria-expanded={
                        this.isFirstPanelOpen && index === 0 ? 'true' : 'false'
                      }
                      aria-controls={tabHeader.ariaText}
                      id={tabHeader.id}
                      class={
                        this.isFirstPanelOpen && index === 0 ? 'visible' : ''
                      }
                    >
                      <img
                        part={
                          this.currentPanel === 'panel-' + (index + 1)
                            ? 'acc-icon acc-icon-active'
                            : 'acc-icon'
                        }
                        class="accordion-icon"
                        src={
                          this.currentPanel === 'panel-' + (index + 1)
                            ? tabHeader.iconActivePath
                            : tabHeader.iconPath
                        }
                        alt=""
                      />
                      <span
                        part={
                          this.currentPanel === 'panel-' + (index + 1)
                            ? 'acc-title acc-title-active'
                            : 'acc-title'
                        }
                        class="accordion-title"
                      >
                        {tabHeader.title}
                      </span>
                      {tabHeader.subtitle ? (
                        <span
                          part={
                            this.currentPanel === 'panel-' + (index + 1)
                              ? 'acc-subtitle acc-subtitle-active'
                              : 'acc-subtitle'
                          }
                          class="accordion-subtitle"
                        >
                          {tabHeader.subtitle}
                        </span>
                      ) : null}
                    </button>
                  </this.titleTag>
                ) : (
                  <this.titleTag part="acc-header" class="js-acc-button">
                    <button
                      part={
                        this.currentPanel === 'panel-' + (index + 1)
                          ? 'acc-btn acc-btn-active'
                          : 'acc-btn'
                      }
                      onClick={this.onSelectPanel.bind(
                        this,
                        index,
                        'panel-' + (index + 1),
                      )}
                      aria-label={
                        this.currentPanel === 'panel-' + (index + 1)
                          ? tabHeader.btnAltClose
                            ? tabHeader.btnAltClose
                            : null
                          : tabHeader.btnAlt
                            ? tabHeader.btnAlt
                            : null
                      }
                      aria-expanded={
                        this.isFirstPanelOpen && index === 0 ? 'true' : 'false'
                      }
                      aria-controls={tabHeader.ariaText}
                      id={tabHeader.id}
                      class={
                        this.isFirstPanelOpen && index === 0 ? 'visible' : ''
                      }
                    >
                      <span
                        part={
                          this.currentPanel === 'panel-' + (index + 1)
                            ? 'acc-title acc-title-active'
                            : 'acc-title'
                        }
                        class="accordion-title"
                      >
                        {tabHeader.title}
                      </span>

                      {tabHeader.subtitle ? (
                        <span
                          part={
                            this.currentPanel === 'panel-' + (index + 1)
                              ? 'acc-subtitle acc-subtitle-active'
                              : 'acc-subtitle'
                          }
                          class="accordion-subtitle"
                        >
                          {tabHeader.subtitle}
                        </span>
                      ) : null}
                    </button>
                  </this.titleTag>
                )
              ) : (
                <div part="acc-header" class="js-acc-button">
                  <button
                    part={
                      this.currentPanel === 'panel-' + (index + 1)
                        ? 'acc-btn acc-btn-active'
                        : 'acc-btn'
                    }
                    onClick={this.onSelectPanel.bind(
                      this,
                      index,
                      'panel-' + (index + 1),
                    )}
                    aria-label={
                      this.currentPanel === 'panel-' + (index + 1)
                        ? tabHeader.btnAltClose
                          ? tabHeader.btnAltClose
                          : null
                        : tabHeader.btnAlt
                          ? tabHeader.btnAlt
                          : null
                    }
                    aria-expanded={
                      this.isFirstPanelOpen && index === 0 ? 'true' : 'false'
                    }
                    aria-controls={tabHeader.ariaText}
                    id={tabHeader.id}
                    class={
                      this.isFirstPanelOpen && index === 0 ? 'visible' : ''
                    }
                  >
                    <img
                      part={
                        this.currentPanel === 'panel-' + (index + 1)
                          ? 'acc-icon acc-icon-active'
                          : 'acc-icon'
                      }
                      class="accordion-icon"
                      src={
                        this.currentPanel === 'panel-' + (index + 1)
                          ? tabHeader.iconActivePath
                          : tabHeader.iconPath
                      }
                      alt=""
                    />
                  </button>
                </div>
              )}

              <div
                part="acc-content"
                id={tabHeader.ariaText}
                class={`js-panel ${this.isFirstPanelOpen && index === 0 ? 'visible' : 'hidden'}`}
              >
                <slot name={'accordion-' + (index + 1)}></slot>
              </div>
            </div>
          ))
        ) : (
          <div part="acc-panel acc-panel-1" class="ip-acc-panel">
            <h2 part="acc-header" class="js-acc-button">
              <button
                part={
                  this.currentPanel === 'panel-' + 1
                    ? 'acc-btn acc-btn-active'
                    : 'acc-btn'
                }
                onClick={this.onSelectPanel.bind(this, 0)}
                aria-label="Afficher plus d'information sur {nom de la section}"
                aria-expanded={this.isFirstPanelOpen ? 'true' : 'false'}
                aria-controls="sect-1"
                id="accordion-1"
                class={this.isFirstPanelOpen ? 'visible' : ''}
              >
                <span
                  part={
                    this.currentPanel === 'panel-' + 1
                      ? 'acc-title acc-title-active'
                      : 'acc-title'
                  }
                  class="accordion-title"
                >
                  Accessibilité
                </span>
              </button>
            </h2>
            <div
              part="acc-content"
              id="sect-1"
              class={`js-panel ${this.isFirstPanelOpen ? 'visible' : 'hidden'}`}
            >
              <div class="acc-content">
                <img
                  class="acc-content__image"
                  src={getAssetPath('assets/images/tab-img-1.png')}
                  alt=""
                />

                <div class="acc-content__desc-wrapper">
                  <h4 class="acc-content__title">
                    6 Bonnes Pratiques pour être en Conformité
                  </h4>
                  <p class="acc-content__desc">
                    Aujourd&apos;hui, encore beaucoup de sites Web et
                    d&apos;applications mobiles sont conçus sans penser à la
                    navigation des personnes en situation de handicap. Pourtant,
                    pour ces personnes, l&apos;outil digital représente un
                    véritable levier d&apos;intégration, et leur apporte bien
                    souvent un surcroît d&apos;indépendance. Selon les
                    différents types de handicaps, les manquements les plus
                    couramment relevés sur le Web ne sont pas les mêmes.
                  </p>
                  <a
                    class="acc-content__btn"
                    aria-label="En savoir plus, 6 Bonnes Pratiques pour être en Conformité"
                    href="#"
                  >
                    En&nbsp;savoir&nbsp;plus
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>,
    ];
  }
}
