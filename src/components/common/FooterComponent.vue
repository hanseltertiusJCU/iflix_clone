<template>
  <footer class="footer-container">
    <div class="copyright-footer-section">
      <div>
        <div>
          Copyright © 2016-{{ new Date().getFullYear() }} Image Future
          Investment (HK) Limited.
        </div>
        <div class="footer-navigation-section">
          <a
            class="footer-menu-link-item"
            href="https://wetv.vip/static/terms-en.html"
            >Term of Service</a
          >
          <span>|</span>
          <a
            class="footer-menu-link-item"
            href="https://static.wetvinfo.com/static/policyview/web/viewer.html?t=privacy_iflix&a=en"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            class="footer-menu-link-item"
            href="https://static.wetvinfo.com/static/policyview/web/viewer.html?t=cookie_iflix&a=en"
            >Cookie Policy</a
          >
          <span>|</span>
          <a
            class="footer-menu-link-item"
            href="https://www.facebook.com/iflixID/"
            >Feedback</a
          >
          <span>|</span>
          <a
            class="footer-menu-link-item"
            href="https://wetv.vip/static/help.html?language=en&areacode=153513"
            >FAQs</a
          >
          <span>|</span>
          <div class="facebook-icon-container">
            <img
              src="@/assets/img/facebook-icon.svg"
              class="facebook-icon-image"
              alt=""
            />
            <a
              class="footer-menu-link-item"
              href="https://www.facebook.com/iflixID/"
              >@iflix</a
            >
          </div>
        </div>
      </div>

      <div class="qr-code-footer-container">
        <img
          src="@/assets/img/qr-code.png"
          alt=""
          class="qr-code-image-footer"
        />
        <div class="qr-code-text-instruction">
          <div>Scan QR code to</div>
          <div>download App Now!</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="postcss">
.footer-container {
  @apply tw-bg-[#f6f6f6];
  @apply tw-text-[#999];
  @apply tw-font-bold;
}

a.footer-menu-link-item {
  @apply tw-text-[#999];
  @apply tw-no-underline;
}

.footer-menu-link-item:hover {
  @apply tw-text-slate-500;
}

.copyright-footer-section {
  @apply tw-flex;
  @apply tw-justify-between;
  @apply tw-items-center;
  @apply tw-mx-8;
  @apply tw-py-4;
}

.footer-navigation-section {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-space-x-2;
}

.qr-code-text-instruction {
  @apply tw-pr-4;
}

.qr-code-footer-container {
  @apply tw-flex;
  @apply tw-flex-row;
  @apply tw-items-center;
  @apply tw-bg-[#fff];
  @apply tw-space-x-2;
}

.qr-code-image-footer {
  width: 64px;
  height: 64px;
}

.facebook-icon-container {
  @apply tw-flex;
  @apply tw-flex-row;
}

.facebook-icon-container:hover {
  cursor: pointer;
}

.facebook-icon-image {
  width: 1rem;
  height: 1rem;
  @apply tw-self-center;
}
</style>