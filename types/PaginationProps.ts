export interface PaginationProps {
  goToFirst: () => void;
  goToLast: () => void;
  goToPrev: () => void;
  goToNext: () => void;
  maxPage: number;
  pageNumber: number;
}