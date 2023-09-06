import banner from '~/assets/Home/banner.jpg';
import Card0 from '~/assets/Home/Card/0.png';
import Card1 from '~/assets/Home/Card/1.png';
import Card2 from '~/assets/Home/Card/2.png';
import Card3 from '~/assets/Home/Card/3.png';
import Card4 from '~/assets/Home/Card/4.png';
import Card5 from '~/assets/Home/Card/5.png';
import Card6 from '~/assets/Home/Card/6.png';
import Card7 from '~/assets/Home/Card/7.png';
import Card8 from '~/assets/Home/Card/8.png';

import { Button, MaterialTheme } from 'material3-react';
import { Link } from 'react-router-dom';
import Banner from '~/components/Banner';
import Card, { CardList } from '~/components/Card';
import Content from '~/components/Content';
import Wrapper from '~/components/Wrapper';
import TextCard, { TextCardList } from '~/components/TextCard';
import Footer from '~/components/Footer';

const Page = () => {
  return (
    <MaterialTheme sourceColor={0x0b57d0}>
      <Wrapper>
        <Banner banner={banner}>
          <h1>Material Design</h1>
          <p>
            Material 3 is the latest version of Google’s open-source design
            system. Design and build beautiful, usable products with Material 3.
          </p>
          <Link style={{ all: 'unset' }} to='/GettingStarted'>
            <Button onClick={() => {}}>Get started</Button>
          </Link>
        </Banner>

        <Content>
          <h2>News & launches</h2>
          <CardList>
            <Card
              banner={Card0}
              href='https://material.io/blog/material-google-io23'>
              <h4>Material Design at Google I/O</h4>
              <p>
                See the full list of Material talks and tutorials launching at
                I/O 2023
              </p>
            </Card>
            <Card
              banner={Card1}
              href='https://material.io/blog/material-you-large-screens'>
              <h4>New: Large screen guidance</h4>
              <p>
                Get started adapting your layouts for a range of window size
                classes and hardware
              </p>
            </Card>
            <Card
              banner={Card2}
              href='https://www.figma.com/community/file/1035203688168086460'>
              <h4>Figma design kit for M3</h4>
              <p>
                Jumpstart your M3 designs with the complete library of
                ready-made components
              </p>
            </Card>
          </CardList>

          <h2>Design system updates</h2>
          <CardList>
            <Card banner={Card3} href='/Develop/Android/JetpackCompose'>
              <h4>M3 for Jetpack Compose</h4>
              <p>
                With the latest stable release, use Jetpack Compose to build a
                complete M3 Android app
              </p>
            </Card>
            <Card banner={Card4} href='/Components/Carousel'>
              <h4>New component: M3 carousel</h4>
              <p>
                An expressive new component for displaying scrollable
                collections of content
              </p>
            </Card>
            <Card banner={Card5} href='/Foundations/Interaction/Gestures'>
              <h4>Back navigation & gestures</h4>
              <p>
                Explore new motion and gesture capabilities for smooth
                navigation across screens
              </p>
            </Card>
            <Card banner={Card6} href='/Styles/Motion'>
              <h4>Motion system updates</h4>
              <p>
                Get started applying motion, from ready-to-use transition
                patterns to updated guidance
              </p>
            </Card>
            <Card
              banner={Card7}
              href='https://goo.gle/material-theme-builder-figma'>
              <h4>Material Theme Builder</h4>
              <p>
                Easily migrate or get started with the M3 color system and
                dynamic color
              </p>
            </Card>
            <Card banner={Card8} href='/Styles/Color'>
              <h4>New color guidance for tones</h4>
              <p>
                Updates include tone-based surface colors, contrast modes, and
                fixed accent colors
              </p>
            </Card>
          </CardList>

          <h2>Resources</h2>
          <TextCardList>
            <TextCard>
              <h4>Material blog</h4>
              <p>News, tutorials, and inspiration from the Material team</p>
            </TextCard>
            <TextCard>
              <h4>Figma design kit</h4>
              <p>
                Customizable styles and components to help you design with
                Material 3
              </p>
            </TextCard>
            <TextCard>
              <h4>Get started</h4>
              <p>Guides, videos, and tools to start building with Material</p>
            </TextCard>
            <TextCard>
              <h4>Develop</h4>
              <p>
                Code and developer documentation for Android, Flutter, and the
                Web
              </p>
            </TextCard>
          </TextCardList>
        </Content>

        <Footer />
      </Wrapper>
    </MaterialTheme>
  );
};

export default Page;
