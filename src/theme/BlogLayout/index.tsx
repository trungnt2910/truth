import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import BlogHeader from '@site/src/components/BlogHeader';

import type {Props} from '@theme/BlogLayout';

export interface ExtendedProps extends Props {
  isBlogListPage: boolean | undefined;
}

export default function BlogLayout(props: ExtendedProps): ReactNode {
  const {sidebar, toc, children, isBlogListPage, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          { isBlogListPage && <BlogHeader /> }
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}>
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
