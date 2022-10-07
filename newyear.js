function minimumBribes(q) {

    const chaos = "Too chaotic";
    let total = 0;

    for ( let currentpos = 0; currentpos < q.length; currentpos++){
        const originalpos = q[currentpos] -1;
        
        const differentpos = originalpos - currentpos;
        if (differentpos > 2) 
        return console.log(chaos);

        if (differentpos <=0){
            for (let i = Math.max(0, originalpos -1); i < currentpos; i++){
                const forwardperson = q[i] - 1;

                if (forwardperson > originalpos){
                    total++;
                }
            }
        }
    }
    console.log(total);
}