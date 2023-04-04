export type UserCardsBody = {
  cards: UserCardsItem[];
};

export type UserCardsItem = {
  cardId: number;
  result: string;
};
