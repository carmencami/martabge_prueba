import { createStorefrontApiClient, type StorefrontApiClient } from "@shopify/storefront-api-client";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

let client: StorefrontApiClient | null = null;

if (domain && token) {
  const storeDomain = domain.startsWith("http") ? domain : `https://${domain.replace(/^\/\//, "")}`;
  client = createStorefrontApiClient({
    storeDomain,
    apiVersion: "2025-01",
    publicAccessToken: token,
  });
}

export function getStorefrontClient(): StorefrontApiClient | null {
  return client;
}

export async function storefrontQuery<T>(query: string, variables?: Record<string, unknown>): Promise<T | null> {
  const c = getStorefrontClient();
  if (!c) return null;
  try {
    const { data, errors } = await c.request(query, { variables });
    if (errors) {
      console.error("[Shopify]", errors);
      return null;
    }
    return data as T;
  } catch (e) {
    console.error("[Shopify] request failed", e);
    return null;
  }
}
