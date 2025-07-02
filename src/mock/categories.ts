export interface Category {
  id: number;
  name: string;
  count: number;
  highlight: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Category A', count: 5, highlight: '#ff0000' },
  { id: 2, name: 'Category B', count: 2, highlight: '#00ff00' },
  { id: 3, name: 'Category C', count: 8, highlight: '#0000ff' }
];
