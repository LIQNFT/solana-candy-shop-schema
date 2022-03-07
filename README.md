# Solana Candy Shop Schema

Defines the schema shared between the backend and frontend component

### Content

##### reponse
Defines the API reponse format, `common.ts` lays out the base of the API response, and the generic `T` is from the respective defintiion defined under `/response`

##### query
Defines the query string for some specific API paths


#### Available APIs

```
- GET /api/order/{storeId}
    Fetch orders given storeId

- GET /api/trade/{storeId}
    Fetch trades given storeId

- GET /api/stats/{storeId}
    Fetch market place stats given storeId

- GET /api/stats/{storeId}/{mint}
    Fetch trade stats given Nft Mint
```