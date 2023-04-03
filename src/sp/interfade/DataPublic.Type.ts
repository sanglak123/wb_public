export interface InterFadeCard {
  id: number;
  idTypeCard: number;
  telco: string;
  img: number;
  change: boolean;
}
export interface InterFadeValue {
  id: number;
  name: string;
}

export interface DataPublic {
  Prices: {
    id: number;
    idCard: number;
    idValue: number;
    feesChange: number;
    feesBuy: number;
    Card: InterFadeCard;
    Value: InterFadeValue;
  }[];
  Cards: InterFadeCard[];
  Banks: {
    id: number;
    name: string;
    sign: string;
  }[];
}
