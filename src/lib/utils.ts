import { type ClassValue, clsx } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatMarketCap = (value: number) => {

  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;

  if (value >= trillion) {
    return `${(value / trillion).toFixed(2)} T`;
  } else if (value >= billion) {
    return `${(value / billion).toFixed(1)} B`;
  } else if (value >= million) {
    return `${(value / million).toFixed(1)}M`;
  }
  return value.toFixed(1);
};

// Function to calculate percentage change
export const calculatePercentageChange = (firstValue: number, lastValue: number) => {

  const change = ((lastValue - firstValue) / firstValue) * 100;
  return Number(change)?.toFixed(2);
};
export function getFormattedDateFromTimestamp(targetTimestamp: any) {
  const targetDate = moment.unix(targetTimestamp);  // Convert UNIX timestamp to Moment date

  // Format the date to 'DD-MMM-YYYY HH:mm:ss'
  const formattedDate = targetDate.format('DD-MMM-YYYY');

  return formattedDate;
}

export const OpenUrl = (url: string) => {
  window.open(url, '_blank')
}