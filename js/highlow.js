var comp=Math.floor(Math.random() * 100);
var show=Math.floor(Math.random() * 100);

function highlow() {
    
    answer=prompt('The number selected is '+show+'\nwill the next number be higher or lower?Randomly selects a number from 1-100\n(답은 high 또는 low로 입력해주세요.');
                
    if(answer == 'high') {       
        if (comp > show) {
            alert('The number selected was '+comp+', you won');
        }
        else if (comp < show) {
            alert('The number selected was '+comp+', you lose');
        }
    }
    else if(answer == 'low') {
        if (comp < show) {
            alert('The number selected was '+comp+', you won');
        }
        else if (comp > show) {
            alert('The number selected was '+comp+', you lose');
        }
    }
    else {
        alert('할거면 하고 안 할거면 말지 으휴 진짜')
    }
}