function solution(queries) {
    const container = [1, 2, 2, 2, 3, 2, 3, 3, 4];
    const results = [];
    let remove = {};

    console.log('container before query', container)
    
    for (let query of queries) {
        const [operation, value] = query;
        const numValue = parseInt(value);
        const existingValue = container.includes(numValue) 
        
        
        if (operation === 'ADD') {
            container.push(numValue);
            results.push('');
        } else if (operation === 'EXISTS') {
            results.push(existingValue ? 'true' : 'false');
        }else if (operation === 'REMOVE') {
            const index = container.indexOf(numValue);
            if (index > -1 && !remove[numValue]){
                remove[numValue] = container[index];
                container.splice(index, 1);
                console.log('container after query', container)
                results.push(numValue)
            }
        }
    }

  

    console.log('remove object', remove)
    console.log("final results", results)

    return results;

}

const queries = [
    ["ADD", "10"],
    ["ADD", "20"],
    ["EXISTS", "10"],
    ["REMOVE", "3"], 
    ["EXISTS", "10"],
];

solution(queries)




