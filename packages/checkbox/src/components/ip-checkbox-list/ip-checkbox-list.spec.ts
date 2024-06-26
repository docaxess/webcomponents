import { newSpecPage } from "@stencil/core/testing";
import { IpCheckboxList } from "./ip-checkbox-list";

describe("ip-checkbox-list", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [IpCheckboxList],
      html: "<ip-checkbox-list></ip-checkbox-list>",
    });
    expect(root).toEqualHtml(`
      <ip-checkbox-list>
        <mock:shadow-root>
          <div class="checkbox-list">
             <fieldset class="checkbox-content"></fieldset>
          </div>
        </mock:shadow-root>
      </ip-checkbox-list>
    `);
  });

  it("renders with options", async () => {
    const { root } = await newSpecPage({
      components: [IpCheckboxList],
      html: `<ip-checkbox-list
                legend="Preferences:"
                options='[
                    {"id": "1", "label": "Option 1"}, 
                    {"id": "2", "label": "Option 2"}, 
                    {"id": "3", "label": "Option 3"}
                ]'
                >
             </ip-checkbox-list>"`,
    });
    expect(root).toEqualHtml(`
      <ip-checkbox-list>
        <mock:shadow-root>
            <div class="checkbox-list">
                <fieldset class="checkbox-content">
                    <legend class="legend">Preferences:</legend>
                    <div>
                        <input
                            class="checkbox-input"
                            type="checkbox"
                            id="1"
                            aria-checked="false"
                            role="checkbox"
                        />
                        <label class="checkbox-label" for="1">Option 1</label>
                    </div>
                    <div>
                        <input
                            class="checkbox-input"
                            type="checkbox"
                            id="2"
                            aria-checked="false"
                            role="checkbox"
                        />
                        <label class="checkbox-label" for="2">Option 2</label>
                    </div>
                    <div>
                    <input
                        class="checkbox-input"
                        type="checkbox"
                        id="3"
                        aria-checked="false"
                        role="checkbox"
                    />
                        <label class="checkbox-label" for="3">Option 3</label>
                    </div>
                </fieldset>
            </div>
        </mock:shadow-root>
      </ip-checkbox-list>
    `);
  });
});
