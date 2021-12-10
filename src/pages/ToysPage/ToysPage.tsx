import React, { FC } from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import ToysCards from '../../components/ToysCards/ToysCards';

import './ToysPage.scss';

const ToysPage: FC = () => (
  <PageTemplate>
    <div>
      <ToysCards />
    </div>
  </PageTemplate>
);

export default ToysPage;
