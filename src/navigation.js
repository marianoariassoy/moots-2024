import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Cursos',
      links: [
        {
          text: 'Clases de cocina virtuales',
          href: getPermalink('/cursos/cocina-virtuales'),
        },
        {
          text: 'Liderazgo',
          href: getPermalink('/cursos/liderazgo'),
        },
        {
          text: 'Plantas y Gluten free',
          href: getPermalink('/crusos/plantas-y-gluten-free'),
        },
        {
          text: 'Basados en Plantas',
          href: getPermalink('/cursos/plantas'),
        },
      ],
    },
    {
      text: 'Combos',
    },
    {
      text: 'Nosotros',
    },
    {
      text: 'Contacto',
    },
  ],
  actions: [{ text: 'Ingresar', href: '#' }],
};

export const footerData = {
  links: [
    {
      title: 'Capacitate',
      links: [
        { text: 'Cursos Online', href: '#' },
        { text: 'Talleres presenciales virtuales', href: '#' },
        { text: 'Gift card', href: '#' },
      ],
    },
    {
      title: 'Información',
      links: [
        { text: '¿Cómo comprar?', href: '#' },
        { text: '¿Por qué elegirnos?', href: '#' },
        { text: 'Política de cancelación', href: '#' },
        { text: 'Política de privacidad', href: '#' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: '+54 9 11 37970736', href: '#' },
        { text: 'talleresmoots@gmail.com', href: '#' },
      ],
    },
    {
      title: 'Redes sociales',
      links: [
        { text: 'Twitter', href: 'https://twitter.com/Pablomartinchef' },
        { text: 'Instagram', href: 'https://www.instagram.com/pablomartinchef' },
        { text: 'Facebook', href: 'https://www.facebook.com/pablomartinchef' },
        { text: 'Youtube', href: 'https://www.youtube.com/c/PabloMartinChef' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/Pablomartinchef' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/pablomartinchef' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/pablomartinchef' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/c/PabloMartinChef' },
  ],
  footNote: `
    Hecho por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://marianoarias.soy" target="_blank">marianoarias.soy</a> · Todos los derechos reservados.
  `,
};
