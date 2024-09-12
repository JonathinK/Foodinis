import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';

// Styled Components and Layout Components
import { MainContent } from '../styles/mainContent.styled';
import { FlexWrapper, GridWrapper } from '../styles/wrappers.styled';
import { Paragraph } from '../styles/typography';

// Components
import ProductsFilterBar from '../components/storefront/productsFilterBar';
import ProductCard from '../components/storefront/productCard';
import Hero from '../components/hero';
import ProductOptionsModal from '../components/storefront/productModal';
import { ProductGrid, ProductSection } from '../styles/storefront.styled';

// Constants
const desiredOrder = [
  "appetizers, snacks, platters",
  "build-your own bar",
  "breakfast",
  "lunch-dinner-packages",
  "dessert",
  "beverages"
];

// Custom Hook for Sorting Collections
const useOrderedCollections = (collections) => {
  return collections.sort((a, b) => {
    return desiredOrder.indexOf(a.handle) - desiredOrder.indexOf(b.handle);
  });
};

// Custom Hook for Managing Scroll and Active Section
const useScrollSpy = (collections, sectionRefs) => {
  const [selectedCollection, setSelectedCollection] = useState(collections[0].handle);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 200; // Adjust based on your needs

    let activeSection = collections[0].handle;
    collections.forEach((collection) => {
      const section = sectionRefs.current[collection.handle];
      if (section && scrollPosition >= section.offsetTop) {
        activeSection = collection.handle;
      }
    });

    setSelectedCollection(activeSection);
  }, [collections, sectionRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return [selectedCollection, setSelectedCollection];
};

// Main Component
const CateringDelivered = ({ data, handleOpenModal }) => {
  const collections = useOrderedCollections(data.allShopifyCollection.nodes);
  const { pageHero } = data.contentfulPage;
  const sectionRefs = useRef({});
  
  // Modal State
  const [scrollPosition, setScrollPosition] = useState(null);

  // Scroll Spy and Active Section Management
  const [selectedCollection, setSelectedCollection] = useScrollSpy(collections, sectionRefs);

  // Event Handlers
  const handleSelectCollection = (handle) => {
    const section = sectionRefs.current[handle];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust the offset for the sticky filter bar
        behavior: 'smooth',
      });
    }
  };

  return (
    <MainContent className="products_main">
      <Hero content={pageHero} heroClass="full_width_image" />
      <FlexWrapper className='product_page_rewards_cta centered'>
        <Paragraph>Want to earn rewards? <strong><u>Sign Up</u></strong></Paragraph>
      </FlexWrapper>
      
      <ProductsFilterBar 
        collections={collections} 
        onSelectCollection={handleSelectCollection} 
        activeCollection={selectedCollection} 
      />
      
      {collections.map((collection) => (
        <ProductSection
          key={collection.handle}
          ref={(el) => (sectionRefs.current[collection.handle] = el)}
          id={collection.handle}
        >
          <h2>{collection.title}</h2>
          <ProductGrid>
            {collection.products.map(product => (
              <ProductCard
                key={product.shopifyId}
                content={product}
                handleOpenModal={handleOpenModal}
              />
            ))}
          </ProductGrid>
        </ProductSection>
      ))}
    </MainContent>
  );
};

export const query = graphql`
  query {
    allShopifyCollection {
      nodes {
        title
        description
        id
        sortOrder
        shopifyId
        productsCount
        handle
        products {
          title
          shopifyId
          productType
          isGiftCard
          descriptionHtml
          description
          metafields {
            id
            shopifyId
            key
            namespace
            type
            value
          }
          tags
          featuredMedia {
            alt
            id
            preview {
              image {
                altText
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
              }
            }
          }
          variants{
            shopifyId
            title
            price
          }
        }
      }
    }
    contentfulPage(codeId: {eq: "catering_delivered"}) {
      codeId
      contentful_id
      pageHero {
        codeId
        contentful_id
        externalName
        heroType
        content {
          codeId
          contentful_id
          content {
            ... on ContentfulMedia {
              id
              altText
              codeId
              externalName
              asset {
                contentful_id
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                  quality: 60
                  resizingBehavior: CROP
                  cropFocus: BOTTOM
                )
              }
            }
            ... on ContentfulText {
              id
              codeId
              contentful_id
              longSimpleText {
                longSimpleText
              }
              shortSimpleText
            } 
          }
        }
      }
    }
  }
`
export default CateringDelivered