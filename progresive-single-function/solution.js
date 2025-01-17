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
        }
    }
    
    return results;
}
