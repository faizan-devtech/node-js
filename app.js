 var fs=require('fs');
  
 const os=require('os');
 fs.writeFileSync('faizanabbasi.txt ','he is from shinkiari');
 fs.writeFileSync('hassantariq.txt','he is from daryal ');
 console.log(os.platform());
 console.log(os.hostname());
 console.log(os.cpus());