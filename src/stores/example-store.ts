import { defineStore } from 'pinia';

export const useAclStore = defineStore('acl', {
  state: () => ({
    acl: ['level-1']
  })
});
