export default interface ChartsData {
  startAt: string;
  stats: {
    date: {
      hour: number;
      day: number;
      month: number;
      year: number;
    };
    hours: Data[];
    days: Data[];
    months: Data[];
    prev: {
      hours: Data[];
      days: Data[];
      months: Data[];
    };
    years: {};
    accesses: {
      [ua: string]: number;
    };
  };
  enabled: boolean;
  isSync: boolean;
}

export interface Data {
  hits: number;
  bytes: number;
}

export interface UaProps {
  [ua: string]: number;
}