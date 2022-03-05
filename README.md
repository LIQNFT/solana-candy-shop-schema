# Solana Candy Shop Schema

Defines the schema shared between the backend and frontend component

### Content

##### reponse
Defines the API reponse format, `common.ts` lays out the base of the API response, and the generic `T` is from the respective defintiion defined under `/response`

##### query
Defines the query string for some specific API paths


#### Available APIs

```
- GET /api/{storeId}/order
    Fetch orders given storeId

- GET /api/{storeId}/trade
    Fetch trade given storeId

- GET /api/{storeId}/stats
    Fetch market place stats given storeId

- GET /api/{storeId}/stats/{mint}
    Fetch trade stats given Nft Mint
```