export interface TimeInRangeData {
  labels: string[];
  datasets: { data: number[]; backgroundColor: string[] }[];
}
  
  export interface GmiData {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  }
  
  export interface DashboardState {
    selectedPeriod: string;
    timeInRangeData: any;
    gmiData: any;
    activePatients: number;
    dateRange: { start: Date; end: Date };
    lastUpdated: Date;
  }