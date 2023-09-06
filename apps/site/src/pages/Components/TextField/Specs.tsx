import { MaterialTheme } from 'material3-react';
import Wrapper from '~/components/Wrapper';
import Table from '~/components/Table';
import Footer from '~/components/Footer';

import FilledTextField from '@/design-tokens/tokens/components/text-field/filled.csv';
import FilledTextFieldError from '@/design-tokens/tokens/components/text-field/filled-error.csv';

const Page = () => {
  return (
    <MaterialTheme sourceColor={0xcbcc58}>
      <Wrapper>
        <Table data={FilledTextField} />

        <Table data={FilledTextFieldError} />

        <Footer />
      </Wrapper>
    </MaterialTheme>
  );
};

export default Page;
