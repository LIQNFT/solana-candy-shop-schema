import { NftCreator } from "../nft";
export interface WhitelistNft {
    candyShopAddress: string;
    creators: NftCreator[];
    symbol: string;
    identifier: string;
}
