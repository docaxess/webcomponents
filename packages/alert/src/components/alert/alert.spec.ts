import { newSpecPage } from '@stencil/core/testing';
import { Alert } from './alert';

describe('ip-alert', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: '<ip-alert></ip-alert>',
    });
    expect(root).toEqualHtml(`
            <ip-alert>
                <mock:shadow-root>
<div class="alert alert-info">
  <div class="icon">
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#2072B7"></rect>
      <path
        d="M17.4973 11.6803C18.6977 11.6803 19.6708 10.7072 19.6708 9.50683C19.6708 8.30644 18.6977 7.33334 17.4973 7.33334C16.2969 7.33334 15.3238 8.30644 15.3238 9.50683C15.3238 10.7072 16.2969 11.6803 17.4973 11.6803Z"
        fill="white"
      ></path>
      <path
        d="M12.5403 13.9416C12.5368 13.9413 12.5335 13.9406 12.5302 13.9394L12.529 13.9431L12.5302 13.9394C12.5247 13.9376 12.5195 13.9346 12.5151 13.9307C12.5108 13.9269 12.5072 13.9222 12.5046 13.917L12.0713 14.1303L12.5046 13.917C12.502 13.9117 12.5005 13.906 12.5001 13.9002C12.4997 13.8943 12.5005 13.8885 12.5024 13.883C12.5043 13.8774 12.5072 13.8723 12.5111 13.8679C12.5149 13.8635 12.5196 13.8599 12.5249 13.8573C12.5301 13.8548 12.5358 13.8532 12.5416 13.8529L12.5416 13.8529L12.5448 13.8526C12.5903 13.8494 13.3148 13.7568 14.1712 13.6473C14.38 13.6206 14.5967 13.5929 14.8133 13.5653C15.9416 13.4213 17.0976 13.2745 17.2991 13.2535L17.3126 13.2521L17.3259 13.25C17.6619 13.1966 17.8705 13.2211 17.992 13.2627C18.0999 13.2997 18.1501 13.3526 18.1824 13.4135C18.2693 13.5775 18.2786 13.918 18.1197 14.4051L18.1192 14.4065C17.8924 15.1084 15.8125 21.2776 15.6933 21.6245L15.6933 21.6245L15.6924 21.6272L15.4044 22.4803L15.3967 22.5031L15.3912 22.5266C15.3896 22.5334 15.3873 22.5429 15.3843 22.5546C15.3657 22.6293 15.3243 22.7958 15.3135 22.9478C15.3072 23.0364 15.3058 23.1737 15.3541 23.3141C15.4082 23.4712 15.5328 23.646 15.7584 23.7215C15.9929 23.805 16.2226 23.7459 16.351 23.7029C16.5035 23.6518 16.6532 23.5738 16.7792 23.4996C17.0182 23.3588 17.2402 23.1901 17.3371 23.1166C17.3431 23.112 17.3487 23.1078 17.3537 23.1039L17.3538 23.104L17.3605 23.0987C18.1399 22.4872 18.819 21.7577 19.3734 20.9367L19.3735 20.9368L19.38 20.9267C19.3831 20.9219 19.3872 20.9177 19.3919 20.9144C19.3967 20.9111 19.402 20.9088 19.4077 20.9077C19.4133 20.9065 19.4192 20.9065 19.4248 20.9076C19.4268 20.908 19.4288 20.9085 19.4307 20.9092C19.4349 20.9144 19.4379 20.9205 19.4393 20.9272C19.441 20.9347 19.4405 20.9425 19.4382 20.9498C19.0897 21.4765 18.5836 22.0809 18.0049 22.6181C17.4143 23.1663 16.7742 23.6202 16.1754 23.8607L16.1745 23.861C15.6982 24.0534 15.1902 24.1553 14.6766 24.1616L14.6643 24.1617L14.652 24.1625C14.1688 24.1922 13.6892 24.063 13.2864 23.7945L13.2864 23.7945L13.2821 23.7916C13.1061 23.677 12.9703 23.5103 12.8934 23.3149L12.4284 23.4978L12.8934 23.3149C12.8165 23.1194 12.8025 22.9049 12.8531 22.7011L12.8563 22.6884L12.8588 22.6756C12.8582 22.6785 12.8584 22.6777 12.86 22.672C12.8628 22.6622 12.8696 22.6375 12.8836 22.5919C12.9025 22.5302 12.929 22.4471 12.9626 22.3444C13.0298 22.1394 13.1226 21.8639 13.2332 21.5397C13.4542 20.8915 13.7439 20.0551 14.0364 19.2116C14.0684 19.1194 14.1005 19.0269 14.1325 18.9345C14.6599 17.414 15.1849 15.9001 15.2873 15.5417C15.4443 15.1445 15.4585 14.7047 15.3269 14.2976L15.311 14.2486L15.2855 14.2039C15.192 14.0399 15.0531 13.9065 14.8854 13.8197C14.7183 13.7331 14.5297 13.6967 14.3424 13.7146C14.2375 13.7244 13.7738 13.783 13.3539 13.8367C13.1386 13.8643 12.929 13.8913 12.7732 13.9114L12.5859 13.9357L12.5403 13.9416Z"
        fill="white"
        stroke="white"
      ></path>
    </svg>
  </div>
  <button class="close-button" aria-label="Close alert">×</button>
  <div class="message-content"><div class="message"></div></div>
</div>
                </mock:shadow-root>
            </ip-alert>
        `);
  });
  it('should render with the correct title and message', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: '<ip-alert alert-title="Test Title" message="Test Message"></ip-alert>',
    });
    expect(root).toEqualHtml(`
            <ip-alert alert-title="Test Title" message="Test Message">
                <mock:shadow-root>
                <div class="alert alert-info">
  <div class="icon">
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#2072B7"></rect>
      <path
        d="M17.4973 11.6803C18.6977 11.6803 19.6708 10.7072 19.6708 9.50683C19.6708 8.30644 18.6977 7.33334 17.4973 7.33334C16.2969 7.33334 15.3238 8.30644 15.3238 9.50683C15.3238 10.7072 16.2969 11.6803 17.4973 11.6803Z"
        fill="white"
      ></path>
      <path
        d="M12.5403 13.9416C12.5368 13.9413 12.5335 13.9406 12.5302 13.9394L12.529 13.9431L12.5302 13.9394C12.5247 13.9376 12.5195 13.9346 12.5151 13.9307C12.5108 13.9269 12.5072 13.9222 12.5046 13.917L12.0713 14.1303L12.5046 13.917C12.502 13.9117 12.5005 13.906 12.5001 13.9002C12.4997 13.8943 12.5005 13.8885 12.5024 13.883C12.5043 13.8774 12.5072 13.8723 12.5111 13.8679C12.5149 13.8635 12.5196 13.8599 12.5249 13.8573C12.5301 13.8548 12.5358 13.8532 12.5416 13.8529L12.5416 13.8529L12.5448 13.8526C12.5903 13.8494 13.3148 13.7568 14.1712 13.6473C14.38 13.6206 14.5967 13.5929 14.8133 13.5653C15.9416 13.4213 17.0976 13.2745 17.2991 13.2535L17.3126 13.2521L17.3259 13.25C17.6619 13.1966 17.8705 13.2211 17.992 13.2627C18.0999 13.2997 18.1501 13.3526 18.1824 13.4135C18.2693 13.5775 18.2786 13.918 18.1197 14.4051L18.1192 14.4065C17.8924 15.1084 15.8125 21.2776 15.6933 21.6245L15.6933 21.6245L15.6924 21.6272L15.4044 22.4803L15.3967 22.5031L15.3912 22.5266C15.3896 22.5334 15.3873 22.5429 15.3843 22.5546C15.3657 22.6293 15.3243 22.7958 15.3135 22.9478C15.3072 23.0364 15.3058 23.1737 15.3541 23.3141C15.4082 23.4712 15.5328 23.646 15.7584 23.7215C15.9929 23.805 16.2226 23.7459 16.351 23.7029C16.5035 23.6518 16.6532 23.5738 16.7792 23.4996C17.0182 23.3588 17.2402 23.1901 17.3371 23.1166C17.3431 23.112 17.3487 23.1078 17.3537 23.1039L17.3538 23.104L17.3605 23.0987C18.1399 22.4872 18.819 21.7577 19.3734 20.9367L19.3735 20.9368L19.38 20.9267C19.3831 20.9219 19.3872 20.9177 19.3919 20.9144C19.3967 20.9111 19.402 20.9088 19.4077 20.9077C19.4133 20.9065 19.4192 20.9065 19.4248 20.9076C19.4268 20.908 19.4288 20.9085 19.4307 20.9092C19.4349 20.9144 19.4379 20.9205 19.4393 20.9272C19.441 20.9347 19.4405 20.9425 19.4382 20.9498C19.0897 21.4765 18.5836 22.0809 18.0049 22.6181C17.4143 23.1663 16.7742 23.6202 16.1754 23.8607L16.1745 23.861C15.6982 24.0534 15.1902 24.1553 14.6766 24.1616L14.6643 24.1617L14.652 24.1625C14.1688 24.1922 13.6892 24.063 13.2864 23.7945L13.2864 23.7945L13.2821 23.7916C13.1061 23.677 12.9703 23.5103 12.8934 23.3149L12.4284 23.4978L12.8934 23.3149C12.8165 23.1194 12.8025 22.9049 12.8531 22.7011L12.8563 22.6884L12.8588 22.6756C12.8582 22.6785 12.8584 22.6777 12.86 22.672C12.8628 22.6622 12.8696 22.6375 12.8836 22.5919C12.9025 22.5302 12.929 22.4471 12.9626 22.3444C13.0298 22.1394 13.1226 21.8639 13.2332 21.5397C13.4542 20.8915 13.7439 20.0551 14.0364 19.2116C14.0684 19.1194 14.1005 19.0269 14.1325 18.9345C14.6599 17.414 15.1849 15.9001 15.2873 15.5417C15.4443 15.1445 15.4585 14.7047 15.3269 14.2976L15.311 14.2486L15.2855 14.2039C15.192 14.0399 15.0531 13.9065 14.8854 13.8197C14.7183 13.7331 14.5297 13.6967 14.3424 13.7146C14.2375 13.7244 13.7738 13.783 13.3539 13.8367C13.1386 13.8643 12.929 13.8913 12.7732 13.9114L12.5859 13.9357L12.5403 13.9416Z"
        fill="white"
        stroke="white"
      ></path>
    </svg>
  </div>
  <button class="close-button" aria-label="Close alert">×</button>
  <div class="message-content">
    <div class="title title-info">Test Title</div>
    <div class="message">Test Message</div>
  </div>
</div>
      </mock:shadow-root>
</ip-alert>
    `);
  });
});
