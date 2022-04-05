export interface NftCreator {
  address: string;
  share: number;
  verified: number;
}
export interface WhitelistNft {
  candyShopAddress: string;
  creators: NftCreator[];
  symbol: string;
  identifier: string;
}
