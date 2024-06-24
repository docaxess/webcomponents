import { newSpecPage } from "@stencil/core/testing";
import { ToggleButton } from "./toggle";

describe("ip-toggle", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [ToggleButton],
      html: "<ip-toggle></ip-toggle>",
    });
    expect(root).toEqualHtml(`
      <ip-toggle>
        <mock:shadow-root>
           <div class="switch-button">
             <input aria-checked="false" class="switch-checkbox" role="switch" />
               <span class="switch-icon"></span>
        </mock:shadow-root>
      </ip-toggle>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [ToggleButton],
      html: `<ip-toggle active-label="Oui" inactive-label="Non"></ip-toggle>`,
    });
    expect(root).toEqualHtml(`
      <ip-toggle active-label="Oui" inactive-label="Non">
        <mock:shadow-root>
         <div class="switch-button">
           <input aria-checked="false" class="switch-checkbox" role="switch" />
             <span class="switch-icon"></span>
             <span class="label">
               <p class="inactive-label">
                 Non
               </p>
             </span>

          </div>
        </mock:shadow-root>
      </ip-toggle>
    `);
  });
});
