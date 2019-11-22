import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useTodos() {
  return useSelector((state: RootState) => state.todos);
}
