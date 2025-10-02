In the root level of your testing folder, install the @axe-core/watcher package and all of its dependencies using npm or your preferred package manager (for example, yarn or pnpm).
```
npm install --save-dev @axe-core/watcher
```
In your test file or files, import the playwrightConfig() function, the wrapPlaywright() function, and the PlaywrightController class from @axe-core/watcher:

```
import {
  wrapPlaywrightPage,
  playwrightConfig,
  PlaywrightController
} from '@axe-core/watcher';
```
In your test setup code (typically in a before or beforeAll block), wrap any existing code for creating a browserContext instance with a call to playwrightConfig() while providing your API key:

```
import { chromium, BrowserContext } from 'playwright';
import { playwrightConfig } from '@axe-core/watcher';

const API_KEY = process.env.AXE_DEVELOPER_HUB

const browserContext: BrowserContext = await chromium.launchPersistentContext(
  /**
   * We set userDataDir to an empty string which saves
   * browser data to a temporary directory
   * @see https://playwright.dev/docs/api/class-browsertype#browser-type-launch-persistent-context
   */
  '',
  playwrightConfig({
    axe: {
      apiKey: API_KEY
    },
    /**
     * We support both headless and headed mode with Chrome.
     * 
     * For headless mode:
     * - Use '--headless=chrome' for browsers v94-108.
     * - Use '--headless=new' for browsers v109+.
     * 
     * For headed mode:
     * - Remove the '--headless' flag.
     * 
     * @see https://playwright.dev/docs/chrome-extensions#headless-mode
     */
    headless: false,
    args: ['--headless=new']
  })
);
```


Once you have a page instance, create an instance of the PlaywrightController class and wrap your browserContext:

```
// Create a page instance, using your browser context.
let page = await browserContext.newPage();

// Initialize the PlaywrightController by passing in the Playwright page.
const controller = new PlaywrightController(page);

// Use the new wrapped Playwright page instance.
page = wrapPlaywrightPage(page, controller);
```

Finally, ensure all test results from axe Watcher are flushed out. To do this, add the following block of code to your test teardown code (typically in an afterEach block):

```
afterEach(async () => {
await controller.flush()
})
```
