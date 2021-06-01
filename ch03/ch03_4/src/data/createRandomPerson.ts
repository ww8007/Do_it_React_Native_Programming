import type {IPerson} from './IPerson';
import * as F from './faker';
import * as U from './util';

export const createRandomPerson = (): IPerson => {
  const name = F.randomId();
  return {
    id: F.randomId(),
    createdDate: F.randomDate(),
    modifiedDate: new Date(),
    name,
    email: F.randomEmail(),
    avatar: F.raddomAvatarUrl(),
    image: F.randomIamge(),
    comments: F.randomParagraphs(),
    counts: {
      comment: U.random(10, 100),
      retweet: U.random(10, 100),
      heart: U.random(10, 100),
    },
  };
};
