import { storefrontQuery } from "./client";

const PRODUCTS_QUERY = `#graphql
  query HomeProducts($first: Int!) {
    products(first: $first, sortKey: BEST_SELLING) {
      edges {
        node {
          id
          title
          handle
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export type HomeProduct = {
  id: string;
  title: string;
  handle: string;
  featuredImage?: { url: string; altText?: string | null } | null;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
};

type QueryResult = {
  products: {
    edges: { node: HomeProduct }[];
  };
};

export async function fetchHomeProducts(first = 8): Promise<HomeProduct[]> {
  const data = await storefrontQuery<QueryResult>(PRODUCTS_QUERY, { first });
  if (!data?.products?.edges) return [];
  return data.products.edges.map((e) => e.node);
}
