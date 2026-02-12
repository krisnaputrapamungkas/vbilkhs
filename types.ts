
export enum PageId {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four'
}

export interface NavigationProps {
  onNavigate: (page: PageId) => void;
  currentPage: PageId;
}
