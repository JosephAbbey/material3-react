import { MaterialTheme } from 'material3-react';
import Wrapper from '~/components/Wrapper';
import Table from '~/components/Table';
import Footer from '~/components/Footer';

import RadioButton from '@/design-tokens/tokens/components/radio-button.csv';

const Page = () => {
  return (
    <MaterialTheme sourceColor={0x205107}>
      <Wrapper>
        <Table data={RadioButton} />

        <Footer />
      </Wrapper>
    </MaterialTheme>
  );
};

export default Page;
