import { newSpecPage } from "@stencil/core/testing";
import { IpPassword } from "./ip-password";

describe("ip-password", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [IpPassword],
      html: "<ip-password></ip-password>",
    });
    expect(root).toEqualHtml(`
            <ip-password>
                <mock:shadow-root>
                    <div class="input">
                        <label htmlfor="password" class="input__label">
                            Password
                            <span aria-hidden="true" class="required-asterisk">
                                *
                            </span>
                        </label>
                        <div class="input_btn">
                            <input type="password" id="password" class="input__input" autocomplete="current-password" required placeholder="Type your Password here...">
                        </div>
                        
                    </div>
                </mock:shadow-root>
            </ip-password>
        `);
  });
});
