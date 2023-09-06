import { MaterialTheme } from 'material3-react';
import Wrapper from '~/components/Wrapper';
import Table from '~/components/Table';
import Footer from '~/components/Footer';

import ElevatedButton from '@/design-tokens/tokens/components/button/elevated.csv';
import FilledButton from '@/design-tokens/tokens/components/button/filled.csv';
import TonalButton from '@/design-tokens/tokens/components/button/tonal.csv';
import OutlinedButton from '@/design-tokens/tokens/components/button/outlined.csv';
import TextButton from '@/design-tokens/tokens/components/button/text.csv';

const Page = () => {
  return (
    <MaterialTheme sourceColor={0x205107}>
      <Wrapper>
        <Table data={ElevatedButton} />
        <Table data={FilledButton} />
        <Table data={TonalButton} />
        <Table data={OutlinedButton} />
        <Table data={TextButton} />

        <Footer />
      </Wrapper>
    </MaterialTheme>
  );
};

export default Page;
