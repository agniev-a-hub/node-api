const log = (log, filename) => {
  const timestamp = new Date().toISOString();

  const cyan = '\x1b[36m';      // Cyan color
  const bold = '\x1b[1m';       // Bold text
  const reset = '\x1b[0m';

  console.log(`${cyan}${timestamp}${reset} - ${bold}${filename}${reset}: ${log}`);
};

export default log;
