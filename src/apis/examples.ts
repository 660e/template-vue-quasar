import { api } from '@/boot/axios';

const examplesApi = {
  randomuser({ results, page, seed }: { results?: number; page?: number; seed?: string } = {}) {
    return api.get('https://randomuser.me/api/', { params: { results, page, seed } });
  }
};

export { examplesApi };
