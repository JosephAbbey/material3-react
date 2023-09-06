import { MaterialTheme } from 'material3-react';
import Wrapper from '~/components/Wrapper';
import Color from '~/components/Color';
import Table from '~/components/Table';
import Footer from '~/components/Footer';

import Theme from '@/design-tokens/tokens/baseline/theme.csv';

const Page = () => {
  return (
    <MaterialTheme sourceColor={0xa8c7fa}>
      <Wrapper>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
            margin: '1em',
          }}>
          Source color:
          <Color color='#a8c7fa' />
        </div>

        <Table data={Theme} />

        <Footer />
      </Wrapper>
    </MaterialTheme>
  );
};

export default Page;
