function computeC(t,v) {
    if(t === 'actions') {
        if(v === 'c'){
            document.getElementById('results').value = '';
        }

        if(v === '+' || v === '-' || v === '*' || v === '/' || v === '.') {
            document.getElementById('results').value += v;
        }

        if(v === '=') {
            var fieldsValues = eval(document.getElementById('results').value);
            document.getElementById('results').value = fieldsValues;
        }

    } else if(t === 'values') {
        document.getElementById('results').value += v;
    }
}