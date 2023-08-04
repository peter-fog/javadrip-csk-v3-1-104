import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { useInstantSearch, Hits } from 'react-instantsearch-hooks-web';
import { InformationContent } from '../../components';
import { Card } from '../';

const ProductHit = (link?: Types.ProjectMapLink) =>
  function getProductComponent({ hit }: { hit: CommerceTypes.Product }) {
    return (
      <Card
        image={hit.images[0].url}
        title={hit.name}
        description={hit.description}
        badge={hit.subCategories?.[0] || ''}
        badgeStyle="primary"
        buttonStyle="primary"
        lineCountRestriction="5"
        badgeSize="sm"
        buttonCopy="Product Details Page"
        slug={hit.slug}
        buttonLink={link}
        useCustomTextElements
        component={{
          type: 'card',
          variant: 'backgroundImage',
        }}
      />
    );
  };

const AlgoliaHits: FC<ComponentProps<{ link?: Types.ProjectMapLink }>> = ({ link }) => {
  const {
    results: { hits, processingTimeMS },
    status,
  } = useInstantSearch();

  const renderContent = () => {
    if (!hits.length && status === 'idle' && processingTimeMS) {
      return <InformationContent title="Sorry there are no products for this filter" />;
    }

    return (
      <Hits<CommerceTypes.Product & Record<string, unknown>>
        hitComponent={ProductHit(link)}
        classNames={{
          list: 'grid gap-y-3 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-6 lg:gap-x-8 lg:gap-y-5 sm:mb-0',
        }}
      />
    );
  };

  return <div className="pt-2 min-h-[500px]">{renderContent()}</div>;
};

registerUniformComponent({
  type: 'algolia-hits',
  component: AlgoliaHits,
});

export default AlgoliaHits;
