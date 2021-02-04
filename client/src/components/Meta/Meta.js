import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='keyword' content={keywords} />
  </Helmet>
);

Meta.defaultProps = {
  title: 'Welcome to e-shop',
  description: 'We seel quality products at best prices.',
  keywords: 'electronics, best electronics, cheap electronics',
};

export default Meta;
