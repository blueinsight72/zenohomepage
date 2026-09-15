// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zeno.im',
  integrations: [
    // sitemap.xml / sitemap-index.xml 을 빌드 시 자동 생성합니다.
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://zeno.im/') item.priority = 1.0;
        else if (item.url.includes('/product/') || item.url.includes('/solution/')) item.priority = 0.9;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  build: { format: 'directory' },
  compressHTML: true,
});
