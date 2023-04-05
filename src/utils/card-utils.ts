import dayjs from "dayjs";

export function currentSession(startDay: Date) {
  const learningCicleDays = 10;
  const beginDate = dayjs(startDay);
  const endDate = dayjs();
  let daysDiff = endDate.diff(beginDate, "day");
  if (daysDiff > learningCicleDays) {
    return 0;
  }
  if (beginDate.hour() + (endDate.diff(beginDate, "hour") % 24) >= 24) {
    daysDiff++;
  }
  return daysDiff % learningCicleDays;
}

export function sortCardsId(data: cardIdArray, numCards: number): cardIdMapped {
  let sortedCards = [];
  for (let i = 0; i < numCards; i++) {
    const indexSorted = Math.floor(Math.random() * data.length);
    sortedCards.push(data[indexSorted]);
    data.splice(indexSorted, 1);
  }
  return sortedCards.map((elem) => {
    return { id: elem.cardId };
  });
}

export type cardIdArray = { cardId: number }[];

export type cardIdMapped = { id: number }[];
