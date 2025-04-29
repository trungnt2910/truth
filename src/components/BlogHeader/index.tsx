import * as React from "react";
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

export default function BlogHeader() {
  return (
    <header style={{
        paddingTop: "32px",
        paddingBottom: "32px",
        marginBottom: "32px",
        width: "100%",
        color: "#bd1a0f",
        backgroundColor: "#ffff77"
    }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ textAlign: "center" }}>
            <Translate id="header.title">Sự Thật</Translate>
        </Heading>
        <p className="hero__subtitle" style={{ textAlign: "center" }}>
            <i>
                <Translate id="header.subtitle">
                    Nơi bảo tồn lịch sử dân tộc Việt.
                </Translate>
            </i>
        </p>
      </div>
    </header>
  );
}
