import { Component, For } from 'solid-js';
import { A } from 'solid-start';

const links = [
  { name: 'Privacy', href: '/privacy' },
  // { name: 'Advertise', href: '/advertise' },
];

const Footer: Component<{}> = (props) => {
  return (
    <footer>
      <nav class='flex justify-center space-x-6 py-4 font-bold'>
        <For each={links}>
          {(link) => (
            <A
              href={link.href}
              class='group text-indigo-500 transition duration-300 '>
              {link.name}
              <span class='block h-0.5 max-w-0 bg-indigo-500 transition-all duration-500 group-hover:max-w-full'></span>
            </A>
          )}
        </For>
      </nav>
    </footer>
  );
};

export default Footer;
