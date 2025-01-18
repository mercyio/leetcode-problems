function solution(queries) {
    const container = [];
    const results = [];
    
    for (let query of queries) {
        const [operation, value] = query;
        const numValue = parseInt(value);
        const existingValue = container.includes(numValue) 
        
        if (operation === 'ADD') {
            container.push(numValue);
            results.push('');
        } else if (operation === 'EXISTS') {
            results.push(existingValue ? 'true' : 'false');  
        } else if (operation === 'REMOVE') {
            const index = container.indexOf(numValue);
            if (index > -1){
                container.splice(index, 1); 
                results.push('true');
            }else{
                results.push('false');
            }
        } else if(operation === 'GET_NEXT'){
            const nextValues = container.filter((item ) => item > numValue );
            if(nextValues.length > 0 ){
                results.push(Math.min(...nextValues).toString())
            }else{
                results.push('')
            }
        }
    }
    return results;
}
