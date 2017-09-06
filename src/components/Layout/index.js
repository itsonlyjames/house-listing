import React from 'react';
import styled from 'styled-components';

const Layout = props => (
  <LayoutWrap>
    <ContentWrap className="content-wrap">
      {props.children}
    </ContentWrap>
  </LayoutWrap>
);

const LayoutWrap = styled.div``;

const ContentWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default Layout;
