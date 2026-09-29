import { useMutation } from '@tanstack/react-query';
import { type Cat, type FormArgs, fetchCat } from '../services/catsQueries';

type SearchParams = Omit<FormArgs, 'timestamp'>;

export const findCatMutationKey = ['cat', 'find'];

export function useSearchBarMutation(onSuccess: (cat: Cat) => void) {
  return useMutation({
    mutationKey: findCatMutationKey,
    mutationFn: async (params: SearchParams) => fetchCat({ ...params, timestamp: Date.now() }),
    onSuccess,
    onError: (error) => {
      if (error instanceof Error) {
        console.error(`Error finding a cat: ${error.message}`);
      }
    },
  });
}
