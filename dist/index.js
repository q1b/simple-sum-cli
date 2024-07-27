console.log("Hello, World!");var e=(...o)=>o.reduce((c,n)=>c+n,0),s=async()=>{console.log(e(1,2,3,4,5))};s().catch(o=>{o instanceof Error&&console.log(o),process.exit(1)});
