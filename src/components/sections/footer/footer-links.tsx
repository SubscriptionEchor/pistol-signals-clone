import { Link } from './link';

const links = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Security', href: '/security' },
  ],
};

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
      <div>
        <h3 className="text-sm font-semibold mb-4">Product</h3>
        <ul className="space-y-3">
          {links.product.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4">Company</h3>
        <ul className="space-y-3">
          {links.company.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4">Legal</h3>
        <ul className="space-y-3">
          {links.legal.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}