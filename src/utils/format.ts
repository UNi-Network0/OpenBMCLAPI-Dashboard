export function formatNumber(num: number): string {
  const unitList = ['K', 'M', 'B', 'T', 'Q'];
  let unitIndex = 0;
  while (num >= 1000) {
    num /= 1000;
    unitIndex++;
  }
  return num.toFixed(1) + unitList[unitIndex];
}

export function formatBytes(bytes: number): string {
  const unitList = ['B', 'KB', 'MB', 'GB', 'TB'];
  let unitIndex = 0;
  while (bytes >= 1024) {
    bytes /= 1024;
    unitIndex++;
  }
  return bytes.toFixed(1) + unitList[unitIndex];
}