const os = require('os');

// to get processes info
// ps -e -o uid,pid,ppid,pri,ni,cmd
// Started from node 10.10.0
// pid ← process identifier
console.log(os.getPriority(1265));
// os.setPriority(pid, priority) range: -20 (high) ... +19 (low)
