import { inject } from 'vue';
import { GlobalContextID } from '../context';

export const useGlobalStore = () => inject(GlobalContextID);
