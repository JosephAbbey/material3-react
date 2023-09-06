import { HorizontalDivider, Icon, IconButton } from 'material3-react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='Footer'>
      <HorizontalDivider />
      <section className='about'>
        <div>
          <Link to='/' aria-label='Material Design'>
            <IconButton onClick={() => {}}>
              <Icon icon='design_services' />
            </IconButton>
          </Link>
          <p>
            Material Design is an adaptable system of guidelines, components,
            and tools that support the best practices of user interface design.
            Backed by open-source code, Material Design streamlines
            collaboration between designers and developers, and helps teams
            quickly build beautiful products.
          </p>
        </div>
        <ul>
          <li>Social</li>
          <li>
            <Link
              rel='noopener'
              to='https://www.github.com/material-components'
              target='_blank'
              aria-label='Find us on Github'>
              GitHub
            </Link>
          </li>
          <li>
            <Link
              rel='noopener'
              to='https://www.twitter.com/materialdesign'
              target='_blank'
              aria-label='Find us on Twitter'>
              Twitter
            </Link>
          </li>
          <li>
            <Link
              rel='noopener'
              to='https://www.youtube.com/materialdesign'
              target='_blank'
              aria-label='Find us on Youtube'>
              YouTube
            </Link>
          </li>
          <li>
            <Link
              rel='noopener'
              to='https://material.io/feed.xml'
              target='_blank'>
              Blog RSS
            </Link>
          </li>
        </ul>
        <ul>
          <li>Libraries</li>
          <li>
            <Link
              rel='noopener'
              to='/Develop/Android/MDC-Android'
              target=''
              aria-label='Android'>
              Android
            </Link>
          </li>
          <li>
            <Link
              rel='noopener'
              to='/Develop/Android/JetpackCompose'
              target=''
              aria-label='Compose'>
              Compose
            </Link>
          </li>
          <li>
            <Link
              rel='noopener'
              to='/Develop/Flutter'
              target=''
              aria-label='Flutter'>
              Flutter
            </Link>
          </li>
          <li>
            <Link rel='noopener' to='/Develop/Web' target='' aria-label='web'>
              Web
            </Link>
          </li>
        </ul>
        <ul>
          <li>Archived versions</li>
          <li>
            <Link
              to='https://m1.material.io'
              target='_blank'
              rel='noopener'
              aria-label='M1'>
              Material Design 1
            </Link>
          </li>
          <li>
            <Link
              to='https://m2.material.io'
              target='_blank'
              rel='noopener'
              aria-label='M2'>
              Material Design 2
            </Link>
          </li>
        </ul>
      </section>
      <section className='legal'>
        <Link to='https://m3.material.io'>Goto the real site</Link>
      </section>
    </footer>
  );
}
