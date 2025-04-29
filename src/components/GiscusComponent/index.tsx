import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  const { i18n } = useDocusaurusContext();

  return (
    <BrowserOnly>
        {() =>
            <Giscus
                repo="trungnt2910/truth"
                repoId="R_kgDOOgGa0A"
                category="Blogs"
                categoryId="DIC_kwDOOgGa0M4Cpfca"
                mapping="specific"
                term={location.pathname.replace(/^\/+|\/+$/g, "").split("/").at(-1)}
                strict="0"
                reactionsEnabled="1"
                emitMetadata="1"
                inputPosition="top"
                theme={colorMode}
                lang={i18n.currentLocale}
                loading="lazy"
            />
        }
    </BrowserOnly>
  );
}
