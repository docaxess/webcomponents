import { newSpecPage } from "@stencil/core/testing";
import { IpEmail } from "./ip-email";

describe("ip-email", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [IpEmail],
      html: "<ip-email></ip-email>",
    });
    expect(root).toEqualHtml(`
            <ip-email>
                <mock:shadow-root>
                    <div class="input">
                        <label htmlfor="email" class="input__label">
                            Email
                            <span aria-hidden="true" class="required-asterisk">
                                *
                            </span>
                        </label>
                        <div class="input_btn">
                            <input type="email" id="email" class="input__input" autocomplete="email" required placeholder="Type your Email here...">
                        </div>
                    </div>
                </mock:shadow-root>
            </ip-email>
        `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [IpEmail],
      html: `<ip-email input-label="Username"></ip-email>`,
    });
    expect(root).toEqualHtml(`
                <ip-email input-label="Username">
                    <mock:shadow-root>
                        <div class="input">
                            <label htmlfor="email" class="input__label">
                            Username
                                <span aria-hidden="true" class="required-asterisk">
                                    *
                                </span>
                            </label>
                            <div class="input_btn">
                                <input type="email" id="email" class="input__input" autocomplete="email" required placeholder="Type your Username here...">
                            </div>
                        </div>
                    </mock:shadow-root>
                </ip-email>
            `);
  });
});
