var s=(...o)=>o.reduce((c,n)=>c+n,0),e=async()=>{console.log(s(1,2,3,4,5))};e().catch(o=>{o instanceof Error&&console.log(o),process.exit(1)});
