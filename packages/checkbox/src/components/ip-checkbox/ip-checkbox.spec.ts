import { newSpecPage } from "@stencil/core/testing";
import { IpCheckbox } from "./ip-checkbox";

describe("ip-checkbox", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [IpCheckbox],
      html: "<ip-checkbox></ip-checkbox>",
    });
    expect(root).toEqualHtml(`
      <ip-checkbox>
        <mock:shadow-root>
          <div class="checkbox-content">
            <input 
                class="checkbox-input"
                type="checkbox">
                <label class="checkbox-label">
                    <slot></slot>
                </label>
          </div>
        </mock:shadow-root>
      </ip-checkbox>
    `);
  });

  //This test will fail because of the slot being hard to test
  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [IpCheckbox],
      html: `  <ip-checkbox default-checked="true" id="check me">Check me !</ip-checkbox>`,
    });
    expect(root).toEqualHtml(`
     <ip-checkbox default-checked="true" id="check me">
       <mock:shadow-root>
         <div class="checkbox-content">
           <input checked="" class="checkbox-input" id="check me" type="checkbox">
           <label class="checkbox-label" htmlfor="check me">
             <slot></slot>
           </label>
         </div>
       </mock:shadow-root>
       Check me !
     </ip-checkbox>
    `);
  });
});
