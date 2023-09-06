import { MaterialTheme } from 'material3-react';
import Wrapper from '~/components/Wrapper';
import Table from '~/components/Table';
import Footer from '~/components/Footer';

import FilledIconButton from '@/design-tokens/tokens/components/icon-button/filled.csv';
import TonalIconButton from '@/design-tokens/tokens/components/icon-button/tonal.csv';
import OutlinedIconButton from '@/design-tokens/tokens/components/icon-button/outlined.csv';
import StandardIconButton from '@/design-tokens/tokens/components/icon-button/standard.csv';

const Page = () => {
  return (
    <MaterialTheme sourceColor={0x205107}>
      <Wrapper>
        <Table data={FilledIconButton} />
        <Table data={TonalIconButton} />
        <Table data={OutlinedIconButton} />
        <Table data={StandardIconButton} />

        <Footer />
      </Wrapper>
    </MaterialTheme>
  );
};

export default Page;
