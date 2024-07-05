import { newSpecPage } from "@stencil/core/testing";
import { IpRadio } from "./ip-radio";

describe("ip-radio", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [IpRadio],
      html: `<ip-radio options='[{"id": "1", "label": "Option 1", "disabled": true},{"id": "2", "label": "Option 2"}, {"id": "3", "label": "Option 3"}]'></ip-radio>`,
    });
    expect(root).toEqualHtml(`
      <ip-radio options='[{"id": "1", "label": "Option 1", "disabled": true},{"id": "2", "label": "Option 2"}, {"id": "3", "label": "Option 3"}]' >
        <mock:shadow-root>
          <div class="container after disabled">
            <div class="radio">
              <input type="radio" value="1" id="1i21gvtg60481fa65cfee31" name="radio1i21gvtg60481fa65cfee3" disabled="">
                <div class="radio-background">
                  <div class="outer-circle"></div>
                  <div class="inner-circle"></div>
              </div>
            </div>
              <label for="1i21gvtg60481fa65cfee31">Option 1</label>
          </div>
          </div>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="2" id="1i21gvtg60481fa65cfee32" name="radio1i21gvtg60481fa65cfee3">
                <div class="radio-background">
                  <div class="outer-circle"></div>
                  <div class="inner-circle"></div>
              </div>
            </div>
              <label for="1i21gvtg60481fa65cfee32">Option 2</label>
            </div>
          </div>
          <div class="container after">
            <div class="radio">
              <input type="radio" value="3" id="1i21gvtg60481fa65cfee33" name="radio1i21gvtg60481fa65cfee3">
                <div class="radio-background">
                  <div class="outer-circle"></div>
                  <div class="inner-circle"></div>
              </div>
            </div>
              <label for="1i21gvtg60481fa65cfee33">Option 3</label>
            </div>
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
